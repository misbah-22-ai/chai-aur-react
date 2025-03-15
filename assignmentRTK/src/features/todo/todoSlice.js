import {createSlice, nanoid} from "@reduxjs/toolkit"


const initialState = {
    todos: [{id: 1, text: 'hello World', completed: false}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                text: action.payload

            }
            state.todos.push(newTodo)
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
//jo bhi phly s hai usky samny ! sign to true false hojaega false true
        toggleCompleted: (state,action) => {
           const todo =  state.todos.find((todo) => todo.id === action.payload)
            if(todo){
                todo.completed = !todo.completed

                state.todos = [
                    ...state.todos.filter((todo) => !todo.completed),
                    ...state.todos.filter((todo) => todo.completed)
                ]
    

            }

        },
        


// The ...state.todos syntax is the *spread operator*, and it’s used here to create a new array that merges filtered todos
       //    The ... is used to:
//    - Extract all the todos from state.todos.filter(todo => !todo.completed) (uncompleted todos).
//    - Extract all the todos from state.todos.filter(todo => todo.completed) (completed todos).
//    - Combine these two arrays into a *new ordered 
    }
})

export const {addTodo, removeTodo, toggleCompleted} = todoSlice.actions
export default todoSlice.reducer

////////////////////////////////////////////////////

// import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

// const initialState = {
//   todos: [
//     { id: nanoid(), text: 'Learn React', completed: false },
//     { id: nanoid(), text: 'Practice Redux', completed: false },
//   ],
// };

// const todosSlice = createSlice({
//   name: 'todos',
//   initialState,
//   reducers: {
//     addTodo: (state, action) => {
//       const newTodo = { id: nanoid(), text: action.payload, completed: false };
//       state.todos.push(newTodo);
//     },
//     removeTodo: (state, action) => {
//       state.todos = state.todos.filter(todo => todo.id !== action.payload);
//     },
//     toggleCompleted: (state, action) => {
//       const todo = state.todos.find(todo => todo.id === action.payload);
//       if (todo) {
//         todo.completed = !todo.completed;
//         state.todos = [
//           ...state.todos.filter(todo => !todo.completed),
//           ...state.todos.filter(todo => todo.completed),
//         ];
//       }
//     },
//   },
// });

// export const { addTodo, removeTodo, toggleCompleted } = todosSlice.actions;
// export default todosSlice.reducer;
// ///////////////////////////////////////////


// The ...state.todos syntax is the *spread operator*, and it’s used here to create a new array that merges filtered todos. Let’s break this down:

// ---

// ### Purpose of ...state.todos

// 1. *Immutable Updates*  
//    In Redux, state updates should be immutable. The spread operator creates *new arrays* instead of modifying the original array in-place.

// 2. *Reordering the Array*  
//    The ... is used to:
//    - Extract all the todos from state.todos.filter(todo => !todo.completed) (uncompleted todos).
//    - Extract all the todos from state.todos.filter(todo => todo.completed) (completed todos).
//    - Combine these two arrays into a *new ordered array*.

// ---

// ### Why Do We Use ...state.todos?
// javascript
// state.todos = [
//   ...state.todos.filter(todo => !todo.completed), // Uncompleted todos
//   ...state.todos.filter(todo => todo.completed),  // Completed todos
// ];




// The reorderTodos function in your code is designed to rearrange the list of todos so that:  

// 1. *Uncompleted todos* (completed: false) appear *at the top*.  
// 2. *Completed todos* (completed: true) appear *at the bottom*.  

// It doesn’t delete or modify any todos; it simply reorders them within the array.

// ### Code Breakdown of reorderTodos  
// javascript
// reorderTodos: (state) => {
//   state.todos = [
//     ...state.todos.filter(todo => !todo.completed), // 1. Uncompleted todos
//     ...state.todos.filter(todo => todo.completed),  // 2. Completed todos
//   ];
// }


// #### 1. *Filter Uncompleted Todos*  
// javascript
// state.todos.filter(todo => !todo.completed)

// - This filters out all todos where completed is false.  
// - These uncompleted todos remain in their original order.  

// #### Example:  
// javascript
// state.todos = [
//   { id: 1, text: 'Learn React', completed: false },
//   { id: 2, text: 'Practice Redux', completed: true },
//   { id: 3, text: 'Write Code', completed: false }
// ];

// state.todos.filter(todo => !todo.completed);
// // Result: [
// //   { id: 1, text: 'Learn React', completed: false },
// //   { id: 3, text: 'Write Code', completed: false }
// // ]


// #### 2. *Filter Completed Todos*  
// javascript
// state.todos.filter(todo => todo.completed)

// - This filters out all todos where completed is true.  
// - These completed todos remain in their original order.  

// #### Example:  
// javascript
// state.todos.filter(todo => todo.completed);
// // Result: [
// //   { id: 2, text: 'Practice Redux', completed: true }
// // ]


