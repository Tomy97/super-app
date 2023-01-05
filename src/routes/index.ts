import { createRouter, createWebHistory } from "vue-router";
import Dasboard from "../layouts/Dashboard.vue";
import DashboardForm from "../layouts/DashboardForm.vue";

const routes = createRouter({
  history: createWebHistory(""),
  routes: [
    {
      path: "",
      component: DashboardForm,
      children: [
        {
          path: "",
          name: "Login",
          component: () => import("../views/LoginViews.vue")
        }
      ]
    },
    {
      path: "/",
      component: Dasboard,
      children: [
        {
          path: "",
          name: "Home",
          component: () => import("../views/HomeViews.vue")
        }
      ]
    }
  ]
});

export default routes;
