<template>
  <div v-bind:class="{ showBar: viewBar, 'sidebar-sect': true }">
    <h3 class="text-gray-800 text-xl font-semibold mb-3">
      <a
        href="javascript:void(0)"
        @click="$store.commit('addRider', false)"
        class="closeBar"
      >
        <span class="fa fa-times"></span> </a
      ><span class="pl-3">Add Rider</span>
    </h3>
    <hr />
    <form @submit.prevent="addRider" class="mt-10 formScroll">
      <div class="relative w-full mb-5">
        <label
          class="block text-capitalize text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-password"
        >
          Full name
        </label>
        <input
          required
          v-model="rider.name"
          class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
          placeholder="Enter Name"
        />
      </div>
      <div class="relative w-full mb-5">
        <label
          class="block text-capitalize text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-password"
        >
          Email address
        </label>
        <input
          required
          v-model="rider.email"
          type="email"
          class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
          placeholder="Enter Email"
        />
      </div>

      <div class="relative w-full mb-5">
        <label
          class="block text-capitalize text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-password"
        >
          Mobile Number
        </label>
        <input
          required
          v-model="rider.phoneNumber"
          class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
          placeholder="Enter Name"
        />
      </div>

      <div class="relative w-full mb-5">
        <label
          class="block text-capitalize text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-password"
        >
          Date of Birth
        </label>
        <input
          required
          type="date"
          v-model="rider.DOB"
          class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
          placeholder="Enter Name"
        />
      </div>

      <div class="relative w-full mb-5">
        <label
          class="block text-capitalize text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-password"
        >
          Address
        </label>
        <input
          required
          v-model="rider.address"
          class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
          placeholder="Enter Details"
        />
      </div>

      <div class="relative w-full mb-5">
        <label
          class="block text-capitalize text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-password"
        >
          Vehicle
        </label>

        <vs-select v-model="rider.vehicle" class="w-full">
          <vs-select-item
            :key="index"
            :value="item._id"
            :text="item.type"
            v-for="(item, index) in vehicles"
          />
        </vs-select>
      </div>

      <div class="relative w-full mb-5">
        <label
          class="block text-capitalize text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-password"
        >
          Country
        </label>

        <vs-select
          autocomplete
          @change="getStates($event)"
          v-model="riderCountry"
          class="w-full"
        >
          <vs-select-item
            :key="index"
            :value="item"
            :text="item.name"
            v-for="(item, index) in countries"
          />
        </vs-select>
      </div>

      <div class="relative w-full mb-5">
        <label
          class="block text-capitalize text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-password"
        >
          State
        </label>

        <vs-select autocomplete v-model="rider.state" class="w-full">
          <vs-select-item
            :key="index"
            :value="item.name"
            :text="item.name"
            v-for="(item, index) in states"
          />
        </vs-select>
      </div>

      <div class="relative w-full mb-5">
        <label
          class="block text-capitalize text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-password"
        >
          Profile Image
        </label>
        <input
          required
          accept="image/*"
          @change="uploadProfileImg($event)"
          type="file"
          class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
        />
      </div>
      <div class="relative w-full mb-5">
        <label
          class="block text-capitalize text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-password"
        >
          Proof of Identity (National ID card, Nigerian Passport etc.)
        </label>
        <input
          required
          @change="uploadPOI($event)"
          type="file"
          class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
        />
      </div>

      <div class="relative w-full mb-5">
        <label
          class="block text-capitalize text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-password"
        >
          POI ExpiringDate
        </label>

        <input
          required
          type="date"
          v-model="rider.POIExpiringDate"
          class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
          placeholder="Enter Date"
        />
      </div>

      <div class="relative w-full mb-5">
        <label
          class="block text-capitalize text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-password"
        >
          Policy Number
        </label>
        <input
          required
          v-model="rider.policyNumber"
          class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
          placeholder="Enter Number"
        />
      </div>

      <div class="relative w-full mb-5">
        <label
          class="block text-capitalize text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-password"
        >
          Plate Number
        </label>
        <input
          required
          v-model="rider.plateNumber"
          class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
          placeholder="Enter Number"
        />
      </div>

      <div class="relative w-full mb-5">
        <label
          class="block text-capitalize text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-password"
        >
          Emergency Contact Name
        </label>
        <input
          required
          v-model="rider.ECName"
          class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
          placeholder="Enter Details"
        />
      </div>

      <div class="relative w-full mb-5">
        <label
          class="block text-capitalize text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-password"
        >
          Emergency Contact Phone
        </label>
        <input
          required
          v-model="rider.ECPhone"
          class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
          placeholder="Enter Details"
        />
      </div>

      <div class="relative w-full mb-5">
        <label
          class="block text-capitalize text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-password"
        >
          Emergency Contact Email
        </label>
        <input
          required
          type="email"
          v-model="rider.ECEmail"
          class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
          placeholder="Enter Details"
        />
      </div>

      <div class="text-center mt-20">
        <button
          class="bg-primary text-white active:bg-red-700 text-sm font-bold text-capitalize px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150 capitalize"
          type="submit"
          id="button-with-loading"
          ref="riderBtn"
        >
          Add Rider
        </button>
      </div>
    </form>
  </div>
