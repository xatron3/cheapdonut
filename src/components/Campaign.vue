<template>
  <!-- component -->
  <div
    class="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-800 p-4 rounded-xl border w-full mb-8"
  >
    <div class="flex justify-between">
      <div class="flex items-center">
        <div class="ml-1.5 text-sm leading-tight">
          <span class="text-black dark:text-white font-bold block ">{{
            data.title
          }}</span>
          <span class="text-gray-500 dark:text-gray-400 font-normal block">{{
            data.projectStarterAdress
          }}</span>
        </div>
      </div>
    </div>
    <p class="text-black dark:text-white block text-xl leading-snug mt-3">
      {{ data.description }}
    </p>

    <div class="shadow w-full bg-grey-light mt-2">
      <div
        class="text-xs leading-none py-1 text-center text-white"
        v-bind:class="progressClass()"
        v-bind:style="{ width: currentAmountPrecentage + '%' }"
      >
        55%
      </div>
    </div>
    Goal: {{ data.currentAmount }}/{{ data.goalAmount }} ({{
      currentAmountPrecentage
    }}%)

    <!-- TODO: Slider -->

    <p class="text-gray-500 dark:text-gray-400 text-sm py-1 my-0.5">
      Started at: {{ creationDate }}
    </p>

    <div
      class="border-gray-200 dark:border-gray-600 border border-b-0 my-1"
    ></div>

    <FundModalButton />
  </div>
</template>

<script>
import moment from "moment";

import FundModalButton from "./FundModalButton.vue";

export default {
  name: "Campaign",
  components: {
    FundModalButton,
  },
  props: {
    data: null,
    index: null,
  },
  computed: {
    endDate: function() {
      return moment(this.data.endDate).format("DD/MM/YYYY HH:mm");
    },
    creationDate: function() {
      return moment(this.data.createdAt).format("DD/MM/YYYY HH:mm");
    },
    currentAmountPrecentage: function() {
      return (
        (this.$props.data.currentAmount / this.$props.data.goalAmount) * 100
      );
    },
  },
  methods: {
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
