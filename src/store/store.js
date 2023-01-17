import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth.js'
import darkModeReducer from './darkModeReducer.js'

export default configureStore({
   reducer: {
      auth: authReducer,
      dark: darkModeReducer
   }
})