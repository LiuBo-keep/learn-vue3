import { LOGIN_TOKEN } from '@/global/constants'
import { localCache } from '@/utils/cache'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  // 映射关系：path => component
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/login',
      component: () => import('../views/login/Login.vue')
    },
    {
      path: '/main',
      component: () => import('../views/main/Main.vue')
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('../views/not-fount/NotFont.vue')
    }
  ]
})

// 导航守卫
// 参数：to 跳转的位置/from 从哪里跳转过来
// 返回值： 返回值决定导航的路径
router.beforeEach((to, form) => {
  // 当跳转的不是登录页时检查是否登录过
  const token = localCache.getCache(LOGIN_TOKEN)
  if (to.path != '/login' && !token) {
    return '/login'
  }
})

export default router
