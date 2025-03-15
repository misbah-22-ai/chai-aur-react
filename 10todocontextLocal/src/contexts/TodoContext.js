//todo k contect mn return mn kch nh mil rha to js lia 
//contxt k 2,3 way but hm 1 dykhty to todo k context mn yhn lgngy 2 chxn create context and usecontext agr wo provider wala drama h wo nh krna to 
// ab appny 1 context ko export krna h ab todo context bnega createContext s 

// import { createContext, useContext } from "react";
// export const TodoContext = createContext({})


//ye 1 obj h esmn ahega kya we discuss later 
///now hm export karlyty q k hmn na wo br br useContxt mn wo waps s context dalo import kr k wo nh krna to hm 1 hook h direct export krlyty hn 


// export const useTodo = () => {
//     return useContext(TodoContext)
// }

//useTodo bs 1 mthd h , esmn return krdngy ye useContext jo appny bulaya th esko context chahye hota h na , hm main file mn na kar k , or yhn kar k seedha export kr rhy hain bs etna sa kam , remember jb bhi useContext logy usy 1 context dena prega k kis k bry mn bt kr rhy , jo bhi sepert chx rkhi h usky bry mn hm bt kr rhy hn 

///////////
//ab hm 1 provider bhi yhn s export krty yaad hoga appko q k i want  k main file mn ja k sab kch wrap krna prega todocontext.provdr , to wo nh krnty , hm seedha sa h export krlyty to bas 1 variable export hota h wo krlyty 

//to esmn 1 var h export hota h ye esliye krty q k whn p mjhy ye todoContext.provider na likha pre, ye na lkhna pre bs esi liye krta hn mn 


// export const TodoProvider = TodoContext.Provider

//////////////////////////////////////////////////
//ab app todo ka contxt bna rhy ho to koi na koi defaul val hog jo store mn hogi  , plus abhi tk mny choty kaam kiye k them mil gya ya mil gya wo , to usmn ziada andaza nh horha th , ye app hmari ht kam kr rhi by default to man lia ye sab arrays h , arr mn appky kch todo hn title man lain todo k 12;17 he 1 ka 1 id bhi hoga todo ka agr database hota to khd id generate hjaty , ab hm krngy many ways to genert id , random str daal skty , number dal skty , date bhi use krskty , 

//ab esky mthd dykhy ye to basc hogya k todo ba kesy , id hogya tilte hogya or usmn completed hogya k false h k true , ye to bsc structure hogya hr 1 todo ka 

//funtinlty kitni h add todo h todo add krskty ho , toggle bhi kr parahy k complete ya incomp , usky elawa ywe propr 1 edit h yhn app todo ko chng krparhy , to 1 id lgega esky sth , 
//dlete bhi kr parhy ho , read bhi krparhy or sary todos ki listing bhi horh h , to funtinality to bht sari h 
//ab funtility ko likhngy kaisy code mn ya context mn q k ye funtionlity to componts mn jany wali h , ab aisa to nh k yhn likha h to yhn use hogi to jhn bhi ye fintility dfn hai , mn agr 10 comp m bhi 1 cmpont bnao whn ye directly use hojae , 

//to jo appny cntxt bnaya esmn todos name s 1 arr bnaya es arr mn hr 1 field es trhn add hoti chali jaegi 
// [{}, {}, {}] hr 1 jo todo hoga wo 1 obj hoga , hr 1 todo k pass 1 id hogi , phir hmny 1 todo lia app todoTitle bol lo or usy bol lia todomsg,  or kya chahye by default kya h esy bollyty completed or by default false. app esy check , unchked jaisy bolna h bolain esi trhn todo add hongy abhi mn 1 h add krta taky mjhy model yaad rhy , bd mn mn esy dlt krdnga q k bydefault mjhy empty state ki arr chahye. 15;00
//////////////////////////////////////////////


// import { createContext, useContext } from "react";
// export const TodoContext = createContext({
//     todos: [
//         {
//             id: 1,
//             todo: 'Todo msg',
//             completed: false,
//         }
//     ],

//     //ab ye jo todos h ye property , jis trhn s app dykhna chnhn to ye kch es trhn s to h , theme: dark to variable to h , ab var mn hmn arr mil gya or arr mn obj to etni koi ghbrany wali bt to h nh jaisy them dark mila th aisy ye mil gya ab mjhy pata h k datatype kya h , agr mn phly string ( dark) expect kr rha th to ab arr kr rha hn to loop lgana hoga eni khani h 

//     //pechli dafa jo themeSwitchr lia th to esi trhn k contxt lgahy thy like themMode: light usky elawa hm fun ly rhy thy but ghor krny wali bt thi k  fun mn funtionlity nh likh rhy thy , bs ye bol rhy thy k app 1 fun ho , contextApi or jb hm redux k bry mn bt krgy ye 1 thora sa dfrce hai enky andr. 

//     //eski fun hmny appjsx mn likhi thi yae chz yhn krngy todos to hogae properties ab funtionlity , funtionlity mn definitions nh likhty srf nam likhty hn enky 
//     /////////////////////////////////////////////////////////

//     //todo jb app pass krogy todo s mtlb h ye mesg , to ye fun kch kam krega , ye hm app.jsx mn decide krngy , app kisi mn bhi kr k import ly skty . usually cntxtApi bht big projct k liye h bana h usky liye hm redux , xustand aisi statemangmnt libraries ka use krna prta . //ab update todo , update toggle nh hai esmn pura ka pura todo update hota. id to laingy todo bhi laingy q k todo h , dlt mn todo nh seedha clck or dlt to bas id chahye. ab togglecomplt mn bas 1 field updatw hoga baqi kam css kregi appna to usky liye id lgega.
    
//     //ab yejo contxt hai esmn kya kya value h or kya kya mthds h meiry pass, ab achi bt ye h k sary todos yhn p hai , to jb bhi mjhy contxt ka access milega , mthd ki funtionty o mn app.jsx mn likhn , lkn jo value meiny todos s lyni h to mera compont jo bhi ho mn values yhn s longa etni khani clear. 
//     //Update: Change a button's color from red to blue.


//     addTodo: () => {},
//     updateTodo: (id, todo) => {},
//     deleteTodo: (id) => {},
//     toggleComplete: (id) => {}

    
// })


// export const useTodo = () => {
//     return useContext(TodoContext)
// }



// export const TodoProvider = TodoContext.Provider

// //ab contxt mn right clck kr k 1 new file bna lain or uska name deain index.js 19;00. aksr flders mn idex file esliye bnae jaati h k hm sara ka sara import idher lylain or jisko bhi kch  imoport krwana ho es file s h lylain. ab chlty index.js mn 

// ///////////////////////////////////////////////////////////
// // import { createContext, useContext } from "react";
// // export const TodoContext = createContext({
// //     todos: [
// //         {
// //             id: 1,
// //             todo: 'Todo msg',
// //             completed: false,
// //         }
// //     ],
// //     addTodo: () => {},
// //     updateTodo: (id, todo) => {},
// //     deleteTodo: (id) => {},
// //     toggleComplete: (id) => {}


    
// // })


// // export const useTodo = () => {
// //     return useContext(TodoContext)
// // }

// // export const TodoProvider = TodoContext.Provider

//////////////////////////////


import {createContext, useContext} from "react"

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: " Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})


export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider