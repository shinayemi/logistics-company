<template>
  <div>
    <div class="max-w-sm rounded bg-white overflow-hidden mb-4">
      <div class="px-6 py-4">
        <div class="rounded-t mb-0 py-1 border-0">
          <div class="flex flex-wrap items-center">
            <div class="relative w-full max-w-full flex-grow flex-1">
              <h3 class="font-semibold text-base text-gray-800">
                Pending Orders
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
              <img :src="order.img" alt="" width="63" />
            </div>
            <div
              class="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-400 pl-4"
            >
              <router-link to="/orders">{{ order.product }}</router-link>
              <p class="text-gray-500">by {{ order.seller }}</p>
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
          product: "Hp 15 AMD Dual Core 500GB",
          seller: "Visking",
          img:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/092975/1.jpg?1093",
        },
        {
          product: "Imose Zedon X4 11.6",
          seller: "Visking",
          img:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/82/294222/1.jpg?3658",
        },
        {
          product: "290 G2 Microtower",
          seller: "Visking",
          img:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/73/853565/1.jpg?5348",
        },
        {
          product: "Hp Deskjet Ink",
          seller: "Visking",
          img:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/31/566564/1.jpg?2314",
        },
      ],
    };
  },
};
</script>
