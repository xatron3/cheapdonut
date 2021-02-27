<template>
  <!--Title-->
  <div class="flex justify-between items-center pb-3 flex-wrap">
    <div class="text-sm mb-2">Tip Amount</div>
    <slider
      v-model="tipAmount"
      color="#FB278D"
      track-color="#f3f3f3"
      :max="data.max"
    />
    <div class="text-sm mb-2">{{ tipAmount }} CTH</div>
  </div>
</template>

<script>
import slider from "vue3-slider";

export default {
  name: "FundingContent",
  components: {
    slider,
  },
  props: {
    data: null,
  },
  data() {
    return {
      tipAmount: 1,
    };
  },
  mounted() {},
};
</script>
