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

  <Modal
    :name="'create-campaign'"
    :title="'Create a campaign to beg for cTH'"
    :content="'campaign'"
  />
</template>

<script>
import ModalHandler from "../lib/ModalHandler";
import Modal from "./modal/Modal";

export default {
  name: "CampaignModalButton",
  components: {
    Modal,
  },
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
