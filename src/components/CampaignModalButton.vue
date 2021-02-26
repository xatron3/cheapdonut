<template>
  <!-- Button -->
  <a
    class="inline-block py-2 px-3 hover:bg-gray-200 rounded-full"
    href="#"
    v-on:click="toggleModal"
  >
    <div class="flex items-center relative cursor-pointer whitespace-nowrap">
      Create campaign
    </div>
  </a>
  <!-- End button -->

  <Modal
    :name="'create-campaign'"
    :title="'Create a funding campaign'"
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
