// import React, { useState } from "react";
// import { useTodo } from "../contexts";

// //bht bsc  sa form h 1 input elemnt h or yhn 1 button h , funtinality sH hmari koi todo form p h nh q k hm khud bhi add krskty sabsy pehly state define krni ye individual todo k liye , useState s ahega or default value empty hogi , ye mera add todo h q k form h , ab add tofdo ki funtionality to meiry pass app.jsx mn h, ab ye value wala jo addTodo hai provider wala eski funtinlity to meiny esmn inject krdi   const addTodo = (todo) => {
//     // setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] ) // lkn wapis bhi to chahye na wo funtionality wo khn s longa useTodo s q k useContext n useTodo de dia h , or useContext k pass h to sara context h , bas to ab jhn bhi compont mn  chahye khn drilling nh krni seedha 1 lne likhni or sari values mjhy mil jagi , jo funtionlity chahye likh lnga or kahn s chahye useTodo s ly k ao , usetodo s chahye addtodo51;00, ab krna kya h wo value lyni h or adTodo mn pass krni h addTodo expect krta k app mjhy 1 todo dogy , kam nh bataya wo app,jsx k kya kam krty to mn setTodos kko lyta prev ko extract krta thn prev ko spread krta or date.now lylia baqi value ko as it is lylia ...todo baqi value ko spead krdia mtlb object dnga tabhi to spread krogy hawa mn thori kerdogy 52;00

//     //mthd bnaty add = evnt ahega ,if condition k sath, to todo mn kch hona bhi chahye agr kch h h nh to return krdyty ab h line ka return h to q he curly braces use krny , agr value h to add todo ko cl kia ,ab es todo mein todo pass kia nh addTodo(todo) nh nh , tae to ghalti hoti h jb funtionality appny aisy defn kr rkhi h previous value lo addtodo mn , todo to app lylo str mn koi dikkat nh lakin yhn kr kya rhy ho , spread kr rhy ho arr spread hua lkn yhn obj bhi to spread kr rhy ho , to kch do to sae sprad krny k liye aisy kaisy str dedogy to kya kam chly g. to hm obj pass krngy q k arr mn object h na addTodo({id: Date.now(), todo:todo, completed: false}) ab ye sari values deskta ho koi dikkat wali bt bhi nh hogi yhn funtionality bs etni si hogi app.jsx mn id:date.now wali line ghaeb hojaegi or as it is todo dedo spread kr k . lakin agr lakin agr whn rkha hua h app.jsx mn. to appko yhn nh zarort deny ki or ye todo:todo appko pata h new syntax mn appki field ka naam or appki values ka naam same h  to app /todo/ send krdia or completed false krdia. 54:50 ab ye jo hamara field h todo ly kr aya h us field mn bhi to todo hoga usy ghyb krdety q k wo es field s h to value ly rha hoga ab setTodo('') to thora cleanUp hogay
//     //to ye input jo h ,ab ye form h automatically submit hojaega to type submit hoga to appnyapp add yhn ajaega to phly to onSubmit onSubmit={add} , ab input mn kya kya value hogi to sabsy phly to wiring hojae input ki state k sath , to wiring ko h bolty todo bas appny variable yhn daldia esi ko wirng khty , acha esmn kch bhi chng ahy to todo mn? to hamary state mn dalo na , ab e mn koi bhi chng ahy to setTodo(e.targt.val), add button p koi funtinality cl krny ki need nh q k ye type submit h appnyapp submit 


// function TodoForm (){
//     const [todo, setTodo] = useState("")
//     const {addTodo} = useTodo()

//     const add = (e) => {
//         e.preventDefault()

//         if(!todo) return 

//         addTodo({ todo, completed: false})
//         setTodo("")
//     }
//     return(
//         <form onSubmit={add} className="flex">
//         <input
//             type="text"
//             placeholder="Write Todo..."
//             className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
//              value={todo}
//             // acha esmn kch bhi chng ahy to todo mn? to hamary state mn dalo na , ab e mn koi bhi chng ahy to setTodo(e.targt.val), add button p koi funtinality cl krny ki need nh q k ye type submit h appnyapp submit 
//             onChange={(e) => setTodo(e.target.value)}
//         />
//         <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
//             Add
//         </button>
//     </form>

        
//     )
// }
// export default TodoForm
//now we need to go to todoItem 56;40


////////////////////////////////

import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e) => {
      e.preventDefault()

      if (!todo) return

      addTodo({ todo, completed: false})
      setTodo("")
    }

  return (
      <form onSubmit={add}  className="flex">
          <input
              type="text"
              placeholder="Write Todo..."
              className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
              Add
          </button>
      </form>
  );
}

export default TodoForm;