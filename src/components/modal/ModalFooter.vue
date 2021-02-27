<template>
  <FundingFooter />
</template>

<script>
import ModalHandler from "../../lib/ModalHandler";
import FundingFooter from "./content/FundingFooter";

export default {
  name: "ModalFooter",
  components: {
    FundingFooter,
  },
  props: {
    title: null,
    modalIndex: null,
  },
  methods: {
    toggleModal() {
      ModalHandler.toggleModal(this.$props.modalIndex);
    },
  },
};
</script>
