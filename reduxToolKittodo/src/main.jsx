
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { createRoot } from 'react-dom/client'

// import { Provider } from 'react-redux'
// //ab laingy store ab store ko hmny default to export kia nh h to app mn store s 
// import { store } from './app/store.js'

// // createRoot(document.getElementById('root')).render(
// //   <StrictMode>
// //     <App />
// //   </StrictMode>,
// // )
// /////////////////////////////////
// // strict mode s hata k provider s wrap, wo concept yhn bhi apply hota k esko value chahye frq ye h k yhn store bolty hn prop ko or q k hmny uski value ko bhi store bola h jo hamary store ka nam h wo bhi store h bas yae 


// createRoot(document.getElementById('root')).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )
///////////////////56;28 
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {store} from './app/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)

//ab interstng bt ye h k ab rightclk krn or reduxDevtools h yhn p , inspect p bhi ajata h automaticlly , >> ye dikhega yhn sara mamla h ghazab, 57;00  ab yhn p appky pass state h ,esi k liye hm store or state kh rhy thy , to state mn jo todos h esy dropdown kia to 0 value 1 value , helloworld mn to id 1 arae baqi jo loop lga k kia to ye nano id aarae . text bhi mil rha ab agr or proprties hoti to wo bhi mil jaati , 
//action bhi dykh skty payload mn kya jarae , type kya h "todo/addtodo" q k meiny import kia h wo action . 

//interstng bt esmn h k app esy trace bhi krskty ho khn s value kya horae kch problem h ye stakeframes bht avhi bnata h debugng mn bht help krta , q k jaisy jaisy redux jaega chxn or cmplex hoti rhti  , jitni js ki knowledge appki utna indept q k ye fun appny app call nh horhy enhn apply lga k cl kia jaraha arguments pass kia jaraha , ab ye state ki br ye redux toolkit mn milta h , k kaisy timeline chng hui us puri application ki , kya interction hua or kis interctin p uska log monitor, network conditon kya h konsa wala mera reducer ziada time consuming h jb mn database ki request ly rha hn ye sb interestng  h , or bhi bht kch h espy crashcourse bn skta .

//summary
//redux 1 alg chx hai or react-redux 1 alg chz h , redux core library or react-redux uska implementation h , wiring k liye taky react or redux ki aps mn bt cheet ojae, RTK jb hm use krty to kafi kam hamary automatically hochuky hoty , jo purani kahawatain  k never mutate your state , react jb bhi prhogy , en sabki mjhy rtk mn need nh q k ye automaticlly kam hoty hn bts abhi hmny state mn dykha , wo jo state thi na abhi hmny dykha k hr br appko wo replay dykh rha woi reason h , phly ye manually krna prta th . 
//start khn s krty store bnany s , 1 appliction ka 1 he store hota h lkn lkn meiny 1 app aisi bhi dykhi h mery LCO startup mn jhn hmny 2 rkhy store , blkul against h , lkn hamri app etni bri thi millions mn user thy to aisa krna para exception sb jaga h achi practice nh thi hmny bhi eventually ja k 1 h store kia . interviwe mn kbhi mt bolna ye . 

//application ka 1 he store hota h jisko bola jata h sigle source of truth , hmn kya kya chahye 1 configureStore chahye  , jissy storeconfig hojata h jismn obj h , key hamary pas 1 h keyvalue property h multiple bhi hoskti h . ab next stem appko esmn sary reducer introduce krny hn store mn jb bhi value update hogi wo hr trhn s value update nh lyta h kbhi nh lyta ye dataflow h nh h . dataflow k liye usy awareness chahye k mjhy btao k sary reducers khn h , to reducer to banahn nh to mein gya features mn todoslice, ye syntax h k hm features ko slice khty hn , 1;3;00 slice banani h usky liye methd dia hua h create slice , slicebanay k liye majorly 23 chzn chahye hoti h 1 name chahye hota 2sra initialState or 3sra us reducer ki list , jo jo kam krny waly ho . sbsy phly initial state bnane k bydefault kesa hona chahye, hoskta h todo empty arr ho jesy useState mn krty hn kch to state hogi na variable mn kch to dalogy na , number dalogy , id dalogy , obj logy , arr logy to hmny lia h arr . 

//nam dia todo or phir initalstate hmny dedi or phir dia reducer jo k 1 obj h usmn app jitni chaho key or funtion dal skty , //key value nh// key funtions . ab es funtion mn appko state or acction milta , state mn updated state value in the store milti , or action mn action.payload . ab 1 todo bnaya or action.payload mn sy todo ki value nikal li jo bhi text th or d meiny nanoid s bnali . ab mjhy pata h state ka access h h state mn push krdo , phly aisa nh hota th phly mein state s sary arr nikalta unko spread krta phir appni value dalta cntxtapi mn mein aisy h krta hn . q k whn state preserve nh hoti yhn preserve rehti h , to whn jo ... prob thi yhn kch nh . 
// update funtionality app karo  sabsy easy rhega k yhn p 1 btn lagao dlt k brabr mn , jaisy h update krna wo load ho 'enter a text mn ' or phir addTodo jo araha h text mn uski jagah hojae update 1;05;00

//ab export mn appko ndividual futionlity chahye 10 reducers h to 10 krny prngy , q k appko nh pata k konsy cmponnt mn konsa use hojae or 1 chahye appko sary reducers ka mainSource export kna 

//mainsource es liye kr rhy q k hmn esy kam mn lyna h appny state k andr store k andr , to mein store mn gya or bola ye h reducer ki list or yhn sara kam hochuka th , 
//ab cmponnt mn bhejy k liye h dispatch , es dispatch mn jo bhi reducer h , dispatch k through bhej dia 

//ab values lyny kaisy hn to lyny k liye slctr h slct krlo , to q k value slct krni h to khn s to krogy na , bhejty time to kch bhi bhejo smhal laiga state jp bhi h store , lkn lyi h to state ka access chahye to clbk mein state ka access milta h usmn s jo bhi pck krna krlo , hoskta h state mn appky pass todos ho , auth ho , product ho , categories ho agy ja k bht bry bry stores bnty to jo bhi chahye wo variable mn lylo , variable mn aagae value to phir to pura js h , na koi redux na react pure classic vanila js h , lgao loop map  or value ko display krdo , ab rmv todo kya h action lyna h value bhjni h usedisptch bhejty time to appko id dyni hogi to loop lga h rhy hn jb 1, 1 individual access h h hmary pass key mn bhi to usmn bhi de h daingy . 

//reduxtoolkit s meiny acho acho ko bhgty ykha h 
//lecture # 15
//what is your choice for mega project in react
//app.jsx mein likha h lecture 15 ka start