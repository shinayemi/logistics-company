<template>
  <div class="py-4">
    <div class="row">
      <div class="col-md-4">
        <p class="px-3 mb-2 miniheading">General</p>

        <vs-list>
          <vs-list-item
            class="mb-3"
            subtitle="Rider's name"
            :title="riderData.name"
          ></vs-list-item>
          <vs-list-item
            class="mb-3"
            subtitle="Email Address"
            :title="riderData.email"
          ></vs-list-item>
          <vs-list-item
            class="mb-3"
            subtitle="Phone Number"
            :title="riderData.phoneNumber"
          ></vs-list-item>
          <vs-list-item
            class="mb-3"
            subtitle="Date of Birth"
            :title="riderData.DOB"
          ></vs-list-item>
          <vs-list-item
            class="mb-3"
            subtitle="Location"
            :title="riderData.state + ', ' + riderData.country"
          ></vs-list-item>
          <!-- <vs-list-item
            class="mb-3"
            subtitle="Rider's App ID"
            title="EXL-1123"
          ></vs-list-item> -->
          <vs-list-item
            class="mb-3"
            subtitle="Policy Number"
            :title="riderData.policyNumber"
          ></vs-list-item>
          <vs-list-item
            class="mb-3"
            subtitle="Plate Number"
            :title="riderData.plateNumber"
          ></vs-list-item>
          <vs-list-item
            class="mb-3"
            subtitle="Online Status"
            :title="stringTxt(riderData.onlineStatus)"
          ></vs-list-item>
          <vs-list-item
            class="mb-3"
            subtitle="Trip Status"
            :title="stringTxt(riderData.tripStatus)"
          ></vs-list-item>
          <vs-list-item
            class="mb-3"
            subtitle="Member since"
            :title="riderData.createdAt"
          ></vs-list-item>
          <vs-list-item
            class="mb-3"
            subtitle="Verified Type"
            :title="riderData.verificationType"
          ></vs-list-item>
          <vs-list-item
            class="mb-3"
            :title="riderData.POI"
            subtitle="Proof of Identity"
          ></vs-list-item>
          <vs-list-item
            class="mb-3"
            :title="riderData.POIExpiringDate"
            subtitle="POI Expiry Date"
          ></vs-list-item>
        </vs-list>
      </div>
      <div class="col-md-4">
        <p class="px-3 mb-2 miniheading">Emergency Contact Details</p>
        <vs-list>
          <vs-list-item
            class="mb-3"
            :title="riderData.ECName"
            subtitle="Contact Name"
          ></vs-list-item>
          <vs-list-item
            class="mb-3"
            :title="riderData.ECEmail"
            subtitle="Email Address"
          ></vs-list-item>
          <vs-list-item
            class="mb-3"
            :title="riderData.ECPhone"
            subtitle="Phone Number"
          ></vs-list-item>
        </vs-list>
      </div>
      <div class="col-md-4">
        <p class="px-3 mb-2 miniheading">UPLOADED DOCUMENTS</p>
        <div class="con-example-images">
          <vs-images class="documentImg">
            <vs-image
              :src="`https://picsum.photos/400/400?image=2${index}`"
              v-for="(image, index) in 4"
              :key="index"
            />
          </vs-images>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["riderData"],
  methods: {
    stringTxt(data) {
      if (data) {
        return "Online";
      } else {
        return "Offline";
      }
    },
  },
};
</script>

<style lang="scss">
.con-example-images {
  max-height: 500px;
  overflow: auto;
}
.documentImg {
  ul {
    .vs-image {
      width: calc(50% - 12px);
      margin: 6px;
    }
  }
}
</style>