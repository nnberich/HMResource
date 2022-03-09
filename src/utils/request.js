import axios from 'axios'

const request = axios.create({
  baseURL: ''
})

// 添加请求拦截器
request.interceptors.request.use()

// 添加请求拦截器
request.interceptors.response.use()

export default request

