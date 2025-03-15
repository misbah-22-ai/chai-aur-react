// //  features fldr/ todo folder/ thn file todoSlice.js , file k pechy slice ka koi khas role nh h esy app todo.js bolskty thy but namng cnvntion h sabko pata rhy appny reduxtoolkit use kia bas esi liye liha 
// //how to use in it appko sirf 1 mthd chahye jo slice bna dega but hm 2 use krngy usky peechy reason batata appko 21;00

// //1st mthd is createSlice it come from reduxjsToolkit, mthd 1 h h jissy kam hojaega but mn 1 use krna chah rha if you remember hmny jo ids li thi todos k andr to phly 1,2,3 li thi then hmny date.now lia th , redux ko pata h aisa kam hota rhy ga kch arrys aty rhngy values ati rhngi to esi liye appko nano id nam s 1 mthd provided hota ye unique ids generate krta h , hn jee literally eska yae kam h 

// //ab dsri chz kya h appko pata h store mn phli importnt chz kya hoti h initialState k store starting mn kaisa dikhega , empty hoga koi value hogi usky andr , khn database s fetch kr k value dalogy kch na kch to krogy to usi k liye sabsy phly initialState bnaty uska nam dedety , ab initial state kya rkhni h totally upto you , it could be array also object

// //mein inital state obj rkhta q k esmn multiple chxn asakti h like todos nam s meri state h ye 1 arr h or esmn objects hongy , bydefault 1 obj rkhdeta taky mjhy asaani ho to id or text rkhdyty, app chaho to completed false etx jo kch rkhna rkho , ab ye h mera phla do but or bhi properties hoskti h maybe app authentifiction token rkhna chah rhyy ya or bhi . its not cmplex seedha sa 1 obj h or obj to js mn bht khely 
// //24;00// ab hm dykhngy k hm ks trhn 1 slice bnahngy slice kya h almost reducer ka h bara version h , reducer kya h kch nh bs funtionality h or kch bhi nh , hm esy export bhi krlyty hn q k agy ja k kam mn lyna h , hmny 1 naam s bnaya todoSlice , ab todoslice bnaega 1 h to mthd h jo meiny btaya createslice s , es mthd mn obj ahega jee ziada obj h ahngy 

// //ab slices k nam hoty hn depend on you but jo bhi nam rkhn soch smjh k q k jb hm reduxtoolkit use krngy chromeExtension ka to whn p yae nam show hoga,or kch importnce nh h.



// // import { createSlice, nanoid } from "@reduxjs/toolkit";

// // const initialState = {
// //     todos: [{id: 1, text: 'hello world'}]
// // }

// // function sayHello(){
// //     console.log('hello world');
    
// // }
// //ab meiny 1 name property d ye appny mn s nh bna rha ye RTK mn h , yae proprty ka nam hota h q k ab strng h to appko bhi pta hoga k name h property but strng todo ho hitesh ho superman ho ya frq prhta , second chz jo dyty es slice k andr hr slice ka 1 initialState hota , multiple slices bhi bnti but ye hr slice ka 1 initialstate hota , bz log initialState colon lga k bhr h dyty hn appka mn h andr likh dain mjhy psnd h k mein alg s declare krn to ziada bhtr hota. 

// // ab jisky liye hmara store ab k incomplete h wo h reducers, phly kisi or way mn bnahy jaty thy ab hm yae likhty kya hai property to h , ab es object mn aty property or funtion, proprty name h addtodo or es proprty mn appko 1 fun likhna hota h hoskta h fun appny khn or declare kia ho 26;20 , sayhello , ab sayhello ko mein andr reference dydo , reference dyna h call mt krna 


// // export const todoSlice = createSlice({
// //     name: 'todo',
// //     initialState,
// //     reducers: {
// //         addTodo: sayHello
// //     }
// // })

// ////////////ORRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR


// // apko andr likhna h andr likhdo , ab yhn p hmara chng ata contextApi s , contextapi mn bhi appp esi trhn likh rhy thy hmaesha fun ka declaration kr rhy thy uski definition nh likh rhy thy , yhn RTK mn hm eski declaration nh blky definiton bhi likhty hn pura.
// // 
// // // jb bhi app addtodo krogy appko 2 chzn ka access milega , syntax h hai ye esi trhn kam krta jaisy usestate yaad rkhty hn , waisy h appko hmesha yhn 2 chzn milegi 1 milega state or 1 mlega action , en dono ka appky pass hmesha h acces rhega, ab kam mn kaisy lngy

// //state to kya h variable, hmesha access dega k abhi meri initialState h na zahr h agy jaa k chng hojaegi, abhi kya kya value h us sb ka access appko degi , hoskta h es arr mn 10 todos ghy huey ho 5 ghy huey hn 1 bhi nh ho sary rmv kr diye ho abhi kya situation h wo handtohand  situation wala akam appko dega,

// //actions kya hoty hn , khi br aisa hota h k appky pass kch values ahy , jaisy remove appny app to hawa mn remove nh hojaega 1 id lgegi , to kch value mjhy bhi chahye hogi jb mn es mthd ko cal krnga rmvtodo ko call krga to wo value khn s milegi wo value action mn s milti h 


