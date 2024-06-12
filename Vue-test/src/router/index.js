import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/tariffs',
      name: 'tariffs',
      component: () => import('../views/Tariffs.vue'),
      meta: {
        page: {
          title: 'Тарифы'
        }
      }
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../views/Tariffs.vue'),
      meta: {
        page: {
          title: 'Контакты'
        }
      }
    },
    {
      path: '/entry',
      name: 'entry',
      component: () => import('../views/Tariffs.vue'),
      meta: {
        page: {
          title: 'Вход'
        }
      }
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import('../views/Tariffs.vue'),
      meta: {
        page: {
          title: 'Регистрация'
        }
      }
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('../views/Detail.vue'),
    }
  ]
})

export default router
