const AuthRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../../views/auth/Auth.vue'),
    meta: { requiresAuth: false },
    
  },
]

export default AuthRoutes