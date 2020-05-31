import axios from 'axios'
import { listuser, adduser, deluser, updateuser } from '@/services/home'

const { pathToRegexp } = require('path-to-regexp')

export default {
  namespace: 'home',

  state: {
    name: "小花",
    age: 16,
    data: [],
  },

  //触发  异步
  effects: {
    *getDataList ({ payload }, { call, put, select }) {

      // const old = yield select(state =>state.home.data)
      const data = yield call(listuser)
      yield put({
        type:"Data",
        payload: data.users,
      })
    },

    //添加
    *addData ({ payload }, { call, put, select }) {
      const add = yield call(adduser, payload)
      const data = yield call(listuser)
      yield put({
        type:"Data",
        payload: data.users,
      })
    },

    //修改
    *updateData ({ payload }, { call, put, select }) {
      const update = yield call(updateuser, payload)
      const data = yield call(listuser)
      yield put({
        type:"Data",
        payload: data.users,
      })
    },

    //删除
    *delData ({ payload }, { call, put, select }) {
      let obj = {}
      obj.id = payload
      const del = yield call(deluser, obj)
      const data = yield call(listuser)
      yield put({
        type:"Data",
        payload: data.users,
      })
    },

  },

  reducers: {
    update (state, action) {
      return { ...state, name: action.payload }
    },
    Data (state, action) {
      return { ...state, data: action.payload }
    },
  },
  subscriptions: {
    // fn ({ history, dispatch }) {
    //   history.listen(({ pathname }) => {
    //     console.log( pathname,'666')
    //     const regexp = pathToRegexp('/home/:id').exec(pathname)
    //     const id = regexp[1]
    //     console.log(id)
    //     if (regexp) {
    //       dispatch({ type :"getDataList" })
    //     }
    //   })
    // }
  }
}