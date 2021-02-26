<template>
  <button
    class="modal-close px-4 bg-green-600 -500 p-2 rounded-lg text-white hover:bg-green-500 float-right"
    v-on:click="toggleModal"
  >
    Fund
  </button>
</template>

<script>
export default {
  name: "FundModalButton",
  data() {
    return {
      modalActive: false,
    };
  },
  methods: {},
  mounted() {
    document.addEventListener("keyup", this.keyListener);
  },
};
</script>
