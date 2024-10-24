
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
    {
        name: "home",
        path: "/",
        component: () =>  import('../pages/home.vue'),
    },
    {
        name: "app",
        path: "/app",
        component: () => import('../pages/app.vue'),
    },
    {
        name: " text",
        path: "/text",
        component: () => import('../pages/text.vue'),
    },
];const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: "active",
    routes,});
export default router;

