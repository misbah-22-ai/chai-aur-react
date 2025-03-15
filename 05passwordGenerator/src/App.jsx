// lecture 10 , useEffect, useRef and useCallback with 1 project 
//koi na koi mtd run kr rha hoga jo k ye rndom text de rha mjhy paswrdGenertr h basically to kch na kvch bydefault ru horha hoga , dosra thought k jb mn slider ko cher rha hnto tb bhi text genert horha h , kch na kch aisa mthd hoga ye paswrdgent kr rha jaisy h mn slide ko kr rha to wps s run , numbers p meiry pass mn number included h to ye bhi koi mthd hoga or chararcter ka bhi koi mthd hoga , mjhy page bhi rfresh nh krna prha , 1 chz seekhny wali h k agr 1 h mthd ko etni br run krrhy to basically run krdogy ya koi optimize taeeka h run krny ka , DSA mn to hm bht bt krty hn optimize way ki but agr us dsa ko yhn implement h nh kia to kya faida , to yhn concept ata memoizationn ka k react automatically hmn kuch aisy hooks deta h jinko use kr k app aisi situation mn chxn ko optimize krskty ho mthd 1 he hai run hona h lki app jitni chzon ko yaad rkh saky memory mn rkh skn to benefit hamara h esi ko hm sbsy phly take down krngy , 
//ab yhn h copy ye interestng hook h yhn p or eska best use yhn kia jata k jb app esy krty ho copy to ye txt h copy hua h , lenth number bhi hoskta th, to yae input field copy krna to wo kaisy ye sbsy interestng h , 
//hmny 3,4 chxn ko yhn lia h sabsy pehli to kis trhn hm chzon ko pg load hoty h krpahn , phr kch depedencies hlike number box h , lenght ka slider bocx h , unpy kch bhi cherchar s wo mthd dobara run hota h then we learn how to optimize , abhi hm copy kr k targt kr rhy hoskta h apky alg sceerios or situation ho  to na k input field blky koi bhi elmnt hoga to app usko trgt krna ajega ye sara kam hook s hota 
///////////////////////////////////////////////////////////////////////
// import { useCallback, useEffect, useRef, useState } from 'react'

// const { useState } = require("react")


// function App() {
//   const [length, setLength] = useState(8)
//   const [numberAllowed, setNumberAllowed] = useState(false)
//   const [characterAllowed, setCharacterAllowed] = useState(false)
//   const [password, setPassword] = useState("")

//   //useRef hook
//   const passwordRef = useRef(null)

  ///////////////////////////////////////////////////////

  // In your loop, the default `length` is set to 8 using `useState(8)`. Here's how the loop works:

// 1. **Initial Setup**: The loop runs 8 times (because `length` is 8 by default).
// 2. **Random Character**: In each loop iteration, a random character is chosen from the string `str`.
// 3. **Building Password**: The chosen character is added to `pass` each time, creating a password.
// 4. **Final Password**: After 8 iterations, the full password is generated, and `setPassword(pass)` stores it.

// So, the loop runs as many times as the `length` value, which is 8 by default but can be changed by the user using the range slider./////////////////////////////////////////////////////////////////////

  // const passwordGenerator = useCallback(() => {
  //   let pass = ""
  //   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  //   if (numberAllowed) str += '0123456789'
  //   if (characterAllowed) str += "!@#$%^&*[]{}~`_-+="

    // for (let i = 1; i <= length; i++)
      // This loop runs length times (the desired password length). Each iteration adds one character to the password.
//  {
      // let char = Math.floor(Math.random() * str.length + 1)
//       Math.random() generates a random number between 0 and 1.
// Multiplying by str.length scales the number to match the number of available characters in str.
// Adding 1 ensures the result is between 1 and str.length.
// Math.floor() rounds the number down to an integer.
      // pass += str.charAt(char)

