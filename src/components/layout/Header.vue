<template>
  <!-- component -->
  <nav
    class=" bg-white w-full flex relative justify-between items-center mx-auto px-8 h-20"
  >
    <!-- logo -->
    <div class="inline-flex">
      <a class="_o6689fn" href="/"
        ><div class="hidden md:block">
          CheapDonut
        </div>
        <div class="block md:hidden">
          CheapDonut
        </div>
      </a>
    </div>
    <!-- end logo -->

    <!-- login -->
    <div class="flex-initial">
      <div class="flex justify-end items-center relative">
        <div class="flex mr-4 items-center">
          <CampaignModalButton />
        </div>
      </div>
    </div>
    <!-- end login -->
  </nav>
</template>

<script>
import CampaignModalButton from "../CampaignModalButton";

export default {
  name: "Header",
  components: {
    CampaignModalButton,
  },
  methods: {},
};
</script>
