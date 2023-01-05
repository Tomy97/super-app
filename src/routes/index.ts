import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../layouts/Dashboard.vue";

const routes = createRouter({
  history: createWebHistory(""),
  routes: [
    {
      path: "",
      component: Dashboard,
      children: [
        {
          path: "",
          name: "Login",
          component: () => import("../views/LoginViews.vue")
        },
        {
          path: "home",
          name: "Home",
          component: () => import("../views/HomeViews.vue")
        }
      ]
    }
  ]
});

export default routes;
