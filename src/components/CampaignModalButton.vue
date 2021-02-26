<template>
  <!-- Button -->
  <a
    class="inline-block py-2 px-3 hover:bg-gray-200 rounded-full"
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
import ModalHandler from "../lib/ModalHandler";

export default {
  name: "CampaignModalButton",
  data() {
    return {
      modalActive: false,
    };
  },
  methods: {
    toggleModal() {
      ModalHandler.toggleModal("create-campaign");
    },
  },
  mounted() {
    document.addEventListener("keyup", this.keyListener);
  },
};
</script>
