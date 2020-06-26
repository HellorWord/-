import Vue from "vue";
import VueRouter from "vue-router";
import login from "@/components/index/login.vue";
import header from "@/components/header/header.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component:login
  },
  {
    path: "/header",
    name: "header",
    component:header
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
