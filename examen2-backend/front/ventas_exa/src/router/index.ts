import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import ProductsView from '../views/ProductsView.vue';
import PurchaseHistoryView from '../views/PurchaseHistoryView.vue';
import AdminView from '../views/AdminView.vue';

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: LoginView },
  { path: '/register', component: RegisterView },
  { path: '/products', component: ProductsView },
  { path: '/history', component: PurchaseHistoryView },
  { path: '/admin', component: AdminView }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
