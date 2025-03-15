// //ab app app ko render krrhy yhn to appko yhn app render krna h nh , q k hmny reactRouter insert krdia to uski trf jana hoga , self closing cmpnnt h, ye prop lyta h jb tk ye prop nh lyta kaam nh krta , auto import m ye react-router-dom s aya h .

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// // import App from './App.jsx'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Layout from './Layout.jsx'
// import Home from './components/Home/Home.jsx'
// import About from './components/About/About.jsx'

//esko routerProvidr ko 1 h chz chahye wo h router, js k andr app roter h dedo ab ye khn s ahega to ye hmn bnana hog . 

//ab ye router mn appko 2 trhn s bna k dikhaoga , 1 thora cmplx h or 1 thora easy h 
/////////////////////////////////////

//ab esky liye appko 1 mthd import krna prta h createBrowserRouter khn s aya mthd obvious reactRouter s , ye 1 mthd h jism 1 arr hai . acha hn ye 2 treeky s bnta h dosra bhi btaong . acha es arr mn sary k sary list daal dety jo bhi hmn arr chhye , first obj mein main path hoga //// , to hm yh 1 path bnaty ye hoga / . acha 1 chz jo mein chahta k mera header or footer sme rhy or usky andr k cmpnnt chnge hoty rhy . to mn home mn alg cmpnnt daal dnga , contct us mn alg cmpnt dal dng to esi trhn . to 1 to appka ye classic treeka h k hm header hr componnt mn call krwhn, h0me mn bhi contct us mn bhi about mn bhi but ye optimize treeka nh .

// to src mn new file bnahy or uska nam aksr root dety mn layout dedeta hn layout.jsx, infct app ye sara kam app.jsx mn bhi krskty hn . to phly to esy frgmnt bnao div hatao. chllty hn layout.jsx m 
//////////////////////////////////////////////////////
//28;00

