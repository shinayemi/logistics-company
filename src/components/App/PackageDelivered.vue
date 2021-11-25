<template>
  <div>
    <card-line-chart />
    <!-- <div class="max-w-sm rounded bg-white overflow-hidden">
      <div class="px-6 py-4">
        <div class="font-bold text-lg mb-2">Packaged Delivered</div>

        <div class="mt-5"></div>
      </div>
    </div> -->
  </div>
</template>
<script>
import CardLineChart from "@/components/Cards/CardLineChart.vue";

export default {
  mounted: function () {},
  components: {
    CardLineChart,
  },
  data() {
    return {};
  },
};
</script>
