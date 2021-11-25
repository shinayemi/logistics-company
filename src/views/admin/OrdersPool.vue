<template>
  <div>
    <div class="flex flex-wrap">
      <div class="w-full mb-12 xl:mb-0 px-4">
        <div class="flex flex-wrap">
          <div class="w-full">
            <all-orders-pool />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AllOrdersPool from "@/components/App/AllOrdersPool.vue";

export default {
  name: "dashboard-page",
  components: {
    AllOrdersPool,
  },
};
</script>