//ab main.jsx mn meiny path dia / ab / kya h top level elmnt esky andr nestng horae h to ye kya render krega wo batana parega , ab elmnt konsa daingy layout deskta . app chho t app.jsx s ly ao  kam 1 h jaisy hona th . ab esmn next prop aata h wo hai childn , jo k mn krna chahta home, about us , contct us.///////////// to es trhn app chdrn add krskty dykhn actually mn  kam to bas etna th k 1 obj jismn 2 value ho path or elemnt but q k further esmn or value hn es liye mjhy 1 or chldrn bnana para or usmn 1 arr dena para or ab us arr mn , jitny bhi nesting route krni kijiye {},{} koi bt h nh . pehly route mn woi path or elmnt . acha / already lga hua h to / k bd kch nh ""  , then / k bd about  ye apppy dpnd 

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [

//       {path: '',
//        element: <Home/> 
//       },
//       {
//         path: 'about',
//        element: <About/> 
     
//       }
//     ]


//   }])
//   // to ye hua hmary pass kam to hmny 1 router h to bnaya jo hmny yhn pass krdia 

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
    
//     <RouterProvider router={router}/>
//   </StrictMode>,
// )
//////////////////////////////////////
//jb mny url mn /about likhato whn about to aya lkn etna khubeurt nh th , but hmn routing smjh agae, ab home h hmary pass about nh h to kaisy fix krngy hm header mn jhngy or header mn i know k ye navlnk h ye li hai to copy kr k paste home ko h , to dono h active horhy q k to chk krna hoga k isActive konsa wala h , appny navlnk ko btaya nh k app jaa khn rhy hn to jis trhn link mn to lgta hmesha k app khn jarahy esi trhn apppko navlnk ko bhi btana prega  to = "/" and 2nd to "/about ". ab ye linking automtc es isActive mn data inject krdegi , hmn kch krna h nh reactRouterDom kr rha bts. 
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'

// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Layout from './Layout.jsx'
// import Home from './components/Home/Home.jsx'
// import About from './components/About/About.jsx'
// import Contact from './components/Contact/Contact.jsx'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [

//       {path: '',
//        element: <Home/> 
//       },
//       {
//         path: 'about',
//        element: <About/> 
     
//       },
//       {
//         path: 'contact',
//         element: <Contact/>
//       }
//     ]


//   }])
//   // to ye hua hmary pass kam to hmny 1 router h to bnaya jo hmny yhn pass krdia 

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
    
//     <RouterProvider router={router}/>
//   </StrictMode>,
// )
////////////////////////////////////////////////
//37;00 ab hm bnhngy hmaa 1 new pg , ussy phly mn appko or btaon k chzn easy kaisy hoskti h , aksr logo ko prob aati h main.jsx m router mn jitna kch likha h na thora sa khi br complex hojaata h arr obj abhi k liye esy comnt or dosra tareeka btaata, whn thora easy h , chahye to woi router,const router ye syntax to same h rhga, 
//  const router = createBrowserRouter(

//  createRoutesFromElements()
//)
//ye actually mn 1 mthd h esmn app style s appny routes likh skty , ab lia routes ab es routes ko bhi jaisy hmny obj k andr 2 valu  pass kr k batae thn esko bhi batana prhta  k actully mn hamara pth / tha or konsa elmnt rndr hoga to layout , es waly mn kya faida h nesting hm uper bhi kr rhy thy esmn bhi hogi yhn route k ande nestng hogi to route lia self close krlyty thora easy rhta dykhny mn kisi bhi route ko self closng krskty ,  


// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'

// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
// import Layout from './Layout.jsx'
// import Home from './components/Home/Home.jsx'
// import About from './components/About/About.jsx'
// import Contact from './components/Contact/Contact.jsx'

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element= {<Layout/>}>
//       <Route path='' element= {<Home/>}/>
//       <Route path='about' element= {<About/>}/>
//       <Route path='contact' element= {<Contact/>}/>

//     </Route>
//   )
// )

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
    
//     <RouterProvider router={router}/>
//   </StrictMode>,
// )
////////////////////////////////////////
//ab mn or kya chahta hn appna 1 or path bnana chata hn , mjhy 1 id lyna to /id  ya phir user/id ya phr pg/id . jo bhi id h last mn num 123, hitesh jo bhi h wo chahye to /user yae lylyty to route kaisy bhngy to sabsy phly to ye kro ya display hoga whn existing m bhi krskty but mn esko seperate rkhna chahta hn thora smjhany mn or appko bd mn smjhny mn asaani hogi , new folder bna lyty , originl jo demo appko diya th usmn my pram dia th app bhi lyskty 41;00. 

////ab jhngy main.jsx mn to jitna bhi kam h k kis trhn app parameters logy wo actually mn sara kam mein.jsx m hota . 

//ab duplicate kr k ''user/:id'//////////  : k bd app jo bhi valu lkh rhy bht imp h kahi br app userid likh rhy ho to jo bhi kr rhy note down krlena khn p,///// konsa componenet yhn render hona chahye meiny User componnt lia to mn User cmpnnt render krwadeta hn .

//eska ab mainMenu mn koi path nh h hona bhi nh chahye jb m yhn ata or enter krta to user to agya, appky user route p but ye user h render kr rha 1 p or 100 p bhi , aisa h hota usully jb app fb, twitt p logIn krty layout sara same rhta , appka data es id k bases p aata h , baqi field thori na bdlaingy jisko mila hua h blueTick thk h wo dikhadeta h whn p , nh to nh dikhhega , ab nam ki jga aisy thori k footer p agya kbhi header p to basc to same rahega  ab jana user.jsx mn



// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'

// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
// import Layout from './Layout.jsx'
// import Home from './components/Home/Home.jsx'
// import About from './components/About/About.jsx'
// import Contact from './components/Contact/Contact.jsx'
// import User from './components/User/User.jsx'
// import Github from './components/Github/Github.jsx'

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element= {<Layout/>}>
//       <Route path='' element= {<Home/>}/>
//       <Route path='about' element= {<About/>}/>
//       <Route path='contact' element= {<Contact/>}/>
//       <Route path='user/:userid' element= {<User/>}/>
//       <Route path='github' element= {<Github/>}/>

//     </Route>
//   )
// )

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
    
//     <RouterProvider router={router}/>
//   </StrictMode>,
// )
////////////////////////////////////////////////
 //ye mthd app import kr k ly ahy esi liye esy 1 h file mn rkha jata h k compnnt or usmn aisa mthd hai jhn api call h to usy 1 sth h load krlo thora easy rehta h sabky appny appny structure or stndrd h 

 


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, {githubInfoLoader} from './components/Github/Github.jsx'

//

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<Layout/>}>
      <Route path='' element= {<Home/>}/>
      <Route path='about' element= {<About/>}/>
      <Route path='contact' element= {<Contact/>}/>
      <Route path='user/:userid' element= {<User/>}/>

      <Route
      loader = {githubInfoLoader}
      
      
      path='github'
      element= {<Github/>}/>

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router}/>
  </StrictMode>,
)
//ab aksar log sochty hn yhn sve kia hogya kam , wo ye bhoool jty react koi mgc thori krdeg, mtlb yhn valu appny app thori ajaegi usky liye hook hoga agr appy yhn ye socha h to , kafi react skh chuky , yhn hook h useLoaderData . eska faida h k mein directly github p ja k bol skta app mjhy data do jo bhi data yhn s return horha hog loader data s wo mil jaega es ko kisi varib mn rkh lo , to agr mn uska var ka nam data rkhlo to meri state ka nam bhi to data th to automaticlly mjhy data.followers mil jaega agr kch or bhi rkhty to kchOr.followers or imges rkhty 