<template>
  <!-- component -->
  <div
    class="bg-white flex flex-wrap dark:bg-gray-800 p-4 rounded-xl border w-full mb-8"
    v-bind:class="{ 'border-gray-800': isOwner }"
  >
    <div class="w-2/3 p-2">
      <div class="">
        <div class="leading-tight">
          <span class="text-black text-lg dark:text-white font-bold block">{{
            data.title
          }}</span>
          <span
            class="text-gray-500 text-md dark:text-gray-400 font-normal block"
            >{{ data.projectStarterAdress }}</span
          >
        </div>
      </div>

      <p class="text-black dark:text-white block text-sm leading-snug mt-3">
        {{ data.description }}
      </p>

      <p
        class="text-gray-500 dark:text-gray-400 text-xs py-1 my-0.5 float-left"
      >
        Started at: {{ creationDate }}
      </p>
    </div>

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
          {{ daysLeft }} days left
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
        >{{ data.currentAmount / 10 ** 18 }}/{{
          data.goalAmount / 10 ** 18
        }}
        CTH</span
      >

      <FundModalButton :data="data" index="funding" />
    </div>

    <div
      class="border-gray-200 dark:border-gray-600 border border-b-0 my-1"
    ></div>

    <h1>Contributors</h1>
  </div>
</template>

<script>
import moment from "moment";

import FundModalButton from "./modal/buttons/FundModalButton";

export default {
  name: "Campaign",
  components: {
    FundModalButton
  },
  props: {
    data: null,
    index: null
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
    isOwner: function() {
      return (
        this.data.projectStarterAdress === this.$store.state.accountAdress[0]
      );
    },
    daysLeft: function() {
      var today = new Date();
      var endDate = new Date(this.data.endDate);

      // To calculate the time difference of two dates
      var Difference_In_Time = endDate.getTime() - today.getTime();

      // To calculate the no. of days between two dates
      var Difference_In_Days = parseInt(
        Difference_In_Time / (1000 * 3600 * 24)
      );

      return Difference_In_Days;
    }
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
    }
  }
};
</script>
