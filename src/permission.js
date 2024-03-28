import router from './router'
import { getToken } from '@/utils/auth' // get token from cookie

const whiteList = ['/login' , '/auth-redirect'] // 不重定向白名单

router.beforeEach(async (to, from, next) => {
  // 设置标题
  if (typeof to.meta.title === 'string') {
    document.title = to.meta.title || 'vue-demo'
  }

  // determine whether the user has logged in
  const hasToken = getToken()

  if (hasToken) {
    if (to.path === '/login') {
      // 如果已登录，请重定向到主页
      next({ path: '/' })
    } else {
      next()
      return
    }
    //  }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
    }
  }
})

