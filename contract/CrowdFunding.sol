// SPDX-License-Identifier: MIT
pragma solidity 0.7.4;
import "./utils/SafeMath.sol";

contract Crowdfunding {
    using SafeMath for uint256;

    // List of existing projects
    Project[] private projects;

    // Event that will be emitted whenever a new project is started
    event ProjectStarted(
        address contractAddress,
        address projectStarter,
        string projectTitle,
        string projectDesc,
        uint256 createdAt,
        uint256 deadline,
        uint256 goalAmount
    );

    /** @dev Function to start a new project.
     * @param title Title of the project to be created
     * @param description Brief description about the project
     * @param durationInDays Project deadline in days
     * @param amountToRaise Project goal in wei
     */
    function startProject(
        string calldata title,
        string calldata description,
        uint256 durationInDays,
        uint256 amountToRaise
    ) external {
        uint256 raiseUntil = block.timestamp.add(durationInDays.mul(1 days));
        uint256 creationDate = block.timestamp;

        Project newProject =
            new Project(
                msg.sender,
                title,
                description,
                raiseUntil,
                creationDate,
                amountToRaise
            );
        projects.push(newProject);
        emit ProjectStarted(
            address(newProject),
            msg.sender,
            title,
            description,
            raiseUntil,
            creationDate,
            amountToRaise
        );
    }

    /** @dev Function to get all projects' contract addresses.
     * @return A list of all projects' contract addreses
     */
    function returnAllProjects() external view returns (Project[] memory) {
        return projects;
    }
}

contract Project {
    using SafeMath for uint256;

    enum State {Fundraising, Expired, Successful}

    address payable public creator;
    uint256 public amountGoal;
    uint256 public completeAt;
    uint256 public currentBalance;
    uint256 public raiseBy;
    uint256 public createdAt;
    string public title;
    string public description;
    State public state = State.Fundraising;
    mapping(address => uint256) public contributions;

    // Event that will be emitted whenever funding will be received
    event FundingReceived(
        address contributor,
        uint256 amount,
        uint256 currentTotal
    );

    // Event that will be emitted whenever the project starter has received the funds
    event CreatorPaid(address recipient);

    modifier inState(State _state) {
        require(state == _state);
        _;
    }

    modifier isCreator() {
        require(msg.sender == creator);
        _;
    }

    constructor(
        address payable projectStarter,
        string memory projectTitle,
        string memory projectDesc,
        uint256 fundRaisingDeadline,
        uint256 creationDate,
        uint256 goalAmount
    ) {
        creator = projectStarter;
        title = projectTitle;
        description = projectDesc;
        amountGoal = goalAmount;
        raiseBy = fundRaisingDeadline;
        createdAt = creationDate;
        currentBalance = 0;
    }

    function contribute() external payable inState(State.Fundraising) {
        require(msg.sender != creator);
        contributions[msg.sender] = contributions[msg.sender].add(msg.value);
        currentBalance = currentBalance.add(msg.value);
        emit FundingReceived(msg.sender, msg.value, currentBalance);
        checkIfFundingCompleteOrExpired();
    }

    function checkIfFundingCompleteOrExpired() public {
        if (currentBalance >= amountGoal) {
            state = State.Successful;
            payOut();
        } else if (block.timestamp > raiseBy) {
            state = State.Expired;
        }
        completeAt = block.timestamp;
    }

    function payOut() internal inState(State.Successful) returns (bool) {
        uint256 totalRaised = currentBalance;
        currentBalance = 0;

        if (creator.send(totalRaised)) {
            emit CreatorPaid(creator);
            return true;
        } else {
            currentBalance = totalRaised;
            state = State.Successful;
        }

        return false;
    }

    function getRefund() public inState(State.Expired) returns (bool) {
        require(contributions[msg.sender] > 0);

        uint256 amountToRefund = contributions[msg.sender];
        contributions[msg.sender] = 0;

        if (!msg.sender.send(amountToRefund)) {
            contributions[msg.sender] = amountToRefund;
            return false;
        } else {
            currentBalance = currentBalance.sub(amountToRefund);
        }

        return true;
    }

    function getDetails()
        public
        view
        returns (
            address payable projectStarter,
            string memory projectTitle,
            string memory projectDesc,
            uint256 deadline,
            State currentState,
            uint256 currentAmount,
            uint256 creationDate,
            uint256 goalAmount
        )
    {
        projectStarter = creator;
        projectTitle = title;
        projectDesc = description;
        deadline = raiseBy;
        currentState = state;
        currentAmount = currentBalance;
        creationDate = createdAt;
        goalAmount = amountGoal;
    }
}
