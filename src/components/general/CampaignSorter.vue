<template>
  <div class="mb-7">
    <button
      class="modal-close px-4 bg-gray-500 -500 p-2 rounded-lg text-white hover:bg-pink-500 mr-3"
      v-on:click="sort('latest')"
    >
      Sort by latest
    </button>

    <button
      class="modal-close px-4 bg-gray-500 -500 p-2 rounded-lg text-white hover:bg-pink-500"
      v-on:click="sort('oldest')"
    >
      Sort by oldest
    </button>
  </div>
</template>

<script>
import Sorter from "../../handlers/Sorter";

export default {
  name: "CampaignSorter",
  methods: {
    sort(type) {
      Sorter.sortProjects(type);
    },
  },
};
</script>
