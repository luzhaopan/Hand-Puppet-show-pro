import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout,
      redirect: '/home/index',
      children: [
        {
          path: '/home/index',
          name: 'Home',
          component: () => import('@/views/home/index.vue'),
          meta: { title: 'Home', icon: 'House' }
        }
      ]
    },
    {
      path: '/explore',
      name: 'explore',
      component: Layout,
      redirect: '/explore/index',
      children: [
        {
          path: '/explore/index',
          name: 'Explore',
          component: () => import('@/views/explore/index.vue'),
          meta: { title: 'Explore', icon: '' }
        }
      ]
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: Layout,
      redirect: '/feedback/index',
      children: [
        {
          path: '/feedback/index',
          name: 'Feedback',
          component: () => import('@/views/feedback/index.vue'),
          meta: { title: 'Feedback', icon: '' }
        }
      ]
    },
    {
      path: '/interactive',
      name: 'interactive',
      component: Layout,
      redirect: '/interactive/index',
      children: [
        {
          path: '/interactive/index',
          name: 'Interactive',
          component: () => import('@/views/interactive/index.vue'),
          meta: { title: 'Interactive', icon: '' }
        }
      ]
    },
    {
      path: '/introduce',
      name: 'introduce',
      component: Layout,
      redirect: '/introduce/index',
      children: [
        {
          path: '/introduce/index',
          name: 'Introduce',
          component: () => import('@/views/introduce/index.vue'),
          meta: { title: 'Introduce', icon: '' }
        }
      ]
    },
    {
      path: '/modern-games',
      name: 'modern-games',
      component: Layout,
      redirect: '/modern-games/index',
      children: [
        {
          path: '/modern-games/index',
          name: 'ModernGames',
          component: () => import('@/views/modern-games/index.vue'),
          meta: { title: 'ModernGames', icon: '' }
        }
      ]
    },
    {
      path: '/opera-performers',
      name: 'opera-performers',
      component: Layout,
      redirect: '/opera-performers/index',
      children: [
        {
          path: '/opera-performers/index',
          name: 'OperaPerformers',
          component: () => import('@/views/opera-performers/index.vue'),
          meta: { title: 'OperaPerformers', icon: '' }
        }
      ]
    },
    {
      path: '/shop',
      name: 'shop',
      component: Layout,
      redirect: '/shop/index',
      children: [
        {
          path: '/shop/index',
          name: 'Shop',
          component: () => import('@/views/shop/index.vue'),
          meta: { title: 'Shop', icon: '' }
        }
      ]
    },
    {
      path: '/traditional-games',
      name: 'traditional-games',
      component: Layout,
      redirect: '/traditional-games/index',
      children: [
        {
          path: '/traditional-games/index',
          name: 'TraditionalGames',
          component: () => import('@/views/traditional-games/index.vue'),
          meta: { title: 'TraditionalGames', icon: '' }
        }
      ]
    },
    {
      path: '/login',
      hidden: true,
      component: () => import('@/views/login/index.vue')
    }
  ]
})

export default router
