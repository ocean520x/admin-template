//引入axios（axios進行二次封裝）
import request from '@/utils/request'
//對外暴露登錄接口函數
export function login(data) {
  return request({
    url: '/admin/acl/index/login',
    method: 'post',
    data
  })
}
//對外暴露獲取用戶信息的函數
export function getInfo(token) {
  return request({
    url: '/admin/acl/index/info',
    method: 'get',
    params: { token }
  })
}
//對外暴露退出登錄函數
export function logout() {
  return request({
    url: '/admin/acl/index/logout',
    method: 'post'
  })
}
