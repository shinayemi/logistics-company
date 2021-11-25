<template>
  <div>
    <vs-dropdown>
      <a
        class="cursor-pointer text-black background-transparent font-bold uppercase px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-2 ease-linear transition-all duration-150 mr-4"
        href="#"
      >
        <i class="fas fa-user"></i>
      </a>

      <vs-dropdown-menu>
        <vs-dropdown-item> Profile </vs-dropdown-item>
        <vs-dropdown-item> Settings </vs-dropdown-item>
        <vs-dropdown-item @click="logout">Logout</vs-dropdown-item>
      </vs-dropdown-menu>
    </vs-dropdown>
  </div>
</template>

<script>
import { createPopper } from "@popperjs/core";

import image from "@/assets/img/team-1-800x800.jpg";

export default {
  data() {
    return {
      dropdownPopoverShow: false,
      image: image,
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/auth");
      });
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
