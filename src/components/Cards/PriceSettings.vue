<template>
  <div>
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
              Local
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
              Interstate
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
              International
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
                <div class="row mx-3">
                  <div class="col-md-8">
                    <h3 class="ml-3">All Local Prices</h3>
                  </div>
                  <div class="col-md-4 text-right">
                    <button
                      @click="viewAddP = !viewAddP"
                      class="bg-primary mb-5 text-white active:bg-red-700 text-sm font-bold text-capitalize px-6 py-3 rounded outline-none focus:outline-none mr-2 mb-1 ease-linear transition-all duration-150 capitalize"
                      type="button"
                    >
                      Add Price
                    </button>
                  </div>
                </div>
                <form v-if="viewAddP" class="mt-5 px-3">
                  <div class="row">
                    <div class="col-md-3">
                      <div class="relative w-full mb-3">
                        <label
                          class="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          State
                        </label>
                        <select
                          class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                          name=""
                          id=""
                        >
                          <option value="">Lagos</option>
                          <option value="">Abuja</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="relative w-full mb-3">
                        <label
                          class="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Vehicle
                        </label>
                        <select
                          class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                          name=""
                          id=""
                        >
                          <option value="">Motorcycle</option>
                          <option value="">Truck</option>
                          <option value="">Van</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="relative w-full mb-3">
                        <label
                          class="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Price (per Kilometer)
                        </label>
                        <input
                          type="text"
                          class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="relative w-full mb-3">
                        <label
                          class="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Price (per Kg)
                        </label>
                        <input
                          type="text"
                          class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    class="bg-primary mb-5 text-white active:bg-red-700 text-sm font-bold text-capitalize px-6 py-3 rounded outline-none focus:outline-none mr-2 mb-1 ease-linear transition-all duration-150 capitalize"
                    type="button"
                  >
                    Add Price
                  </button>

                  <button
                    type="button"
                    @click="viewAddP = false"
                    class="text-primary bg-transparent border border-solid border-primary hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-xs px-6 py-3 rounded outline-none focus:outline-none"
                  >
                    Close
                  </button>
                </form>
                <all-prices />
              </div>
              <div
                v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }"
              >
                <div class="row mx-3">
                  <div class="col-md-8">
                    <h3 class="ml-3">All Interstate Prices</h3>
                  </div>
                  <div class="col-md-4 text-right">
                    <button
                      @click="viewAddInter = !viewAddInter"
                      class="bg-primary mb-5 text-white active:bg-red-700 text-sm font-bold text-capitalize px-6 py-3 rounded outline-none focus:outline-none mr-2 mb-1 ease-linear transition-all duration-150 capitalize"
                      type="button"
                    >
                      Add Price
                    </button>
                  </div>
                </div>
                <form v-if="viewAddInter" class="mt-5 px-3">
                  <div class="row">
                    <div class="col-md-3">
                      <div class="relative w-full mb-3">
                        <label
                          class="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          State
                        </label>
                        <select
                          class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                          name=""
                          id=""
                        >
                          <option value="">Lagos</option>
                          <option value="">Abuja</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="relative w-full mb-3">
                        <label
                          class="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Destination state
                        </label>
                        <select
                          class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                          name=""
                          id=""
                        >
                          <option value="">Lagos</option>
                          <option value="">Abuja</option>
                        </select>
                      </div>
                    </div>

                    <div class="col-md-3">
                      <div class="relative w-full mb-3">
                        <label
                          class="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Vehicle
                        </label>
                        <select
                          class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                          name=""
                          id=""
                        >
                          <option value="">Motorcycle</option>
                          <option value="">Truck</option>
                          <option value="">Van</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="relative w-full mb-3">
                        <label
                          class="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Price (per Kilometer)
                        </label>
                        <input
                          type="text"
                          class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="relative w-full mb-3">
                        <label
                          class="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Price (per Kg)
                        </label>
                        <input
                          type="text"
                          class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    class="bg-primary mb-5 text-white active:bg-red-700 text-sm font-bold text-capitalize px-6 py-3 rounded outline-none focus:outline-none mr-2 mb-1 ease-linear transition-all duration-150 capitalize"
                    type="button"
                  >
                    Add Price
                  </button>

                  <button
                    type="button"
                    @click="viewAddInter = false"
                    class="text-primary bg-transparent border border-solid border-primary hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-xs px-6 py-3 rounded outline-none focus:outline-none"
                  >
                    Close
                  </button>
                </form>

                <all-prices />
              </div>

              <div
                v-bind:class="{ hidden: openTab !== 3, block: openTab === 3 }"
              >
                <div class="mx-3">
                  <p>Pending</p>
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
import AllPrices from "@/components/App/AllPrices.vue";

export default {
  name: "gray-tabs",
  data() {
    return {
      openTab: 1,
      viewAddP: false,
      viewAddInter: false,
    };
  },
  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
    },
  },
  components: {
    AllPrices,
  },
};
</script>