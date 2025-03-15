// lecture # 5 why you need hook and projects 
// hooks prhna h q h , jb india or australia ki cricket mtch series hoti th tb indian btsmn pull shot ki bht prctice krty thy q k ball bounce kha k upr aati thi but jb india banglades ya pak to whn straight drive cover drive ki more prctc krty , ball base line s neechy h rhti thi jb tk aisy scenerios h nh ahy to prctc h q krni , hm aisi situation bnaty or phsty jhn hmn hooks prhna pre, project bnaty counter project 1 btn s up or 1 s down , ab create krty vite s project , vite p ghy or get strted , (scaffolding your fiest vite projct)vite p ghy or copy, trmnl p paste kia 


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   let counter = 15

//   const addValue = ()=> {
//     // console.log('clicked', Math.random());
//     console.log('clicked', counter);
    
//     counter = counter + 1
//   }
  

//   return (
//     <>
//     <h1>Chai aur react</h1>
//     <h2>counter value: {counter}</h2>

//     <button 
//     onClick={addValue}
//     >Add Value</button>
//     <br />
//     <button>Remove Value</button>

//     </>
//   )
// }

// export default App
//js mn mjhy pata h kisi bhi btn p mjhy action krwana onclick mthd likh skta , ab prob arae  h UI updation mn yae pr react ki mjr power aati h appko strt p bataya th 1 btn p clck kr k 5 jaga chexn update hore woi cntrol main react krna chh rae k ui mn kb khn kya chzn update hngi ye app nh mn decide krnga , react ,react krti h variables k updation p esliye eska nam react , 1 variable update hoty h hr jga react krti h . 
//thora r adv ly k jata hn suppose ye counter add or remove vlu mn bhi hota footer mn bhi hota , ab 1 var kitni jaga de rha dikhae , yae mjr prob thi react ki , ab mein add valu kia to 15,16 ,17 yae kam mn bolta js mn kro to hojaty na rfrnce ikhatty uper docomnt.getelm by id , classname, btn mn ja k, text chnge kr k  hn hn smjh ghy 
//ye prob slv krny k liye react n kaha app variables updata kro jo data lyna lao lkn ui mn ill control th game , usky liye react n kch mthds diye usky through data update , 
//gthub p hook batahy sir n documntation 

//hr hook ka 1 job h k mn etna h kam krnga , ziada bari library bnty to bht h moduler bnani prti 1 task 1 h fun k pass asign ho 5 jaga kam nh kry agr 5 kam h to 5 fun s krwaoto code ko updation or debug mn kafi assani mlti,
// ui updation ko react cntrl krta h ,  ab hook ata h yhn s (import { useState } from 'react') , kahi log react ko bhi import krty but ab zroort nh es pury mn hm khn hi react import nh kr rhy phr bhi ye hmara tree parcing krdega ye sara mgc babble s horha , appka _jsx whn s ye uth ja k sara injct krdeta 16:20

// use kaisy krty ab ye jo useState h ye h appki state ko chng krny k liye responsible mtlb chng ye nh k value update kr di es chng ko propogate kia jata h appky ui mn yani dom mn abhi hm ye sikhngy kaisy kia jata next mn hm usky bts algorithm or virtual dom kya h , 
//usestate mn true,false , obj ,arr kch bhi deskty fun bhi deskty . usestate appko dega kya es sy mn kch varible bhi lnga . ab usest s appko 2 chzn mlti arr k frmt mn , [] 1st mtlb 0 index p jo milti h wo smply counter , nam koi bhi rkh skty or 2nd mn wo valu nh fun hota set counter 
//ab    esko aisy update nh krngy counter = counter + 1 nh likhna , obviosly library h to thora kam usy bhi krlyny do to usy pata chlega k appny counter update kia to react reat kreg, ab pury web pg mn ye var kain bhi display horha to mjhy hr jga update krna to koi documnt nh likhaa koi get elmnt by id nh likh sab appny app tabhi psnd aya , k koi rfrnces nh lyny 20;00
// 
///////////////////////////////////////////////////////


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   let [counter, setCounter]=useState(15)
//   // ye cnvntion h k login, setLogin, isLoggedIn/setIsLoggendIn,bas batega k  setCounter jst a mthd jo control krega es var ko counter ko 


//   // let counter = 15
//   //  already uper var declare krdia to uski zrort nh mjhy pata h mein usy update krskta but wo var kbhi bh ui mn propogate nh hoga , var updae but not rflect in ui

//   const addValue = ()=> {
//     // console.log('clicked', Math.random());
//     console.log('clicked', counter);
    
//     counter = counter + 1
//     setCounter(counter) //setcntr jo valu lyta wo new lyta k esmn kya dln 
//     // 15 aya coz mn log phly krwarha update bad mn ki phr mn set counter mn thi jaisy setcounter mn hoti react ander s react krta h trigr krta h automticly pura ka pura dom analys hota h khn khn value chng krni coz state cng hogae , yadd h state or ui ka syncking hm kr rhy th ab ye hua h syn 
//   }
  

//   return (
//     <>
//     <h1>Chai aur react</h1>
//     <h2>counter value: {counter}</h2>

//     <button 
//     onClick={addValue}
//     >Add Value {counter}</button>
//     <br />
//     <button>Remove Value {counter}</button>
//     <p>footer: {counter}</p>

//     </>
//   )

// }

// export default App

///////////////////////////////ORRRRRRRRRRRRRRRRRRRRR

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   let [counter, setCounter]=useState(15)

//   const addValue = ()=> {
    
//     console.log('clicked', counter);
    
//     counter = counter + 1
//     setCounter(counter)  
//   }
  
//   const removeValue = ()=> {
    
    
    
    
//     setCounter(counter-1)  
//   }
  

