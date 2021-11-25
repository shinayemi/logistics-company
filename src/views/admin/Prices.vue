<template>
  <div class="px-4" v-if="!loading">
    <div class="row">
      <div class="col-md-10">
        <PriceSettings />
      </div>
    </div>
  </div>
</template>
<script>
import PriceSettings from "@/components/Cards/PriceSettings.vue";

export default {
  data() {
    return {};
  },
  computed: {
    loading() {
      return this.$store.getters.pgLoading;
    },
  },
  components: {
    PriceSettings,
  },
  mounted() {
    this.$store.commit("pgLoading", true);

    this.$store
      .dispatch("getAllDistancePrice")
      .then((resp) => {
        this.$store.commit("pgLoading", false);
        console.log(resp.data);
      })
      .catch((err) => {
        // console.log(err);
        this.$store.commit("pgLoading", false);
        if (err.response) {
          this.$vs.notify({
            title: "Get Distance Price",
            text: err.response.data.msg,
            color: "warning",
            icon: "error",
            position: "bottom-center",
          });
        } else {
          this.$vs.notify({
            title: "Get Distance Price",
            text: "Unable to Get Distance Price",
            color: "warning",
            icon: "error",
            position: "bottom-center",
          });
        }
      });
  },
};
</script>
