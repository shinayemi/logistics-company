<template>
  <div
    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded"
  >
    <div class="pt-6 pb-4 px-6">
      <div class="flex -mx-2">
        <div class="w-full pr-2">
          <div class="row">
            <div class="col-md-3">
              <div class="font-bold text-base">All International Orders</div>
            </div>
            <div class="col-md-9">
              <div class="text-right">
                <vs-select
                  class="selectExample d-inlineblock mr-3"
                  v-model="filterDate"
                >
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
            <th
              class="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
            >
              Order Number
            </th>

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
              Status
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
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
            >
              <p>{{ order.orderNo }}</p>
            </td>
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
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 p-4">
              <span
                class="f-10 font-semibold inline-block py-1 px-2 uppercase rounded text-red-600 bg-red-200 uppercase last:mr-0 mr-1"
              >
                {{ order.status }}
              </span>
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

                <vs-dropdown-menu>
                  <vs-dropdown-item> Decline </vs-dropdown-item>
                  <vs-dropdown-item> Delete </vs-dropdown-item>
                </vs-dropdown-menu>
              </vs-dropdown>
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
      seachfield: "",
      filterDate: 1,
      filterSel: [
        { text: "All", value: 1 },
        { text: "November", value: 2 },
        { text: "December", value: 3 },
      ],
      orders: [
        {
          orderNo: "EXL-12356",
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
          orderNo: "EXL-12356",
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
          orderNo: "EXL-12356",
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
          orderNo: "EXL-12356",
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
          orderNo: "EXL-12356",
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
          orderNo: "EXL-12356",
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