//       char is used as the index to pick a character from the string str.
// The chosen character is added to the pass string.The loop repeats this process until the password is fully generated.

      //evntually jaisy h loop khtm hoga ye jo uper pass h esmn value ajaegi 
      
    // }
    // setPassword(pass)
    //value add horae thi read nh horae thi to setpassword mn add krdia pass




  // }, [length, numberAllowed, characterAllowed,setPassword])
  /////////////////////////////////////////////////////////////////////////////
  //agr mein yhnpassword dalti to ye chlta jrha h infinite loop mn phas ghy, jiti bhi dependncies h usmn kch hi chng hia to mn esy phr s rerun krdng , passwrd mn chnge ho to nh krna set password mn ho to krna , setPassword appky fun ko run k liye rspnsbl nh usy memoize optimiize or cache mn rkhta h 
/////////////////////////////////////
// esy bhi optimze krlyty hn , dpndncy arr h  1 h dpndncy arr h , chaho to empty hhi chor skty ye btn passwrd set passwrd  p h depnd h to jo bhi interrealtd h ya jiss y bhi app bt kr parahy wo sari value hm dyty useclbk mn , mera essy bt hogi esy hogi ab app dykh lyna , empty bhi chor do to optimiz hojat . copyPasswordToClipboard hota window mn q k hm yhn core react mn kam kr rhy esliye mn dirctly window likh parha q k ultimately meri js, puri react compile hogi js mn or jhn ye run hogi i hve wndw obj , next js mn ye chz banahngy whn hoti serverSideRendering sara code execute hota servr p , servr p wndw obj nh hot . wndw.navigtr mn option milta clpbrd ka ab esmn option h readtext ka bhi or writetxt ka bhi to wrt h krna chta to app jhn bhi pste kro appko valu ml jhy , valu uthae or seedha boldia pswd
//////////////////////////////////////////////////////////////////////////////

// const copyPasswordToClipboard = useCallback(()=>{
//   passwordRef.current?.select()
//   passwordRef.current?.setSelectionRange(0, 999)
//   window.navigator.clipboard.writeText(password)

// },[password])
// ab paswd s appny drct valu lyli to paswrdref ka kya kam h? kam h hmny usy yhn use nh kia but actuly mn uska rfrnc hmn yhn lyna chy th to rfrnc kaisy lyty hmny to drct krlia , passwrdref s hm bht si chzn pata krskty k currnt obj h nh hai kya accesible h nh h slectible h nh h , user ko app or optmiz result bata skty ho q ki abhi copy hua appko nh pata laga , to copy krty to highlight hojata to user ko effct dua to ye krny k liye mny ref lia   passwordRef.current?.select() ab highlight hogya or optimixe krskty rang bhi bataskty 


////////////////////////////////////////////
// //useEffect
//   useEffect(()=>{
//     passwordGenerator()

//   }, [length, numberAllowed, characterAllowed, passwordGenerator])
  
  

//   return (
//     <>
//     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-3 text-orange-500 bg-gray-800'>
//       <h1 className='text-white text-center'>Password Generator</h1>
//       <div className="className=flex shadow rounded-lg overflow-hidden mb-4 " > 
//         <input type="text" 
//         value={password}
//         className='outline-none w-full py-1 px-3'
//         placeholder='password'
//         readOnly 
//         ref={passwordRef}
//         />

//         <button onClick={copyPasswordToClipboard}
        
//          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
//          >copy</button>

//       </div>
//       <div className="flex text-sm gap-x-2">
//         <div className="flex items-center gap-x-1">
//           <input type="range" 
//           min= {6}
//           max = {100}
//           value={length}
//           className='cursor-pointer'
//           //Sure! When you move the range slider, it changes the value of `length`, which controls how long the password should be. The `onChange` event of the slider updates this `length` value, and the password generator then creates a password with that many characters.
//           onChange={(e) => {setLength(e.target.value)}} 
//             />
//             <label>Length: {length}</label>
//         </div>
//         <div className="flex items-center gap-x-1">
//           <input type="checkbox"
//           defaultChecked = {numberAllowed} 
//           id='numberInput'
//           onChange={() => {
//             setNumberAllowed((prev)=> !prev) 
//           }}
          
