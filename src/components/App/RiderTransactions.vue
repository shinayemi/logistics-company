<template>
  <div
    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded"
  >
    <div class="pt-6 pb-4 px-6">
      <div class="flex -mx-2">
        <div class="w-full pr-2">
          <div class="flex flex-wrap">
            <div class="w-full lg:w-8/12 xl:w-8/12"></div>
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
              Date
            </th>
            <th
              class="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
            >
              Amount
            </th>
            <th
              class="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
            >
              Status
            </th>
            <th
              class="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
            >
              Client
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
              <p class="text-gray-500">{{ order.date }}</p>
            </th>

            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
            >
              <p>{{ order.amount }}</p>
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
            >
              <vs-chip color="success"> Successful </vs-chip>
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
            >
              <p>{{ order.client }}</p>
            </td>

            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
            >
              <button
                class="bg-primary text-capitalize text-white active:bg-green-600 font-bold text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                View
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
          date: "12th Oct, 2020",
          amount: "N12,000",
          pickup: "8 Hughes Avenue…",
          client: "Yemi Olayeni",
          status: "Item with Driver",
          img:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/092975/1.jpg?1093",
        },
        {
          product: "Imose Zedon ",
          date: "12th Oct, 2020",
          amount: "N12,000",
          pickup: "8 Hughes Avenue…",
          client: "Yemi Olayeni",
          status: "Pending",
          img:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/82/294222/1.jpg?3658",
        },
        {
          product: "290 G2 ",
          date: "12th Oct, 2020",
          amount: "N12,000",
          pickup: "8 Hughes Avenue…",
          client: "Yemi Olayeni",
          status: "Rider assigned",
          img:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/73/853565/1.jpg?5348",
        },
        {
          product: "Hp Deskjet Ink",
          date: "12th Oct, 2020",
          amount: "N12,000",
          pickup: "8 Hughes Avenue…",
          client: "Yemi Olayeni",
          status: "Rider accepted",
          img:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/31/566564/1.jpg?2314",
        },
        {
          product: "Hp 15 AMD ",
          date: "12th Oct, 2020",
          amount: "N12,000",
          pickup: "8 Hughes Avenue…",
          client: "Yemi Olayeni",
          status: "Enroute to Delivery",
          img:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/092975/1.jpg?1093",
        },
        {
          product: "Imose Zedon ",
          date: "12th Oct, 2020",
          amount: "N12,000",
          pickup: "8 Hughes Avenue…",
          client: "Yemi Olayeni",
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
