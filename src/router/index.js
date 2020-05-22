import Vue from "vue";
import VueRouter from "vue-router";
import AppRoutes from "@/view/routes.js";

Vue.use(VueRouter);

const routes = [...AppRoutes];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
