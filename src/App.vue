<template>
  <Header />
  <div class="max-w-4xl m-auto p-10 flex items-center justify-center flex-wrap">
    <Campaign />
    <Campaign />
    <Campaign />
  </div>
  <Footer />
</template>

<script>
import Footer from "./components/layout/Footer.vue";
import Header from "./components/layout/Header.vue";
import Campaign from "./components/Campaign.vue";

import web3 from "./lib/web3.js";
import crowdFundingInstance from "./lib/CrowdFundingInstance.js";
// import projectInstance from "./lib/ProjectInstance.js";

export default {
  name: "App",
  components: {
    Footer,
    Header,
    Campaign,
  },
  data() {
    return {
      account: [],
      newProject: {},
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
          console.log(projects);
        });
    },
    startProject() {
      crowdFundingInstance.methods
        .startProject(
          this.newProject.title,
          this.newProject.description,
          this.newProject.duration,
          web3.utils.toWei(this.newProject.amountGoal, "ether")
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
