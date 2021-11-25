<template>
  <tr>
    <!-- <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
      <p class="mb-0">{{ order.source }}</p>
      <p class="small">{{ moment(order.createdAt).format("dddd, MMM Do YY") }}</p>
    </td>-->
    <td
      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left"
    >
      <!-- <router-link to="/orders">{{ order.product }}</router-link> -->
      <p class="text-gray-500">{{ order.description | capitalize }}</p>
      <div class="flex flex-wrap mb-3">
        <div class="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-500">
          <img
            :src="imageBaseUrl + order.img"
            alt
            width="120"
            style="border-radius: 15px;box-shadow: 3px 3px 3px #333;"
          />
        </div>
        <div class="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-400 pl-4">
          <router-link to="/orders">{{ order.product }}</router-link>
          <p class="text-gray-500">{{ order.seller }}</p>
        </div>
      </div>
    </td>
    <!-- <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
      <p>{{ order.name | capitalize }}</p>
      <p class="small">
        <a :href="`mailto:${order.email}`">{{ order.email }}</a>
      </p>
      <p>
        <a
          :href="`tel:${order.countryCode}${order.phoneNumber}`"
        >{{ order.countryCode }}{{ order.phoneNumber }}</a>
      </p>
    </td>-->
    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
      <p>{{ order.pickupAddress }}</p>
      <p class="mb-2">{{ order.pickupTime }}</p>
      <a
        href="javascript:void()"
        @click="viewMapPop(order.pickupLongitude, order.pickupLatitude)"
        class="text-primary"
      >
        <span class="fa fa-map" style="font-size: 10px"></span> View Map
      </a>
    </td>
    <!-- <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
            >
              <p>{{ order.delivery }}</p>
    </td>-->
    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 p-4">
      <span
        class="f-10 font-semibold inline-block py-1 px-2 uppercase rounded text-red-600 bg-red-200 uppercase last:mr-0 mr-1"
      >{{ order.status }}</span>
    </td>
    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
      <p>{{ order.TED | number("0,0") }}KM - {{ order.TET | number("0.00") }}mins</p>
      <p class="font-bold">{{ order.TEC | currency("₦", 0) }}</p>
    </td>
    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
      <span class="orderTimer">{{ returnTimer }}</span>

      <button
        style="background-color: #00ff00"
        class="bg-primary text-capitalize text-white active:bg-green-600 font-bold text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        v-bind:class="{
          disabledButton: disabledOrder,
          notDisabledButton: !disabledOrder
        }"
        type="button"
        :disabled="disabledOrder"
        @click="acceptEntry()"
      >Accept Order</button>

      <!-- <button
        class="bg-primary text-capitalize text-white active:bg-green-600 font-bold text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        v-bind:class="{
          disabledButton: disabledOrder,
          notDisabledButton: !disabledOrder
        }"
        type="button"
        :disabled="disabledOrder"
        @click="assignRider()"
      >
        Assign Dispatcher
      </button>
      <vs-dropdown>
        <a
          class="text-primary bg-transparent border border-solid border-green-500 hover:bg-green-500 hover:text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded mr-1 mb-1 ease-linear transition-all duration-150"
          href="#"
        >
          <i class="fa fa-ellipsis-v"></i>
        </a>

        <vs-dropdown-menu v-show="!disabledOrder">
          <vs-dropdown-item>Decline</vs-dropdown-item>
          <vs-dropdown-item>Delete</vs-dropdown-item>
        </vs-dropdown-menu>
      </vs-dropdown>-->
    </td>
  </tr>
</template>

<script>
import mapboxgl from "mapbox-gl";
import { createPopper } from "@popperjs/core";

