<template>
  <!-- Button -->
  <a
    class="inline-block py-2 px-3 bg-gray-200 hover:bg-pink-500 rounded-full"
    href="#"
    v-on:click="toggleModal"
  >
    <div class="flex items-center relative cursor-pointer whitespace-nowrap">
      Beg for free cTH
    </div>
  </a>
  <!-- End button -->
</template>

<script>
import ModalHandler from "../../../handlers/ModalHandler";

export default {
  props: {
    index: null,
  },
  data() {
    return {
      modalActive: false,
    };
  },
  methods: {
    toggleModal() {
      new ModalHandler("Create Campaign", "campaign");

      ModalHandler.toggleModal();
    },
  },
};
</script>
