<template>
  <button
    class="modal-close px-4 bg-gray-500 -500 p-2 rounded-lg text-white hover:bg-pink-500 float-right"
    v-on:click="toggleModal()"
  >
    Donut
  </button>

  <Modal :content="'funding'" :data="comuptedData" />
</template>

<script>
import Modal from "../Modal";
import ModalHandler from "../../../handlers/ModalHandler";

export default {
  name: "FundModalButton",
  props: {
    data: null,
    index: null,
  },
  components: {
    Modal,
  },
  computed: {
    comuptedData: function(props) {
      var newData = {};

      newData["index"] = props.index;
      newData["campaign"] = props.data;

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
      ModalHandler.toggleModal(
        this.$props.index + "-" + this.$props.data.projectAddress
      );
    },
  },
};
</script>
