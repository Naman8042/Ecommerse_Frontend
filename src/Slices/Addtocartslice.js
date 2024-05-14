import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart:[],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addtoCart: (state,action) => {
      console.log(action.payload)
      state.cart.push(action.payload)
      console.log(state.cart.length)
    },
  
  },
})

// Action creators are generated for each case reducer function
export const { addtoCart } = counterSlice.actions

export default counterSlice.reducer