// // export const todoSlice = createSlice({
// //     name: 'todo',
// //     initialState,
// //     reducers: {
// //         addTodo: () => {}
// //         removeTodo: () => {}
// //     }
// // })


// /////////////////////////////////////////////////////

// //28;00 ab addtodo krna, ab todo mjhy lana h to kaisy milega jaisy id milegi waisy h todo milega to hn action s h milega ,1 todo bnalety hn naya ab todo kaisy bnega 1 obj q k arr mn object h to puch horhy hn  

// import { createSlice, nanoid } from "@reduxjs/toolkit";

// const initialState = {
//     todos: [{id: 1, text: 'hello world'}]
// }

// // function sayHello(){
// //     console.log('hello world');
    
// // }


// export const todoSlice = createSlice({
//     name: 'todo',
//     initialState,
//     reducers: {
//         //ab text khn s logy hellowrld to sb mn nh dalogy, q k hoskta wo appko kch bhej rha ho or app hellowrld add kiye jarahy, ab ye nikalogy action mn s , action mn app payload nam s ly skty ho or payload mn appko ye value mil jaegi , //payload ko bhi app 1 obj bnaskty ho to usmn  . dot property access kr skty ho. payload appny app mn 1 obj h , payload.text nh likh skty q k uski propert text h. agr appko kch or extract krna h to krskty ho payload 1 obj h , obj mn id email kch bhi askta h .

//         //ye todo appny abhi bnaya h ye state mn thori na gya h q k initial state to appny bta di , lkn state ko ab update krna prega na , ab es state ko phly js trhn redux mn kam mn lyty thy whn thora time ka khrcha th but yhn nh , state ka access lo appko pata h state mn appny todos liye hn , state mn ye jo ojct h yae appky state h. const initialState = {
//         // todos: [{id: 1, text: 'hello world'}]} es todos ko acces kr k seedha push nayatodo


//         addTodo: (state, action) => {
//             const todo = {id: nanoid(),
//                  text: action.payload}

//                  state.todos.push(todo)

//                  //ab appko pata lg gya k state kaisy lyna h or action k through remv kaisy krna h ab ye appky upr h k appky pass jo values arae h , ab 1 br appp database call krna seekh jhngy ya fetchApi call krna jo appko aata h , to api call bhi krskta hn end mn mjhy pata h h yae to use krna , ab usmn agr arr bnaya to push or agr obj banaya to property add , 
                 
//         },
//         //ab jo ye rmv mthd h esky pass ks ks ka access h , state mn milta crnt state of jo bhi state h or action m jo bhi data pass horha , ab mjhy pata h rmv k liye enhn ny mjhy action mn 1 id to bheja h hoga , id agr bheja h to filter mthd lga dyty hn todos p, or jo bhi action.id h jo bhi match hojata h hmary todoId s usko nh laingy baqi sb laingy , ab q k ye todos h esi ko overwrite kr dyty kaisy hoga , todos log uspy filter lagado to hr 1 value ka access milega to kya bolngy , todo k pass 1 id hogi to wo match krlo action k sath jo payload bhj rhy ussy , automaticlly id compare krlega wo , ye bsc sa statemnt  k jo id di h usko match mt karo baqi sabko ly ao , 
//         //filter jo h wo to true values ko deta h , jo nh krta wo ghayb 
        
//         removeTodo: (state, action ) => {
//             state.todos = state.todos.filter((todo) => todo.id !== action.payload)
//         },
//         //app or bhi reducers add krskty ho add hogya remove hogya ab update appka assignment h . 
//         //update mn appko action mn id milegi , id s app find kro jaisy h place find hojae to usko app lo uski id as it is rehny do bas text chnge krdo to proprty overwrite krdo 33;00
//     }
// })


// //abhi tk appny ye todoslice pura export krdia h lkn ye es trhn nh ota , actully mn esky 2 prt export krny hoty hn , 1 to jtni funtionlity h usko export krngy , actully mn ye jo reducers h na funtionality addtodo removetoodo, esi k through h hmesha state ko update krngy to ye funtionality individually kam mn ahegi hm en funtionality ko export krdyty hn , ye individual funtionality hmny export ki h q k hmn ye componnetns mn kam ahega ,

// export const {addTodo, removeTodo} = todoSlice.actions


// //  lkn agr appko yaad ho to hmara ye stor.js akely h ghoom rha h to es store ko bhi awareness chahye en sary reducers k bry mn , agr esko awareness nh h to ye maintain nh krpaega q k ye 1 restricted store h k mein value hr kisi s ly k update nh krlea ho meiry andr jo bhi reducers rgstr krogy mn sirf unhi s ly k update krta ho esi liye esko sary reducers ka list chahye hot
// export default todoSlice.reducer

// //esi trhn agr app or bhi reducer bnaty ya todoslice ki app authentificationSlice ya kch bhi slice bnaty appko sary reducers export krny h prny or usko yhn lyna h prega , individual ko bhi krna hoga q k wo cmponents mn kam ahngy 
// // 35;34 ab chlty store mn store ko un reducers ki knowlege chahye thi 
///////////////////////////////////////

import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer