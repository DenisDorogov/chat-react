import { createSlice } from '@reduxjs/toolkit'

export const profile = createSlice({
  name: 'profile',
  initialState: {
    userId: 1,
    email: 'user@mail.com',
    login: 'John',
    isAuth: true,
    captchaUrl: null // if null, then captcha is not required
  },
  reducers: {
    getUserData: state => {
        state.value -= 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

// export const {} = profile.actions

export default profile.reducer