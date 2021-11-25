export const state = {
  currentOrderEntryId: null,
  onlineRiders: null,
  addRider: false,
  assignRider: false,
  viewTransaction: false,
  addAdmin: false,
  changePassword: false,
  pgLoading: false,
  token: localStorage.getItem("token") || "",
  user: localStorage.getItem("user") || "",
  passPhrase: "exaltLogisticsProject@!!",
  localOrderPool: [],
  imageBaseUrl: "https://d367c9pgq4rf5n.cloudfront.net/",
  mapToken:
    "pk.eyJ1IjoiaG9ycGV5IiwiYSI6ImNqZXNrOHgweDN3ZHgycW1lNGd0MzY2NG8ifQ.iE72uu46mll2LzAIP2KRQA"
};