//           // onchng mn clbk fire krdia setnumallwd to prev valu jo bhi h usy revrse krdo to true or false flip hota rhega 
          
//           />
//           <label htmlFor="numberInput">Numbers</label>
//         </div>


//         <div className="flex items-center gap-x-1">
//           <input type="checkbox"
//           defaultChecked = {characterAllowed} 
//           id='numberInput'
//           onChange={() => {
//             setCharacterAllowed((prev)=> !prev) 
//           }}
          
//           // onchng mn clbk fire krdia setnumallwd to prev valu jo bhi h usy revrse krdo to true or false flip hota rhega 
          
//           />
//           <label htmlFor="numberInput">Characters</label>
//         </div>
//       </div>

//     </div>
//     </>
//   )

// }

// export default App

///////////////////////////////////////////////////////////////////////////////


//1st we move on functionality how to attack this type of app , pehly to hmn length chahye , no doubgt here and agr length update horae to kchhorha h , length ko track karny k liye lagega useState.  
// const [length, setLength] = useState(8)

//ab dsra h chkbox ab yhn koi num lyna prega nh useState h , lakin default value kya hogi if you said true or false you think like me , yhn num to rkh nh rhy, chkBox h,  to lo ya nh lo, ab characters bhi almost same

//ab ye inputfield dykh rhy esn bhi to koi data ahega na kya arha h esmn password arha h to obviously app ja k us passwrd ko update to kr nh skty to kch chahye hoga k us paswrd m value update krpao , unko passwrd bol lain or kaisy usko add krna wo bad mn dykhty, pehly hm var ko collct kr rhy jo chahye, ab default value mn hm chahn to koi vale dskty but we wll generte password, ye alg mechanism hota k jaisy h page appka load ho autmatically kch functionlity run hojae, api call hojae, mthd run hojae, phir whn s data ly k hm pw mn fit krdaingy us data ko or jaisy pg load hoga ui s usmn add hojae ga autm

//13;49
//ab ye jo copy h ye kais.y kam krega nh pata mjhy, ye hm bd mn dykhty , abhi hm 1 pw gen mthd banaty hn.......
//const passwordGenretor = () => {}
//lakin prob kya h pwG to hm banalaingy lkn lkn lkn  ye num p bhi cl hoga or character mn bhi , koi to sol hoga k br br mn kisi mthd ko run krnga , mthd 100% yae h jo pwG kr k derh, values alg alg hai mn usy bolnga num allow h nh h character h nh h wo batadnga but methd to yae br br run horha to koi to way hoga optimiz.

// ab we read hook go documentation we hae useCaallback hook in react . useCallback is a react hook that lets you cache a function definiton between re-renders 
//ary yae to km krna th meiy pass 1 fun h usko jitna hosky app usy cache mn rkhlo cache mtlb memory mn agr mn usy dobara s run krn to jtna part pehly ka use hota usy use krlo or jo nh hopara wo nh hoparha ye react ki headache h meri thori na to react n usy use krlia . 
//useCallback(fn, dependencies) , num dependency h esky chng hoty h un rn hon chhye, chrctr bhi , dpndncies 1 arr h jo bhi var h wo pass krdijiye ya state k jo bhi varibles h , top p df kia usclbk, , ab es mn 2 chzn pass hoti 1 to fn or dsra dpndncies jo k arr mn pass hota , baqi sb to var pass kr rhy but ye setpa q pass kr rhy coz ye bhi 1 depndncy h yae main fun h jo k kahi br hm run bhi krngy, 



