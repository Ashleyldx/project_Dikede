// 调用接口 获取token值
import { login } from '@/api/user'

export default {
  namespaced: true,
  state: {
    token: null
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload
    }
  },
  actions: { // 执行异步  // loginAction???是哪里的属性值？
    async loginActions(context, data) {
      try {
        const res = await login(data)
        context.commit('setToken', res.data.data) // 这个hrsass上面有修改
      } catch (error) {
        console.log(error);
      }
    } 
  },
}

