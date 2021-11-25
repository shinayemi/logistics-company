import Vue from "vue";
import VueCryptojs from "vue-cryptojs";
Vue.use(VueCryptojs);

export const getters = {
  onlineRiders: state => state.onlineRiders,
  imageBaseUrl: state => state.imageBaseUrl,
  localOrderPool: state => state.localOrderPool,
  addRider: state => state.addRider,
  currentOrderEntryId: state => state.currentOrderEntryId,
  assignRider: state => state.assignRider,
  viewTransaction: state => state.viewTransaction,
  addAdmin: state => state.addAdmin,
  changePassword: state => state.changePassword,
  isLoggedIn: state => !!state.token,
  authStatus: state => state.status,
  passPhrase: state => state.passPhrase,
  user: state => state.user,
  pgLoading: state => state.pgLoading,
  mapToken: state => state.mapToken,
  // token: (state) => state.token,
  token: state => {
    let dToken = Vue.CryptoJS.AES.decrypt(
      state.token,
      state.passPhrase
    ).toString(Vue.CryptoJS.enc.Utf8);

    return dToken;
  }
};
