import { createWebHistory, createRouter } from "vue-router";
import HomePage from "../views/auth/HomePage.vue";
import LoginPage from "../views/auth/LoginItem.vue";
import RegisterPage from "../views/auth/RegisterPage.vue";
import ForgotPassword from "../views/auth/ForgotPassword.vue";
import ProfilePage from "../views/auth/ProfilePage.vue";
import ResetPassword from "../views/auth/ResetPassword.vue";

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
    path: "/forgot-password",
    name: "forgot-password",
    component: ForgotPassword,
  },
  {
    path: "/reset",
    name: "ResetPassword",
    component: ResetPassword,
  },
  {
    path: "/profile",
    name: "ProfilPage",
    component: ProfilePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