export default {
  props: ["order"],
  created: function() {
    let passPhrase = "exaltLogisticsProject@!!";

    this.storedUserData = this.CryptoJS.AES.decrypt(
      localStorage.getItem("user"),
      passPhrase
    ).toString(this.CryptoJS.enc.Utf8);
    this.storedUserData = JSON.parse(this.storedUserData);
    this.typeOfOrder = this.storedUserData.tier.priority;

    this.orderTimerStart = this.order.approvedAt;
    this.orderTimerStart = new Date(this.orderTimerStart).getTime();

    switch (this.typeOfOrder) {
      case 0:
        var newDateObj0 = new Date(this.orderTimerStart + 10 * 60000); // 10 minutes
        this.countDownDate = newDateObj0.getTime();
        break;
      case 1:
        var newDateObj1 = new Date(this.orderTimerStart + 5 * 60000); // 5 minutes
        this.countDownDate = newDateObj1.getTime();
        break;
      case 2:
        var newDateObj2 = new Date(this.orderTimerStart + 0 * 60000); // 0 minutes
        this.countDownDate = newDateObj2.getTime();
        break;
      default:
        var newDateObj3 = new Date(this.orderTimerStart + 0 * 60000); // 0 minutes
        var defaultDateObj = new Date(newDateObj3); // 60 minutes
        this.countDownDate = defaultDateObj.getTime();
        break;
    }

    this.countDownOrder();
  },
  computed: {
    accessToken() {
      return this.$store.getters.mapToken;
    }
  },
  data() {
    return {
      imageBaseUrl: this.$store.getters.imageBaseUrl,
      orderTimerStart: null,
      disabledOrder: true,
      storedUserData: null,
      countDownDate: new Date("Jan 5, 2021 15:37:25").getTime(),
      typeOfOrder: null,
      returnTimer: "",
      mapStyle: "mapbox://styles/mapbox/streets-v11", // your map style
      popupCoordinates: [3.379206, 6.524379],
      coordinates: [3.379206, 6.524379],
      viewMap: false,
      dropdownPopoverShow: false
    };
  },
  methods: {
    countDownOrder() {
      // Update the count down every 1 second
      let x = setInterval(() => {
        // Get today's date and time
        let now = new Date().getTime();

        // Find the distance between now and the count down date
        let distance = this.countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        // let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        // let hours = Math.floor(
        //   (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        // );
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        // this.returnTimer =
        //   days + "day " + hours + "hour " + minutes + "min " + seconds + "sec ";

        // this.returnTimer = minutes + " mins " + seconds + " secs ";
        //Just to make it more human
        if (minutes <= 1) {
          this.returnTimer = minutes + " min " + seconds + " secs ";
        } else {
          this.returnTimer = minutes + " mins " + seconds + " secs ";
        }

        // If the count down is over, write some text
        if (distance < 0) {
          clearInterval(x);
          this.returnTimer = "";
          this.disabledOrder = false;
        }

        return this.returnTimer;
      }, 1000);
      return this.returnTimer;
    },
    viewMapPop(lng, lat) {
      this.viewMap = true;

      mapboxgl.accessToken = this.accessToken;

      let map = new mapboxgl.Map({
        container: "mapContainer",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [lng, lat],
        zoom: 15
      });
      const nav = new mapboxgl.NavigationControl();
      map.addControl(nav, "top-right");
      // var marker = new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
    },
    assignRider() {
      this.$store.commit("assignRider", true);
    },
    acceptEntry() {
      this.getOnlineRiders();
      this.$swal({
        title: "Are you sure, you want to accept this order?",
        text: `You about to accept order (${this.order.description})`,
        icon: "warning",
        buttons: true,
        dangerMode: true,
        showCancelButton: true
      }).then(wantToAcceptEntry => {
        this.$store.commit("addCurrentOrderEntryId", this.order._id);
        // console.log(wantToAcceptEntry);
        if (wantToAcceptEntry.isConfirmed) {
          this.openBtnLoading();
          this.$store
            .dispatch("acceptEntry", this.order._id)
            .then(resp => {
              console.log(resp);
              this.closeBtnLoading();
              this.$router.push("/order/" + this.order._id);
            })
            .catch(err => {
              alert(JSON.stringify(err));
              console.log(err);
              this.$swal({
                title: "Error!",
                text: `${err.message}`,
                icon: "error",
                confirmButtonText: "Ok"
              });
              this.closeBtnLoading();
            });
        }
      });
    },
    getOnlineRiders() {
      this.$store
        //.dispatch("getCompanyOnlineRiders", this.order._id)
        .dispatch("getCompanyOnlineRiders", "5fc8c8b3479c8f29d794d3f1")
        .then(resp => {
          this.$store.commit("addOnlineRiders", resp.data);
          // alert(JSON.stringify(resp.data));
        })
        .catch(() => {});
    },
    toggleDropdown: function(event) {
      event.preventDefault();
      if (this.dropdownPopoverShow) {
        this.dropdownPopoverShow = false;
      } else {
        this.dropdownPopoverShow = true;
        createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: "bottom-start"
        });
      }
    }
  }
};
</script>

<style scoped>
.disabledButton {
  opacity: 0.3;
  cursor: not-allowed;
}

.notDisabledButton {
  opacity: 0.9;
  cursor: auto;
}

.orderTimer {
  font-family: counterFont;
  font-weight: bold;
  font-size: 2em;
}
</style>
