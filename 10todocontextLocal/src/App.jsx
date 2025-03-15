// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <h1 className="text-3xl font-bold underline">
// //     Hello world!
// //   </h1>

// //   )
// // }

// // export default App

// //ye hello world ankhn mn chub rha h to hmn waisy to pkg mn index.html mn h classes likh deni thi khair esy bd mn dykhty 

// //sabsy phly hm dykhngy kya kya additionl chxn chahye to bataiye pkg.json mn chahye kch , kch nae. 

// //cntxtApi dirctly availble hota h , as a api frmt mn as a hook frmt mn , to drctly usi ko use krskty. src mn folder bnaya cntxt . cntxt k 2 ways batae thy 1 use krngy now create file todo context.js , ab todo k cntxt mn hmn return mn jsx nh mil rha to js
// // to ab 1 create context lgega or 1 use cntext 
// //cntext mn ghy ab
// /////////////////////////////////////////////////
// /////////////////////////////////


// // 21;25 ab sbsty pehli chx jo todos appky pass cotext s ahngy khn na khn store rkhogy, store rkh k ui bhi chng horha h , hn to state mn h to rkhogy 


// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'
// // import { TodoProvider } from './contexts'

// //by default hmny empty arr rkhi h state , q k empty arr nh hoga to null hoga to problm hogi to atleast empty arr mn mjhy pata lg jaega k agr loop lg rha h to usn 1 bhi value nh to us hisb s kam krskta 
// //22;00 ab funtionlity add krni h to chahye hoga todo provider , ab ye provider provide bhi to krna chahye , to usky liye value 

// // function App() {
// //   const [todos, setTodos] = useState([])
// // //q k hmny import krwalia h to seedha yhn {} es trhn likh skty 1 trhn s destructure kr rha hn mn.
// //   return (
// //    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}} >

// //     {/* dhiyn rkhny wali bt ye hai k ye jo uper todos hai ye proprty h to values arae h or baqi sary mthds h to mthds arahy  */}
// //    <div className="bg-[#172842] min-h-screen py-8">
// //                 <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
// //                     <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
// //                     <div className="mb-4">
// //                         {/* Todo form goes here */} 
// //                     </div>
// //                     <div className="flex flex-wrap gap-y-3">
// //                         {/*Loop and Add TodoItem here */}
// //                     </div>
// //                 </div>
// //             </div>
// //    </TodoProvider>

// //   )
// // }

// // export default App

// ////////////////////////////////////////

// // import { useState } from 'react'
// // import './App.css'
// // import { TodoProvider } from './contexts'

// // //ab mthd bnaty hn 

// // function App() {
// //   const [todos, setTodos] = useState([])
// //    //ye jo hamara todo h ye jana chahye es todos waly arr mn but maybe it has already existing value so we call settodos, but if you pass like setTodos(todo) to purani sari value dlt hojae or sirf 1 new value set hojaegi, hmn purani state ka acces chahye k pehly kitni todos thy sir ki wo wali video interviwe wala ques jo update ki th 1 value 16, 17 ,18 woi wala exact concept kam ahega . 
   
// //    //ab state ka acces chahye to call bck lyty . purana arr lylo (prev) then new arr bnalo purani value bhi dal do or new bhi , purani dalny k liye woi destructure , clasc js concept value ko spread krdia or new todo

// //    ///////////// ab appko todo bnana prega , agr app cntxt mn dykho to hmny todo 1 obj bnanaya h ye nh k str add kardia , agr appko strng add krna to kro but lkn id nh hogi to loop lgany mn prob ahegi , to ab ye 3 value hai to hm laingy 1 obj esmn id dnga , then baqi jitni bhi value hai wo hm ...todo lylyty. todo bhi appny app mn 1 obj h to wo meiny pura spread krdia or 1 id whn inject kardi
// //   const addTodo = (todo) => {
// //     setTodos((prev)=>[{id: Date.now(), ...todo}, ...prev])

