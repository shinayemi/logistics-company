<template>
  <div v-bind:class="{ showBar: viewBar, 'sidebar-sect': true }">
    <h3 class="text-gray-800 text-xl font-semibold mb-3">
      <a href="javascript:void(0)" @click="$store.commit('assignRider', false)" class="closeBar">
        <span class="fa fa-times"></span>
      </a>
      <span class="pl-3">Assign Rider</span>
    </h3>
    <hr />
    <!-- <div class="mb-3 mt-4">
      <p>
        <span class="font-bold mb-4 pb-4">Haruna Ishola</span> ordered
      </p>
      <div class="flex flex-wrap mt-4">
        <div class="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-500">
          <img
            src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/092975/1.jpg?1093"
            alt
            width="63"
          />
        </div>
        <div class="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-400 pl-4">
          <p class="mt-4">HP 22rer 21.5inches LED</p>
        </div>
      </div>
    </div>-->
    <div v-if="assigned">
      <div class="text-center">
        <h1 class="text-primary" style="font-size: 4em">
          <span class="fa fa-check"></span>
        </h1>
        <p class="font-bold mb-4">Rider Kareem Salam successfully assigned</p>
        <button
          class="bg-primary text-capitalize text-white active:bg-green-600 font-bold text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 mr-3"
          type="button"
          @click="assignRider()"
        >Continue</button>

        <button
          class="text-primary bg-transparent border border-solid border-green-500 hover:bg-green-500 hover:text-white active:bg-green-600 font-bold text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 text-capitalize"
          type="button"
          ref="btnDropdownRef"
        >Track Rider</button>
      </div>
    </div>
    <form v-else class="mt-10">
      <div class="relative w-full mb-5">
        <label
          class="block text-capitalize text-gray-700 text-xs font-bold mb-2"
          for="grid-password"
        >Select Rider</label>
        <select
          class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
          name
          id
          v-model="selectedRider"
        >
          >
          <option :value="rider._id" v-for="rider in computeRider" :key="rider._id">{{rider.name}}</option>
        </select>
      </div>

      <div class="text-center mt-20">
        <button
          @click="assignRiderToOrder()"
          class="bg-primary text-white active:bg-red-700 text-sm font-bold text-capitalize px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150 capitalize"
          type="button"
        >Assign Dispatch Rider</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      assigned: false,
      id: this.$store.getters.currentOrderEntryId,
      onlineRiders: this.$store.getters.onlineRiders,
      selectedRider: null
    };
  },
  computed: {
    viewBar() {
      return this.$store.getters.assignRider;
    },
    computeRider() {
      return this.$store.getters.onlineRiders;
    }
  },
  created: function() {
    this.getOnlineRiders();
  },
  methods: {
    getOnlineRiders() {
      if (this.id !== null) {
        this.$store
          .dispatch("getCompanyOnlineRiders", this.id)
          .then(resp => {
            this.onlineRiders = resp.data;
            // alert(JSON.stringify(resp.data));
          })
          .catch(() => {});
      } else {
        // alert(this.id);
      }
    },
    assignRiderToOrder() {
      if (this.selectedRider == null) {
        this.$swal({
          title: "Warning!",
          text: `You need to select a rider`,
          icon: "warning",
          confirmButtonText: "Ok"
        });
      } else {
        this.openBtnLoading();
        this.$store
          .dispatch("assignRiderToOrder", this.selectedRider)
          .then(resp => {
            console.log(resp);
            this.assigned = true;
            this.closeBtnLoading();
          })
          .catch(err => {
            this.$swal({
              title: "Warning!",
              text: `${err}`,
              icon: "warning",
              confirmButtonText: "Ok"
            });
            this.closeBtnLoading();
          });
      }
    }
  }
};
</script>

