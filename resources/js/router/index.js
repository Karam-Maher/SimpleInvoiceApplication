import { createRouter, createWebHashHistory } from "vue-router";
import invoiceIndex from "../components/invoices/index.vue";
import notFound from "../components/NotFound.vue";
import invoiceNew from "../components/invoices/new.vue";

const routes = [
    {
        path: "/",
        component: invoiceIndex,
    },
    {
        path: "/invoice/new",
        component: invoiceNew,
    },
    {
        path: "/:pathMatch(.*)*",
        component: notFound,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
