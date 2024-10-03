import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "../redux/features/tasks/tasksSlice";

 const store = configureStore({
    reducer: {
        tasksSlice: tasksSlice,
    },
})
export default store;

// addTask: (state, {payload}) => {
//     if (state.tasks.length === 0) { 
//         state.tasks.push({id:1, status: "pending", ...payload});
//     } else {
//         const lastElement = state.tasks.at(-1);
//         state.tasks.push({id:lastElement.id + 1, status: "pending", ...payload})
//     }
// },
// removeTask: (state, { payload }) => {
//     state.tasks.filter((item) => item.id !== payload);
// },

// updateState: (state, { payload }) => {
//     const target = state.tasks.find((item) => item.id === payload);
//     target.status = "running"
        
// }