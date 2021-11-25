<template>
  <div>
    <div class="max-w-sm rounded bg-white overflow-hidden mb-3">
      <div class="px-6 py-4">
        <div class="rounded-t mb-0 py-1 border-0">
          <div class="flex flex-wrap items-center">
            <div class="relative w-full max-w-full flex-grow flex-1">
              <h3 class="font-semibold text-base text-gray-800">
                Dispatch Rider Activities
              </h3>
            </div>
            <div class="relative w-full max-w-full flex-grow flex-1 text-right">
              <button
                class="bg-black text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                View all
              </button>
            </div>
          </div>
        </div>

        <div class="mt-5">
          <div
            class="flex flex-wrap mb-3"
            v-for="(order, index) in orders"
            :key="index"
          >
            <div class="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-500">
              <img
                :src="order.img"
                class="rounded-full align-middle border-none shadow-lg"
                alt=""
                width="50"
              />
            </div>
            <div
              class="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-400 pl-4"
            >
              <router-link to="/orders">{{ order.name }}</router-link>
              <p class="text-gray-500 text-sm mb-1">
                <i class="fas fa-thumbtack f-10"></i>
                {{ order.location }}
              </p>
              <span
                class="f-10 font-semibold inline-block py-1 px-2 uppercase rounded text-red-600 bg-red-200 uppercase last:mr-0 mr-1"
              >
                With Package
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted: function () {},
  data() {
    return {
      orders: [
        {
          name: "Salauden Ibrahim",
          location: "Anthony, Lagos",
          img:
            "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/c5/c56d74485723004bbe42d91473840c2a55fbeee3_full.jpg",
        },
        {
          name: "Hughes Jacobs",
          location: "Anthony, Lagos",
          img:
            "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/98/98e36522c2aa5ea8088db67d6b22c1552850bf10_full.jpg",
        },
        {
          name: "Selena Gomez",
          location: "Anthony, Lagos",
          img:
            "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/f6/f6f46516965b11547bdca2acd090094f880a057f_full.jpg",
        },
        {
          name: "Jide Macaulay",
          location: "Anthony, Lagos",
          img:
            "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/f5/f5bdcd357c92cd737012ce606023bbd80a6e6d81_full.jpg",
        },
      ],
    };
  },
};
</script>
