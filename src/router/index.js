import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue";
import About from "@/views/About.vue"; // ✅ import About

const routes = [
  {path: "/", name: "Home", component: Home},
  {path: "/about", name: "About", component: About}, // ✅ new route
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
