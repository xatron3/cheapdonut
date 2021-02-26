<template>
  <component v-bind:is="getContentComponent(type)"></component>
</template>

<script>
import FundingContent from "./content/FundingContent";
import CampaignContent from "./content/CampaignContent";

export default {
  name: "ModalContent",
  props: {
    type: null,
  },
  components: {
    FundingContent,
    CampaignContent,
  },
  methods: {
    getContentComponent(type) {
      const selectButtonByType = {
        funding: <FundingContent />,
        campaign: <CampaignContent />,
      };

      return selectButtonByType[type];
    },
  },
};
</script>
