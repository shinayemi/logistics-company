<template>
  <div v-if="!loading">
    <div class="flex flex-wrap">
      <div class="w-full mb-12 xl:mb-0">
        <div class="flex flex-wrap">
          <div class="w-full px-4">
            <div
              class="max-w-sm rounded bg-white overflow-hidden"
              style="min-height: 645px"
            >
              <div class="px-4 py-4">
                <div class="row">
                  <div class="col-md-4">
                    <router-link to="/riders" class="text-primary"
                      >← Back</router-link
                    >
                  </div>
                  <div class="col-md-8">
                    <div class="text-right">
                      <a
                        :href="`tel:${riderData.phoneNumber}`"
                        class="bg-primary text-capitalize text-white active:bg-green-600 font-bold text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      >
                        <i class="fas fa-phone mr-2"></i> Contact
                      </a>
                      <button
                        type="button"
                        class="text-primary bg-transparent border border-solid border-primary hover:bg-red-500 hover:text-white active:bg-red-600 font-bold text-xs px-4 py-2 rounded outline-none focus:outline-none mr-4 mb-1 ease-linear transition-all duration-150 ml-auto"
                      >
                        Suspend
                      </button>
                    </div>
                  </div>
                </div>

                <div class="my-4 pt-5">
                  <vs-tabs :color="colorx">
                    <vs-tab label="Manage Rider">
                      <div class="con-tab-ejemplo">
                        <manage-rider :riderData="riderData" />
                      </div>
                    </vs-tab>
                    <vs-tab label="Track Rider">
                      <div class="con-tab-ejemplo">
                        <track-rider />
                      </div>
                    </vs-tab>
                    <vs-tab label="Transactions">
                      <div class="con-tab-ejemplo">
                        <rider-transactions />
                      </div>
                    </vs-tab>
                  </vs-tabs>
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
import TrackRider from "@/components/App/TrackRider.vue";
import ManageRider from "@/components/App/ManageRider.vue";
import RiderTransactions from "@/components/App/RiderTransactions.vue";

export default {
  name: "dashboard-page",
  data() {
    return {
      colorx: "#ff0101",
      riderData: {},
    };
  },
  components: {
    TrackRider,
    ManageRider,
    RiderTransactions,
  },
  mounted() {
    this.getRiderDetails();
  },
  computed: {
    loading() {
      return this.$store.getters.pgLoading;
    },
  },
  methods: {
    getRiderDetails() {
      let riderID = this.$route.params.id;
      this.$store.commit("pgLoading", true);
      this.$store
        .dispatch("getRiderDetails", riderID)
        .then((resp) => {
          // console.log(resp.data);
          this.$store.commit("pgLoading", false);

          this.riderData = resp.data;
        })
        .catch((err) => {
          this.$store.commit("pgLoading", false);
          if (err.response) {
            this.$vs.notify({
              title: "Load rider details",
              text: err.response.data.msg,
              color: "warning",
              icon: "error",
              position: "bottom-center",
            });
          } else {
            this.$vs.notify({
              title: "Load rider details",
              text: "Unable to Load rider details",
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
