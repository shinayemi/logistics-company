<template>
  <div class="container mx-auto px-4 h-full">
    <div class="flex content-center items-center justify-center h-full">
      <div class="w-full lg:w-4/12 px-4">
        <div
          class="relative flex flex-col min-w-0 break-words w-full mb-6 rounded-lg bg-white border-0"
        >
          <div class="rounded-t mb-0 px-6 py-6">
            <div class="text-center mb-3">
              <img
                :src="logo"
                alt=""
                height="40"
                class="align-middle mx-auto mb-5"
              />
              <h2 class="text-black font-bold" style="font-size: 36px">
                Sign in
              </h2>
            </div>
          </div>
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form @submit.prevent="submitLogin">
              <div class="relative w-full mb-5">
                <label
                  class="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Email
                </label>
                <input
                  type="email"
                  v-model="login.email"
                  class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                  placeholder="Email"
                />
              </div>

              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Password
                </label>
                <input
                  v-model="login.password"
                  type="password"
                  class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                  placeholder="Password"
                />
              </div>

              <div class="text-center mt-20">
                <button
                  class="vs-con-loading__container bg-red-600 text-white active:bg-red-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150 capitalize"
                  type="submit"
                  id="button-with-loading"
                  ref="loadableButton"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="flex flex-wrap mt-6 relative">
          <div class="w-1/2">
            <a href="javascript:void(0)" class="text-gray">
              <small>Forgot password?</small>
            </a>
          </div>
          <div class="w-1/2 text-right">
            <router-link to="/auth/register" class="text-gray">
              <small>Create new account</small>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import logo from "@/assets/img/custom/exalt-icon.svg";
import axios from "axios";
export default {
  data() {
    return {
      logo,
      login: {
        email: "",
        password: "",
      },
      backgroundLoading: "primary",
      colorLoading: "#fff",
    };
  },
  mounted() {},
  methods: {
    submitLogin() {
      this.openBtnLoading();
      let user = {
        email: this.login.email,
        password: this.login.password,
      };
      this.$store
        .dispatch("login", user)
        .then((resp) => {
          let token = resp.headers["x-auth-token"];
          token = this.CryptoJS.AES.encrypt(token, this.$passPhrase).toString();
          localStorage.setItem("token", token);
          axios.defaults.headers.common["Authorization"] = token;
          this.$store.commit("auth_success", token);

          let uToken = resp.headers["x-auth-token"];
          this.$store
            .dispatch("getUser", uToken)
            .then((resp) => {
              this.closeBtnLoading();
              let encrytUser = this.CryptoJS.AES.encrypt(
                JSON.stringify(resp.data),
                this.$passPhrase
              ).toString();
              localStorage.setItem("user", encrytUser);
              this.$router.push("/");
              this.$vs.notify({
                title: "Login",
                text: "Successfully logged in",
                color: "success",
                icon: "verified_user",
                position: "bottom-center",
              });
            })
            .catch(() => {
              this.closeBtnLoading();
            });
        })
        .catch((err) => {
          this.closeBtnLoading();
          if (err.response) {
            this.$vs.notify({
              title: "Login",
              text: err.response.data.msg,
              color: "warning",
              icon: "error",
              position: "bottom-center",
            });
          } else {
            this.$vs.notify({
              title: "Login",
              text: "Unable to Login",
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
