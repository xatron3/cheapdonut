<template>
  <!-- component -->
  <div
    class="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-800 p-4 rounded-xl border max-w-xl w-full mb-8"
  >
    <div class="flex justify-between">
      <div class="flex items-center">
        <div class="ml-1.5 text-sm leading-tight">
          <span class="text-black dark:text-white font-bold block "
            >Campaign Name</span
          >
          <span class="text-gray-500 dark:text-gray-400 font-normal block"
            >@0x35bf8375b6b998ec0808FC28d5BC995Cb6C95859</span
          >
        </div>
      </div>
    </div>
    <p class="text-black dark:text-white block text-xl leading-snug mt-3">
      GIVE ME MY MONEY?
    </p>

    <!-- TODO: Slider -->

    <p class="text-gray-500 dark:text-gray-400 text-base py-1 my-0.5">
      10:05 AM · Feb 25, 2021
    </p>

    <div
      class="border-gray-200 dark:border-gray-600 border border-b-0 my-1"
    ></div>

    <button
      class="modal-close px-4 bg-green-600 -500 p-2 rounded-lg text-white hover:bg-green-500"
    >
      Fund
    </button>
  </div>
</template>

<script>
export default {
  name: "Campaign",
};
</script>
