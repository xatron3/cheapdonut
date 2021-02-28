<template>
  <div class="flex justify-between items-center pb-3 flex-wrap">
    <input
      type="number"
      placeholder="Ex. 10 CTH"
      v-model="tipAmount"
      :max="data.max"
      :min="0"
      :step="0.1"
      class="mt-1 pl-3 block border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 w-16"
    />
  </div>

  <div class="flex justify-between pt-2 mt-4">
    <div>
      <div class="text-sm mb-2">Tip Amount</div>
      <div class="text-sm mb-2">{{ tipAmount }} CTH</div>
    </div>
    <button
      class="px-4 bg-transparent p-3 rounded-lg bg-green-400 text-white uppercase font-bold text-sm hover:bg-opacity-50"
      v-on:click="fundProject"
    >
      Donut
    </button>
  </div>
</template>

<script>
import web3 from "web3";
import projectInstance from "../../../lib/ProjectInstance.js";

export default {
  name: "FundingContent",
  components: {},
  props: {
    data: null,
  },
  data() {
    return {
      tipAmount: 0.5,
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
