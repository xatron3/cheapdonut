<template>
  <component :is="getContentComponent()"></component>
</template>

<script>
import CampaignContent from "../content/CampaignContent";
import DefaultContent from "../content/DefaultContent";

export default {
  name: "ModalContent",
  props: {
    type: null,
    data: null,
  },
  components: {
    CampaignContent,
    DefaultContent,
  },
  methods: {
    getContentComponent() {
      const contentComponent = {
        campaign: <CampaignContent />,
        default: <DefaultContent />,
      };

      return contentComponent[this.$store.state.modalData.content];
    },
  },
};
</script>
