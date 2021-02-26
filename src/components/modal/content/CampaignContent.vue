<template>
  <!--Title-->
  <div class="flex justify-between items-center flex-wrap pb-3">
    <input
      type="text"
      placeholder="Campaign name"
      class="mt-1 pl-3 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
    />

    <textarea></textarea>

    <input
      type="number"
      placeholder="Ex. 10 CTH"
      class="mt-1 pl-3 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
    />
  </div>
</template>

<script>
export default {
  name: "CampaignContent",
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
