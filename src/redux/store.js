import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "../redux/features/tasks/tasksSlice";

 const store = configureStore({
    reducer: {
        tasks: tasksSlice,
    },
})
export default store;