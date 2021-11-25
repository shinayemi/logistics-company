<template>
  <div>
    <div class="md:px-5 mb-5 mx-auto w-full">
      <div>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="Local"
              statTitle="350,897"
              statIconName="far fa-chart-bar"
              statIconColor="bg-red-500"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="Inter state"
              statTitle="2,356"
              statIconName="fas fa-chart-pie"
              statIconColor="bg-orange-500"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="International"
              statTitle="924"
              statIconName="fas fa-users"
              statIconColor="bg-pink-500"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="Total Orders"
              statTitle="123,000"
              statIconName="fas fa-percent"
              statIconColor="bg-green-500"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap">
      <div class="w-full mb-12 xl:mb-0 px-4">
        <div class="flex flex-wrap">
          <div class="w-full">
            <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
              <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  class="text-xs font-bold uppercase px-5 py-3 rounded block leading-normal cursor-pointer"
                  v-on:click="toggleTabs(1)"
                  v-bind:class="{
                    'text-red-600 bg-white': openTab !== 1,
                    'text-white bg-red-600': openTab === 1
                  }"
                >
                  Local
                </a>
              </li>
              <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  class="text-xs font-bold uppercase px-5 py-3 rounded block leading-normal cursor-pointer"
                  v-on:click="toggleTabs(2)"
                  v-bind:class="{
                    'text-red-600 bg-white': openTab !== 2,
                    'text-white bg-red-600': openTab === 2
                  }"
                >
                  Inter State
                </a>
              </li>
              <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  class="text-xs font-bold uppercase px-5 py-3 rounded block leading-normal cursor-pointer"
                  v-on:click="toggleTabs(3)"
                  v-bind:class="{
                    'text-red-600 bg-white': openTab !== 3,
                    'text-white bg-red-600': openTab === 3
                  }"
                >
                  International
                </a>
              </li>
            </ul>
            <div
              class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded"
            >
              <div class="px-4 py-5 flex-auto">
                <div class="tab-content tab-space">
                  <div
                    v-bind:class="{
                      hidden: openTab !== 1,
                      block: openTab === 1
                    }"
                  >
                    <all-orders />
                  </div>
                  <div
                    v-bind:class="{
                      hidden: openTab !== 2,
                      block: openTab === 2
                    }"
                  >
                    <all-interstate-orders />
                  </div>
                  <div
                    v-bind:class="{
                      hidden: openTab !== 3,
                      block: openTab === 3
                    }"
                  >
                    <all-international-orders />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CardStats from "@/components/Cards/CardStats.vue";
import AllOrders from "@/components/App/AllOrders.vue";
import AllInterstateOrders from "@/components/App/AllInterstateOrders.vue";
import AllInternationalOrders from "@/components/App/AllInternationalOrders.vue";

export default {
  name: "orders",
  components: {
    CardStats,
    AllOrders,
    AllInterstateOrders,
    AllInternationalOrders
  },
  data() {
    return {
      openTab: 1
    };
  },
  methods: {
    toggleTabs: function(tabNumber) {
      this.openTab = tabNumber;
    }
  }
};
</script>
