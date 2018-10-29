/**
 * @author: amorcy
 * @since:  2018-10-29
 * @Project: vueTemplate
 */

/*eslint-disable*/
import vue from 'vue'

export const apiConfig = {
  timeout: 5000,
  withCredentials: true
}

export function useInterceptors(netApi) {
  netApi.interceptors.request.use(
    function (request) {
      // 拦截request do something
      request.headers.ID = ''
    }
  )
  netApi.interceptors.response.use(
    function (response) {
      if(response.data.code !== 0) {
        // 做一些错误处理  eg: 通知
      }
      return response
    },
    function (error) {
      // 做一些错误处理  eg: 通知
      return Promise.reject(error)
    }
  )
}
