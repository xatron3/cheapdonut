<template>
  <!-- component -->
  <nav
    class="w-full flex relative justify-between items-center mx-auto px-8 h-20 bg-gray-100 bg-opacity-10"
  >
    <!-- logo -->
    <div class="inline-flex">
      <a class="font-bold text-white text-shadow-md text-xl" href="/"
        ><div class="hidden md:block">
          CHEAPDOUNT
        </div>
        <div class="block md:hidden">
          CHEAPDOUNT
        </div>
      </a>
    </div>
    <!-- end logo -->

    <!-- login -->
    <div class="flex-initial">
      <div class="flex justify-end items-center relative">
        <div class="flex mr-4 items-center">
          <CampaignModalButton index="campaign" />
        </div>
      </div>
    </div>
    <!-- end login -->
  </nav>
</template>

<script>
import CampaignModalButton from "../modal/buttons/CampaignModalButton";

export default {
  name: "Header",
  components: {
    CampaignModalButton,
  },
  methods: {},
};
</script>
