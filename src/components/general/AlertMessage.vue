<template>
  <div class="flex items-center bg-white shadow rounded w-full ml-3 mb-4">
    <div class="mr-6  rounded px-4 py-2 text-center -ml-3" :class="alertClass">
      <svg
        fill="none"
        viewBox="0 0 24 24"
        class="w-8 h-8 text-white"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
    <div class="flex items-center rounded-lg rounded-l-none">
      <p class="text-sm text-gray-700">
        {{ message }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlertMessage",
  props: {
    message: null,
    type: null,
  },
  computed: {
    alertClass: function() {
      var className = "";

      switch (this.$props.type) {
        case "error":
          className = "bg-red-500";
          break;
        case "success":
          className = "bg-green-500";
          break;
        case "info":
          className = "bg-blue-500";
          break;
        default:
          className = "bg-blue-500";
          break;
      }

      return className;
    },
  },
};
</script>
