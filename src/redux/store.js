import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "../redux/features/tasks/tasksSlice";
import usersSlice from "./features/uses/usersSlice";

 const store = configureStore({
    reducer: {
         tasksSlice: tasksSlice,
         usersSlice: usersSlice,
    },
})
export default store;

