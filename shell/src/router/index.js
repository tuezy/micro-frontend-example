import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import CrmWapper from "../app/CrmWapper.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/crm', component: CrmWapper },
    { path: '/app2', component: () => import('app2/App2Component') },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
