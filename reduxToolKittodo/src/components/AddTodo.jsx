//38:00 addtodo mn ahega smple 1 form , form lhngy notes s , es form mn h onsubmit jiska nam h {addtodoHandler} taky form mn jb bhi value add krogy es mthd s krlain , wo mthd kya krta wo abhi nh pata we willl design. input field mn jo appki value h wo input s run horae h or ye value onchnge s hoky setInput mn jarae h , or bas button h 

// ab ye h addtodo sbsy phly to smjhiye k syntax kis trhn s jaega , store mn kch add krna or add kaisy hota h dispatch s , appko kch na kch event disptch krna hoga , sbsy phly state bnanty q k state ka nam input or setinput rkh rkha h to usi nam s bna lyty

//ab sbsy phly dispatch to dispatch khn s ahega,  ye jo store or reducers h ye pure RTK hai or useSlctr or usedsptch ye react ki h , react ka actually mn wireup h k ks trhn redux hmara use hoga 

// import React, {useState} from "react";
// import {useDispatch} from 'react-dom'
// import {addTodo} from '../features/todo/todoSlice'


// function AddTodo(){
//     const [input, setInput] = useState('')
//     const dispatch = useDispatch()

//     //ab dsptch ko use kaisy krty hmny 1 mthd bna rkha h addtodohndler , funtlity hmn nh lihkni h , seedha dispatch use karo , i told you dispatch kya krta h , dispatch 1 reducer ko use krty huey 1 store mn changes krta h 41;00, store mn value mein  chnge krta h  

//     const addTodoHandler = (e) => {
//         e.preventDefault()
//         //ab dispatch k andr h reducer ko cl krna prhta to addtodo cl kro , addtodo cl krskty but kya akely krskty hn , addtodo mn jo funtinlity likhi h to us addtodo mn app action.payload bhjogy , phly ye action.payload manually likhna prta th , abhi nh likhty sirf es reducer ko call kr k jo bhi value bhejna chahty bhrj do , koi action.payload kis need nh , addtodo reducer h to h . esi liye rtk bhtr approach h , already etna boiler plate h ye sirf dispatch h to krna th usky liye store bnaya, feature bnaya , reducer bnaya but long application jo complex hoti whn ye kam aata .  
//         dispatch(addTodo(input))

//         //ab yhn tk to sb thk h lakin ye jo appny inputfield bnaya h esko clean nh kia , srf 1 bhtr prctc h k jb appka todo bn gya ya add hogya to user ko acha nh lgega k wo form whn filled h to us form ko clean k liye setInput use krlo  or state wps s clean krdo jo bhi user n dirty kia h setInput ('')

//         setInput("")

//         //to hmny dykha ziada bara kam h nh 1 br mjhy dispatch bnaya agya jo k 1 line ka kam h phir mn usmn 1 reducer cl krskta ho or jo value bhi pass krni h krskta ho , us value ko agr mjhy acces krna h to action.payload mn sari values h, payload obj mn sari values h . 44;00 


//     }

    //ab useslctr khn kam mn ahega jb todo appny add kia h tb to funtionality kam mn lylia disptch ki q k 1 action dispatch krna th lkn , ab hm aty appni funtionlity p jhn mjhy sary todos ko list krna h , obviously 1 br mjhy sary todos mil jhn to mjhy pata h todos ki jo initial state rkhi thi hn initialstate to obj hai lkn todos arr h to loop lagalonga or sari values mjhy mil jagi ,  const initialState = {
    // todos: [{id: 1, text: 'hello world'}], }


// lkn loop mn khn s value lo to ab ye value appko milti h actually mn store s or esi dn k liye store bnaya jata h k sari chxn jo appko chahye wo sb appko store s mil jhngi lkn laingy kaisy store s , app to kh rhy thy slice.js mn addtodo mn jo state h whn s milti sari values to state mn milegi value ya store mn , dykhn value ko access kaisy krty usy ghor s dykhngy appko smjh ajaega q hm usy store bolty hn chlty hn todo.jsx mn 45:26
//     return(
//         <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
//       <input
//         type="text"
//         className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//         placeholder="Enter a Todo..."
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />
//       <button
//         type="submit"
//         className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
//       >
//         Add Todo
//       </button>
//     </form>
//   )
// }

// export default AddTodo

//////////////////////////////

import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice' 

function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo