import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const userSlice = createSlice({
    name: 'user',
    initialState: {name: '', age: 20},
    reducers: {
        setUserName: (state, action) => {
            state.name = action.payload
        }
    }
})

export default userSlice.reducer
export const {setUserName} = userSlice.actions
export const selectUser = (state: RootState) => state.user