import { post, get } from '@/utils/request'
import api from './api'
import qs from 'qs'

export const listuser = () => get(api.list)
export const adduser = option => post(api.add, option)
export const updateuser = option => post(api.update, option)
export const deluser = option => post(api.del, option) 
