import axios from 'axios'
import { Message } from 'element-ui'

// 执行npm run Dev ，webpack会给node添加一个环境变量
// process.env.NODE_ENV变成development
// 执行npm run build
// process.env.NODE_ENV变成production

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API

  // baseURL: 'http://localhost:8083/api'

})

// 添加请求拦截器
request.interceptors.request.use()

// 添加请求拦截器
request.interceptors.response.use(
  function(response) {
    // 对响应数据做点什么
    // 响应成功拦截：只能代表请求成功，不代表业务逻辑成功

    const { data: { data, success, message }} = response
    if (success) {
      // Message.success('its ok!')
      return data
    }
    Message.error(message)

    return Promise.reject(message)
  }, function(error) {
    // 对响应错误做点什么
    Message.error('系统异常')
    return Promise.reject(error)
  }
)

export default request