// ab fn app classic bhi likh skty or arro bhi , yhn appky js k bases kam arhy na k react k , ab hm ny var bnaya pass jo k empty h. let pass = "" ye pass q bnaya to gentedpassword bna lnga or set pass s es pasword mn ad krdnga or str mn wo data ahega jis s mn passwrd bnao ga ab condition dalngy 

// ab mjhy bnana 1 pass jo k rndom chrctr pck krega str m s to m loop laga k esmn s vlu nikl lnga hr br rndom value but loop chalao kitni br wo govrn kr rha h lngth 

// for loop lgalyty or 1 s strt krgy , i ki lngth <= lnghth ab bnana character . 
//to ye math.rndom hogya * kia string s 0th value na ahy to +1 krdia , phir jo chrctr arha usy math.flor , ab char aya h yani arr ki index val ae h koi rndom , char h aya str s to str s char uthana hoga wo kaisy 1 var lyty pass upr declare h to we know str mn 1 mthd hota charAt usm s jo upr aya wo use krlo , to evntually ye loop jaisy h khtm hoga hamara jo pass h esmn valu ajaegi hamary pass , value add kari h read kaisy krna to setpaswrd m pass add krdo setPassword(pass). ab umeed h ye mthd meiny bna lia paswdgenrtor, abhi koi cl h kr ha but logic bn gya h or essy memoization ka bhi cncpt bn gya mtlb usy cache mn rkh lia gya h uski depndencies bhi bta d k chnge ho kch bhi to app krlo , ab return mn div bnaana , app.css mnny puri ura di prob kr rae thi , min 6ya 8 jo bhi or max batana hoga wrna chlta rhega , value hmri link hogi lenghth s jo hmny state mn set kr rkhi h, label bhi add kia wrna nput mn pata nh lgega esmn variable inject krdia , yhn p onChange dedaingy, onchng directly nh deskty q k sath mnmjhy 1 evnt bhi pass kna h wo evnt jb mn pass krnga to wo call krega setLength proprty ko , ab setLength mn value daingy e.target . value, ab state mn wo value chnge hogi to app set kr k chng krskty or bhi mjhy input box chahye chkbox etc usky liye chahye mjhty div , esmn bhi onchnge mn 1 clbk fire krdia seedha bola to prev value jo bhi h usy reverse krdo to true or flse flip hota rhega , ab esky sth label likh dain. ui atleast readyhogya . agr app onchnge p onChange={() => {setCharacterAllowed(true)}} to ye true h rhega . to hmny dykha th jb appko es trhn k evnts propogate krny hoty hn to app callbk fire karskty ho to appko prev vlu ka access milta h , to nwe value k liye ! lag kprev lkh dia , jo bhi pev vlu thi ussy not lg gya to true false hogae or flse true 33;00
//mn chta hn ab jaisy h pg load ho to, abhi actualy mn koi buttn nh meiry ps jisy m passw ko fill krwa skn ,kch a kch aisa chye jo usy cl krdy , manualyy  hi krwa skty cl , to meiny kia passwordGenerator()
//q k appny useclbk lagya to aisy to cl nh krwa skty , react mn kb konsi chz render hogi ye mein bhi krta h nh , to sae treeka kya h es pswd ko call krny ka to  1 tarreeka to app btn lagae , click krwahn call krlijiye, dosra mthd hoskta h k 1 or hook app yhn prhn . 
//use effect hook , esko kisi variab mn store ki need nh 2 chzn lgti esm 1 clbk or dosra dpndncy arr, 1 length p agr length cher di to phr s run krdna numberallow cher da to phr s run krdngwaisy, charallow .or esm cleanup etc bhi  hota esky bry m phr dykhngy 
//ab 1 number arha q k       pass = str.charAt(char)
//hr loop mn ja k mein es value ko ovrwrite kr rha esi liye 1 chr aya to + krdain to app concatinate krogy append krogy . 
//       pass += str.charAt(char)

