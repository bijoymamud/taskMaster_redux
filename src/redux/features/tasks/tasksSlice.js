import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    tasks: [
        {
            id: 1,
            status: 'pending',
            title: "Uses of AI",
            description: 'You may or may not be aware of how pervasive AI is in our everyday lives already. According to one survey of 6,000 consumers, while only 33% of people think that they use AI, over 77% use an AI-powered service or device. Its not surprising that people are unaware of all the ways AI touches their lives. After all, the development of AI surged over recent years as researchers made strides they didnt expect to make for another several decades.',
            date: "2023-08-28",
            assign: 'Al Mamud Bijoy',
            priority: 'High'
       }

    ],

    userSpecificTasks: []
}

const tasksSlice = createSlice({
    name: 'tasksSlice',
    initialState,
    reducers: {
        addTask: (state, { payload }) => {
            if (state.tasks.length === 0) {
                state.tasks.push({ id: 1, status: "pending", ...payload })
            } else {
                const lastElement = state.tasks.at(-1);
                state.tasks.push({ id: lastElement.id + 1, status: "pending", ...payload })
            }
        },
     
        removeTask: (state, { payload }) => {
            state.tasks = state.tasks.filter((item)=>item.id !==payload)
        },
        
        updateState: (state, { payload }) => {
            const target = state.tasks.find((item) => item.id === payload.id);
            target.status = payload.status;
        },

        userTasks: (state, { payload }) => {
            state.userSpecificTasks = state.tasks.filter((item) => item.assign === payload)
        }
    
    }
}
)

export const { addTask, removeTask,updateState,userTasks, userSpecificTasks } = tasksSlice.actions;
export default tasksSlice.reducer  