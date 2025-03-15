// import {configureStore} from '@reduxjs/toolkit'


// export const store = configureStore({
//     reducer: todoReducer
    
// })

import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice'; // Import the reducer from your slice file

export const store = configureStore({
    reducer: {
        todo: todoReducer, // Use a key for the slice (e.g., "todo")
    },
});
