//store khn rkha jata ye sb opinated chzn hai appki marxi jhn rkhn, store ka 1 process h sbsy phly configureStore ly k ana h q k woi mthd h jissy km krta h , ye core redux s aya na k reactRedux s. 

//store bn gya h but not properly ready for use , but hm es mthd ko use krty huey 1 variable export krlyty hn 

// import {configureStore} from '@reduxjs/toolkit'
//ye 1 obj h lyta h appny andr most of the chzn appny app mn 1 obj h leti h , pr ye abhi puri trhn eady nh save kr k close krdyty . 
// export const store = configureStore({})

//bas 1 store bnaya 1 mthd mil gya , hmny us mthd s bna lia jaisy useState etc thy waisy bnalia. 

//ab next step app bnaty appny reducers , RTK mn jo reducers bnta h wo thora alg h hm esy bolty slices , nam mn kch nh but hm naming convention reduxTOOLKIt ka h use krty hn. 
//ab folder bnaty and name features , in features alg alg features hoskty login feature, todo feature , product feature, abhi hm todo bna k dykhty taky hmn andaza ho ,
//  features fldr/ todo folder/ thn file todoSlice.js , file k pechy slice ka koi khas role nh h esy app todo.js bolskty thy but namng cnvntion h sabko pata rhy appny reduxtoolkit use kia bas esi liye liha , now move on todoslice.js
//////////////////////////////////////

import {configureStore} from '@reduxjs/toolkit'

import todoReducer from '../features/todo/todoSlice'
//ab es obj mn key , value daal do , key dalni h reducer waisy to reducer ki lambi list h but hmary pass abhi 1 h hai , agy jaa k hm multiple reducer ko kaisy kam mn lyty dykhngy


export const store = configureStore({
    reducer: todoReducer
})
//36;00 store k liye hmny sari mhnt ki thi, actually mn appki funtionality asan hogae , q k logc part to appny yhn likh dia todoslice.js mn , ab logc part hoskta h appny kisi or file mn likha ho whn s import kr k wo sab alg kahani 

//ab funtionlity hmari hoga h to 1 to hoga todos mn addtodo or 1 todo ki list , 
//addtodo sikhega k store mn data bhjna kaisy h 
//dosra jo h hamari todos ki puri list h ye usy dlt krny ki funtionality h remove todo wo ye btaega  k hmn data kaisy send krna h , lyna or send krna dono ajaega 
//37;;00 esi k liye hmny actually mn discuss kia th useSelector or useDispatch , to reducer sikh lia store skh lia ab bas useslctr or usedisptch reh gya 1, 1 kr k dykh lngy 37;00 ab cmponnt bnaty hn  to mn kisi bhi cmponnt mn state ka access ly skta ho. 37;00, 2 componnent liye hn 1 addtodo.js or 1 simple todo.js