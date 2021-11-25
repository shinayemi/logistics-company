import Vue from "vue";
import router from "./router";
import store from "./store/store";
import Vuesax from "vuesax";

// Plugins
import "@fortawesome/fontawesome-free/css/all.min.css";
import "material-icons/iconfont/material-icons.css";
import "vuesax/dist/vuesax.css"; //Vuesax styles
import "@/assets/styles/tailwind.css";
import Trend from "vuetrend";
import VueCryptojs from "vue-cryptojs";
import Vue2Filters from "vue2-filters";
import moment from "moment";
import SocketIO from "socket.io-client";
import VueSweetalert2 from "vue-sweetalert2";

// mouting point for the whole app
import App from "@/App.vue";

// app config
Vue.use(Trend);
Vue.use(VueCryptojs);
Vue.use(Vue2Filters);
Vue.use(Vuesax, {
  theme: {
    colors: {
      primary: "#ff0101",
      success: "rgb(23, 201, 100)",
      danger: "rgb(242, 19, 93)",
      warning: "rgb(255, 130, 0)",
      dark: "rgb(36, 33, 69)"
    }
  }
});
Vue.use(VueSweetalert2);
Vue.prototype.$passPhrase = store.getters.passPhrase;
Vue.prototype.moment = moment;

// Mixins
Vue.mixin({
  methods: {
    openBtnLoading() {
      this.$vs.loading({
        background: this.backgroundLoading,
        color: this.colorLoading,
        container: this.$refs.loadableButton,
        scale: 0.45
      });
    },
    closeBtnLoading() {
      this.$vs.loading.close(this.$refs.loadableButton);
    }
  }
});

//check if token is set
let currentToken = localStorage.getItem("token");
if (currentToken === null) {
  localStorage.setItem("token", "playtoken"); // need to current this
}

let passPhrase = "exaltLogisticsProject@!!";
const options = { path: "/sio", transports: ["websocket"] }; //Options object to pass into SocketIO
let tkk = Vue.CryptoJS.AES.decrypt(
  localStorage.getItem("token"),
  passPhrase
).toString(Vue.CryptoJS.enc.Utf8);
// let type = "company";

const sck = SocketIO(
  `https://dev.api.logistics.churchesapp.com?token=${tkk}`,
  options
);
sck.on("connect", () => {
  console.log("socket connected");
});

// sck.on("listenPool", data => {
//   console.log(JSON.stringify(data));
// });

Vue.prototype.$ws = sck;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
