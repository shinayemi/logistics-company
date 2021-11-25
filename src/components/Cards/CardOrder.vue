<template>
  <div
    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16"
  >
    <div class="px-6">
      <div class="flex flex-wrap justify-center">
        <div class="w-full px-4 flex justify-center">
          <div class="relative">
            <img
              alt="order"
              :src="team2"
              class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
            />
          </div>
        </div>
        <div class="w-full px-4 text-center mt-8">
          <div class="flex justify-center py-4 lg:pt-4 pt-8"></div>
        </div>
      </div>
      <div class="text-center mt-12">
        <h3
          class="text-xl font-semibold leading-normal mb-2 text-gray-800 mb-2"
        >{{ orderDataProp.source | capitalize }}</h3>
        <div class="text-sm leading-normal mt-0 mb-8 text-gray-500 font-bold uppercase">
          <i class="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
          {{ orderDataProp.type }} |
          <span
            v-if="orderAccepted"
            class="orderAccepted text-green-500"
          >
            Accepted
            <i class="fas fa-circle text-green-500 mr-2"></i>
          </span>
          <span v-else class="orderNotAccepted text-red-500">Not Accepted</span>
        </div>
      </div>
      <div class="block w-full overflow-x-auto">
        <div>
          <div>
            <div class="Index_topBar__xU0QJ">
              <div>
                <h2 style="font-size: 2em; font-weight: bold">Order</h2>
                <p>{{createdAt}}</p>
              </div>
            </div>
            <div>
              <br />
              <button
                style="margin-left: 75%"
                class="bg-primary text-capitalize text-white active:bg-green-600 font-bold text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                @click="assignRider()"
              >Assign Dispatcher</button>

              <div class="Index_transInfo__3IMa1" style="border: none;">
                <h2>User Info</h2>
              </div>
              <div class="Index_transInfo__3IMa1">
                <h3>User's Name</h3>
                <p>{{ orderDataProp.name }}</p>
              </div>
              <div class="Index_transInfo__3IMa1">
                <h3>User's Email</h3>
                <p>{{ orderDataProp.email }}</p>
              </div>
              <div class="Index_transInfo__3IMa1">
                <h3>User's Phone Number</h3>
                <p>{{ orderDataProp.countryCode }} {{ orderDataProp.phoneNumber }}</p>
              </div>
              <div class="Index_transInfo__3IMa1">
                <h3>State</h3>
                <p>{{ orderDataProp.state }}</p>
              </div>
              <div class="Index_transInfo__3IMa1">
                <h3>Country</h3>
                <p>{{ orderDataProp.country }}</p>
              </div>
            </div>
            <div>
              <div class="Index_transInfo__3IMa1" style="border: none;">
                <h2>Order(s) Info</h2>
              </div>
              <div class="acc-kontainer">
                <div v-for="o in orderDataProp.orders" :key="o.transaction">
                  <input type="radio" name="acc" :id="o.transaction" checked />
                  <label :for="o.transaction">
                    <i class="fas fa-boxes"></i>
                    {{o.itemName}}
                  </label>
                  <div class="acc-body">
                    <img
                      :src="imageBaseUrl + orderDataProp.img"
                      alt
                      width="100"
                      style="border-radius: 15px"
                    />
                    <div class="Index_transInfo__3IMa1">
                      <h3>orderId</h3>
                      <p>{{ o.orderId }}</p>
                    </div>
                    <div class="Index_transInfo__3IMa1">
                      <h3>status</h3>
                      <p>{{ o.status }}</p>
                    </div>
                    <div class="Index_transInfo__3IMa1">
                      <h3>transaction</h3>
                      <p>{{ o.transaction }}</p>
                    </div>
                    <div class="Index_transInfo__3IMa1">
                      <h3>delivery Address</h3>
                      <p>{{ o.deliveryAddress }}</p>
                    </div>
                    <div class="Index_transInfo__3IMa1">
                      <h3>pickup Address</h3>
                      <p>{{ o.pickupAddress }}</p>
                    </div>
                    <div class="Index_transInfo__3IMa1">
                      <h3>estimated Travel duration</h3>
                      <p>{{ o.estimatedTravelduration }}</p>
                    </div>
                    <!-- <div class="Index_transInfo__3IMa1">
                      <h3>estimated Travel duration</h3>
                      <p>{{ o.estimatedTravelduration }}</p>
                    </div>-->
                    <div class="Index_transInfo__3IMa1">
                      <h3>estimated Distance</h3>
                      <p>{{ o.estimatedTravelduration }}</p>
                    </div>
                    <div class="Index_transInfo__3IMa1">
                      <h3>estimated Cost</h3>
                      <p>{{ o.estimatedCost }}</p>
                    </div>
                    <div class="Index_transInfo__3IMa1">
                      <h3>name</h3>
                      <p>{{ o.name }}</p>
                    </div>
                    <div class="Index_transInfo__3IMa1">
                      <h3>email</h3>
                      <p>{{ o.email }}</p>
                    </div>
                    <div class="Index_transInfo__3IMa1">
                      <h3>phone</h3>
                      <p>{{ o.countryCode }} {{ o.phoneNumber }}</p>
                    </div>
                  </div>
                </div>
                <!-- <div>
                  <input type="radio" name="acc" id="acc2" />
                  <label for="acc2">
                    <i class="fas fa-boxes"></i> What am I interesting for?
                  </label>
                  <div
                    class="acc-body"
                  >All the thing about Technology! Informatic technology especially.</div>
                </div>
                <div>
                  <input type="radio" name="acc" id="acc3" />
                  <label for="acc3">
                    <i class="fas fa-boxes"></i> What is my hobby?
                  </label>
                  <div class="acc-body">
                    i love music
                    <i class="fa fa-headphones"></i>, watching movie
                    <i class="fa fa-film"></i>, Designing maybe
                    <i class="fa fa-code"></i>
                  </div>
                </div>-->
              </div>
            </div>
            <div>
              <div class="Index_transInfo__3IMa1" style="border: none;">
                <h2>Transaction Info</h2>
              </div>
              <div class="Index_transInfo__3IMa1">
                <h3>Ref Number</h3>
                <p>{{orderDataProp.transaction.txRef}}</p>
              </div>
              <div class="Index_transInfo__3IMa1">
                <h3>Amount</h3>
                <p>
                  <span>₦{{orderDataProp.transaction.amount}}</span>
                </p>
              </div>
              <div class="Index_transInfo__3IMa1">
                <h3>Status</h3>
                <p>{{orderDataProp.transaction.status}}</p>
              </div>
              <div class="Index_transInfo__3IMa1">
                <h3>Payment Method</h3>
                <p>{{orderDataProp.transaction.paymentMethod}}</p>
              </div>
              <div class="Index_transInfo__3IMa1">
                <h3>Rider</h3>
                <p>{{orderDataProp.transaction.rider}}</p>
              </div>
              <div class="Index_transInfo__3IMa1">
                <h3>Approved At</h3>
                <p>{{orderDataProp.transaction.approvedAt}}</p>
              </div>
              <div class="Index_transInfo__3IMa1">
                <h3>Note</h3>
                <p>{{orderDataProp.transaction.note}}</p>
              </div>
            </div>
            <!-- <div>
              <div class="Index_transInfo__3IMa1" style="border: none;">
                <h2>Company Info</h2>
              </div>
              <div class="Index_transInfo__3IMa1">
                <h3>Company Name</h3>
                <p>Cowbell</p>
              </div>
              <div class="Index_transInfo__3IMa1">
                <h3>Company Email</h3>
                <p>test@test.com</p>
              </div>
              <div class="Index_transInfo__3IMa1">
                <h3>Company Phone Number</h3>
                <p>+2348174857384</p>
              </div>
              <div class="Index_transInfo__3IMa1">
                <h3>Company Address</h3>
                <p>libero lobortis imperdiet. Nullam mollis convallis ipsum,</p>
              </div>
            </div>-->
          </div>
        </div>

        <br />
        <br />
        <button
          style="margin-left: 75%"
          class="bg-primary text-capitalize text-white active:bg-green-600 font-bold text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          @click="assignRider()"
        >Assign Dispatcher</button>

        <!-- <button
          style="margin-left: 77%"
          class="bg-primary text-capitalize text-white active:bg-green-600 font-bold text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          :disabled="orderAccepted"
          v-bind:class="{
          disabledButton: orderAccepted,
          notDisabledButton: !orderAccepted
          }"
          @click="assignRider()"
        >Assign Dispatcher</button>-->
      </div>
    </div>
  </div>
