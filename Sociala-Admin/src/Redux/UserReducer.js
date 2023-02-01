import {createSlice} from "@reduxjs/toolkit";

let initialState = [
   {
    userName : "Aliasger",
    _id : "1",
    image : "1.jpg"
   }
]


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