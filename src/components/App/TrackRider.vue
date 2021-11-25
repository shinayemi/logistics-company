<template>
  <div>
    <div class="">
      <div class="w-full mb-12 xl:mb-0">
        <div class="row">
          <div class="col-md-4">
            <div
              class="max-w-sm rounded bg-white overflow-hidden"
              style="min-height: 645px"
            >
              <div class="px-4 py-4">
                <div class="">
                  <div class="flex flex-wrap mb-3 mt-4">
                    <div
                      class="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-500"
                    >
                      <img
                        src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/c5/c56d74485723004bbe42d91473840c2a55fbeee3_full.jpg"
                        class="rounded-full align-middle border-none shadow-lg"
                        alt=""
                        width="50"
                      />
                    </div>
                    <div
                      class="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-400 pl-4"
                    >
                      <router-link to="/orders">Salauden Ibrahim</router-link>
                      <p class="text-gray-500 text-sm mb-1">⭐ ⭐ ⭐ ⭐ ⭐</p>
                    </div>
                  </div>
                  <p class="uppercase text-sm">Status</p>
                  <div class="my-2">
                    <div class="flex flex-wrap items-center">
                      <div class="relative w-full max-w-full flex-grow flex-1">
                        <span
                          class="f-10 font-semibold inline-block py-1 px-2 uppercase rounded text-red-600 bg-red-200 uppercase last:mr-0 mr-1"
                        >
                          With Package
                        </span>
                      </div>
                      <div
                        class="relative w-full max-w-full flex-grow flex-1 text-right"
                      >
                        <button
                          class="text-primary bg-transparent border border-solid border-green-500 hover:bg-green-500 hover:text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                        >
                          <i class="fas fa-phone"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="mt-5">
                    <div class="sidetimeline">
                      <p class="text-sm">Confirmed Pickup Delivery</p>
                      <p class="text-gray-500 text-xs pb-6">3 hours ago</p>
                    </div>
                    <div class="sidetimeline">
                      <p class="text-sm">
                        Pickup package 7 Olufemi Street, off Nathan
                      </p>
                      <p class="text-gray-500 text-xs pb-6">3 hours ago</p>
                    </div>
                    <div class="sidetimeline">
                      <p class="text-sm">
                        Delivered Package 7 Olufemi Street, off Nathan
                      </p>
                      <p class="text-gray-500 text-xs pb-6">3 hours ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <MglMap
              class="mt-4 trackmap"
              style="height: 500px"
              :zoom="4"
              :accessToken="accessToken"
              :mapStyle="mapStyle"
            >
              <MglNavigationControl position="top-right" />
              <MglGeolocateControl position="top-right" />
              <MglMarker :coordinates="coordinates" color="blue" />
              <MglPopup :coordinates="popupCoordinates">
                <span>Hello world!</span>
              </MglPopup>
            </MglMap>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Mapbox from "mapbox-gl";
import {
  MglMap,
  MglNavigationControl,
  MglGeolocateControl,
  MglPopup,
  MglMarker,
} from "vue-mapbox";
export default {
  name: "dashboard-page",
  data() {
    return {
      accessToken:
        "pk.eyJ1IjoiaG9ycGV5IiwiYSI6ImNqZXNrOHgweDN3ZHgycW1lNGd0MzY2NG8ifQ.iE72uu46mll2LzAIP2KRQA", // your access token. Needed if you using Mapbox maps
      mapStyle: "mapbox://styles/mapbox/streets-v11", // your map style
      popupCoordinates: [3.379206, 6.524379],
      coordinates: [3.379206, 6.524379],
    };
  },
  components: {
    MglMap,
    MglNavigationControl,
    MglGeolocateControl,
    MglPopup,
    MglMarker,
  },
  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
  },
};
</script>
