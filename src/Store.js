import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Slices/Addtocartslice'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})