//ban rha hai 9th project esimn 
// jb app tailwind p jaaty to tailwind appko directly allow krta h cdn etc k through app esy play krlo , tailwind ka actully mn 1 plyground bhi h , playground nav mein hai. yhn appky pass top mn 1 btn h jo k switch kr rha light or dark mode m . inspect kar k dykhai , top p html h whn appko clsses dikhng, tailwin kaisy detect krta k light h k drk. kuch k agy drk: hai to automtlly tailwind mn jb classes likhty to es trhn likhty k agr drkmode ho to ye class active hojae or light mode ho to ye class , bas appko 1 switch yhn enable krna prhta , dark ki jga light likhna prht. 
//q k hmny themebtnUi mn aisy h likh rkha h , css jo likhi h hmny to ye dark etc drctly include kr rkha h 41;00 sab jgah likhi h. to hmny esi trhn css likhi h k dark mode ho to wo dtct krly light ho to wo

//hmn krna kya h , hmn 1 switch toggle krna h jo k es html mn dark or light mode toggle krdy , lkn agr 1 alg cmponnt bnahngy switch ka to hmary cad ko kon bateg k toggle hochuka h usky andr state update hochuki h appky html ki . or agr card ko pata lg gya or wpis s togle hu to btn ko kon batega , woi login or profile wali khani h k dono 1 sth synch to rhny chahy. thmBtnui or card ui or appui dy rkha h 42;00import { useState } from 'react'

///////////////////////////////
// 45;28 yhn hm 1 commnt likh rhy q k yhn hm appna thembtn lhngy wo componnet or 1 card. css etc de di h .

// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
    
// <div className="flex flex-wrap min-h-screen items-center">
//                 <div className="w-full">
//                     <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
//                       {/* themeBtn */}
                        
//                     </div>

//                     <div className="w-full max-w-sm mx-auto">
//                       {/* Card */}
                       
//                     </div>
//                 </div>
//             </div>

   
//   )
// }

// export default App

/////////////////////////////////////////////


//ab sbsy phly context bnty hn es br thora alg hog. abhi app.jsx m sedha h div class etc introdc krdia lkn hmn thmeprovider , kch loginprov , userprovidr kch na kch to chahye th wo bhi nh h. css indentatio bhi bigra hua h sir ka. 
//src mn fldr annd nam context thn file theme.js.
//53;00 hmny kia esko wrap , hmny dykha th k user.provider , theme.provider lgany s kch nh hota appko val dyni prhti h , jb tk val nh dogy k kiska access sabko h kiska nh wo to hmn pta nh h , to lana prega 
//ab appky pass en values ka drct acces h app jb chaho ly skty ho , thmebtn ko or card dono ko enka access milega , 
//value={{themeMode, darkTheme, lightTheme}}> ye methd kch nh kr rhy hn abhi peechy hmny functionlity define nh ki h , to aisi situatio bht aegi to app yee name k methd lo or functinality define krdo to value appny app h chali jaati  

// import './App.css'
// import { ThemeProvider } from './context/theme'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
// <div className="flex flex-wrap min-h-screen items-center">
//                 <div className="w-full">
//                     <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        
//                     </div>

//                     <div className="w-full max-w-sm mx-auto">
                       
//                     </div>
//                 </div>
//             </div>
//             </ThemeProvider>


   
//   )
// }

// export default App

///////////////////////////////////////////////////////////////

//ab 2 mthd h appky pass jo k drctly km kr rhy hn , ye mthd hony s ya toggle krny s kam nh hog, appki funtionlity automaticly nh html mn inject hojaegi , kabhi bhi appko koi bhi them chnge krni to access lyna preg, lkn actully mn them kaisy chng hoti wo bhi to btao 
//actual chng in them, hn jee wo appko classis j.s s h krni prhti , react ka sH koi role nh aata, useeffct lylyty jasiy h run ho waisy h ajahy . 
//document ka acess lo q k ye sara code client side p run horha q k hum server side ki bt h nh kr rhy , to hmtl ka acces lo or classlist ka aces ly k remove krdo jo bhi light ya dark jo bhi likh rkha , remove q kia ? q k mjhy add krna mjht nh pata pehly s kya value h to chng krny ka meiny load h nh lia yhn p , 
//ab add kya krna smple sa thememode , mein darl or loght bhi ly skta th lkn mjhy pata h ye sara kam thememode meiry state mein h to jarha h , jo bhi un mthd n jo bhi set kia wo un mthd ka kam h , mjhy to ye dykhna k jo bhi thememode mn ho   wo chnge krwa do , ab meri 1 dependency h k thmemode p jo bhi chng ho to ye useeffect dobar run hona chahye , to uska nam likh do , jaisy app code likhogy to appko bhi intuitin any lgy gy 
//ye jo useeffect h eska context s koi wasta nh ye bsc code h hmara.  ab chlty btn etc bnany src mn componnts or usmn card or themebtn. 1;00;00
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'
import Card from './components/Card'
import ThemeBtn from './components/Themebtn'

