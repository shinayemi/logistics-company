<template>
  <div>
    <div class="md:px-5 mb-5 mx-auto w-full">
      <div>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="All Transactions"
              statTitle="350,897"
              statIconName="fas fa-users"
              statIconColor="bg-red-500"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="Total Revenue"
              statTitle="2,356"
              statIconName="fas fa-credit-card"
              statIconColor="bg-orange-500"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="Total Riders"
              statTitle="924"
              statIconName="fas fa-users"
              statIconColor="bg-pink-500"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="Failed Transaction"
              statTitle="2"
              statIconName="fas fa-credit-card"
              statIconColor="bg-red-500"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap">
      <div class="w-full mb-12 xl:mb-0 px-4">
        <div class="flex flex-wrap">
          <div class="w-full">
            <all-transactions />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CardStats from "@/components/Cards/CardStats.vue";
import AllTransactions from "@/components/App/AllTransactions.vue";

export default {
  name: "dashboard-page",
  components: {
    CardStats,
    AllTransactions,
  },
};
</script>
