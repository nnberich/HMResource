import { login, getUserInfo, getUserDetailApi } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
const state = {
  token: getToken(),
  USERinfo: {}
}
const mutations = {
  // 存token
  setToken(state, payload) {
    state.token = payload
  },
  // 保存用户信息
  setUserInfo(state, payload) {
    state.USERinfo = payload
  },
  // 删除token
  removeToken(state) {
    state.token = null
    removeToken()
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
    setToken(res)
  },
  // 获取用户信息
  async getUserInfo(context) {
    const res = await getUserInfo()
    const baseinfo = await getUserDetailApi(res.userId)
    const baseResult = { ...res, ...baseinfo }
    context.commit('setUserInfo', baseResult)

    return baseResult
  },

  logout(context) {
    context.commit('removeToken')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
