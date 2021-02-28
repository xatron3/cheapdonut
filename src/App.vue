<template>
  <Header />
  <div class="max-w-4xl m-auto p-10">
    <CampaignSorter />
    <div
      v-for="(project, index) in this.$store.state.projects"
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
import CampaignSorter from "./components/general/CampaignSorter.vue";

import web3 from "./lib/web3";
import ProjectHandler from "./handlers/ProjectHandler";

export default {
  name: "App",
  components: {
    Footer,
    Header,
    Campaign,
    CampaignSorter,
  },
  data() {
    return {
      newProject: {},
    };
  },
  mounted() {
    web3.eth.getAccounts().then((accounts) => {
      this.$store.commit("setAdress", accounts);

      var projectHandler = new ProjectHandler();
      projectHandler.getProjects();
      // projectHandler.startProject();
    });
  },
  methods: {},
};
</script>
