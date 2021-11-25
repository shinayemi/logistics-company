import axios from "axios";

const baseURL = "https://dev.api.logistics.churchesapp.com/api/v1/";
const userURL = "https://dev.api.user.churchesapp.com/api/v1/";

export const actions = {
  getAllDistancePrice({ dispatch, getters }) {
    return new Promise((resolve, reject) => {
      const userToken = getters.token;
      axios({
        url: `${baseURL}company/distance-price`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": userToken
        }
      })
        .then(resp => {
          resolve(resp.data);
        })
        .catch(err => {
          if (err.response) {
            if (
              err.response.status === 401 ||
              err.response.status === 406 ||
              err.response.status === 403
            ) {
              dispatch("logout");
            }
          }
          reject(err);
        });
    });
  },
  getOrderPool({ dispatch, getters }) {
    return new Promise((resolve, reject) => {
      const userToken = getters.token;
      axios({
        url: `${baseURL}entry/pool`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": userToken
        }
      })
        .then(resp => {
          resolve(resp.data);
        })
        .catch(err => {
          if (err.response) {
            if (
              err.response.status === 401 ||
              err.response.status === 406 ||
              err.response.status === 403
            ) {
              dispatch("logout");
            }
          }
          reject(err);
        });
    });
  },
  updateSetting({ getters, dispatch }, setting) {
    return new Promise((resolve, reject) => {
      const userToken = getters.token;

      axios({
        url: `${baseURL}company/setting`,
        data: setting,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": userToken
        }
      })
        .then(resp => {
          resolve(resp);
        })
        .catch(err => {
          if (err.response) {
            if (
              err.response.status === 401 ||
              err.response.status === 406 ||
              err.response.status === 403
            ) {
              dispatch("logout");
            }
          }

          reject(err);
        });
    });
  },
  getSettings({ dispatch, getters }) {
    return new Promise((resolve, reject) => {
      const userToken = getters.token;
      axios({
        url: `${baseURL}company/setting`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": userToken
        }
      })
        .then(resp => {
          resolve(resp.data);
        })
        .catch(err => {
          if (err.response) {
            if (
              err.response.status === 401 ||
              err.response.status === 406 ||
              err.response.status === 403
            ) {
              dispatch("logout");
            }
          }
          reject(err);
        });
    });
  },
  deleteRider({ dispatch, getters }, riderID) {
    return new Promise((resolve, reject) => {
      const userToken = getters.token;
      axios({
        url: `${baseURL}company/riders/${riderID}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": userToken
        }
      })
        .then(resp => {
          resolve(resp.data);
        })
        .catch(err => {
          if (err.response) {
            if (
              err.response.status === 401 ||
              err.response.status === 406 ||
              err.response.status === 403
            ) {
              dispatch("logout");
            }
          }
          reject(err);
        });
    });
  },
  getRiderDetails({ dispatch, getters }, riderID) {
    return new Promise((resolve, reject) => {
      const userToken = getters.token;
      axios({
        url: `${baseURL}company/riders/${riderID}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": userToken
        }
      })
        .then(resp => {
          resolve(resp.data);
        })
        .catch(err => {
          if (err.response) {
            if (
              err.response.status === 401 ||
              err.response.status === 406 ||
              err.response.status === 403
            ) {
              dispatch("logout");
            }
          }
          reject(err);
        });
    });
  },
  addRider({ getters, dispatch }, rider) {
    return new Promise((resolve, reject) => {
      let nRider = new FormData();

      nRider.append("name", rider.name);
      nRider.append("email", rider.email);
      nRider.append("DOB", rider.DOB);
      nRider.append("POI", rider.POI);
      nRider.append("POIExpiringDate", rider.POIExpiringDate);
      nRider.append("policyNumber", rider.policyNumber);
      nRider.append("phoneNumber", rider.phoneNumber);
      nRider.append("plateNumber", rider.plateNumber);
      nRider.append("ECName", rider.ECName);
      nRider.append("ECPhone", rider.ECPhone);
      nRider.append("ECEmail", rider.ECEmail);
      nRider.append("img", rider.img);
      nRider.append("address", rider.address);
      nRider.append("vehicle", rider.vehicle);
      nRider.append("country", rider.country);
      nRider.append("state", rider.state);

      const userToken = getters.token;

      axios({
        url: `${baseURL}company/riders`,
        data: nRider,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": userToken
        }
      })
        .then(resp => {
          resolve(resp);
        })
        .catch(err => {
          if (err.response) {
            if (
              err.response.status === 401 ||
              err.response.status === 406 ||
              err.response.status === 403
            ) {
              dispatch("logout");
            }
          }

          reject(err);
        });
    });
  },

  getRiders({ dispatch, getters }) {
    return new Promise((resolve, reject) => {
      const userToken = getters.token;
      axios({
        url: `${baseURL}company/riders`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": userToken
        }
      })
        .then(resp => {
          resolve(resp.data);
        })
        .catch(err => {
          if (err.response) {
            if (
              err.response.status === 401 ||
              err.response.status === 406 ||
              err.response.status === 403
            ) {
              dispatch("logout");
            }
          }
          reject(err);
        });
    });
  },
  getCompanyOnlineRiders({ dispatch, getters }, id) {
    return new Promise((resolve, reject) => {
      const userToken = getters.token;
      axios({
        url: `${baseURL}entry/company/online/${id}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": userToken
        }
      })
        .then(resp => {
          // alert(resp);
          // alert(resp);
          resolve(resp.data);
        })
        .catch(err => {
          // alert(err);

          if (err.response) {
            if (
              err.response.status === 401 ||
              err.response.status === 406 ||
              err.response.status === 403
            ) {
              dispatch("logout");
            }
          }
          reject(err);
        });
    });
  },
  assignRiderToOrder({ dispatch, getters }, id) {
    return new Promise((resolve, reject) => {
      const userToken = getters.token;
      axios({
        url: `${baseURL}entry/rider-assign/${id}`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": userToken
        }
      })
        .then(resp => {
          resolve(resp.data);
        })
        .catch(err => {
          if (err.response) {
            if (
              err.response.status === 401 ||
              err.response.status === 406 ||
              err.response.status === 403
            ) {
              dispatch("logout");
            }
          }
          reject(err);
        });
    });
  },
  getOrder({ dispatch, getters }, id) {
    return new Promise((resolve, reject) => {
      const userToken = getters.token;
      axios({
        url: `${baseURL}entry/${id}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": userToken
        }
      })
        .then(resp => {
          resolve(resp.data);
        })
        .catch(err => {
          if (err.response) {
            if (
              err.response.status === 401 ||
              err.response.status === 406 ||
              err.response.status === 403
            ) {
              dispatch("logout");
            }
          }
          reject(err);
        });
    });
  },
  acceptEntry({ dispatch, getters }, orderId) {
    return new Promise((resolve, reject) => {
      const userToken = getters.token;
      axios({
        url: `${baseURL}entry/company/accept/${orderId}`,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": userToken
        }
      })
        .then(resp => {
          resolve(resp.data);
        })
        .catch(err => {
          if (err.response) {
            if (
              err.response.status === 401 ||
              err.response.status === 406 ||
              err.response.status === 403
            ) {
              dispatch("logout");
            }
          }

          reject(err);
        });
    });
  },
  getStates({ dispatch }, country) {
    return new Promise((resolve, reject) => {
      axios({
        url: `${userURL}country/${country}`,
        method: "GET"
      })
        .then(resp => {
          resolve(resp.data);
        })
        .catch(err => {
          if (err.response) {
            if (
              err.response.status === 401 ||
              err.response.status === 406 ||
              err.response.status === 403
            ) {
              dispatch("logout");
            }
          }
          reject(err);
        });
    });
  },

  getCountries({ dispatch }) {
    return new Promise((resolve, reject) => {
      axios({
        url: `${userURL}country`,
        method: "GET"
      })
        .then(resp => {
          resolve(resp.data);
        })
        .catch(err => {
          if (err.response) {
            if (
              err.response.status === 401 ||
              err.response.status === 406 ||
              err.response.status === 403
            ) {
              dispatch("logout");
            }
          }
          reject(err);
        });
    });
  },

  getVehicles({ dispatch, getters }) {
    return new Promise((resolve, reject) => {
      const userToken = getters.token;
      axios({
        url: `${baseURL}admin/vehicle`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": userToken
        }
      })
        .then(resp => {
          resolve(resp.data);
        })
        .catch(err => {
          if (err.response) {
            if (
              err.response.status === 401 ||
              err.response.status === 406 ||
              err.response.status === 403
            ) {
              dispatch("logout");
            }
          }

          reject(err);
        });
    });
  },

  getUser({ dispatch }, token) {
    return new Promise((resolve, reject) => {
      const userToken = token;
      axios({
        url: `${baseURL}company/me`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": userToken
        }
      })
        .then(resp => {
          resolve(resp.data);
        })
        .catch(err => {
          if (err.response) {
            if (
              err.response.status === 401 ||
              err.response.status === 406 ||
              err.response.status === 403
            ) {
              dispatch("logout");
            }
          }

          reject(err);
        });
    });
  },
  login({ commit }, user) {
    return new Promise((resolve, reject) => {
      commit("auth_request");
      axios({
        url: `${baseURL}auth/company`,
        data: user,
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(resp => {
          resolve(resp);
        })
        .catch(err => {
          localStorage.removeItem("token");
          reject(err);
        });
    });
  },
  logout({ commit }) {
    return new Promise(resolve => {
      commit("logout");
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      delete axios.defaults.headers.common["Authorization"];
      resolve();
    });
  }
};