// //   }
// //   //ab contxt meinsy dykha sir n k addtodo kam kaisy krta todo ko kam krny k liye todo chahye hoga , ab todo value h, str value h, state s nh aya q k state mn sary todos h,  q k yaad rkhn jb appny values li h to appny sary todos diye hn, to state mn hm values ka zikkr kr rhy hn , ye jitni bhi state kar rhy ye sb manage kr rhy hn , individual todo appky pass nh h abhi. ye sirf add krny k liye funtionlity hm define kr rhy hn kahn s value ahegi wo pata lg jaega appko abhi 
// //   /////
// //   //update todo
// //   // esko 1 id or todo chahye, q k update krna , ab konsa id konsa update ho , to you should know k todos hmara 1 arr or loop laga k find krna hoga k, konsi id waly arr ki proprty ko app update krna chahty ho or usmn hm appna naya todo add krdaingy . woi setTodos call kia or i know he has clbk , prev value lyli or clbk lgadia , return nh krna to prev value p loop lga dna map lain ya for each , map lgya to hr 1 todo mil jaega , hr 1 todo 1 obj h or obj mn 1 id h , yhn ye he 1  individual todo mil gya (prevTodo) thn clbk lia to hr 1 individual prevtodo mn 1 id h yhn p hr obj k pass 1 id h === k sath id match krlyty . last id wo h jo update todo mn gae hui h , agr true h mtlb id mil gae h to naya todo dal do , agr nh mili to as it is purana rehny do , prevtodo as it is rehny do kch chng h nh kro 
// //   const updateTodo = (id, todo) => {
// //     setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))) }

// //     //again settodos cal ki , appko pata hoga chahye k state mn ye todos arr h or esmn bht si values h , ab mjhy simply find krna k konsa todo h jo id s match kr rha h taky new todo add krdn , to meiny (prev) prev state arr ki li to mjhy arr mil gya hoga arr milty h meiny uspy map lga k loop lgya now appny kha hr 1 elmnt p jao or uska id find kro , to mjhy pata h prev.map((prevtodo)) prevtodo map mn hr 1 elmnt h to pehly 1 p jaega phir 2 ,3 or meiny ussy ye question pucha \
// //     //delete funtionality
// //     // dlt k liye sirf id chahye hogi woi settodos prev ka acces to lyna prega thn map lgana hoga but map yhn acha syntax nh h jb bhi app dlt krogy , to dykhn ye appky pass original arr hai, ab appko bnana ya naya arr . naya arr mn sari value honi chahe jo id dia h wo to nh hona chahye baqi sb honi chahye. dlt krna h to dlt ka mtlb h pura jo group h usmn 1 value nh h baqi h. filter jo h ye true statemnt p work krta h ,  usky liye bra acha mthd ata fltr js mn . todo .id match nh karni chahye hamari id s , jo jo match nh krega wo ata jaega or jo match krega wo whn reh jaeg wo return nh hoga kabhi 

// //     const deleteTodo = (id) => {
// //         setTodos((prev)=> prev.filter((prevTodo) => todo.id !== id ))
// //     }

// //     //35;00 ab sbsy interstng or business logc wo h ye chkmark , appko es todocontext mn todos mein es obj k andr jna hog, or ye completed value h esko toggle krna hoga yani true h to fls krdo fls h to true, update mn bhi eisy h kia th map lgya th aisy h almost kam hoga , settodos p aty arr h mjhy pata h to arr ki hr 1 prevstate ka mjhy state chahye , then return na krna pre to {} hatata now hr 1 prev p mjhy map lgana to hr 1 map mn value ka access mil jaega prevtodo. to loop hm lga rhy to phly find krna hoga , to kya wo prev todo woi wala h jo id appny mjhy pass ki h , filter mn dykha jo id ka na ho . ab match krna tbhi to update krnga . ques puch lyty , true mn hmny kia , baqi sari values to as it is rkho bas 1 value chnge kro to spreadOperator to use hoga. to todos hamara obj h to h {} phly sari values lyli, sari values s mtlb h wo todos ka jo obj wali values thn sari agae. ab esmn s jo chnge krna coma lga k chng krdo , completed esko overwrite krty 1 trhn s to completed: !true false or false trues. to meiny pehly sari values lyli thn overRight krdia . 

// //     const toggleComplete = (id) => {
// //       setTodos((prev)=> prev.map((prevTodo) => prevTodo === id ? {... prevTodo, completed : !prevTodo.completed}  : prevTodo))
// //     }
// // //yhn appka basic context ka funtionality khtm hogya h 39;44
// // //now start local store funtionality . 
    

// //   return (
// //    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}} >

   
// //    <div className="bg-[#172842] min-h-screen py-8">
// //                 <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
// //                     <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
// //                     <div className="mb-4">
// //                         {/* Todo form goes here */} 
// //                     </div>
// //                     <div className="flex flex-wrap gap-y-3">
// //                         {/*Loop and Add TodoItem here */}
// //                     </div>
// //                 </div>
// //             </div>
// //    </TodoProvider>

