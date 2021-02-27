<template>
  <div
    class="opacity-0 pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center"
    v-bind:class="modalIndex"
  >
    <div
      class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
    ></div>

    <div
      class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto"
    >
      <!-- Add margin if you want to see some of the overlay behind the modal-->
      <div class="modal-content py-4 text-left px-6">
        <ModalHeader :title="title" :modalIndex="modalIndex" />

        <!--Body-->
        <ModalContent :type="content" :data="data" />

        <!--Footer-->
        <ModalFooter :type="content" :modalIndex="modalIndex" />
      </div>
    </div>
  </div>
</template>

<script>
import ModalHeader from "./ModalHeader";
import ModalContent from "./ModalContent";
import ModalFooter from "./ModalFooter";

export default {
  name: "Modal",
  components: {
    ModalHeader,
    ModalContent,
    ModalFooter,
  },
  props: {
    content: null,
    data: null,
  },
  computed: {
    title: function() {
      if (this.$props.content === "funding") {
        return "Fund " + this.$props.data.campaign.title;
      } else {
        return "Not found";
      }
    },
    modalIndex: function() {
      if (this.$props.data.index === "funding") {
        return "funding-" + this.$props.data.campaign.projectStarterAdress;
      } else {
        return this.$props.data.index;
      }
    },
  },
  data() {
    return {
      modalActive: false,
    };
  },
  mounted() {
    console.log(this.$props.data);
  },
};
</script>
