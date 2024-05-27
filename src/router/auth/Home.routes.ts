const HomeRoutes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../../views/Home.vue'),
    meta: { requiresAuth: false },

  },
]

export default HomeRoutes