</template>
<script>
// import axios from "axios";
export default {
  data() {
    return {
      countries: [],
      states: [],
      vehicles: [],
      riderCountry: "",
      rider: {
        name: "",
        email: "",
        DOB: "",
        POI: "",
        phoneNumber: "",
        POIExpiringDate: "",
        policyNumber: "",
        plateNumber: "",
        ECName: "",
        ECPhone: "",
        ECEmail: "",
        img: "",
        address: "",
        vehicle: "",
        country: "",
        state: "",
      },
    };
  },
  computed: {
    viewBar() {
      return this.$store.getters.addRider;
    },
  },
  mounted() {
    this.getVehicles();
    this.getCountries();
  },
  methods: {
    uploadProfileImg(event) {
      this.rider.img = event.target.files[0];
    },
    uploadPOI(event) {
      this.rider.POI = event.target.files[0];
    },
    getStates(event) {
      this.rider.country = event.name;
      let country = event.name;
      this.$store
        .dispatch("getStates", country)
        .then((resp) => {
          this.states = resp.data;
        })
        .catch((err) => {
          if (err.response) {
            this.$vs.notify({
              title: "Load States",
              text: err.response.data.msg,
              color: "warning",
              icon: "error",
              position: "bottom-center",
            });
          } else {
            this.$vs.notify({
              title: "Load States",
              text: "Unable to load States",
              color: "warning",
              icon: "error",
              position: "bottom-center",
            });
          }
        });
    },
    getCountries() {
      this.$store
        .dispatch("getCountries")
        .then((resp) => {
          this.countries = resp.data;
        })
        .catch((err) => {
          if (err.response) {
            this.$vs.notify({
              title: "Load Countries",
              text: err.response.data.msg,
              color: "warning",
              icon: "error",
              position: "bottom-center",
            });
          } else {
            this.$vs.notify({
              title: "Load Countries",
              text: "Unable to load Countries",
              color: "warning",
              icon: "error",
              position: "bottom-center",
            });
          }
        });
    },
    getVehicles() {
      this.$store
        .dispatch("getVehicles")
        .then((resp) => {
          this.vehicles = resp.data;
        })
        .catch((err) => {
          if (err.response) {
            this.$vs.notify({
              title: "Load Vehicles",
              text: err.response.data.msg,
              color: "warning",
              icon: "error",
              position: "bottom-center",
            });
          } else {
            this.$vs.notify({
              title: "Load Vehicles",
              text: "Unable to load vehicles",
              color: "warning",
              icon: "error",
              position: "bottom-center",
            });
          }
        });
    },
    addRider() {
      this.openBtnLoading();

      let rider = this.rider;
      this.$store
        .dispatch("addRider", rider)
        .then(() => {
          this.closeBtnLoading();

          this.$vs.notify({
            title: "Add Rider",
            text: "New Rider Added",
            color: "success",
            icon: "verified_user",
            position: "bottom-center",
          });

          this.rider.name = "";
          this.rider.email = "";
          this.rider.DOB = "";
          this.rider.POI = "";
          this.rider.phoneNumber = "";
          this.rider.POIExpiringDate = "";
          this.rider.policyNumber = "";
          this.rider.plateNumber = "";
          this.rider.ECName = "";
          this.rider.ECPhone = "";
          this.rider.ECEmail = "";
          this.rider.img = "";
          this.rider.address = "";
          this.rider.vehicle = "";
          this.rider.country = "";
          this.rider.state = "";
        })
        .catch((err) => {
          this.closeBtnLoading();
          if (err.response) {
            this.$vs.notify({
              title: "Add Rider",
              text: err.response.data.msg,
              color: "warning",
              icon: "error",
              position: "bottom-center",
            });
          } else {
            this.$vs.notify({
              title: "Add Rider",
              text: "Unable to add rider",
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

