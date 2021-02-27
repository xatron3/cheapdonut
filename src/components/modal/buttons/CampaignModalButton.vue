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

  <Modal content="campaign" :data="computedData" />
</template>

<script>
import ModalHandler from "../../../handlers/ModalHandler";
import Modal from "../Modal";

export default {
  name: "CampaignModalButton",
  components: {
    Modal,
  },
  props: {
    index: null,
  },
  computed: {
    computedData: function(props) {
      var newData = {};

      newData["index"] = props.index;

      return newData;
    },
  },
  data() {
    return {
      modalActive: false,
    };
  },
  methods: {
    toggleModal() {
      ModalHandler.toggleModal(this.$props.index);
    },
  },
};
</script>
