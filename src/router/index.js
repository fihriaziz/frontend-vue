import { createWebHistory, createRouter } from "vue-router";
import HomePage from "../views/auth/HomePage.vue";
import RegisterPage from "../views/auth/RegisterPage.vue";
import ForgotPassword from "../views/auth/ForgotPassword.vue";
import UsersPage from "../views/auth/UsersPage.vue";
import ResetPassword from "../views/auth/ResetPassword.vue";
import CreatePage from "../views/user/CreatePage.vue";
import LoginPage from "../views/auth/LoginPage.vue";

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
    path: "/users",
    name: "UsersPage",
    component: UsersPage,
  },
  {
    path: "/create",
    name: "CreatePage",
    component: CreatePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
