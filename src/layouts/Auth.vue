<template>
  <div>
    <main>
      <section
        class="relative w-full h-full py-20 min-h-screen"
        style="border-top: 3px solid #ff0101"
      >
        <div
          class="absolute top-0 w-full h-full bg-white bg-no-repeat bg-full"
        ></div>
        <router-view />
        <!-- <footer-small absolute /> -->
      </section>
    </main>
  </div>
</template>
<script>
// import FooterSmall from "@/components/Footers/FooterSmall.vue";

export default {
  data() {
    return {};
  },
  components: {
    // FooterSmall,
  },
};
</script>
