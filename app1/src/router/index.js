import { createRouter, createWebHistory } from 'vue-router';
import App1Component from "../components/App1Component.vue";

const routes = [
    { path: '/', component: App1Component },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;