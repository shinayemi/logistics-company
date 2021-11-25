<template>
  <div>
    <header-stats class="mb-5" />
    <div class="flex flex-wrap">
      <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
        <card-bar-chart />
        <div class="flex flex-wrap mt-4">
          <div class="w-full xl:w-6/12 mb-12 xl:mb-0 pr-4">
            <success-rate />
          </div>
          <div class="w-full xl:w-6/12">
            <package-delivered />
          </div>
        </div>
      </div>
      <div class="w-full xl:w-4/12 px-4">
        <pending-orders />
        <dispatch-riders />
      </div>
    </div>
  </div>
</template>
<script>
// import CardLineChart from "@/components/Cards/CardLineChart.vue";
import CardBarChart from "@/components/Cards/CardBarChart.vue";
// import CardPageVisits from "@/components/Cards/CardPageVisits.vue";
import HeaderStats from "@/components/Headers/HeaderStats.vue";
import PendingOrders from "@/components/App/PendingOrders.vue";
import DispatchRiders from "@/components/App/DispatchRiders.vue";

import SuccessRate from "@/components/App/SuccessRate.vue";
import PackageDelivered from "@/components/App/PackageDelivered.vue";

export default {
  name: "dashboard-page",
  components: {
    // CardLineChart,
    CardBarChart,
    // CardPageVisits,
    HeaderStats,
    PendingOrders,
    DispatchRiders,
    SuccessRate,
    PackageDelivered,
  },
};
</script>
