<template>
  <div>
    <div class="flex flex-wrap">
      <div class="w-full mb-12 xl:mb-0">
        <div class="flex flex-wrap">
          <!-- <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <div class="max-w-sm rounded bg-white overflow-hidden">
              <div class="px-4 py-4">
                <div class="font-bold text-base mb-2">All Invoice</div>

                <div class="mt-5"></div>
              </div>
            </div>
          </div> -->
          <!-- w-full xl:w-10/12 -->
          <div class="w-full px-4">
            <div class="max-w-sm rounded bg-white mb-4 overflow-hidden">
              <div class="px-6 py-4">
                <div class="flex -mx-2">
                  <div class="w-full pr-2">
                    <div class="flex flex-wrap">
                      <div class="w-full lg:w-8/12 xl:w-8/12">
                        <div class="font-bold text-base">Manage Invoice</div>
                      </div>
                      <div class="w-full lg:w-4/12 xl:w-4/12">
                        <div
                          class="relative flex w-full flex-wrap items-stretch mb-3"
                        >
                          <span
                            class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1"
                          >
                            <i class="fas fa-search"></i>
                          </span>
                          <input
                            type="text"
                            placeholder="Search"
                            class="px-2 py-1 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:shadow-outline w-full pl-10"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <all-invoice />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AllInvoice from "@/components/App/AllInvoice.vue";

export default {
  name: "dashboard-page",
  components: {
    AllInvoice,
  },
};
</script>
