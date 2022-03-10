import { login } from '@/api/user'
const state = {
  token: null
}
const mutations = {
  setToken(state, payload) {
    state.token = payload
  }
}

// 处理异步
const actions = {
  // 第一个参数为context，第二个参数为payload
  async denglu(context, payload) {
    console.log('登录请求的token')
    // 接收this.loginform传过来的数据
    const res = await login(payload)
    // console.log(res)
    context.commit('setToken', res)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