// useclck ky dpndncy arr ko comapre nh krna, useeffct k dpndncy arr s . useclbk mn yhn hm wo arr dety jhn dependncy h or possibl run hoga , kaisy bhi us mthd ko optimize krdo to us mthd ko yhn de rhy k essy kch bhi chnge ho or mera mthd run ho dobara to optimize or     useeffct mn agr enmn kch bhi che char ho to again run krdo  .
// you can create this project without usecall bk  many people create on youtube koi dikkat nh . 
//run useeffect s hoga 
//42;00 ager mn yhn s copy krta to ye clipboard p copy hojana chahye . clpbrd p copy difficult tsk nh kya copy krna wo task h . to appko slct bhi krna hoga ye iput fie lo uski rnge bhi batani hogi , input portion mn sy kitna portion logi , thn mjhy browser ya appky systm ka bhi access chy. 
//btn 1 alg entity h input 1 alg ye 1 div mn hai mtlb ye nh k ye aps mn iterrelate hogahy ye btn hoskta pg k end mn hot enka aps mn no link no ristedari 
// useref hook ata ye refrn hook h . kisi bhi chz ka jb mjhy rfrnce lyna hota to ye hook ata h .. useref ko use k liye you need to create varialbe ussy. . useref ki koi default value nh to nullll dedia ab rfrnce kaisy ahega , app hr 1 input ya hr 1 argumnt  mn ref  pass krskty ref={passwordRef }  ab us btn p clck krnga to kch hona bhi to chahye , btn p onclick= {copyPasswdonclickboard} ab ye mthd bna dia to ye kam bhi to krna chahye 

//summarise 
// sbsy phly var clct kiye . thn passwrdgenrtr mthd lia , str banadi if else p number alwd h to wo add krdo charctr allw h to wo krdo , phr simple sa 1 loop usmn character lia jo k index h ly rhy thy , numbr genert kia 1 s ly k jo lenth h str ki , jo bhi latest str mili wo lyli genert kardi , choti si mstk krdi thi append krny k bajahy = kardia th to + kia phr thn optimize kia or useclbk kia , useclbk hamary fun ko memorixe krta jtna hoskty maybe pura krly jo part reuse hopahy threat use hopahy , 
//useeffct jb bhi hamara pg load hota to 1st time p ye call hota or dpndncy arr mn kisi k sth bh chechr hua to ye rerun abhi k date p yae pata mjhy thn copytoclipboard bnaya to ye to clpbrd p copy krdega but mn user ko thora ui acha feel krwna chhta sky liye useref hook lia th jo appko rfrn dyta koi bhi elmnt h agr appky webpage p to kisi ka bhi rfrnc ly skty or usky sth manipulation krskty ho , hawa mn nh lgega ref pass kra hoga 

// Sure! Here's a simple explanation of the React hooks and concepts used in your code:

// 1. **`useState`**:
//    - Purpose: Manages the state (data) of your component, allowing it to change and re-render when that data updates.
//    - How it's used:
//      - `const [length, setLength] = useState(8)` – This creates a state variable `length` with an initial value of 8. `setLength` is the function that lets you change the value of `length`.
//      - Similarly, `numberAllowed`, `charAllowed`, and `password` use `useState` to track whether numbers/characters are allowed and to store the generated password.

// 2. **`useCallback`**:
//    - Purpose: Optimizes performance by "remembering" a function so it's not re-created every time the component re-renders. It only changes when its dependencies change.
//    - How it's used:
//      - `const passwordGenerator = useCallback(...)` – This ensures that `passwordGenerator` is only recreated when `length`, `numberAllowed`, or `charAllowed` changes.
//      - Similarly, `copyPasswordToClipboard` uses `useCallback` to avoid re-creating the function on every render, improving efficiency.

