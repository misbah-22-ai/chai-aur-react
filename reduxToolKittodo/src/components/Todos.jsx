// //45;30 sbsy phly useSlectr react-dom s , lkn app dlt bhi to karogy jo list ahegi usmn dlt ka icon bhi to dogy, tky dlt hojae, eska mtlb m actionlyna chahta ho or koi bhi action longa eska mtlb usy dsptch krna prega to usedisptch lylo , or jb dsptch longa to koi reducer hoga wo lana prega to removeTod bhi lylo wo milega slice s to import krlo

// import React from "react";
// import {useSelector, useDispatch} from 'react-dom'
// import { removeTodo } from "../features/todo/todoSlice";


// //ab ye batao k mein todos kaisy ly k ao usky liye syntax smjhna hog, ab useSelector() ye sirf 1 mthd h advntg is k esmn state ka acces milta 1 clbk k andr . //useSelector(() =>) es trhn bhi likh skty thy but value h 1 he hai to q paranthesis lgana apto appp adv hogya hn 47:19 . to state mn appko value mil jaegi or es state k andr s app ye jo pura store h esky andr s jo bhi value chaho ap nikal skty konsi value jo nam dia yhn p //    name: 'todo',// to appko kya chahye mjhy chahye todos to ye jo todos h esy nikl laingy arr waly , initial state ye h to or bhi value esi mn add kr rhy ho state.todos.push(todo) , todos mn h to add kr rhy ho hn nam uska todo hai ye nam khn dikhae dega ye bhi mn appko bataonga //    useSelector(state => state.Todos)// variable mn store krln


// function Todos(){
//    const todos = useSelector(state => state.Todos)
//    const dispatch = useDispatch()
//     return(
//                 //ab lgahngy loop to core javascript mn batata hn aapko todos lo sary k sary uspy lagao 1 map , map jb lga to hr 1 value appko mil gae h hr 1 value lylo access or hmny paranthesis s use kia taky ziada problem na ho ab appny jo hi div lyna ya li wo lylo jisko mein repeat krnga to keyvalue lyni hogi key longa to mjhy pata h todo k pass id h ye hogya iteration ka jugar app yhn mjhy dena h sirf us value ko to value kis trhn deni h , sirf js enable kia or jo bhi uska text h  {todos.text} // ab hoskta h es li k just agy ya khn bhi appko 1 dlt btn bhi dena ho , q k ye value iterate horae h to li mn h button ahega wrna bhr kia to 1 h value return krskty ho . use krny k liye btn p onclk krna , onclk mn hmny disptch cl krna or disptch 1 mthd h or mjhy es trhn s cal krna h lkn mein es trhn nh krskta onclick={dispatch()} , q k yhn sirf refrnce dena allow h to onclick mn app 1 clbk fire krskty to jb bhi aisy parameter pass krny ho to hm clbk use krty, q k majboori h hm wo () parnthesis nh lga skty werna wo immediately execute hojaega or mjhy reference dena k koi clk kry to kam kro to esi liye clbk use krty , dispatch use kia ye mthd h es mthd mein removetodo agya ,ab rmv tosdo mn kya value deni wo todo ki value id jo remove krni h 

//         <>
//         <div>Todos</div>

//         {todos.map((todo) => (
//             <li key={todo.id}>
//                 {todo.text}
//                 <button onClick={dispatch(removeTodo(todo.id))}>x</button>
//             </li>
//         ))}
        
//         </>
//         //funtinality yae h baqi sir k paste kr rae ho notes

//     )
// }
// export default Todos

//classes k sath sir k notes paste kr rae ho 
///////////////////////////////////////////////////////////////////////////////
//51;00 funtionality ko css k sath likh rkha h thory buton wtn lga rkhy hn , ab appko smjh aya hoga k esmn etna load h nh 1 br setup mn time lgta h , store bnany mn , reducers bnany mn , slice bnany mn usky bd to kya h access krna h kvch bhi useslctr s or funtionality run krni h to usedispatch . 

//configure krwae tailwind sir n 53;00 jo main step th wo reh gya ye sara kam to appny krlia h lkn ye sb kam use to kia nh ab yhn main.jsx bhi h or app.jsx , mein appko batonga kaisy kasiy kam mnlaingy or kaisy kaisy kam krskty hn ab app.jsx mn meiny component add krdia chlty hn app.jsx mn 
///////////////////////////////////////////////

// import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import {removeTodo} from '../features/todo/todoSlice'

// function Todos() {
//     const todos = useSelector(state => state.todos)
//     const dispatch = useDispatch()

//   return (
//     <>
//     <div>Todos</div>
//     <ul className="list-none">
//         {todos.map((todo) => (
//           <li
//             className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
//             key={todo.id}
//           >
//             <div className='text-white'>{todo.text}</div>
//             <button
//              onClick={() => dispatch(removeTodo(todo.id))}
//               className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="w-6 h-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
//                 />
//               </svg>
//             </button>
//           </li>
//         ))}
//       </ul>
//     </>
//   )
// }

// export default Todos
///////////////////////////////////////////

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo} from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

  return (
    <>
    <div>Todos</div>
    <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className='text-white'>{todo.text}</div>
            <button
             onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos