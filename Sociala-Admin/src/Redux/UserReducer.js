import {createSlice} from "@reduxjs/toolkit";

let initialState = []


let userReducer = createSlice({
    name : "user",
initialState,
reducers : {
    getUser(state,action) {

    },
    deleteUser(state,action) {

    }
}
})

export default userReducer.reducer;