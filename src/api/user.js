import request from '@/utils/request'

/**
 * 提交登录
 * @param {Object} data 
 * @returns Promise
 */
export function login(data) {
  return request({
    url: "/api/user-service/user/login",
    method: "POST",
    data
  })
}
/**
 * 
 * @param {*} clientToken 
 * @returns 
 */
export function getCodeNum(clientToken) {
  return request({
    url: `/api/user-service/user/imageCode/${clientToken}`,
    
  })
}

// export function logout() {
// }
