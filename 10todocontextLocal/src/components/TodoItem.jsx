// //56;42 ye bhi thora cmplex h ab yhn hm un chzn ko discuss nh krngy value or onchnge , ab funtinality dykhty agr app dykhngy to ye app mn learn Dsa appny app mn 1 item h to phli funtionlity to toggle wali h k item editable h k nh , editable h tbhi to clck kr rhy hn , ab ye tickmrk hogya h to editable  nh h to koi to state hogi jo bategi k ab ye edit waala usko option dena h k , ab hmn ye bhi h k jaisy h edit krdnga to ye todo ka messg mjhy update krna prega , usky bd dlt krdnga to dlt wali funtinlity bhi ani chahye to ye sbto funtinlity chahye h chahye hogi 

// //yhn p sbsy phli or important chx jo h context ly k aana to hm useTodo s kch funtinality laingy

// import React from "react";
// import { useTodo } from "../contexts";
// import { useState } from "react";

// function TodoItem (){


//     //ab bnaty hn state, phli lgaegi k editable h k nh 
//     const [isTodoEditable, setIsTodoEditable] = useState(false)
    
//     //bydefault to editable nh hota h , jb editable hota h tbhi to wo icon show hota h 

//     //2nd h k todo mn mesg kya h q k jaisy h app edit p clk krogy state chng hogi ye values bhi to lyni paregi esky andr 
//     const [todoMsg, setTodoMsg] = useState(todo.todo)  //jo bhi appka todo h us todo mn . todo

//     const {updateTodo, deleteTodo, toggleComplete} = useTodo()




//     //ab hmn pata h k app,jsx mn form ki infrmtion to hm yhn likhngy, lkn yhn jb app todo ka each item dogy usmn appko loop lga k dena hoga , q k sary todos to yhn liye hn , to yhn p hm todos.item , hr 1 item kya hoga 1 single todo , etna etna obj app pass krogy hr iteration mn         {
//         //     id: 1,
//         //     todo: 'Todo msg',
//         //     completed: false,
//         // }
//         //id hm eski  use krngy usko unique bnany k liye to as a key use krngy , or ye jo id k neechy todo h ye yhn s aya todo.todo s     const [todoMsg, setTodoMsg] = useState(todo.todo), 
//         // 
//         // //already meiny esko destructure krlia,  // function TodoItem({todo}) ,object mil rha th to pura todo object lylia, ab ye todo pura object hai or todo.todo. 

//         //1;1;00 ab krni funtionlity p bt, edittodo krna prega phir state mn kaisy hndle krngy wo dykh lngy , edittodo appnyapp mn 1 funtinolit h or wo appki todos ko hndle krt h , sabsy phly updateTdo cal krna hoga q k update h to kr rhy hn yhn p edit p clk krny k bd , to update hoty time konsa todo update kr rha id lgegi or jo naya todo h wo messg bhi lgega . 

//         //updatetodo kam kaisy krega (todo.id , {}) obj h todo to obj mn h pass hoga , obj mn spread krlia or jisy update krna h wo krlo baqi id or true false wala sm rhny do . phly puri value spread thn 1 proprty update krli jaisy phly ki thi ab todo:todomsg  // ye mesg khn s aya ye state s aya // ab 1 br ye updation agya to usy mjhy btna prega k istodoeditable , to editabl nh h to usy false krdngy , hogya jitna kam hona th ab usy flse krdo settodoeditble(false)

//         const editTodo = () => {
//             updateTodo(todo.id, {...todo, todo: todoMsg})
//             setIsTodoEditable(false)
//         }

//         // toggleComplete jo context s arae uska nam h or neechy wala local mthd ka 1;4;00

//         //ab h togglecomplet eski funtilty hm lkh chuky hn app,jsx mn , whn hm pura dmgh lga chuky hn funtinlity ko cl krty hn 
//         const toggleCompleted = () => {
//             toggleComplete(todo.id)

