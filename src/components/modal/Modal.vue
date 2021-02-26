<template>
  <div
    class="modal-create-campaign opacity-0 pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center"
  >
    <div
      class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
    ></div>

    <div
      class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto"
    >
      <!-- Add margin if you want to see some of the overlay behind the modal-->
      <div class="modal-content py-4 text-left px-6">
        <ModalHeader :title="'Create a funding campaign'" />

        <!--Body-->
        <input
          type="text"
          placeholder="Campaign name"
          class="mt-1 pl-3 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
        />

        <!--Footer-->
        <div class="flex justify-end pt-2 mt-4">
          <button
            class="px-4 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2"
          >
            Post
          </button>
          <button
            class="modal-close px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400"
            v-on:click="toggleModal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ModalHeader from "./ModalHeader";

export default {
  name: "Modal",
  components: {
    ModalHeader,
  },
  data() {
    return {
      modalActive: false,
    };
  },
  mounted() {},
};
</script>
