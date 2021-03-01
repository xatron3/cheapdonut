<template>
  <div class="w-1/3 p-2">
    <div class="flex justify-between">
      <h2>Contribute</h2>
      <span
        class="inline-block rounded-full text-white 
      bg-green-400 hover:bg-green-500 duration-300 
      text-xs font-bold 
      mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
      opacity-90 hover:opacity-100"
      >
        {{ daysLeft }} left
      </span>
    </div>
    <div class="shadow w-full bg-grey-light my-2">
      <div
        class="font-bold leading-none py-1 text-center text-black"
        style="font-size: 0.6rem"
        v-bind:class="progressClass()"
        v-bind:style="{ width: currentAmountPrecentage + '%' }"
      >
        <span>{{ currentAmountPrecentage }}%</span>
      </div>
    </div>
    <span class="dark:text-gray-400 font-bold text-sm py-1 my-0.5"
      >Raised {{ data.currentAmount / 10 ** 18 }} CTH of
      {{ data.goalAmount / 10 ** 18 }} CTH</span
    >

    <div class="flex justify-between pt-2 mt-4">
      <div>
        <div class="text-sm mb-2">Tip Amount</div>
        <input
          type="number"
          placeholder="Ex. 10 CTH"
          v-model="tipAmount"
          :max="maxContribution"
          :min="0"
          :step="0.1"
          class="mt-1 pl-3 block border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 w-16"
        />
      </div>
      <button
        class="px-4 bg-transparent p-3 rounded-lg bg-green-400 text-white uppercase font-bold text-sm hover:bg-opacity-50 self-end"
        v-on:click="fundProject"
      >
        Donut
      </button>
    </div>
  </div>
</template>

<script>
import web3 from "web3";
import projectInstance from "../../lib/ProjectInstance.js";

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
  computed: {
    maxContribution: function() {
      var maxAmount =
        this.$props.data.goalAmount / 10 ** 18 -
        this.$props.data.currentAmount / 10 ** 18;

      return maxAmount;
    },
    daysLeft: function() {
      var timeLeft;
      var today = new Date();
      var endDate = new Date(this.$props.data.endDate);

      // To calculate the time difference of two dates
      var Difference_In_Time = endDate.getTime() - today.getTime();

      // To calculate the no. of days between two dates
      var Difference_In_Days = parseInt(
        Difference_In_Time / (1000 * 3600 * 24)
      );

      if (Difference_In_Days < 1) {
        // Seconds
        timeLeft = this.secondsToHm(Difference_In_Time / 1000);
      } else {
        // Days
        timeLeft = Difference_In_Days + " days";
      }

      return timeLeft;
    },
    currentAmountPrecentage: function() {
      return (
        (this.$props.data.currentAmount / this.$props.data.goalAmount) * 100
      );
    },
  },
  methods: {
    secondsToHm(d) {
      d = Number(d);
      var h = Math.floor(d / 3600);
      var m = Math.floor((d % 3600) / 60);

      var hDisplay = h > 0 ? h + (h == 1 ? "h, " : "h, ") : "";
      var mDisplay = m > 0 ? m + (m == 1 ? "m" : "m") : "";
      return hDisplay + mDisplay;
    },
    fundProject() {
      const projectContract = projectInstance(this.$props.data.projectAddress);

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
    progressClass() {
      var className;

      if (
        this.currentAmountPrecentage >= 0 &&
        this.currentAmountPrecentage <= 25
      ) {
        className = "bg-red-300";
      } else {
        className = "bg-green-300";
      }

      return className;
    },
  },
};
</script>