//   return (
//     <>
//     <h1>Chai aur react</h1>
//     <h2>counter value: {counter}</h2>

//     <button 
//     onClick={addValue}
//     >Add Value {counter}</button>
//     <br />
//     <button
//      onClick={removeValue}
//      >Remove Value {counter}</button>
//     <p>footer: {counter}</p>

//     </>
//   )
// }

// export default App
//ye jo     console.log('clicked', counter); eska thora msla horha h hmn to neechy cmnt mn kisi n ye cmnt kia h sir ko bhi smjh nh arha sir n kia avoid 25;15
//  commnt
//  state chnges are asynchronous thats why the val in console isnt being update immediately . "Asynchronous" refers to a process that occurs independently of the main program flow, allowing other operations to continue while waiting for a task to complete. In programming, this means that instead of blocking the execution until a task finishes (like loading data), the program can move on to other tasks and handle the result later when it's ready,For example, when you make an API call, the program can continue executing other code instead of waiting for the response. Once the response is received, a callback function or a promise can handle the result.
// In contrast, "synchronous" means that tasks are executed one after another, and the program waits for each task to finish before moving on to the next.







//assignmnt h remove value p click krn neg mn nh jae 0 sy neechy nh jae or addvalue mn 20 s upr na jae 
///////////////////////////////////////////////////////////

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   let [counter, setCounter]=useState(15)

//   const addValue = ()=> {

//     if(counter>=20){
//       console.log("counter cannot go above");
      

//     }
//     else{
//       setCounter(counter+1)
//     }
//     ///0r
//     // if(counter<20){
//     //   setCounter(counter+1)

//     // }
//     // else{
//     //   console.log("counter cannot go above 20");
      
//     // }

    
     
//   }
  
//   const removeValue = ()=> {
//     if(counter>0){
//       setCounter(counter-1)
//     }
//     else{console.log("counter cannot go below 0");
//     }
    
  
//   }
  

//   return (
//     <>
//     <h1>Chai aur react</h1>
//     <h2>counter value: {counter}</h2>

//     <button 
//     onClick={addValue}
//     >Add Value {counter}</button>
//     <br />
//     <button
//      onClick={removeValue}
//      >Remove Value {counter}</button>
//     <p>footer: {counter}</p>

//     </>
//   )
// }

// export default App

// lecture 8 react interview question on counter
 //scenerio mn kha jata js portion khtm ab 1 react ki appli banado js mn 1 countr ho 1 btn hit incremnt 1 btn hid decrmnt, to jaisy counter pura krlia usky bd kya hota i tell you , setCounter(counter+1)  
    // setCounter(counter+1)  
    // setCounter(counter+1)  
    // setCounter(counter+1) , ab pucha k jb mn add vl p clk to kitni value hogi , gnrl assumption mn ye 19 hoga , ye react ka 1 foundationl concpt h to . 16 h hua, to ye setcountr ki khani nh blky usestate ki khani h, usestate kya krta jitny bhi update bhejny ui mn blky variable tk mn usko batches mn bhejta , to esi k liye fibre aya k batches mn to pehly bhi bhjty ty but ab or cntrol agaya hmhra fibre jo h difff alg h hmari us k through , to btches mn chzn ko bhrta or 1 sth bhjta kab ye walaa kam krdo ye krdo , kam thk h but ye bhi woi km ko update or ye bhi to 1 btch bnega or app 1 km ko br br repeat kr to batch mn dykhega k sme h to kam h same h to kam h , ye optimize approach nh to aisi situation mn app jb phsty to settermethd h , setCounter mn appko 1 clbck milta setCounter((prevCounter)=>{} )hidden feature h , ye jitny bhi state hoti h ye 1 fun h h ye clbck accept krta h , to app prevcounter dogy to last jo state uski update h appny wps s ussy fetch kr k mngwae h ab ye {} hata dyty wrna return krni pregi value to hm bolngy prevcounter jo h usmn +1 krdo , prev countr es liye k apko pta rhy k esky ander s prev vlu aati h aisa kra zrori h h ye 1 nam h appka jo dil wo nam dn app counter likh do koi dikkt bt nh , ((prevcounter) => prevcounter +1 ) ab ye () etny zrori nh thy to drct h likh dia th , shortcuts hoty  


 
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   let [counter, setCounter]=useState(15)

//   const addValue = ()=> {
    
//     console.log('clicked', counter);
    
    
//     setCounter(counter+1)  
//     setCounter(counter+1)  
//     setCounter(counter+1)  
//     setCounter(counter+1)  
//   }
  
//   const removeValue = ()=> {
    
    
    
    
//     setCounter(counter-1)  
//   }
  

//   return (
//     <>
//     <h1>Chai aur react</h1>
//     <h2>counter value: {counter}</h2>

//     <button 
//     onClick={addValue}
//     >Add Value {counter}</button>
//     <br />
//     <button
//      onClick={removeValue}
//      >Remove Value {counter}</button>
//     <p>footer: {counter}</p>

//     </>
//   )
// }

// export default App


/////////////////////////////////////////////////
//ab ye bunch of pkgs nh update krny k liye app prevState ly rhy ho , prevstate kb logy jb 1 fun appko state dega , promises mn bhi aisa h hota th 1 jana kam chorega to agla wala .then catch kreg, phr agla wala to esi trhn update hota +9*

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter]=useState(15)

  const addValue = ()=> {
    
    console.log('clicked', counter);
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    
     
  }
  
  const removeValue = ()=> {
    
    
    
    
    setCounter(counter-1)  
  }
  

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>counter value: {counter}</h2>

    <button 
    onClick={addValue}
    >Add Value {counter}</button>
    <br />
    <button
     onClick={removeValue}
     >Remove Value {counter}</button>
    <p>footer: {counter}</p>

    </>
  )
}

export default App















