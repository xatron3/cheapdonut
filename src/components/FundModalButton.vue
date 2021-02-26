<template>
  <button
    class="modal-close px-4 bg-green-600 -500 p-2 rounded-lg text-white hover:bg-green-500 float-right"
    v-on:click="toggleModal()"
  >
    Donut
  </button>

  <Modal
    :name="'funding-campaign-' + campaignIndex"
    :content="'funding'"
    :title="'Fund ' + campaignTitle"
  />
</template>

<script>
import Modal from "./modal/Modal";
import ModalHandler from "../lib/ModalHandler";

export default {
  name: "FundModalButton",
  props: {
    campaignIndex: null,
    campaignTitle: null,
  },
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
      ModalHandler.toggleModal("funding-campaign-" + this.$props.campaignIndex);
    },
  },
};
</script>
