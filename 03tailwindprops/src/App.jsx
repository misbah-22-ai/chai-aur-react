// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Card from './components/cards'

// function App() {
//   const [count, setCount] = useState(0)
//   let myObj = {
//     username: 'hitesh',
//     age:'21'
//   }
//   let myArr = [1,2,3,4]

//   return (
//     <>
//      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
//      <Card channel= "chaiAurCode" someObj = {myObj} someArr = {myArr} />
//      <Card/>

    



// </>
//   )
// }
// export default App

    
  




 /* ab Tw test mn app classes lkh skty ho hm yhn htll nh likh rhy js nae likh rhy , hm jsx likh rhy ab jsx mn hm class likty thy its reserved keyword jaisy for h loop k liye to yhn appko likhna to html for to ab class nh className to tw ki classes use krskty , suggestion k liye intellicence ata chota s plugin vs code ka 
 tailwind s ye uthaya code or ye jo img tag hai esy close krna h , jsx regulr html nh h to whn hmny 1 rule prha k ap 1 h elemnt return krskty ho , to wo hmny fragmnt s solve krlia th ,   */
// i grab this card from devui tailwind cards and now start props, props component ko reusable bnata h , means 1 br agr appny crd bna lia to q na us card ko component mn rkh lia jae or br br use kalia jae, generl cncpt jo hota webdev ka ya webdesiging ka usmn html ko alg css ko alg or js ko alg rkha jega but react nh chlta es traditionl mindset s , react mn kaha jata kapp technology k base p sagrigate mt kro chxn ko separate aro kya wo kam kr rhy na k kya usky ander likha h , ab ye crd h to es,mn eski html css or js yhn likh do tky agr mn kch pass krn to uski bases p crd chng hojae , ab ye div s pura ka pura 1 crd h to sr  1 file bnae , es pury segmnt ko sir n new component banado jo card return kr rha ho to src mn 1 folder banaya q k hoskta h or bhi components bnahn hm , components nam s or file card.jsx , sir n 1 extension install kia hua h react snipet to sir Rfce to react funtio component dedeta , card.jsx m meiny fu m data usy whn export kia yhn import or phir i know its componnt and it bhv like html to self closing k sath card rkhlia 
//intersting is k app ko repeat krna app karskty ho ab appko nam chnge krna ab agr app arr s ki values ly k ahy ho to ya database s kch value lahy jaisy flip card, loop laga daigy or card ko display krwadngy hr crd alg nformation lyga t uska intezm krna hoga , wo prps s hota jb bhi app es trhn k cmpontbnaty yhn tk k app bhi sabky pass prop ka access hot h 

///////////////////////////////////////////

// mjhy etna smjh aya k mn 1 component s dosry cmpont mn value pass krskta hn or us value ko agr rcv krna h to crd mn mjhy , jhn bhi mn ye fun declare kr rha card esky adr mjhy props ka access hota h ye bydefault esy props bolta mn nae bolta react esy bolta , mera mn krta mn proprties h bolta . riginal syntax yae h appko pata hona chahye use horha h nh horha but you know //////////////////////////////

//jo bhi val app card mn pass kr rhy ho agr mn channel ki jaga ar dn user name but wo card kya us username ko use kr rha to nh kr rha , to appko pata h props  1 obj h to app props.username,


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Card from './components/cards'

// function App() {
//   const [count, setCount] = useState(0)
//   let myObj = {
//     username: 'hitesh',
//     age:'21'
//   }
//   let myArr = [1,2,3,4]

//   return (
//     <>
//      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
//      <Card username = 'chaiAurCode' btnText = 'visit me' />
//      <Card username= 'hitesh' btnText = 'click me'/>

  
// </>
//   )
// }
    
  


// export default App

//ye 2 dafa j undefined aya ye strict mode chlta reat ka to ye rendering or rerenderng kahi br hota to discuss later , to mjhy pata h es trhn .obj h or obj h 1 pass horhqa h to khi br shortcut kl iye esy props ko hata k destructurng krdi jati h jo k hmny js m prhi thi , direct h appny username lylia to hr jaga props.username krny ki need nh
///////////////////////////////////////////////////

//1 situatin hndle krni hogi kisi  btText ko use kia or ye text pass h nh kia ya ye prob h pass nh kia , to us situation mn app yhn app react ki chxn nh seekh rhy js basic programming h k kuch agr pass nh kia to ski defalt value nh to maybe {btnText || 'visitme'},agr btnText mn value mili to thk wrna ye visit me wali use krlo , but eski readibility km h jo meiny card.jsx mn nject kia kon dhondyga usy , performance ka issue nh h , to card k fun mn h eski default value dedo visitme agr value pass ki h to wo hogae nh ki to ye 
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/cards'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: 'misbah',
    age:'21'
  }
  let myArr = [1,2,3,4]

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
     <Card username = 'chaiAurCode' btnText = 'visit me' />
     <br />
     <Card username= 'hitesh' />

  
</>
  )
}
    
  


export default App