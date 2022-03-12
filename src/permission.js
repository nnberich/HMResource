import router from './router/index'
import store from '@/store'
// 路由守卫
// 全局（访问所有路由）
// 设置白名单
const whiteList = ['/login', '/404']
router.beforeEach((to, from, next) => {
// 设置token
  const token = store.getters.token
  // 判断是否有token
  if (token) {
    // 2.有token

    if (to.path === '/login') {
      // 2.1 为登录页 跳转到主页 next（/）
      next('/')
    } else {
      // 2.2 不为登录页，禁止跳到登录页
      store.dispatch('user/getUserInfo')
      next()
    }
  } else {
    // 1.没有token
    if (whiteList.includes(to.path)) {
      // 1.2 判断是否为登录页或者404页面 跳转到相关页面
      next()
    } else {
      // 1.1 没有进入登录页或者404  跳转到next(/login)
      next('/login')
    }
  }
})
