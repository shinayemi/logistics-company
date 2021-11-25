<template>
  <div v-bind:class="{ showBar: viewBar, 'sidebar-sect': true }">
    <h3 class="text-gray-800 text-xl font-semibold mb-3">
      <a
        href="javascript:void(0)"
        @click="$store.commit('viewTransaction', false)"
        class="closeBar"
      >
        <span class="fa fa-times"></span> </a
      ><span class="pl-3">Transaction</span>
      <p class="text-xs text-gray-500 pl-10 mt-2">
        <span class="mr-2 fas fa-calendar"></span>
        <span>12th Jan, 2020</span>
      </p>
    </h3>
    <hr />
    <div class="mt-10">
      <div>
        <p class="listbtt text-sm">
          <span class="font-bold">Amount</span>
          <span class="float-right">N4,000</span>
        </p>
        <p class="listbtt text-sm">
          <span class="font-bold">Transaction Reference</span>
          <span class="float-right">#jf2jfsfksl</span>
        </p>
        <p class="listbtt text-sm">
          <span class="font-bold">Client</span>
          <span class="float-right">Mr. Kayode Salam</span>
        </p>
        <p class="listbtt text-sm">
          <span class="font-bold">Dispatch Rider</span>
          <span class="float-right text-primary">Haruna Kareem</span>
        </p>
        <p class="listbtt text-sm">
          <span class="font-bold">Package Delivered</span>
          <span class="float-right">iPhone X</span>
        </p>
        <p class="listbtt text-sm">
          <span class="font-bold">Pickup Location</span>
          <span class="float-right">12 Hughes avenue, Alagomeji</span>
        </p>
        <p class="listbtt text-sm">
          <span class="font-bold">Delivery Location</span>
          <span class="float-right">8 Ilupeji Lane, Sabo Yaba</span>
        </p>
        <p class="listbtt text-sm">
          <span class="font-bold">Verification Status</span>
          <span class="float-right text-green-500">Successful</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    viewBar() {
      return this.$store.getters.viewTransaction;
    },
  },
  mounted() {},
};
</script>

