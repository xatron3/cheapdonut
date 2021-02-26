<template>
  <Header />
  <div class="max-w-4xl m-auto p-10">
    <div
      v-for="(project, index) in projects"
      :key="index"
      class="w-full flex items-center justify-center flex-wrap"
    >
      <Campaign :data="project" :index="index" />
    </div>
  </div>
  <Footer />
</template>

<script>
import Footer from "./components/layout/Footer.vue";
import Header from "./components/layout/Header.vue";
import Campaign from "./components/Campaign.vue";

import web3 from "./lib/web3.js";
import crowdFundingInstance from "./lib/CrowdFundingInstance.js";
import projectInstance from "./lib/ProjectInstance.js";

export default {
  name: "App",
  components: {
    Footer,
    Header,
    Campaign,
  },
  data() {
    return {
      account: null,
      newProject: {},
      projects: [],
    };
  },
  mounted() {
    web3.eth.getAccounts().then((accounts) => {
      [this.account] = accounts;
      this.getProjects();
    });
  },
  methods: {
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
                  title: projectData.projectTitle,
                  description: projectData.projectDesc,
                  projectStarterAdress: projectData.projectStarter,
                  currentAmount: projectData.currentAmount,
                  goalAmount: projectData.goalAmount,
                  endDate: deadline,
                  createdAt: creationDate,
                };

                this.projects.push(cleanData);
              });
          });
        })
        .catch(console.log);
    },
    startProject() {
      crowdFundingInstance.methods
        .startProject(
          "testTitle",
          "testDes",
          10,
          web3.utils.toWei("1000", "ether")
        )
        .send({
          from: this.account,
        })
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>

<style>
body {
  background: #f3f3f3;
}
</style>
