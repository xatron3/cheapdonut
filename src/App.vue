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
    };
  },
  mounted() {
    web3.eth.getAccounts().then((accounts) => {
      [this.account] = accounts;

      console.log(accounts);
    });
  },
};
</script>

<style>
body {
  background: #f3f3f3;
}
</style>