//         }
//         //togglecomplte ko toggle krny k liye id chahye h to (todo.id)  prop jo pass kia or .id.  aisa nh h k cntxt app agr use kr rhy hnn to prop pass krna paap hogya h aisa nh hota h . 
        
//         //baqi cmpnnt ka overview deta hn 

//     return(
//         <div
//         className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${

//             //todo.completed k base p appki striking horae h , bkgrond clr dykh rhy h wo sab css ka kamal h based uspy k todo completed h k nh , q k todo ka access h appky pass to app chck krskty ho k usmn .completed ki value true h k fallse , whn s chk kr k ziada kch nh uska bkground chng krdia , esi trhn chk kr k strikethrough ka option bhi app dykh skty ho 
//             todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
//         }`}
//     >
//         {/* /ab ye input fild h esmn todo.completed s dykhngy k check h k nh , q k hr 1 todo k pass wo value h , onchng p togglecompleted, jo hmny likha esy cl kia or ye appnyapp context ly k km kr rha h  */}
//         <input
//             type="checkbox"
//             className="cursor-pointer"
//             checked={todo.completed}
//             onChange={toggleCompleted}
//         />
//         <input

//         // ab ye inputfield readOnly h k nh espy dpnd krega sara kam , h ye input field h lkn ye readOnly h , read only kb chnge hoga jb ye editable hoga to hmny onchnge p yhn p 1 setTodomsg call krwadia, values woi ki woi lyli h  
//             type="text"
//             className={`border outline-none w-full bg-transparent rounded-lg ${
//                 isTodoEditable ? "border-black/10 px-2" : "border-transparent"
//             } ${todo.completed ? "line-through" : ""}`}
//             value={todoMsg}
//             onChange={(e) => setTodoMsg(e.target.value)}
//             readOnly={!isTodoEditable}
//         />
//         {/* Edit, Save Button */}
//         <button
//             className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
//             onClick={() => {
//                 if (todo.completed) return;

//                 if (isTodoEditable) {
//                     editTodo();
//                 } else setIsTodoEditable((prev) => !prev);
//             }}
//             disabled={todo.completed}
//         >
//             {isTodoEditable ? "📁" : "✏️"}
//         </button>
//         {/* Delete Todo Button */}
//         <button
//             className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
// // or dlt todo drct h cl krdia or id yhn p dedia q h faltu 1 or mthd cl krty 

//             onClick={() => deleteTodo(todo.id)}
//         >
//             ❌
//         </button>
//     </div>
// );
    
// }
// export default TodoItem
// 1;06;00 ab app.jsx mn jana h componnt hamary ready h 1 final chx krni h. app.jsx mn cmpnnt ko cl krna h  

/////////////////////////////////////////


import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todo)
  const {updateTodo, deleteTodo, toggleComplete} = useTodo()

  const editTodo = () => {
    updateTodo(todo.id, {...todo, todo: todoMsg})
    setIsTodoEditable(false)
  }
  const toggleCompleted = () => {
    //console.log(todo.id);
    toggleComplete(todo.id)
  }

  return (
      <div
          className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
              todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
          }`}
      >
          <input
              type="checkbox"
              className="cursor-pointer"
              checked={todo.completed}
              onChange={toggleCompleted}
          />
          <input
              type="text"
              className={`border outline-none w-full bg-transparent rounded-lg ${
                  isTodoEditable ? "border-black/10 px-2" : "border-transparent"
              } ${todo.completed ? "line-through" : ""}`}
              value={todoMsg}
              onChange={(e) => setTodoMsg(e.target.value)}
              readOnly={!isTodoEditable}
          />
          {/* Edit, Save Button */}
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
              onClick={() => {
                  if (todo.completed) return;

                  if (isTodoEditable) {
                      editTodo();
                  } else setIsTodoEditable((prev) => !prev);
              }}
              disabled={todo.completed}
          >
              {isTodoEditable ? "📁" : "✏️"}
          </button>
          {/* Delete Todo Button */}
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
              onClick={() => deleteTodo(todo.id)}
          >
              ❌
          </button>
      </div>
  );
}

export default TodoItem;



