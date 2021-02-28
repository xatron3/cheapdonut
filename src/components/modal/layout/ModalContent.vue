<template>
  <component :is="getContentComponent()" :data="currentProperties"></component>
</template>

<script>
import FundingContent from "../content/FundingContent";
import CampaignContent from "../content/CampaignContent";

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
    currentProperties: function(props) {
      var computedData;

      if (this.$props.type === "funding") {
        var maxAmount =
          props.data.campaign.goalAmount / 10 ** 18 -
          props.data.campaign.currentAmount / 10 ** 18;

        console.log(maxAmount);

        computedData = { max: maxAmount, campaign: props.data.campaign };
      } else {
        computedData = {};
      }

      return computedData;
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