</template>
<script>
import team2 from "@/assets/img/order.jpg";

export default {
  props: ["orderDataProp"],
  mounted() {},
  created: function() {
    this.doOp();
    this.getOnlineRiders();
  },
  data() {
    return {
      orderData: this.orderDataProp,
      team2,
      orderAccepted: true,
      createdAt: "",
      imageBaseUrl: this.$store.getters.imageBaseUrl
    };
  },
  methods: {
    assignRider() {
      this.$store.commit("assignRider", true);
    },
    doOp() {
      if (this.orderDataProp !== null) {
        if (this.orderDataProp.status === "companyAccepted") {
          this.orderAccepted = true;
        } else {
          this.orderAccepted = false;
        }

        this.createdAt = new Date(this.orderDataProp.createdAt);
        const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(
          this.createdAt
        );
        const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(
          this.createdAt
        );
        const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(
          this.createdAt
        );

        const hour = new Intl.DateTimeFormat("en", {
          hour: "numeric",
          hour12: false
        }).format(this.createdAt);

        const min = new Intl.DateTimeFormat("en", { minute: "numeric" }).format(
          this.createdAt
        );

        const sec = new Intl.DateTimeFormat("en", { second: "numeric" }).format(
          this.createdAt
        );
        this.createdAt = `${da}-${mo}-${ye} ${hour}:${min}:${sec}`;
        // console.log(`${da}-${mo}-${ye}`);
      }
    },
    getOnlineRiders() {
      let id = this.$store.getters.currentOrderEntryId;
      this.$store
        .dispatch("getCompanyOnlineRiders", id)
        .then(resp => {
          this.$store.commit("addOnlineRiders", resp.data);
        })
        .catch(() => {});
    }
  }
};
</script>

