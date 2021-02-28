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

      <div class="text-black dark:text-white block text-sm leading-snug my-3">
        {{ data.description }}
      </div>

      <div class="leading-tight float-left">
        <p class="text-gray-500 block dark:text-gray-400 text-sm">
          Started at: {{ creationDate }}
        </p>
        <p class="text-gray-300 block dark:text-gray-400 text-xs">
          {{ data.projectAddress }}
        </p>
      </div>
    </div>

    <CampaignContribute :data="data" />

    <div
      class="border-gray-200 dark:border-gray-600 border border-b-0 my-1 w-full"
    ></div>

    <h1>Contributors</h1>
  </div>
</template>

<script>
import moment from "moment";
import CampaignContribute from "./CampaignContribute";

export default {
  name: "Campaign",
  components: {
    CampaignContribute,
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
    isOwner: function() {
      return (
        this.data.projectStarterAdress === this.$store.state.accountAdress[0]
      );
    },
  },
  methods: {},
};
</script>
