<template>
  <div class="mb-7">
    <button
      class="modal-close px-4 bg-gray-500 -500 p-2 rounded-lg text-white hover:bg-pink-500 mr-3"
      v-on:click="sortProjects('latest')"
    >
      Sort by latest
    </button>

    <button
      class="modal-close px-4 bg-gray-500 -500 p-2 rounded-lg text-white hover:bg-pink-500"
      v-on:click="sortProjects('oldest')"
    >
      Sort by oldest
    </button>
  </div>
</template>

<script>
export default {
  name: "CampaignSorter",
  methods: {
    sortProjects(type) {
      switch (type) {
        case "latest":
          this.$store.state.projects.sort(function(x, y) {
            return y.createdAt - x.createdAt;
          });
          break;
        case "oldest":
          this.$store.state.projects.sort(function(x, y) {
            return x.createdAt - y.createdAt;
          });
          break;
        default:
          this.$store.state.projects.sort(function(x, y) {
            return y.endDate - x.endDate;
          });
          break;
      }
    },
  },
};
</script>
