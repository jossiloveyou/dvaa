import axios from 'axios'
import { listuser } from '@/services/home'
const url="https://api.baxiaobu.com/index.php/home/v5/findUser"
const url2="https://api.baxiaobu.com/index.php/home/v5/findUser"


export default {
  namespace: 'login',

  state: {
    name: "小花",
    age: 16,
    data: [],
  },

  //触发  异步
  effects: {
    *getDataList ({ payload }, { call, put, select }) {

      const old = yield select(state =>state.home.data)
      const data = yield call(listuser)

      console.log(data.users,1)
      yield put({
        type:"updateData",
        payload: [...old,...data.users],
      })
    },

    *getselelctData ({ payload }, { call, put, select }) {

    }
  },

  reducers: {
    update (state, action) {
      return { ...state, name: action.payload }
    },
    updateData (state, action) {
      return { ...state, data: action.payload }
    }
  },
}