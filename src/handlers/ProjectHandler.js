// import web3 from "../lib/web3.js";
import crowdFundingInstance from "../lib/CrowdFundingInstance.js";
import projectInstance from "../lib/ProjectInstance.js";
import store from "../store/store";

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
            });
        });
      })
      .catch(console.log);
  }

  // function startProject() {
  //   crowdFundingInstance.methods
  //     .startProject(
  //       "This is the newest (xatroN)",
  //       "Test description",
  //       10,
  //       web3.utils.toWei("2", "ether")
  //     )
  //     .send({
  //       from: this.$store.state.accountAdress[0],
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     });
  // }
}

export default ProjectHandler;
// module.exports.startProject = startProject;
