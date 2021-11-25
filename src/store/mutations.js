export const mutations = {
  addOnlineRiders(state, data) {
    // alert("Online riders");
    // alert(data);
    state.onlineRiders = data;
  },
  addCurrentOrderEntryId(state, id) {
    state.currentOrderEntryId = id;
  },
  addLocalOrderPool(state, localOrderPool) {
    state.localOrderPool = localOrderPool;
  },
  addRider(state, addRider) {
    state.addRider = addRider;
  },
  assignRider(state, assignRider) {
    state.assignRider = assignRider;
  },
  viewTransaction(state, viewTransaction) {
    state.viewTransaction = viewTransaction;
  },
  addAdmin(state, addAdmin) {
    state.addAdmin = addAdmin;
  },
  changePassword(state, changePassword) {
    state.changePassword = changePassword;
  },
  auth_request(state) {
    state.status = "loading";
  },
  auth_success(state, token, user) {
    state.status = "success";
    state.token = token;
    state.user = user;
  },
  auth_error(state) {
    state.status = "error";
  },
  logout(state) {
    state.status = "";
    state.token = "";
  },
  pgLoading(state, isLoading) {
    if (isLoading) {
      state.pgLoading = true;
    } else {
      state.pgLoading = false;
    }
  },
  loading(state, isLoading) {
    if (isLoading) {
      state.isLoading = true;
    } else {
      state.isLoading = false;
    }
  }
};
