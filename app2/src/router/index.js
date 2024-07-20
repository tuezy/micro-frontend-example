import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import App2Component from "../components/App2Component.vue";

const routes = [
    { path: '/', component: App2Component },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;