import axios from 'axios'
import { BASE_URL } from './constant.ts'
import { ACCESS_TOKEN } from '@/shered'

export const apiInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 2000,
  headers: { 'X-Custom-Header': 'foobar' },
})

export const setAuthHeaders = () => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN)
  if (accessToken) {
    apiInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`
  }
}