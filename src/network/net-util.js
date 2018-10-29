/**
 * @author: amorcy
 * @since:  2018-10-29
 * @Project: vueTemplate
 */
/*eslint-disable*/
import axios from 'axios'

export function generateNet(config, useInterceptors) {
  const netApi = axios.create(config)
  useInterceptors(netApi)
  return netApi
}
