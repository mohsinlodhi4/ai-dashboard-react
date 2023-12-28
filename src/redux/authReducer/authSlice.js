import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null, // to keep the user logged in on page refresh
    // other keys
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        setUser(state, action) {
            state.user = action.payload
        },
        removeUser(state) {
            state.user = null;
        }
    }
})

export const { setUser, removeUser } = authSlice.actions
  
export default authSlice.reducer