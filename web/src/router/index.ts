import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import RecipeDetails from '../views/RecipeDetails.vue';

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { left: 0, top: 0 };
  },
  routes: [
    { path: '/', redirect: '/home' },
    {
      name: 'home',
      path: '/home',
      component: Home,
    },
    {
      name: 'recipe',
      path: '/recipe/:id',
      component: RecipeDetails,
    },
    { path: '/:notFound(.*)', redirect: 'home' },
  ],
});

export default router;
