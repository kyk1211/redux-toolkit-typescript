import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: 0 as number,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    multiply: {
      reducer: (state, action: PayloadAction<number>) => state * action.payload,
      prepare: (value?: number) => ({ payload: value || 2 }), // fallback if the payload is a falsy value
    },
  },
})

export const { increment, decrement, multiply } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter

export default counterSlice.reducer
