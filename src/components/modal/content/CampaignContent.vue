<template>
  <div class="flex justify-between items-center flex-wrap pb-3">
    <AlertMessage
      :type="this.alert.type"
      :message="this.alert.message"
      v-if="this.alert.message"
    />

    <div class="mb-3 w-full">
      <div class="uppercase font-bold text-sm">Campaign Name</div>
      <input
        type="text"
        placeholder="Campaign name"
        v-model="projectTitle"
        class="mt-1 pl-3 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-pink-200 focus:bg-pink-200 focus:ring-0"
      />
    </div>

    <div class="mb-3 w-full">
      <div class="uppercase font-bold text-sm">Why should people fund you?</div>

      <textarea
        class="resize-none mt-1 pl-3 pt-2 h-36 block w-full border-none bg-gray-100 rounded-xl shadow-lg hover:bg-pink-200 focus:bg-pink-200 focus:ring-0"
        v-model="projectDesc"
      ></textarea>
    </div>

    <div class="mb-3 w-full">
      <div class="uppercase font-bold text-sm">Duration (in days)</div>
      <input
        type="number"
        v-model="duration"
        placeholder="Days"
        class="mt-1 pl-3 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-pink-200 focus:bg-pink-200 focus:ring-0"
      />
    </div>

    <div class="mb-3 w-full">
      <div class="uppercase font-bold text-sm">
        Amount you need (MIN 1 CTH)
      </div>
      <input
        type="number"
        v-model="projectAmount"
        placeholder="Ex. 10 CTH"
        class="mt-1 pl-3 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-pink-200 focus:bg-pink-200 focus:ring-0"
      />
    </div>

    <button
      v-on:click="startProject"
      class="float-right self-end mt-2 pl-3 focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-green-500 hover:bg-pink-600 hover:shadow-lg"
    >
      Start Campaign
    </button>
  </div>
</template>

<script>
import ProjectHandler from "../../../handlers/ProjectHandler";
import AlertMessage from "../../general/AlertMessage";

export default {
  name: "CampaignContent",
  components: {
    AlertMessage,
  },
  data() {
    return {
      projectTitle: "",
      projectDesc: "",
      projectAmount: 0,
      duration: 0,
      alert: {
        message: null,
        type: "info",
      },
    };
  },
  methods: {
    startProject() {
      var data = {
        title: this.projectTitle,
        desc: this.projectDesc,
        amount: this.projectAmount,
        duration: this.duration,
      };

      var validation = this.validateData(data);

      if (validation === true) {
        var porjectHandler = new ProjectHandler();

        porjectHandler.startProject(data);
        this.clearData();
      }
    },
    validateData(data) {
      if (data.title == "") {
        this.alert.message = "The title can't be empty";
        this.alert.type = "error";
      } else if (data.desc == "") {
        this.alert.message = "The description can't be empty";
        this.alert.type = "error";
      } else if (data.duration <= 0) {
        this.alert.message = "Your campaign must run atleast one day";
        this.alert.type = "error";
      } else if (data.amount <= 0.99) {
        this.alert.message = "Your campaign must try to raise atleast 1 CTH";
        this.alert.type = "error";
      } else {
        this.alert.message = false;

        return true;
      }
    },
    clearData() {
      this.projectTitle = "";
      this.projectDesc = "";
      this.projectAmount = 0;
      this.duration = 0;
    },
  },
};
</script>