// //   )
// // }


// // export default App
// //basic context funtionality khtm hogya. 
// //react ka local storg , javscript ka local storage sH koi alg nh h , wo browser ka local storg hai ab app react k throug access kro js k ya  view k to kch hai nh alg, w3 school mn dykhogy to setItem or getItem 2 h example h , or kch h bhi nh. ye allow krta key values mn sari chzn rkhna bs 1 issue ata eska values esmn rkh dyty h na to wo sari strng format mn hojati h , to values lyty time dyty time kahi br jSon mn apko convert ya deconvert krna prta . //
// //jb value whn s logy to sari strng h json mein convert krna hoga.
// // wo khud bhi json save nh krpata str save krta to usy value str mn deni prti 41;00
// //ab jaisy h meri appliction load hoti to appny hoskta h usmn todos add kr rkhy ho , to todos h yhn to wo todos sbsy phly load hojany chahye , to application jb first time appki load hoti to konsa aisa mthd h jo query krskta h localStorg s , ya mein koi funtion bna dn , k ye wala fun call kr k loclStorg mn jao or sari values ly k ao jo bhi values usky andr h or usko es state waly todos mn insert krdo . useeffect mthd h .



// ////////////////////////////////////////////

// import { useEffect, useState, } from 'react'
// import {TodoProvider} from './contexts'
// import './App.css'
// import TodoItem from './components/TodoItem'

// function App() {
//   const [todos, setTodos] = useState([])

//   const addTodo = (todo) => {
//     setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] )
//   }

//   const updateTodo = (id, todo) => {
//     setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))

    
//   }

//   const deleteTodo = (id) => {
//     setTodos((prev) => prev.filter((todo) => todo.id !== id))
//   }

//   const toggleComplete = (id) => {
    
//     setTodos((prev) => 
//     prev.map((prevTodo) => 
//       prevTodo.id === id ? { ...prevTodo, 
//         completed: !prevTodo.completed } : prevTodo))
//   }

//   //localStorage na app directly access krskty ho b tk app react mn ho , jb tk app server side rendering ki bt nh kr rhy , q k sara kaam server p hogya to browser p kbhi ahy h nh to local storage kaisy kam krega .
// //set krty time key kya rkhofy or value kya rkhogy dono btana hog or get krty time us key ka am rkho or value mil jati , 
// //get krna pehly zarrori h , localStorage.getItem('todos') ye appkovalues dydyga return app esy console log kr k dykho , lkn ye sari value hoti h str mn or hmn chahy json m. q k json h to h jo actally mn struct preserve rkhyga.




//   useEffect (() => {
//     const todos = JSON.parse(localStorage.getItem('todos')
//   )
//   if (todos && todos.length > 0){
//     setTodos(todos)
//   }
//   //bas etna h h localStorge 50% hogya , 1 line or sikhaong bacha hua hojaeg. ab , ab kya krna value ko set krna agr usmn kch ho to , conditionl check rkh lyty , todos h k nh agr h h nh to appli crsh hojaegi or 1 or query puch lyty appka man hoto pch lo , k jo appky pass todos ahe hn kch length h bhi k nh , q k mjhy pata h wo arr hai , han hmny bola h wo json hai lkn EOD todos array h h , arr k andr object h . to ye structure bhi mjhy preserve krna h to bhi json s h preserve hoga , strng mein nh milta ye structure . zaroori nh json ka mtlb {} curly braces h ho , json ka mtlb arrays bhi hosta h espy kbhi or chrcha . , or 1 swal krta k lenth 0 s bari h to h hm usy set krn warna q he , empty to ye pehly bhi tha to kya hkhas kr rhy thy hm . ye agae values ab hm settodos ko call krngy or app ye todos lylo ye kam hogya 1 useEffect mn kya hm multiple useeffect use krskty. 
//   // 45;00 ab hm 1 or localStorage p kam krngy dykhain ye to kam  h k jb appny yhn application load kari sari values agae , lkn 1 or kam h meiry pass jaisy h ye sari values yhn todos mn add horae h mein usky bd usy local storg mn add krwana chahta hn , localsto mn kam add krwana chahta jb ye yhn todos mn jhn , state waly todos mn . halanky jaa contextApi k through rae h EOD context api bhi to yhn p provider hai he to ye provider mjhy todos de h rha h , jaisy h usky andr value chali jhn whn sy value mjhy mil jaegi state waly todos mn , or jaisy h esmn kch bhi chnge ho state waly todos mn to wo value mjhy localStorge mn add krni h . ab appky mind mn ahega k useeffect bnaya to h to esmn 1 dependency arr mn dal dyty tods or 1 or methd likh dyty , hn krskty hn lakin problem kya hogi k usmn koi bhi chnge ahega na to ye usy wapis s get bhi krega to mn nh chahta k ye pura ka pura method run ho, or optimize option p bt krngy hm 1 option jo k khn s bhi ghlt nh h k app 1 or useEffect likh skty , kahi application mn 1 s ziada bhi useEffect hoty hn  


