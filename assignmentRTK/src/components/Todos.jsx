// import React from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { removeTodo, toggleCompleted } from "../features/todo/todoSlice"

// function Todos () {
//    const todos =  useSelector(state => state.Todos)
//    const dispatch = useDispatch()
//     return(
//         <>
//         <div>Todos</div>
//         <ul>
//         {todos.map((todo) => 
//         <li key={todo.id}>
//             {/* chckbox to toggle completed */}
//             <input
//              type="checkbox"
//              checked = {todo.completed}
//              onChange={() => dispatch(toggleCompleted(todo.id))} />
//              <span style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
//              {todo.text}
//              </span>
            
//             <button onClick={dispatch(removeTodo(todo.id))}>Delete</button>
//         </li>
//         )}
//         </ul>
//         </>
//     )
// }
// export default Todos


///////////////////////
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleCompleted } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todo.todos); // Correct key "todo" instead of "Todos"
  const dispatch = useDispatch();

  return (
    <>
      <div>Todos</div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {/* Checkbox to toggle completed */}
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleCompleted(todo.id))}
            />
            <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
              {todo.text}
            </span>
            <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;



////////////////////////////////////////////////////////////////////
// const TodoList = () => {
//   const todos = useSelector(state => state.todos.todos);
//   const dispatch = useDispatch();

//   return (
//     <ul>
//       {todos.map(todo => (
//         <li key={todo.id}>
//           {/* Checkbox to toggle completed */}
//           <input
//             type="checkbox"
//             checked={todo.completed}
//             onChange={() => dispatch(toggleCompleted(todo.id))}
//           />
//           {/* Display todo text */}
//           <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
//             {todo.text}
//           </span>
//           {/* Button to remove todo */}
//           <button onClick={() => dispatch(removeTodo(todo.id))}>
//             Delete
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default Todos