// 3. **`useEffect`**:
//    - Purpose: Runs side effects (like fetching data, updating the DOM, etc.) after the component renders or when its dependencies change.
//    - How it's used:
//      - `useEffect(() => { passwordGenerator() }, [length, numberAllowed, charAllowed, passwordGenerator])` – This effect automatically calls the `passwordGenerator` function whenever `length`, `numberAllowed`, or `charAllowed` changes. It ensures the password is regenerated with the updated options.

// 4. **`useRef`**:
//    - Purpose: Creates a reference to a DOM element or value that persists across renders without causing a re-render.
//    - How it's used:
//      - `const passwordRef = useRef(null)` – This creates a reference to the password input field, so you can directly interact with it (e.g., selecting text) using `passwordRef.current`.
//      - It's used in `copyPasswordToClipboard()` to select the password and copy it to the clipboard.

// 5. **`onChange`**:
//    - Purpose: This is a React event handler for when the value of an input changes. It updates the state based on the user's input.
//    - How it's used:
//      - In the password length slider: `onChange={(e) => setLength(parseInt(e.target.value))}` – Whenever the slider is adjusted, the `setLength` function is called to update the `length` state based on the new value.
//      - Similarly, the checkboxes for allowing numbers or special characters call `setNumberAllowed` and `setCharAllowed` to update their states when clicked.

// ### Summary:
// - **`useState`**: Tracks and updates values (e.g., password length).
// - **`useCallback`**: Remembers functions to avoid unnecessary re-creation.
// - **`useEffect`**: Runs code when certain values (like `length`) change.
// - **`useRef`**: References DOM elements like input fields.
// - **`onChange`**: Detects changes in inputs (slider, checkboxes) and updates state.

// Let me know if you'd like any more clarification!

//lecture 11 custom hooks in react | currency project

// es currncy cnvrtr mn bht kch fancy h hm ziada tr hota nh currncy cnvrtr mn but esmn h usually we take hardcoded value agr rupee mn dia h to dollr ka multiplication by 82 to hardcoted val lylyty hm but esmn hm sort of api call and take all data from there , uniques h coz you get more data and you get also conversion data usi hisaab s or we also see how you optimize your pg , usd p clck kia to how long the list is ab ye ache s scroll hopae ye bht major imppact h frndend or react mn how we optimize , also see swap functionlity, hm dykhain gy remarkable componnt reusubility coponnt ko hamary pass h from or to or currncytyp or crncytyp, RCR s muraad we oftn see btn ko h componnt bnado or usi ko use krlo , but ye jo input h its real case scenerio ab yhn kch chzn chng horae but kch chzn ko chng kia jskta h , to hm kaisy 1 sepert comp bnhn gy ui p kam nh krngy wo mn appko drctly classes dnga but actully mn reuseabble cmpnt bnaty huey kaisy approach li jati wo dykhn , md file mn css h whn s lylain .
//2sra h app.jsx esmn woi bkgr img h appko lyni h lo nh lyni nh lo , yhn meiny 1 input component call kia ye jo upr h esy hm 1 separate cmpont bnahngy , jb ye bn jaega to hm yhn input use kr rhy yhn btn agya swap or ye neechy input lkn ye use nh horha basic styling use krny k liye . 
/////////////////////////////////////////////////////////////////////////////////


// import { useCallback, useEffect, useRef, useState } from 'react'


// function App() {
//   const [length, setLength] = useState(8)
//   const [numberAllowed, setNumberAllowed] = useState(false)
//   const [characterAllowed, setCharacterAllowed] = useState(false)
//   const [password, setPassword] = useState("")

//   //useRef hook
//   const passwordRef = useRef(null)
//   const passwordGenerator = useCallback(() => {
//     let pass = ""
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
//     if (numberAllowed) str += '0123456789'
//     if (characterAllowed) str += "!@#$%^&*[]{}~`_-+="

//     for (let i = 1; i <= length; i++)
//       // This loop runs length times (the desired password length). Each iteration adds one character to the password.
 
//       {let char = Math.floor(Math.random() * str.length + 1)
//       pass += str.charAt(char)}
//       setPassword(pass)
//     //value add horae thi read nh horae thi to setpassword mn add krdia pass




