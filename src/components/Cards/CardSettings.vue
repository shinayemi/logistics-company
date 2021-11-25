<template>
  <div v-if="!loading">
    <div class="flex flex-wrap">
      <div class="w-full">
        <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
          <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              class="text-xs font-bold uppercase px-5 py-3 rounded block leading-normal cursor-pointer"
              v-on:click="toggleTabs(1)"
              v-bind:class="{
                'text-red-600 bg-white': openTab !== 1,
                'text-white bg-red-600': openTab === 1,
              }"
            >
              Profile
            </a>
          </li>
          <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              class="text-xs font-bold uppercase px-5 py-3 rounded block leading-normal cursor-pointer"
              v-on:click="toggleTabs(3)"
              v-bind:class="{
                'text-red-600 bg-white': openTab !== 3,
                'text-white bg-red-600': openTab === 3,
              }"
            >
              Settings
            </a>
          </li>
          <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              class="text-xs font-bold uppercase px-5 py-3 rounded block leading-normal cursor-pointer"
              v-on:click="toggleTabs(2)"
              v-bind:class="{
                'text-red-600 bg-white': openTab !== 2,
                'text-white bg-red-600': openTab === 2,
              }"
            >
              Administrators
            </a>
          </li>
        </ul>
        <div
          class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded"
        >
          <div class="px-4 py-5 flex-auto">
            <div class="tab-content tab-space">
              <div
                v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }"
              >
                <form class="mt-5">
                  <div class="flex flex-wrap">
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                          class="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Full name
                        </label>
                        <input
                          type="text"
                          class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                          :value="user.name"
                        />
                      </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                          class="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email address
                        </label>
                        <input
                          type="email"
                          class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                          :value="user.email"
                        />
                      </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                          class="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Mobile Number
                        </label>
                        <input
                          type="text"
                          class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                          :value="user.phoneNumber"
                        />
                      </div>
                    </div>
                    <!-- <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                          class="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                          value="Jesse"
                        />
                      </div>
                    </div> -->
                  </div>

                  <div class="flex flex-wrap">
                    <div class="w-full lg:w-12/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                          class="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Address
                        </label>
                        <input
                          type="text"
                          class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                          :value="user.address"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="px-4 mt-5">
                    <button
                      class="bg-primary text-white active:bg-red-700 text-sm font-bold text-capitalize px-6 py-3 rounded outline-none focus:outline-none mr-2 mb-1 ease-linear transition-all duration-150 capitalize"
                      type="button"
                    >
                      Save Changes
                    </button>
                    <button
                      class="text-primary bg-transparent border border-solid border-primary hover:bg-red-500 hover:text-white active:bg-primary font-bold text-capitalize text-xs px-4 py-3 rounded outline-none focus:outline-none mr-4 mb-1 ease-linear transition-all duration-150 ml-auto"
                      type="button"
                      @click="$store.commit('changePassword', true)"
                    >
                      Change Password
                    </button>
                  </div>
                </form>
              </div>
              <div
                v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }"
              >
                <div class="rounded-t mb-0 pt-2 pb-4 mx-4 border-0">
                  <div class="flex flex-wrap items-center">
                    <div class="relative w-full max-w-full flex-grow flex-1">
                      <h3 class="font-semibold text-base text-gray-800">
                        All Admins
                      </h3>
                    </div>
                    <div
                      class="relative w-full max-w-full flex-grow flex-1 text-right"
                    >
                      <button
                        class="bg-black text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        @click="$store.commit('addAdmin', true)"
                      >
                        Add New
                      </button>
                    </div>
                  </div>
                </div>
                <all-Admins />
              </div>
              <div
                v-bind:class="{ hidden: openTab !== 3, block: openTab === 3 }"
              >
                <form @submit.prevent="updateSettings" class="mt-5">
                  <div class="flex flex-wrap">
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                          class="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Document price
                        </label>
                        <input
                          v-model="documentPrice"
                          type="text"
                          class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                          value="100"
                        />
                      </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                          class="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Parcel price
                        </label>
                        <input
                          v-model="parcelPrice"
                          type="text"
                          class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                          value="100"
                        />
                      </div>
                    </div>

                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                          class="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Weight price
                        </label>
                        <input
                          v-model="weightPrice"
                          type="text"
                          class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                          value="100"
                        />
                      </div>
                    </div>

                    <div class="mt-5 ml-2">
                      <vs-checkbox v-model="recruitment"
                        ><span class="ml-2"
                          >Recruiting new Riders</span
                        ></vs-checkbox
                      >
                    </div>
                  </div>

                  <div class="px-4 mt-5">
                    <button
                      class="bg-primary text-white active:bg-red-700 text-sm font-bold text-capitalize px-6 py-3 rounded outline-none focus:outline-none mr-2 mb-1 ease-linear transition-all duration-150 capitalize vs-con-loading__container"
                      type="submit"
                      ref="loadableButton"
                      id="button-with-loading"
                    >
                      Update Settings
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AllAdmins from "@/components/App/AllAdmins.vue";

export default {
  name: "gray-tabs",
  data() {
    return {
      openTab: 1,
      documentPrice: "",
      parcelPrice: "",
      weightPrice: "",
      recruitment: "",
    };
  },
  mounted() {
    this.getSettings();
  },
  computed: {
    loading() {
      return this.$store.getters.pgLoading;
    },
    user() {
      let nUser = this.CryptoJS.AES.decrypt(
        this.$store.getters.user,
        this.$passPhrase
      ).toString(this.CryptoJS.enc.Utf8);
      return JSON.parse(nUser);
    },
  },
  methods: {
    updateSettings() {
      this.$vs.loading({
        background: "primary",
        color: "#fff",
        container: this.$refs.loadableButton,
        scale: 0.45,
      });
      let setting = {
        documentPrice: this.documentPrice,
        parcelPrice: this.parcelPrice,
        weightPrice: this.weightPrice,
        recruitment: this.recruitment,
      };

      this.$store
        .dispatch("updateSetting", setting)
        .then(() => {
          this.$vs.loading.close(this.$refs.loadableButton);
          this.$vs.notify({
            title: "Update Settings",
            text: "Settings updated successful",
            color: "success",
            icon: "check",
            position: "bottom-center",
          });
        })
        .catch((err) => {
          this.$vs.loading.close(this.$refs.loadableButton);

          if (err.response) {
            this.$vs.notify({
              title: "Update Settings",
              text: err.response.data.msg,
              color: "warning",
              icon: "error",
              position: "bottom-center",
            });
          } else {
            this.$vs.notify({
              title: "Update Settings",
              text: "Unable to Update Settings",
              color: "warning",
              icon: "error",
              position: "bottom-center",
            });
          }
        });
    },
    getSettings() {
      this.$store.commit("pgLoading", true);
      this.$store
        .dispatch("getSettings")
        .then((resp) => {
          this.$store.commit("pgLoading", false);
          this.documentPrice = resp.data.documentPrice;
          this.parcelPrice = resp.data.parcelPrice;
          this.weightPrice = resp.data.weightPrice;
          this.recruitment = resp.data.recruitment;
        })
        .catch((err) => {
          // console.log(err);
          this.$store.commit("pgLoading", false);
          if (err.response) {
            this.$vs.notify({
              title: "Get Settings",
              text: err.response.data.msg,
              color: "warning",
              icon: "error",
              position: "bottom-center",
            });
          } else {
            this.$vs.notify({
              title: "Get Settings",
              text: "Unable to Get Settings",
              color: "warning",
              icon: "error",
              position: "bottom-center",
            });
          }
        });
    },
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
    },
  },
  components: {
    AllAdmins,
  },
};
</script>