function App() {
  const [themeMode, setThemeMode] = useState('light')

  // You define a state variable themeMode to hold the current theme, with an initial value of 'light'.


  const lightTheme = () => {
    setThemeMode('light')
  }

  const darkTheme = () => {
    setThemeMode('dark')
  }
  // These functions change the themeMode state to 'light' or 'dark' when called.

  //actul chng in theme
  useEffect(()=>{
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])
  // This useEffect hook runs whenever themeMode changes. It updates the HTML element's class to reflect the current theme (light or dark), ensuring the correct theme is applied.

// The ThemeProvider wraps your app and provides the themeMode, darkTheme, and lightTheme to all components that need them.

  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>

                        {/* ThemeBtn is likely a button component for changing themes, and Card is another component that will receive the theme context values to display based on the current theme.
 */}
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
            </ThemeProvider>


   
  )
}

export default App

// The App component allows the user to toggle between light and dark themes. It uses React state and useEffect to apply the selected theme to the HTML <html> element. The theme context is passed down to child components (ThemeBtn and Card) via ThemeProvider.






//abhi mn esy toggle krrha hn to kc nh horha q k koi funility add hnh togle m lkn right clik kr k inspect p to html mn abhi class light h usy agr dark krn to dark , lkn meiny kia to ho nh rha or sir ka bhi nh hua kch smjh nh aya mjhy 1;2;00
//to sir n kaha k hm yhn manualy kr rhy hn to hm jaty hn themebtn mn jaa k usetheme  lo or themecontext appomil jaga chlty hn thembtn mn 

/////// lecture 14
//Context  Api with local storage. esmn basic project or srf cntxt api nae  sth mn local storg bhi dykhngy.

// local strg bhi cover hoga context api ka rvsion bi  or 1 proj bhi bn jaeg 
//projct chota bra nh hota complexities kiisi mn bhi introduc ki jaskti. 
//todo s best koi chz nh h agr bnany ajae , ab twiter bhi todo h or youtube k vdos bhi todo h bas 1 video ka str aajata h usmn , wo sb bhi bataong k kaisy bckends etc bnty.
//ab hm es todo mn kch todo add krty hn learn js, then add kia learn react and then add learn node.js and then learn dha. ab interestng chz h k jb hm esy refresh karaingy to bhi ye sb yhn p rhngy q k ye sary local strg mn save h , agr tab close kr k bhi aogy tb bhi yhn , pura projct dlt kr k aogy to h mileg. ab right clk s local storg bhi dykh skty 

//ab kch imp task hn jb hm esy tckMrk krdyty to 1 newCss implement hojat h , ye css h to hai koi todo originally mn crckDown hogaya ya strikeOff hogya , css h bs line through ka css h. app dykho to yhn 1 edit button bhi h , to yhn abhi appky pass text h , lkn you see this feature many places k jaisy h app edit p clk krty to wo text h apny app editable bn gya , nh nh wo text editable nh bnta , whn 1 input field aajata h wo input field mn jo bhi text whn likha hota usy hm pick krty hn or input field mn uski value rkh dyty , ab hmny yhn dsa likha to sv btn aya , to wo input field whn s hat jaegga or apppka 1 norml text field ajaega. to aisa kch mgc nh hota k appny app h wo text clickble bn jae , nae nae whn input field ajata uski css es trhn likhi jat h tky dikhy nh.

//usky elawa appko jisko delete , remv krna app krskty ho  , rmv krny k liye hr 1 ki id lgegi wo id pass krni hogi or ye rmv krdogy .

//edit krty time bhi id lgti h or edit hojata h 

//ab esy 2 part mn divide krngy es kam ko , ye top list hoga jo form hai , or dosri todos ki list h 

//ab ap repo mn todoContext Api notes.md kr k file milegi to form or items dono dy diye hn css etc sab h.

//ab notes mn todo item mn input field h jo k tckMrk waala h phir secnd input todo editable or not then edit sv btn wo bhi h , to konsa id ya icon show krngy wo bhi dpnd kreg k konsy mode mn h , 

//edit or dlt k liye id lgta 

//ab ye projct hmny krna h cntxt api s , hm focus ye nh kr rhy eska btn green or lenth ye , hm focus kr rhy business ligc or funtionality kaisy load hoti , EOD amazon k ui job nh dilwahngy business logc job dilwhngy. 













