//   }, [])

// // 46;00 ab esmn 1 to methd h or 1 dependency arr jo k kam krega , depndency arr mn woi state wala todos h jo kam krega or kya krwana chahty app to woi loclStorg lyty , pechli br get item ab setitem jo key lyty time rkhi thi woi dety time yaad rkhiyeg , value string mn h deni h , lkn mjhy structure pata h mein to array ly rha hn to mera local storg ly ga nh , hn jee to app json mn mthd milta stringyfy ye sb str mn convert krdeta sbko . or todos pass krdi , chahyye to variable mn store krdo lkn kya h krngy variable ka, funtionality appny dykha kafi complex krdi hmny 1 todos mn 

// useEffect(()=>{
//   localStorage.setItem('todos', JSON.stringify(todos))
// },[todos])
// //47;00 ab app dykh rhy hmny jis trhn esko bnana h localStorage mn to ye 2 useEfeect appny app hr bar kam kr rhy hn appko kch nh krna h , kisi user ko funtinality ya jo bhi developer kr rha usy kch sochna nh sab automtc horha , kisi bhi cmponnt ko jo bhi design kr rha h us component waly ko bhi kch nh dykhan h q k add to ye sari funtionality to mil h rae h value mein , to app contextApi s seedha whn p lylo jis componnet mn lyna chaho . now we mov to make component 48;00, folder comonnt and thn file todoform.jsx and todoitem.jsx, and index.js taky sb chxn ko 1 sath lylo, kch nh import kr k unhn export krdo . 49;00



//   return (
//     <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}} >
 
    
//     <div className="bg-[#172842] min-h-screen py-8">
//                  <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
//                      <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
//                      <div className="mb-4">
//                          {/* Todo form goes here */} 
//                          <todoForm/>
//                      </div>
//                      <div className="flex flex-wrap gap-y-3">
//                          {/*Loop and Add TodoItem here */}
//                          {todos.map((todo) => (
//                           <div key={todo.id}
//                           className='w-full'
//                           >
//                             <TodoItem todo={todo}/>
                      
//                           </div>
                          
//                          ))}
//                          {/* yhn funtinality thori interestng h , yhn appko krna prega jo app context s todos lahy thy uspy loop lgana hoga , loop k andr hm 1 todo item ko prop bhi pass krngy or usko call bhi krngy , todos.map (todo) hr 1 todo k pass ye jaega , ab yhn curly brces ka khyl rkhna q k curly braces lagae to return krna prega return keyword use krna prega, agr appko man nh to app paranthesis use krskty eska mtlb autoReturn hota h , esmn hm add krlyty value sbsy phly ye div call kia . ab mjhy pata h loop mn ye div repeat hoga hr 1 div unique h k nh ye kaisy pata chlega , us time p keys kam aati agr keys use nh ki hogakch nh warning dega lkn performance agy jaa k etni degrade hojaati h k jiski koi had nh 
//                          qk react ko pata nh h dom mn kaisy chnges kry hoskta h 3 todos 1 jaisy dkhty ho lkn ya gurantee h k wo alg h hain to uski hmn gurantee ki gurantee leni prhti h hmn , ab app khogy k arrays h to h to map mn mein yhn index value dedeta or index s lylyta to index s acha performance nh aata infact usky kahi drawbacks bhi h or pitfals bhi , index ko avoid kro. lst option h to krna prega . agr uniques ids h ya database s koi value aarae h o ids h lo. q k man lo agr appky database s 3rd value hogae ghyb to arr to restructure krlega par appki keys ko sabko restructure krna prega or agr unique ids h to 1wo elemnt ghyb hojaega , ye thora issue hota h 
//                          to ye to hogya ab esmn 1 clssname add krni pregi q k notes mn add ki thi or value mn todoItem call krlo , etny s kam nh hoga usy 1 componnt prop pass krna hoga  1;09;00 */}
//                      </div>

