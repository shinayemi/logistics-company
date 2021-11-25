<template>
  <div>
    <div class="max-w-sm rounded bg-white overflow-hidden">
      <div class="px-6 py-4">
        <div class="flex -mx-2">
          <div class="w-1/2 pr-2">
            <div class="font-bold text-xs mb-2">Success Rate</div>
          </div>
        </div>

        <div class="mt-5">
          <e-charts
            class="piechartheight"
            autoresize
            :options="successRate"
            ref="pie"
            auto-resize
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ECharts from "vue-echarts/components/ECharts";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/legend";
import "echarts/lib/chart/bar";
import "echarts/lib/chart/pie";
export default {
  mounted: function () {},
  components: { ECharts },
  data() {
    return {
      successRate: {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: [
            "Successful Deliveries",
            "Pending Deliveries",
            "Failed Deliveries",
          ],
        },
        series: [
          {
            name: "Success Rate",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            color: ["#FF9F43", "#28C76F", "#EA5455", "#87ceeb", "#7367F0"],
            data: [
              { value: 335, name: "Successful Deliveries" },
              { value: 135, name: "Pending Deliveries" },
              { value: 234, name: "Failed Deliveries" },
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      },
      orders: [
        {
          product: "Hp 15 AMD Dual Core 500GB",
          seller: "Visking",
          img:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/092975/1.jpg?1093",
        },
        {
          product: "Imose Zedon X4 11.6",
          seller: "Visking",
          img:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/82/294222/1.jpg?3658",
        },
        {
          product: "290 G2 Microtower",
          seller: "Visking",
          img:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/73/853565/1.jpg?5348",
        },
        {
          product: "Hp Deskjet Ink",
          seller: "Visking",
          img:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/31/566564/1.jpg?2314",
        },
      ],
    };
  },
};
</script>
