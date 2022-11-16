import { createWebHistory, createRouter } from "vue-router";
import HomePage from "../components/HomePage.vue";
import LoginPage from "../views/auth/LoginItem.vue";
import RegisterPage from "../views/auth/RegisterPage.vue";
import ForgotPassword from "../views/auth/ForgotPassword.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/register",
    name: "RegisterPage",
    component: RegisterPage,
  },
  {
    path: "/forgot",
    name: "ForgotPassword",
    component: ForgotPassword,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
