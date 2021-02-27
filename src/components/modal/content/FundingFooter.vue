<template>
  <div class="flex justify-end pt-2 mt-4">
    <button
      class="px-4 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2"
    >
      Post
    </button>
    <button
      class="modal-close px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400"
      v-on:click="toggleModal"
    >
      Close
    </button>
  </div>
</template>

<script>
export default {
  name: "FundingContent",
};
</script>