//   }, [length, numberAllowed, characterAllowed,setPassword]);
//   const copyPasswordToClipboard = useCallback(()=>{
//     passwordRef.current?.select()
//     passwordRef.current?.setSelectionRange(0, 999)
//     window.navigator.clipboard.writeText(password)
  
//   },[password])
//   useEffect(()=>{
//     passwordGenerator()

//   }, [length, numberAllowed, characterAllowed, passwordGenerator])
  
  

//   return (
//     <>
//     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-3 text-orange-500 bg-gray-800'>
//       <h1 className='text-white text-center'>Password Generator</h1>
//       <div className="className=flex shadow rounded-lg overflow-hidden mb-4 " > 
//         <input type="text" 
//         value={password}
//         className='outline-none w-full py-1 px-3'
//         placeholder='password'
//         readOnly 
//         ref={passwordRef}
//         />

//         <button onClick={copyPasswordToClipboard}
        
//          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
//          >copy</button>

//       </div>
//       <div className="flex text-sm gap-x-2">
//         <div className="flex items-center gap-x-1">
//           <input type="range" 
//           min= {6}
//           max = {100}
//           value={length}
//           className='cursor-pointer'
//           //Sure! When you move the range slider, it changes the value of `length`, which controls how long the password should be. The `onChange` event of the slider updates this `length` value, and the password generator then creates a password with that many characters.
//           onChange={(e) => {setLength(e.target.value)}} 
//             />
//             <label>Length: {length}</label>
//         </div>
//         <div className="flex items-center gap-x-1">
//           <input type="checkbox"
//           defaultChecked = {numberAllowed} 
//           id='numberInput'
//           onChange={() => {
//             setNumberAllowed((prev)=> !prev) 
//           }}
          
//           // onchng mn clbk fire krdia setnumallwd to prev valu jo bhi h usy revrse krdo to true or false flip hota rhega 
          
//           />
//           <label htmlFor="numberInput">Numbers</label>
//         </div>


//         <div className="flex items-center gap-x-1">
//           <input type="checkbox"
//           defaultChecked = {characterAllowed} 
//           id='numberInput'
//           onChange={() => {
//             setCharacterAllowed((prev)=> !prev) 
//           }}
          
//           // onchng mn clbk fire krdia setnumallwd to prev valu jo bhi h usy revrse krdo to true or false flip hota rhega 
          
//           />
//           <label htmlFor="numberInput">Characters</label>
//         </div>
//       </div>

//     </div>
//     </>
//   )

// }

// export default App


import { useCallback, useEffect, useRef, useState } from 'react'

function App (){
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState(false)

  //userRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ''
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(characterAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i<=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
      
      
    }

    setPassword(pass)

  },[length, numberAllowed, characterAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,999)


    window.navigator.clipboard.writeText(password)




  },[password])

  useEffect(()=>{
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed, passwordGenerator])

  
  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref = {passwordRef}
        />
        <button 
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
        

          type="checkbox"
          defaultChecked = {numberAllowed}
//           If you comment out `defaultChecked`, the checkbox will still work, but its **initial** checked state will no longer be controlled by `numberAllowed`. The checkbox will not start as checked or unchecked based on `numberAllowed` when the component first renders.

// However, since you have the `onChange` event that toggles `numberAllowed` using `setNumberAllowed`, the checkbox will still function correctly after the first interaction. This means that the checkbox will still toggle when clicked, and `numberAllowed` will still update accordingly, but its initial state will always be unchecked without `defaultChecked`.
          id="numberInput"
          onChange={()=> {
            setNumberAllowed((prev) => !prev )
          }}
          
         
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked = { characterAllowed}
              id="characterInput"
              onChange={()=>{
                setCharacterAllowed((prev)=> !prev)
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    
  )
}

export default App





    
   

















