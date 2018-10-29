/**
 * @author: amorcy
 * @since:  2018-10-29
 * @Project: vueTemplate
 */
/*eslint-disable*/
import axios from 'axios'
import {useInterceptors, apiConfig} from "./api";
import {generateNet} from './net-util'

const isDev = !!process.env.NODE_ENV
const baseURL = isDev ? '' : ''
apiConfig.baseURL = baseURL

export const net = generateNet(apiConfig, useInterceptors)
