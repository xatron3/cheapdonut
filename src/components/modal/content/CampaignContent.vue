<template>
  <!--Title-->
  <div class="flex justify-between items-center flex-wrap pb-3">
    <input
      type="text"
      placeholder="Campaign name"
      v-bind="projectTitle"
      class="mt-1 pl-3 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-pink-200 focus:bg-pink-200 focus:ring-0"
    />

    <input
      type="text"
      v-bind="projectDesc"
      placeholder="why do you want free mone"
      class="mt-3 flex-1 bg-gray-100 border-none rounded-lg px-4 py-2 sm:px-3 sm:py-4 leading-relaxed focus:ring-0 hover:bg-pink-200 focus:bg-pink-200"
    />

    <input
      type="number"
  
      placeholder="Ex. 10 CTH"
      class="mt-1 pl-3 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-pink-200 focus:bg-pink-200 focus:ring-0"
    />

    <button @click="startProject" class="float-right self-end mt-2 pl-3 focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-green-500 hover:bg-pink-600 hover:shadow-lg">
      Start Campaign
    </button>
  </div>
</template>

<script>

//import "../../../handlers/ProjectHandler";
import ProjectHandler from '../../../handlers/ProjectHandler';

export default {
  name: "CampaignContent",
      data() {
        return {
          projectTitle: null,
          projectDesc: null,  
        }
      },
      methods: {
    startProject(){
        ProjectHandler.startProject(this.$data.projectTitle, this.$data.projectDesc)
      }
    }
};
</script>
<style scoped>
/* RED BORDER ON INVALID INPUT */
.check input:invalid {
  border-color: red;
}

/* FLOATING LABEL */
.label-floating input:not(:placeholder-shown),
.label-floating textarea:not(:placeholder-shown) {
  padding-top: 1.4rem;
}
.label-floating input:not(:placeholder-shown) ~ label,
.label-floating textarea:not(:placeholder-shown) ~ label {
  font-size: 0.8rem;
  transition: all 0.2s ease-in-out;
  color: #1f9d55;
  opacity: 1;
}
</style>
