<template>
  <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
    <div class="pt-6 pb-4 px-6">
      <div class="flex -mx-2">
        <div class="w-full pr-2">
          <div class="row">
            <div class="col-md-3">
              <div class="font-bold text-base">All Local Orders</div>
              <!-- <p>{{ allPoolsCompu }}</p> -->
            </div>
            <div class="col-md-9">
              <div class="text-right">
                <vs-select class="selectExample d-inlineblock mr-3" v-model="filterDate">
                  <vs-select-item
                    :key="index"
                    :value="item.value"
                    :text="item.text"
                    v-for="(item, index) in filterSel"
                  />
                </vs-select>
                <vs-input
                  class="d-inlineblock mr-3 siteFormIcon"
                  icon-no-border
                  icon="search"
                  placeholder="Search"
                  v-model="seachfield"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="block w-full overflow-x-auto">
      <!-- Projects table -->
      <table class="items-center w-full bg-transparent border-collapse">
        <thead>
          <tr>
            <!-- <th
              class="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
            >Order Number</th>-->

            <th
              class="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
            >Product</th>
            <!-- <th
              class="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
            >Ordered by</th>-->
            <th
              class="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
            >Pickup address</th>
            <!-- <th
              class="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
            >
              Delivery addr.
            </th>-->
            <th
              class="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
            >Status</th>
            <th
              class="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
            >Est. Del</th>
            <th
              class="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
            >Action</th>
          </tr>
        </thead>
        <tbody v-for="order in allPools" :key="order.transaction">
          <SingleOrderRow :order="order" />
        </tbody>
      </table>
    </div>

    <!-- Map PopUp -->
    <vs-popup fullscreen title="View Map" :active.sync="viewMap">
      <div>
        <div height="600" id="mapContainer" class="basemap"></div>
      </div>
    </vs-popup>
  </div>
</template>
<script>
import store from "../../store/store";
import mapboxgl from "mapbox-gl";
import { createPopper } from "@popperjs/core";
import SingleOrderRow from "@/components/App/SingleOrderRow.vue";

export default {
  components: {
    SingleOrderRow
  },
  mounted() {
    this.listenPool();
    // this.allPools = this.fakePools;
  },
  props: ["allOrders"],
  computed: {
    accessToken() {
      return this.$store.getters.mapToken;
    },
    allPoolsCompu() {
      return this.allPools;
    }
  },
  data() {
    return {
      allPools: JSON.parse(localStorage.getItem("localOrderPool")),
      seachfield: "",
      mapStyle: "mapbox://styles/mapbox/streets-v11", // your map style
      popupCoordinates: [3.379206, 6.524379],
      coordinates: [3.379206, 6.524379],
      viewMap: false,
      dropdownPopoverShow: false,
      filterDate: 1,
      filterSel: [
        { text: "All", value: 1 },
        { text: "November", value: 2 },
        { text: "December", value: 3 }
      ]
    };
  },
  watch: {
    allPools: function(newValue) {
      this.allPools = newValue;
      // alert("watcher");
    }
  },
  methods: {
    listenPool() {
      try {
        this.$ws.on("connect", () => {
          console.log("Connected");

          this.$ws.on("listenPool", result => {
            console.log(JSON.stringify(result));
            // alert(JSON.stringify(result));
            // this.allPools = this.fakePools;
            // console.log("All orders pool >>> ", this.allPools);
            // console.log("All orders pool >>> ", JSON.stringify(this.allPools));

            store.commit("addLocalOrderPool", result.data);
            localStorage.setItem("localOrderPool", JSON.stringify(result.data));

            this.allPools = result.data;
            let a = localStorage.getItem("localOrderPool");
            let b = JSON.stringify(result.data);

            if (a !== b) {
              this.$router.go();
            }
          });

          this.$ws.on("newEntry", result => {
            // console.log(JSON.stringify(result));
            // this.allPools = this.fakePools;
            // console.log("All orders pool >>> ", this.allPools);
            // console.log("All orders pool >>> ", JSON.stringify(this.allPools));

            let newEntry = [result]; // needs to be an array for concat to work
            // console.log("newEntry >>> ", newEntry);
            let oldEntry = [localStorage.getItem("localOrderPool")];
            oldEntry = JSON.parse(oldEntry);

            let joinNewAndOldEntry = newEntry.concat(oldEntry);
            console.log("joinNewAndOldEntry >>>", joinNewAndOldEntry);
            console.log(JSON.stringify(joinNewAndOldEntry));

            store.commit("addLocalOrderPool", joinNewAndOldEntry);
            localStorage.setItem(
              "localOrderPool",
              JSON.stringify(joinNewAndOldEntry)
            );

            this.allPools = joinNewAndOldEntry;
            this.$router.go();
          });
        });
      } catch (error) {
        console.log("error", error);
      }
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
