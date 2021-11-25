<template>
  <div class="flex flex-wrap">
    <div class="w-full lg:w-8/12 px-4">
      <CardOrder :orderDataProp="orderData" />
    </div>
  </div>
</template>
<script>
// import axios from "axios";
import CardOrder from "@/components/Cards/CardOrder.vue";

export default {
  name: "order",
  components: {
    CardOrder
  },
  data() {
    return {
      orderData: null,
      id: null
    };
  },
  created: function() {
    this.id = this.$route.params.id;
    this.$store.commit("addCurrentOrderEntryId", this.id);
    this.getOrder();
  },
  methods: {
    getOrder() {
      this.$store
        .dispatch("getOrder", this.id)
        .then(resp => {
          this.orderData = resp.data;
          this.$store.commit("addCurrentOrderEntryId", this.orderData._id);
          this.getOnlineRiders();
        })
        .catch(() => {
          // this.$router.push("/orders-pool-premium");
        });
    },
    getOnlineRiders() {
      this.$store
        .dispatch("getCompanyOnlineRiders", this.order._id)
        .then(resp => {
          console.log(resp);
          this.$store.commit("addOnlineRiders", resp.data);
          // alert(JSON.stringify(resp.data));
        })
        .catch(() => {});
    }
  }
};
</script>



<style scoped>
</style>
