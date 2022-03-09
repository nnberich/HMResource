import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg component

// register globally 注册全局组件
Vue.component('svg-icon', SvgIcon)

// require.context 可以自动引入目录中所有文件
// 参数一：目录
// 参数二：是否遍历文件的子目录
// 参数三：匹配目录的正则

const req = require.context('./svg', false, /\.svg$/)
// req.keys（）得到了要读取文件的名字
// req.keys（）.map（） 数组的map 将req函数交给map即可
const requireAll = requireContext => requireContext.keys().map(requireContext)
// 调用函数
requireAll(req)
