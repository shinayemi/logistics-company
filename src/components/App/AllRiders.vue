<template>
  <div
    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded"
  >
    <div class="block w-full overflow-x-auto">
      <!-- Projects table -->
      <table class="items-center w-full bg-transparent border-collapse">
        <thead>
          <tr>
            <th
              class="bg-gray-100 text-gray-600 border-gray-200 px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
            >
              Rider
            </th>
            <th
              class="bg-gray-100 text-gray-600 border-gray-200 px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
            >
              Status
            </th>
            <th
              class="bg-gray-100 text-gray-600 border-gray-200 px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
            >
              Total Order
            </th>
            <th
              class="bg-gray-100 text-gray-600 border-gray-200 px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
            >
              Phone
            </th>
            <th
              class="bg-gray-100 text-gray-600 border-gray-200 px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
            >
              Location
            </th>
            <th
              class="bg-gray-100 text-gray-600 border-gray-200 px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(rider, index) in riders" :key="index">
            <th
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center"
            >
              <img
                :src="rider.img"
                class="h-12 w-12 bg-white rounded-full border"
                alt="..."
              />
              <span class="text-gray-700 ml-3 pr-4 font-bold">
                {{ rider.name }}
              </span>
            </th>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
            >
              <span
                class="f-10 font-semibold inline-block py-1 px-2 uppercase rounded text-red-600 bg-red-200 uppercase last:mr-0 mr-1"
              >
                With Package
              </span>
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
            >
              12 Orders
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
            >
              <a class="text-primary" :href="`tel:${rider.phoneNumber}`">
                {{ rider.phoneNumber }}</a
              >
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
            >
              <p class="text-gray-500 text-sm mb-1">
                <i class="fas fa-thumbtack f-10"></i>
                {{ rider.state }}
              </p>
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
            >
              <router-link
                :to="`/view-riders/${rider._id}`"
                class="bg-primary text-capitalize text-white active:bg-green-600 font-bold text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              >
                Manage rider
              </router-link>

              <!-- <button
                class="text-primary bg-transparent border border-solid border-green-500 hover:bg-green-500 hover:text-white active:bg-green-600 font-bold text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                Track
              </button> -->

              <vs-dropdown>
                <a
                  class="text-primary bg-transparent border border-solid border-green-500 hover:bg-green-500 hover:text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded mr-1 mb-1 ease-linear transition-all duration-150"
                  href="#"
                >
                  <i class="fa fa-ellipsis-v"></i>
                </a>

                <vs-dropdown-menu>
                  <vs-dropdown-item @click="deleteRider(rider, index)">
                    Delete
                  </vs-dropdown-item>
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
export default {
  mounted: function () {},
  props: ["riders"],
  data() {
    return {
      riderAct: {},
    };
  },
  methods: {
    deleteRider(rider, index) {
      this.riderAct = {
        rider: rider,
        index: index,
      };
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: `Confirm Delete`,
        text: `Are you sure you want to delete ${rider.name}`,
        accept: this.deleteFunc,
      });
    },
    deleteFunc() {
      this.$vs.loading();
      let riderID = this.riderAct.rider._id;
      this.$store
        .dispatch("deleteRider", riderID)
        .then(() => {
          this.$vs.loading.close();
          if (this.riderAct.index > -1) {
            this.riders.splice(this.riderAct.index, 1);
          }

          this.$vs.notify({
            icon: "error",
            color: "dark",
            position: "bottom-center",
            title: "Rider deleted",
            text: "Rider was successfully deleted",
          });
        })
        .catch((err) => {
          this.$vs.loading.close();
          if (err.response) {
            this.$vs.notify({
              title: "Delete Rider",
              text: err.response.data.msg,
              color: "warning",
              icon: "error",
              position: "bottom-center",
            });
          } else {
            this.$vs.notify({
              title: "Delete Rider",
              text: "Unable to delete rider",
              color: "warning",
              icon: "error",
              position: "bottom-center",
            });
          }
        });
    },
  },
};
</script>
