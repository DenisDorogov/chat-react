import { configureStore } from '@reduxjs/toolkit'
import authReduser from './redusers/auth-reduser';
import profileReduser from './redusers/profile-reduser';
console.log('authReduser: ', authReduser);
const store = configureStore({
  reducer: {
    auth: authReduser
    // profilePage: profileReduser
  },
  
})
window.store = store;
export default store;