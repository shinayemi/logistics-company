<template>
  <div
    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded"
  >
    <div class="pt-6 pb-4 px-6">
      <div class="flex -mx-2">
        <div class="w-full pr-2">
          <div class="flex flex-wrap">
            <div class="w-full lg:w-8/12 xl:w-8/12">
              <div class="font-bold text-base">All Recent Orders</div>
            </div>
            <div class="w-full lg:w-4/12 xl:w-4/12">
              <div class="relative flex w-full flex-wrap items-stretch mb-3">
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
    <div class="block w-full overflow-x-auto">
      <!-- Projects table -->
      <table class="items-center w-full bg-transparent border-collapse">
        <thead>
          <tr>
            <th
              class="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
            >
              Product
            </th>
            <th
              class="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
            >
              Ordered by
            </th>
            <th
              class="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
            >
              Pickup address
            </th>
            <th
              class="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
            >
              Delivery addr.
            </th>

            <th
              class="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
            >
              Est. Del
            </th>
            <th
              class="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(order, index) in orders" :key="index">
            <th
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left"
            >
              <router-link to="/orders">{{ order.product }}</router-link>
              <p class="text-gray-500">by {{ order.seller }}</p>
              <!-- <div class="flex flex-wrap mb-3">
                <div
                  class="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-500"
                >
                  <img :src="order.img" alt="" width="30" />
                </div>
                <div
                  class="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-400 pl-4"
                >
                  <router-link to="/orders">{{ order.product }}</router-link>
                  <p class="text-gray-500">by {{ order.seller }}</p>
                </div>
              </div> -->
            </th>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
            >
              <p>{{ order.orderBy }}</p>
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
            >
              <p>{{ order.pickup }}</p>
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
            >
              <p>{{ order.delivery }}</p>
            </td>

            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
            >
              <p>2.3km - 2hrs</p>
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
            >
              <button
                class="bg-primary text-capitalize text-white active:bg-green-600 font-bold text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                Accept
              </button>

              <button
                class="text-primary bg-transparent border border-solid border-green-500 hover:bg-green-500 hover:text-white active:bg-green-600 font-bold text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                ref="btnDropdownRef"
              >
                Decline
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { createPopper } from "@popperjs/core";
export default {
  mounted: function () {},
  data() {
    return {
      dropdownPopoverShow: false,
      orders: [
        {
          product: "Hp 15 AMD ",
          seller: "Visking",
          orderBy: "Haruna Salami",
          pickup: "8 Hughes Avenue…",
          delivery: "12 Olufemi street",
          status: "Item with Driver",
          img:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/092975/1.jpg?1093",
        },
        {
          product: "Imose Zedon ",
          seller: "Visking",
          orderBy: "Haruna Salami",
          pickup: "8 Hughes Avenue…",
          delivery: "12 Olufemi street",
          status: "Pending",
          img:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/82/294222/1.jpg?3658",
        },
        {
          product: "290 G2 ",
          seller: "Visking",
          orderBy: "Haruna Salami",
          pickup: "8 Hughes Avenue…",
          delivery: "12 Olufemi street",
          status: "Rider assigned",
          img:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/73/853565/1.jpg?5348",
        },
        {
          product: "Hp Deskjet Ink",
          seller: "Visking",
          orderBy: "Haruna Salami",
          pickup: "8 Hughes Avenue…",
          delivery: "12 Olufemi street",
          status: "Rider accepted",
          img:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/31/566564/1.jpg?2314",
        },
        {
          product: "Hp 15 AMD ",
          seller: "Visking",
          orderBy: "Haruna Salami",
          pickup: "8 Hughes Avenue…",
          delivery: "12 Olufemi street",
          status: "Enroute to Delivery",
          img:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/092975/1.jpg?1093",
        },
        {
          product: "Imose Zedon ",
          seller: "Visking",
          orderBy: "Haruna Salami",
          pickup: "8 Hughes Avenue…",
          delivery: "12 Olufemi street",
          status: "Pending",
          img:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/82/294222/1.jpg?3658",
        },
      ],
    };
  },
  methods: {
    assignRider() {
      this.$store.commit("assignRider", true);
    },
    toggleDropdown: function (event) {
      event.preventDefault();
      if (this.dropdownPopoverShow) {
        this.dropdownPopoverShow = false;
      } else {
        this.dropdownPopoverShow = true;
        createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: "bottom-start",
        });
      }
    },
  },
};
</script>
