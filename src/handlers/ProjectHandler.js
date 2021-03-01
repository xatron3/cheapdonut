// import web3 from "../lib/web3.js";
import crowdFundingInstance from "../lib/CrowdFundingInstance.js";
import projectInstance from "../lib/ProjectInstance.js";
import Sorter from "../handlers/Sorter";
import store from "../store/store";
import web3 from "../lib/web3";

class ProjectHandler {
  getProjects() {
    crowdFundingInstance.methods
      .returnAllProjects()
      .call()
      .then((projects) => {
        projects.forEach((projectAddress) => {
          const projectInst = projectInstance(projectAddress);

          projectInst.methods
            .getDetails()
            .call()
            .then((projectData) => {
              var deadline = new Date(projectData.deadline * 1000);
              var creationDate = new Date(projectData.creationDate * 1000);

              console.log(projectData);

              var cleanData = {
                projectAddress: projectAddress,
                title: projectData.projectTitle,
                description: projectData.projectDesc,
                projectStarterAdress: projectData.projectStarter,
                currentAmount: projectData.currentAmount,
                goalAmount: projectData.goalAmount,
                endDate: deadline,
                createdAt: creationDate,
              };

              store.commit("addProject", cleanData);

              Sorter.sortProjects("latest");
            });
        });
      })
      .catch(console.log);
  }

  startProject(data) {
    crowdFundingInstance.methods
      .startProject(
        data.title,
        data.desc,
        parseInt(data.duration),
        web3.utils.toWei(data.amount, "ether")
      )
      .send({
        from: store.state.accountAdress[0],
      })
      .then((res) => {
        console.log(res);
      });
  }
}

export default ProjectHandler;
