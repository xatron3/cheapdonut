<template>
  <!--Title-->
  <div class="flex justify-between items-center pb-3 flex-wrap">
    <div class="text-sm mb-2">Tip Amount</div>
    <slider
      v-model="tipAmount"
      color="#FB278D"
      track-color="#f3f3f3"
      :max="data.max"
    />
    <div class="text-sm mb-2">{{ tipAmount }} CTH</div>
  </div>

  <div class="flex justify-end pt-2 mt-4">
    <button
      class="px-4 bg-transparent p-3 rounded-lg bg-green-400 text-white uppercase font-bold text-sm hover:bg-opacity-50"
      v-on:click="fundProject"
    >
      Donut
    </button>
  </div>
</template>

<script>
import slider from "vue3-slider";
import web3 from "web3";
import projectInstance from "../../../lib/ProjectInstance.js";

export default {
  name: "FundingContent",
  components: {
    slider,
  },
  props: {
    data: null,
  },
  data() {
    return {
      tipAmount: 1,
    };
  },
  methods: {
    fundProject() {
      const projectContract = projectInstance(
        this.$props.data.campaign.projectAddress
      );

      projectContract.methods
        .contribute()
        .send({
          from: this.$store.state.accountAdress[0],
          value: web3.utils.toWei(this.tipAmount.toString(), "ether"),
        })
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>
