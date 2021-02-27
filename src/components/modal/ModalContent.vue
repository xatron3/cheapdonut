<template>
  <component :is="getContentComponent()" :data="currentProperties"></component>
</template>

<script>
import FundingContent from "./content/FundingContent";
import CampaignContent from "./content/CampaignContent";

export default {
  name: "ModalContent",
  props: {
    type: null,
    data: null,
  },
  components: {
    FundingContent,
    CampaignContent,
  },
  computed: {
    currentProperties: function() {
      var data;

      if (this.$props.type === "funding") {
        data = { max: 1002 };
      } else {
        data = {};
      }

      return data;
    },
  },
  methods: {
    getContentComponent() {
      const contentComponent = {
        funding: <FundingContent />,
        campaign: <CampaignContent />,
      };

      return contentComponent[this.$props.type];
    },
  },
};
</script>
