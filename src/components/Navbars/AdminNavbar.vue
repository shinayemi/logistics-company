<template>
  <div>
    <!-- Navbar -->
    <nav
      class="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-no-wrap md:justify-start flex items-center p-4 bg-white"
    >
      <div
        class="w-full mx-autp items-center flex justify-between md:flex-no-wrap flex-wrap md:px-8 px-4"
      >
        <!-- Brand -->
        <a
          class="text-black text-sm capitalize hidden lg:inline-block font-semibold"
          href="javascript:void(0)"
        >
          Dashboard
        </a>

        <button
          @click="addRiderr"
          class="text-primary bg-transparent border border-solid border-primary hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-4 mb-1 ease-linear transition-all duration-150 ml-auto"
          type="button"
        >
          <i class="fas fa-plus mr-2"></i> Add Rider
        </button>
        <button
          class="text-black background-transparent font-bold uppercase px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 mr-4"
          type="button"
        >
          <i class="fas fa-bell"></i>
        </button>
        <!-- User -->
        <ul
          class="flex-col md:flex-row list-none items-center hidden md:flex pb-2"
        >
          <user-dropdown />
        </ul>
      </div>
    </nav>
    <!-- Loading -->
    <div v-if="loading" class="loadingDiv">
      <div class="load-3">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </div>
    <!-- End Navbar -->
    <add-rider />
    <assign-rider />
    <view-transaction />
    <add-admin />
    <change-password />
  </div>
</template>

<script>
import UserDropdown from "@/components/Dropdowns/UserDropdown.vue";
import AddRider from "@/components/App/Sidebar/AddRider.vue";
import AssignRider from "@/components/App/Sidebar/AssignRider.vue";
import ViewTransaction from "@/components/App/Sidebar/ViewTransaction.vue";
import AddAdmin from "@/components/App/Sidebar/AddAdmin.vue";
import ChangePassword from "@/components/App/Sidebar/ChangePassword.vue";

export default {
  components: {
    UserDropdown,
    AddRider,
    AssignRider,
    ViewTransaction,
    AddAdmin,
    ChangePassword,
  },
  data() {
    return {
      show: false,
    };
  },
  computed: {
    loading() {
      return this.$store.getters.pgLoading;
    },
  },
  mounted() {},
  methods: {
    addRiderr() {
      this.$store.commit("addRider", true);
    },
  },
};
</script>

