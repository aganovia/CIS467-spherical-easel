import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Easel from "@/views/Easel.vue";
import Login from "@/views/Login.vue";
import ProfilePicture from "@/views/ProfilePicture.vue";
// import ConstructionLoader from "@/components/ConstructionLoader.vue";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Easel
  },
  {
    path: "/account",
    name: "Account",
    component: Login
  },
  {
    /* Use this path to automatically load a saved construction */
    path: "/construction/:documentId",
    name: "",
    component: Easel,
    props: true
  },
  {
    path: "/settings",
    name: "Settings",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Settings.vue"),
    children: [
      {
        path: "/",
        component: () => import("@/views/ProfilePicture.vue")
      },
      {
        name: "PhotoCapture",
        path: "photocapture",
        component: () => import("@/views/PhotoCapture.vue")
      },
      {
        name: "PhotoCropper",
        path: "photocropper",
        component: () => import("@/views/PhotoCropper.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
