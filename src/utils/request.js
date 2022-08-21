// 封装单独的登录接口
import axios from 'axios' // 导出axios实例，该实例要有请求拦截器，响应拦截器

const service = axios.create({
  baseURL: '/api',
  timeout: 5000
})// 创建一个axios实例

// request interceptor
service.interceptors.request.use()

// response interceptor
service.interceptors.response.use(() => {})

export default service
