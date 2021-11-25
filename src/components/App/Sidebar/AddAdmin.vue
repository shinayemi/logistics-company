<template>
  <div v-bind:class="{ showBar: viewBar, 'sidebar-sect': true }">
    <h3 class="text-gray-800 text-xl font-semibold mb-3">
      <a
        href="javascript:void(0)"
        @click="$store.commit('addAdmin', false)"
        class="closeBar"
      >
        <span class="fa fa-times"></span> </a
      ><span class="pl-3">Add Admin</span>
    </h3>
    <hr />
    <form class="mt-10">
      <div class="relative w-full mb-5">
        <label
          class="block text-capitalize text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-password"
        >
          Full name
        </label>
        <input
          type="email"
          class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
          placeholder="Enter Name"
        />
      </div>
      <div class="relative w-full mb-5">
        <label
          class="block text-capitalize text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-password"
        >
          Email address
        </label>
        <input
          type="email"
          class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
          placeholder="Enter Email"
        />
      </div>

      <div class="relative w-full mb-5">
        <label
          class="block text-capitalize text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-password"
        >
          Select Role
        </label>
        <select
          class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
          name=""
          id=""
        >
          <option value="">Customer Care Support</option>
          <option value="">Admin</option>
        </select>
      </div>

      <div class="text-center mt-20">
        <button
          class="bg-primary text-white active:bg-red-700 text-sm font-bold text-capitalize px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150 capitalize"
          type="button"
        >
          Add Admin
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    viewBar() {
      return this.$store.getters.addAdmin;
    },
  },
  mounted() {},
};
</script>

