// import React , { useState } from "react";
// import {useDispatch} from 'react-redux'
// import {addTodo} from '../features/todo/todoSlice'

// function AddTodo () {

//     const [input, setInput] = useState('')
//     const dispatch = useDispatch()

//     const addTodoHandler = (e) => {
//         e.preventDefault()
//         dispatch(addTodo(input))
//         setInput('')

//     }

//     return(
//         <div>
//         <input 
//           type="text" 
//           value={input} 
//           onChange={(e) => setInput(e.target.value)} 
//           placeholder="Enter todo"
//         />
//         <button onClick={addTodoHandler}>Add Todo</button>
//       </div>
//     );
  

    
// }

// export default AddTodo

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    
if (input.trim() === "") {
    
    alert("Todo cannot be empty!");
    return;
}
 
    
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form onSubmit={addTodoHandler}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter todo"
      />
      <button type="submit"></button>
    </form>
  );
}

export default AddTodo;


// if (input.trim() === "") {
//     // Prevent adding empty todos
//     alert("Todo cannot be empty!");
//     return;




// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addTodo } from '../features/todos/todosSlice';

// const AddTodo = () => {
//   const [text, setText] = useState('');
//   const dispatch = useDispatch();

//   const handleAdd = () => {
//     if (text.trim()) {
//       dispatch(addTodo(text));
//       setText('');
//     }
//   };

//   return (
//     <div>
//       <input 
//         type="text" 
//         value={text} 
//         onChange={(e) => setText(e.target.value)} 
//         placeholder="Enter todo"
//       />
//       <button onClick={handleAdd}>Add Todo</button>
//     </div>
//   );
// };

// export default AddTodo;