// #### 3. *Combine the Two Arrays*  
// javascript
// state.todos = [
//   ...uncompletedTodos, // Uncompleted todos
//   ...completedTodos    // Completed todos
// ];
//////////////////////////////////////////////////////////


// - The spread operator (...) merges the two filtered arrays into one.  
// - Uncompleted todos are placed first, followed by completed todos.  

// #### Example:  
// javascript
// state.todos = [
//   { id: 1, text: 'Learn React', completed: false },
//   { id: 3, text: 'Write Code', completed: false },
//   { id: 2, text: 'Practice Redux', completed: true }
// ];


// ### What reorderTodos Does  
// 1. Keeps the original order of uncompleted and completed todos *within their respective groups*.  
// 2. Ensures the list displays uncompleted todos first, followed by completed todos.  
// 3. Does not change any data, just reorders the array.

// ### When to Call reorderTodos  
// - *After toggling the completion status of a todo*:  
//   When a todo is marked as completed or uncompleted, call reorderTodos to ensure the todos are displayed in the desired order.

// #### Example:  
// javascript
// dispatch(toggleCompleted(todoId)); // Change the completed status
// dispatch(reorderTodos());         // Reorder the todos


// Does this help clarify the function and its purpose?

///////////////////////////////////
// No ...state in addTodo, removeTodo, toggleCompleted because:
// push and find operate directly on the array or object.
// filter already creates a new array, so spreading isn’t needed.
// ...state in reorderTodos because it combines multiple arrays into a single reordered array.
// Let me know if you’d like further clarification!
//////////////////////////////////

// [2:02 pm, 01/01/2025] Misbah Sheikh: We don't use ...state in *addTodo, *removeTodo*, or *toggleCompleted** because these actions modify the todos array differently:

// ---

// ### *1. addTodo*
// javascript
// addTodo: (state, action) => {
//   const newTodo = { id: nanoid(), text: action.payload, completed: false };
//   state.todos.push(newTodo);
// }

// #### Why No ...state?  
// - state.todos.push(newTodo) *directly adds* a new todo to the existing array.
// - The push method modifies the array *in-place, which is fine because Redux Toolkit uses **Immer* under the hood.  
// - Immer allows you to "mutate" the state safely by converting these mutations into immutable updates.

// ---

// ### *2. removeTodo*
// javascript
// removeTodo: (state, action) => {
//   state.todos = state.todos.filter(todo => todo.id !== action.payload);
// }

// #### …
//  The ...state.todos syntax is the *spread operator*, and it’s used here to create a new array that merges filtered todos. Let’s break this down:

// ---

// ### Purpose of ...state.todos

// 1. *Immutable Updates*  
//    In Redux, state updates should be immutable. The spread operator creates *new arrays* instead of modifying the original array in-place.

// 2. *Reordering the Array*  
//    The ... is used to:
//    - Extract all the todos from state.todos.filter(todo => !todo.completed) (uncompleted todos).
//    - Extract all the todos from state.todos.filter(todo => todo.completed) (completed todos).
//    - Combine these two arrays into a *new ordered array*.

// ---

// ### Why Do We Use ...state.todos?
// javascript
// state.todos = [
//   ...state.todos.filter(todo => !todo.completed), // Uncompleted todos
//   ...state.todos.filter(todo => todo.completed),  // Completed todos
// ];


// - *state.todos.filter(todo => !todo.completed)*:
//   Returns an array of uncompleted todos.  
//   Example: [ { id: 1, completed: false }, { id: 3, completed: false } ].

// - *state.todos.filter(todo => todo.completed)*:
//   Returns an array of completed todos.  
//   Example: [ { id: 2, completed: true } ].

// - *Spread Operator (...)*:
//   Takes all the todos from both arrays and merges them into a single new array.  
//   Example Result:
//   javascript
//   state.todos = [
//     { id: 1, completed: false },
//     { id: 3, completed: false },
//     { id: 2, completed: true }
//   ];
  

// ---

// ### Why Not Just Use state.todos.filter Without ...?
// If you skip the spread operator, the result would be *two separate nested arrays*, not a single combined array:
// javascript
// state.todos = [
//   state.todos.filter(todo => !todo.completed), // Array of uncompleted todos
//   state.todos.filter(todo => todo.completed),  // Array of completed todos
// ];

// Result:
// javascript
// state.todos = [
//   [ { id: 1, completed: false }, { id: 3, completed: false } ], // Nested array
//   [ { id: 2, completed: true } ]                                // Nested array
// ];


// This is not what you want—Redux state should maintain a flat structure for the todos array.

// ---

// ### Summary
// - The ...state.todos ensures todos are extracted from the filtered arrays and combined into one flat array.
// - This maintains the proper format for state.todos and follows Redux's principle of immutable state updates.  

// Let me know if you need more clarification!


