import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    name: "Al Mamud Bijoy",
    email: "bijoymamud.09@gmail.com",
}


const usersSlice = createSlice({
    name: "usersSlice",
    initialState,
    reducers: {}
});


export default usersSlice.reducer; 