//                  </div>
//              </div>
//     </TodoProvider>
 
//    )
//  }
 
 
//  export default App

 ////////////////////////////////////////////////////

 import { useState, useEffect } from 'react'
import {TodoProvider} from './contexts'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] )
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))

    
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    //console.log(id);
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  



  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App

//// ab dykhty hn , to jb reloud kr rhy hn to yae reh rha ye sabsy important chck h hamary local storge k liye baqi to ui fanciness h , 1;10;00, choty moty bugs thy , app rightClk kr k inspect krskty or phir application m jaa k local storage mn appko storage milega , to jaisy jaisy app es appli mn likhogy wo whn update hoti jaegi

//lecture # 15 REDUX TOOLKIT CRASH COURSE
//redux ki informtion k liye uski journey ko bhi or implementation ko bhi smjhna zaroori h , react mn hm sara kam funtional s kr rhy jo bhi component bana rhy 1 funtion bana k export kr derhy hn, lkn react mn kch kam classes base p bhi hoty hn , class base cmpnnt p bhi bnty hn , lakin ziada tr log esy depricate krna h chahty hn, almost sari organization h migrate hogae kch agr bachi hui h to wo bhi chah rae kch achy engineers bula k jinko funtin cmponnt ki achi knowlege ho wo bhi transition kr jhn . 

//enki knowlege achi bt h but priority p nh rkh skty , 1 classBase componnt h unmein s or 1 classic redux kaisy kaam krta ye bhi usmn s 1 topic h , ajki date mn jo redux h wo thora modernize redux h jisy hm RTK reduxTOOLKIt khty , lkn ye eventual upgradation h rdux ka , almost similar to react h eski bhi interstng history , jo hmny contxt , cntxt api prha ye help krega redux ko janny mn or bri asaani s smoothly app RTK p transiton hojaogy , koi bhi projct RTK mn bna paogy etni gurantee h, jaisy h app redux serch krogy redux-toolkit.js.org, or redux serch kro to redux.js.org.

// jaisy hmny dykha th k react h or 1 h reactDom , react appny app mn alg library h or reactDom appny app mn alg library , browser p reactDom or mobile p reactNative, esi trhn gameDevelompmt sbky liye alg alg h . 

//esi trhn Redux bhi appnyapp mn 1 stateMangmnt library h.

//redux ko jisbhi FrameWork mn appko implemnt krna ho esko eska 1 trhn s saga bhai mil jata h esko , to whn bhi appko reactREdux mil jaega , redux ko khn bhii implemnt krskty ho app react mn , jis trhn react ko kam mn lyny k liye react bhi chahye or react dom nhi , esi trhn agr redux ko appny react mn use krna h to redux to chahye ga h wo to core library h lkn uska bridge bnta h taky app usy react mn use krpao usky liye react Redux hota h , 

//redux appnyapp mn independent library h usko connection dyny k liye react k sath react-redux mil jata h , 
//5;00 redux or redux-toolkit dfrnce , bts
//agr mjhy outer s inner mn prop pass kra th to andr s andr s andr, tb inner ko wo propert value milti thi , ab conntxt api mn hmny dykha k sari chxn center mn store krlo jisko bhi chahye wo 1 hook s lylo hm use nam s 1 hook bna lyty thy or uski value llylyty thy k hmn cntxt use karna or provider s wrap krlyty thy , kch esi trhn ki kahani thi , ab ye jo kahani h na usecntxt ya cntxtapi, ye kahani actually mn etni purani h cntxt api to bht bd mn aya , ussy phly kafi kch develpmnt hogya th ab kya kya dvlpmnt hua  wo dykhty, redux s bhi pehly th flux th 6;20, flux jo th woarchietecture fb n design kia th SM ki prob unhn bhi aarae thi k khn prop pass krn , khn extra pass horhy jo zaroort h nh h , flux bhi to pata hona chahye q k ye sab drive to flux s h horha h , redux purana h to flux bhi to h 2noka knowlege hona chahye ,

