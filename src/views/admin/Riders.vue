<template>
  <div v-if="!loading">
    <div class="md:px-5 mb-5 mx-auto w-full">
      <div>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="Total Riders"
              :statTitle="rideAnaly"
              statIconName="fas fa-users"
              statIconColor="bg-red-500"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="Active Riders"
              statTitle="-"
              statIconName="fas fa-users"
              statIconColor="bg-green-500"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="Total Revenue"
              statTitle="-"
              statIconName="fas fa-users"
              statIconColor="bg-pink-500"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="Total Revenue"
              statTitle="-"
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
            <all-riders :riders="riders" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CardStats from "@/components/Cards/CardStats.vue";
import AllRiders from "@/components/App/AllRiders.vue";

export default {
  name: "dashboard-page",
  components: {
    CardStats,
    AllRiders,
  },
  data() {
    return {
      riders: [],
      rideAnaly: "",
    };
  },
  computed: {
    loading() {
      return this.$store.getters.pgLoading;
    },
  },
  mounted() {
    this.getRiders();
  },
  methods: {
    getRiders() {
      this.$store.commit("pgLoading", true);
      this.$store
        .dispatch("getRiders")
        .then((resp) => {
          // console.log(resp.data);
          this.$store.commit("pgLoading", false);
          this.riders = resp.data;
          this.rideAnaly = resp.meta.total.toString();
        })
        .catch((err) => {
          this.$store.commit("pgLoading", false);
          if (err.response) {
            this.$vs.notify({
              title: "Load all riders",
              text: err.response.data.msg,
              color: "warning",
              icon: "error",
              position: "bottom-center",
            });
          } else {
            this.$vs.notify({
              title: "Load all riders",
              text: "Unable to Load all riders",
              color: "warning",
              icon: "error",
              position: "bottom-center",
            });
          }
        });
    },
  },
};
</script>
<style>
</style>