import { createSlice } from '@reduxjs/toolkit'

export const authReduser = createSlice({
  name: 'authReduser',
  initialState: {
    userId: 1,
    email: 'user@mail.com',
    login: 'John',
    isAuth: false,
    captchaUrl: null // if null, then captcha is not required
  },
  reducers: {
    increment: state => {
        state.login = ''
      },
      decrement: state => {
        state.login = ''
      },
      incrementByAmount: (state, action) => {
        state.login = action.payload
      }
  }
})

 export const { increment, decrement, incrementByAmount } = authReduser.actions
console.log('authReduser.reduser: ', authReduser.reducer)
export default authReduser.reducer;