//sabsy phly jo architecture design hua fb mn uska nam th flux , flux ki khani ye thi k 1 to sabsy bri prob thi sM , 1 central store hona chaye , sara data mn whn s lylo , global value 1 trhn s , 1 or kam jo hota th wo tha data flow ka , abhi jo cntxtApi hm use kr rhy usmn bhi dataflow etna strong nh jitna redux mn h , dataFlow s mtlb data 1 h trhn store k andr jahn or update hojae or jb mn value lo to value es trhn s lo, to ks trhn value store hogi or kis trhn mn value log, eska 1 structr or machanism hona chahye wrna prob hojaegi , apny dykha jb hmny usecntxt use kia th to jo bhi arr mn value th , phly usy spread kr rhy thy q k hmny purani values khoni nh thi , agr mn bhool jao to sari value app overwrite krdogy , koi na koi str hona chahye jismn automatic chzn manag ho or mn bas arr mn value daal rha ho , naya arr create kr rha ho to appny app naya value ml jae, mjhy chinta nh krna pre k uski state ko spread karo purani  value lo usy cheron mt , ye sb bht dikkat wala h , to es liye flux mn data flow p bht kam kia , ab flex ka dataflow bhi etna acha nh th.

//1 cnfrnc mn whn redux introduce hua bht better version nh th phir bhi , kch terms ae single source of truth hona chaye yani 1 h store hona chahye , state ko read only hona chahye yhn p 1 line famouse hui thi redux mn us line ko bolty thy you should never modify/mutate your state ye cncpt un ny dia th , or chnge jo state mn hony chahye wo funtion k through hony chahye drctly nh hony chahye.changes should be made us pure functions ya jinko hm reducers bolty hn k reducers k through h hony chahye , aisa nh k kisi n bhi funcin lia usny value overwrite krdi to wo thora problamatc hojata h k appny fun ka refernce lia appny kch bhi functionality usky andr daal di , funtionality reducers k through h jaani chahye , agy jaa k bht h acha support dega , usky elwa sab kam proper machanism k through hoga eski shuruat redux mn hogawe thi to jb redux aya na to logon n kafi appreciate kia q k jtni bhi js libraries thi unky sath achy s stickup horha th , or redux srf react ki propritory nh thi , redux independnt library run with react also view and also any js faramework p lgana chaho , 
// 
// //esi liye bola jata 'A PREDICTABLE STATE CONTAINER FOR JS APPS' , flux s journey start hui or redux to chl rha th to 1 reduxThunk nam ka 1 concept h , kch middle wears thy jo appko debugging mn help krty eski alg tool kit mtlb app chrome mn jaa k dykhogy appko chromeAdones bhi ml jaengy to appko redux dev tools mil jaengy , to ye kam redux mn kaafi mhnt lgti thi krny k liye , cntxtApi mn hmny jaisy time lgaya , redux mn to ussy 3,4 gunah lgta th , phir middle weas any lgy redux thunk aya redux saga aya jnky khi sideeffct or problms thy , phir aaya redux-toolkit, ye th batteries included , hazar setup ki need nh smple sa flow derha hn or chzn internally khd s manage. 

//ab kya h abstraction ziada h redux-tool-kit mn esmn appko store bnany ka bht h easy treeka milta h , phly kafi problem hoti thi configuration ziada thi , wo kahi na khi copy paste appko snippt mn rkhna prhta th or whn s app lyty thy but ab appky builtIn middle wears h , appka slicing enhn ny naya wrd introduce kia h k app reducers ko kaisy rkho to wo bhi defn kr rkha h , infct appky redux thunk type k mddlewears esmn already included hoty. 13;00 end of redux theoritical story history here. 

// concept p aty jo app redux or RTK dono mn h dykho gy , sabsy phly cncpt store ka , jhn s hm sari ki sari chxn single source of truth s lylyty , to 1 store bnahngy global type s man lo or whn s sab ch
// zn laingy 
//thn reducer hota h , reducer kya hota appko store mn kch bhi chnge krna h, konsy store mn chnge krna h q k oath ka store, product store, mtlb store k ander mini store hoskty , store to 1 h hota h , to reducers kaisy control krngy khn s krngy to wo funtionality wala part reducers k through h jata h , educers kya h object h sab kch . 

//usky bd 2 h mthd appko parhny 1 hai useSelector  or useDispatch , nam s h pata chl rha selector jb koi value slct krni store s , dispatcher jb koi vaue bhjni h . 

// im not focus here of my ui look but concern my project should be run smoothly. sir n es project mn tailwnd use nh kia 