<style scoped>
.Index_topBar__xU0QJ {
  display: flex;
  align-items: center;
  padding: 10px 0;
  font-family: Manrope;
  font-size: 14px;
  border-bottom: 3px solid #707070;
}

.singleData {
  border-bottom: 0.1px dotted #333333;
}

.orderField {
  width: 200px;
}

.disabledButton {
  opacity: 0.3;
  cursor: not-allowed;
}

.notDisabledButton {
  opacity: 0.9;
  cursor: auto;
}

.orderValue {
  margin-left: 2%;
  width: 300px;
}

.orderAccepted {
  font-weight: bold;
}

.orderNotAccepted {
  font-weight: bold;
}

.Index_transInfo__3IMa1 h2 {
  font-family: Manrope;
  font-size: 17px;
  font-weight: 800;
  color: #d11a1a;
  margin: 0;
  margin-top: 2%;
}
.Index_transInfo__3IMa1 {
  margin: 15px 0;
  padding: 10px 0;
  border-bottom: 1px solid #707070;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

/* Style the buttons that are used to open and close the accordion panel */
.accordion {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  transition: 0.4s;
}

/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
.active,
.accordion:hover {
  background-color: #ccc;
}

/* Style the accordion panel. Note: hidden by default */
.panel {
  padding: 0 18px;
  background-color: white;
  display: none;
  overflow: hidden;
}

h1 {
  color: #333;
  text-align: center;
}
/*--------Accordion-------*/
.acc-kontainer {
  width: 100%;
  margin: auto;
}
.acc-kontainer .acc-body {
  width: 98%;
  width: calc(100% - 20px);
  margin: 0 auto;
  height: 0;
  color: rgba(0, 0, 0, 0);
  background-color: rgba(255, 255, 255, 0.2);
  line-height: 28px;
  padding: 0 20px;
  box-sizing: border-box;
  transition: 0.5s;
}

.acc-kontainer label {
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: block;
  padding: 15px;
  width: 100%;
  color: #333;
  font-weight: 400;
  box-sizing: border-box;
  z-index: 100;
}

.acc-kontainer input {
  display: none;
}

.acc-kontainer label:before {
  font-family: "FontAwesome";
  /* content: "\f067"; */
  content: "+";
  font-weight: bolder;
  float: right;
}

.acc-kontainer input:checked + label {
  background-color: rgba(255, 255, 255, 0.15);
}

.acc-kontainer input:checked + label:before {
  font-family: "FontAwesome";
  /* content: "\f00d"; */
  transition: 0.5s;
}

.acc-kontainer input:checked ~ .acc-body {
  height: auto;
  color: #333;
  font-size: 16px;
  padding: 20px;
  transition: 0.5s;
}

h3 {
  text-transform: capitalize;
}
</style>


