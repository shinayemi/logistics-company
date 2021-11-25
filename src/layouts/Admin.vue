<template>
  <div>
    <sidebar />
    <div class="relative md:ml-64 bg-gray-200">
      <admin-navbar />
      <div class="relative bg-gray pt-sect pb-4 pt-10" @click="closeSidebars()">
        <div class="px-4 md:px-5 mx-auto w-full">
          <div style="min-height: 75vh">
            <slide-y-up-transition
              origin="center"
              mode="out-in"
              :duration="250"
            >
              <router-view />
            </slide-y-up-transition>
          </div>
          <footer-admin />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AdminNavbar from "@/components/Navbars/AdminNavbar.vue";
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import FooterAdmin from "@/components/Footers/FooterAdmin.vue";
import { SlideYUpTransition } from "vue2-transitions";

export default {
  name: "admin-layout",
  components: {
    AdminNavbar,
    Sidebar,
    SlideYUpTransition,
    FooterAdmin,
  },
  methods: {
    closeSidebars() {
      this.$store.commit("addRider", false);
      // this.$store.commit('assignRider', false)
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
