import Vue from "vue";
import Router from "vue-router";
import store from "./store/store.js";
// layouts

import Admin from "@/layouts/Admin.vue";
import Auth from "@/layouts/Auth.vue";

// views for Admin layout

import Dashboard from "@/views/admin/Dashboard.vue";
import Orders from "@/views/admin/Orders.vue";
import Order from "@/views/admin/Order.vue";
import OrdersPremium from "@/views/admin/OrdersPremium.vue";
import OrdersPool from "@/views/admin/OrdersPool.vue";
import Riders from "@/views/admin/Riders.vue";
import ViewRider from "@/views/admin/ViewRider.vue";
import RiderProfile from "@/views/admin/RiderProfile.vue";
import NewRiders from "@/views/admin/NewRiders.vue";
import Transactions from "@/views/admin/Transactions.vue";
import Invoice from "@/views/admin/Invoice.vue";
import Prices from "@/views/admin/Prices.vue";
import Settings from "@/views/admin/Settings.vue";

// views for Auth layout
import Login from "@/views/auth/Login.vue";

// views without layouts
// import Index from "@/views/Index.vue";

// routes

Vue.use(Router);

const router = new Router({
  mode: "history",
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      redirect: "/dashboard",
      component: Admin,
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: "/dashboard",
          component: Dashboard
        },
        {
          path: "/orders-pool-customized",
          component: Orders
        },
        {
          path: "/order/:id",
          component: Order
        },
        {
          path: "/orders-pool-premium",
          component: OrdersPremium
        },
        {
          path: "/orders-pool",
          component: OrdersPool
        },
        {
          path: "/riders",
          component: Riders
        },
        {
          path: "/riders/:id",
          component: ViewRider
        },
        {
          path: "/view-riders/:id",
          component: RiderProfile
        },
        {
          path: "/new-riders",
          component: NewRiders
        },
        {
          path: "/transactions",
          component: Transactions
        },
        {
          path: "/invoice",
          component: Invoice
        },
        {
          path: "/prices",
          component: Prices
        },
        {
          path: "/settings",
          component: Settings
        }
      ]
    },
    {
      path: "/admin",
      redirect: "/admin/dashboard",
      component: Admin,
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: "/admin/dashboard",
          component: Dashboard
        }
      ]
    },
    {
      path: "/auth",
      redirect: "/auth/login",
      component: Auth,
      meta: {
        requiresVisitor: true
      },
      children: [
        {
          path: "/auth/login",
          component: Login
        }
      ]
    },
    // {
    //   path: "/",
    //   component: Admin,
    // },
    { path: "*", redirect: "/" }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return {
        selector: to.hash
      };
    } else {
      return {
        x: 0,
        y: 0
      };
    }
  }
});

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById("loading-bg");
  if (appLoading) {
    appLoading.style.display = "none";
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.isLoggedIn) {
      next("/auth");
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.isLoggedIn) {
      next({
        path: "/"
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});

export default router;
