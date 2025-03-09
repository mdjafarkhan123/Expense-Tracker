import { createRouter, createMemoryHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Application from "../pages/Application.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/app", component: Application },
];

const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

export default router;
