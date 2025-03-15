// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'




// createRoot(document.getElementById('root')).render(
  
//     <App />
  
// )


//ab app 1 fun h mein esy yhn declare krdn or esmn jsx likh deta div add or esmn h1 add, ab q k ye myApp bhi fu h to meiny App ki jaga myApp dedia 
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'

// function MyApp(){
//     return(
//         <div>
//             <h1>Custom App!!</h1>
//         </div>
//     )

// }


// createRoot(document.getElementById('root')).render(
  
//     <MyApp />
    
  
// )

// intrstng cheez btata hn agr ye fun h to ,   ye <MyApp />
// ye jsx ka sytax h to ye a khn s rha h , hr react 1 bundler use krta h abhi koi  babble h , vite bhi appny app mn bundler use krta h ye bbundler ka km bts magic krna syntax ko sudhrna or upgrade krna  use  <div>
        //     <h1>Custom App!</h1>
        //     </div>
        // )
        //appny esy rturn kia lakin wo tree graph banata key value s , easy to html wala syntax h but react ko html wala syntax nh ata smjh esi liye esy khty jsx javascript mn html mix h whn p to ye div waly syntax ki hoti parcing esy cnvrt kia jata tree mn , ReactElemnt waly syntax mn keyValue,
        //   ab khn na khn hamara babble h ya koi bhi pechy transpiler h wo es myApp (<MyApp />) ko bhi cnvrt kr rha hoga , //  ab 1 interstng cheez my app 1 fun h to fun ko esy MyApp() aisy execute kia jaskta h to react nd of the day js h to h agr aisy krn to run horh, krna nh h esy q k optimization s ly k appky code convention ko or baqi log jo likh rhy usmn prob hojati but for ske impress of your fnd 

        //////////////////////////////////

    //ab or kya krskta mn agrmn ye reactelmnt yhn la k likh do q k appny kha end of the day cnvery hota es trhn obj m key valu to agr mn es reactelmnt ko <myapp/> mn rkhdn to wo bhi to run hona chahye, q k myApp fun mn jo bhi likhty ho to end of the day parce  ho k es trhn k formt mn bn jata ye jo obj h to agr mn es mthd ki jaga dirct h ye likh dn or transpiler ka 1 stp bcha dn ?
//     import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'

    // const ReactElement = {
    //     type: 'a',
    //     props: {
    //         href: "https://google.com",
    //         target: "_blank"
    //     },
    //     Children: "click me to visit google"
    // }

    // createRoot(document.getElementById('root')).render(
  
    //     <ReactElement />
        
    // )

//     // to ye run nh hua q k actually mn myapp to fun h or ye fun h to execute horha but ye jo app prop bna rhy ye  import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
//    to sari parcing horha or fun expect kia jarha k ap fun pass krogy usy execute kkrnga yhn obj ki zarort thori h obj thori aisy execute hota h ye to yae bt hui na meiny appko bol dia ReactElement(), obj ko prnthesis k sth use nh krty  obj ko to drctly use kia jta ReactElement , but abhi bhi nh aha ,
    //  q k ye custom react h or pechy custom render ka code bhi likha th but yhn custom render ka code nh likha yhn render jo h wo react n likha h , q k ye mthd hto kya type k prameter expect kr rha yhns appsy , ab ye type kon expect kr rha th mein es type ki jaga hitesh bhi krskta yae mjor reason h q k whn prticulr syntax h custom mn k obj mn kaisa expect krta h 

    
    // const ReactElement = {
    //     type: 'a',
    //     props: {
    //         href: "https://google.com",
    //         target: "_blank"
    //     },
    //     Children: "click me to visit google"
    // }

    //ab next elmnt bnaty, ab anthelmnt kya krta jo kam pphly horha th return kar rha th div to hm bhi directly woi ka woi 
    // const anotherElement = (
    //     <a href="https://google.com" target='_blank'>visit google </a>
    // )
    // createRoot(document.getElementById("root")).render(
    //     anotherElement
    // )
    

    //visit google agya , ab na meiny esy anotherElement ko syntax mn rkha na paranthesis lgahy , ye sirf obj mn convet hoga sirf to ye batao uper react elmnt q nh chala phr q k wo syntax thk nh h ye obj ki key value proprty ye derhy shyd nam thk nh q k hmny khud bnaya , to ye render bhi jisny bnaya he also expect smthng, 
    /////////////////////////////////////////////////////////

    // //ab or dykhty react bts appko react.createelemnt deta h usmn bhi ye sb pass krskty ho , createelement bhi appsy 1 obj h lyta h lkn kis trhn deta wo syntax predefine h i cant control it , yhn kch bhi derha th type h prop h , yhn special syntax , ab esmn first parameter expect h yag ab ye p tag bhi hoskta h1 bhi jo marzi ho 2nd jo expected hota ye hota obj ye sari proprty add krta jo yaad h hm setatt kr rhy thy but ye nam nh dety {} href or uski value deskty or target blnk or jo bhi attribute then expect hota direct texy click me to visit google 
    // import React from 'react'
    // import { StrictMode } from 'react'
    // import { createRoot } from 'react-dom/client'
    // import App from './App.jsx'
       


    // const anotherElement = (
    //     <a href="https://google.com" target="_blank">visit google </a>
    // )

    // const reactElement = React.createElement(
    //     'a',
    //      {href: 'https://google.com', target: '_blank'},
    //       "click me to visit google"
    //     )


    // createRoot(document.getElementById("root")).render(
    //  reactElement
    // )


    


    //ab 1 intrestng chx react mn app app.jsx mn dykhngy ab hm jaty app.jsx mn 

//     import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'




// createRoot(document.getElementById('root')).render(
  
//     <App />
  
// )

///////////////////////////////////////////////////
//ab yhn mn vr inject khn krngi pehly globl mn var define krlyty , ab mjhy ye another user inject krna to mn khn krnga to jb appka sara tree bn jata usky bd variable injections aty 

 import React from 'react'
    import { StrictMode } from 'react'
    import { createRoot } from 'react-dom/client'
    import App from './App.jsx'

       
    const anotherUser = 'chai aur react'

    const anotherElement = (
        <a href="https://google.com" target="_blank">visit google </a>
    )

    const reactElement = React.createElement(
        'a',
         {href: 'https://google.com', target: '_blank'},
          "click me to visit google",
          anotherUser
        )


    createRoot(document.getElementById("root")).render(
     reactElement
    )

//to jo bhi evaluated expression h wo as it is uth k aarha h yhn username th to uski value uth k aarae h to anotheruser ki jaga agr p pura expression likgy to ye eod convert horha obj mn .obj mn koi syntax hota obj mn if else aisy naghussa dyty , to ye rokta h hmn q k ye evaluated expression h , 38:00


//summmarize

//sbsy phly khud ka 1 react elmnt bna k dykha 2 chxn ki need phly 1 container lo usmn root elmnt ko quer kr  utha lia , ab chahye rndr mthd jo k meiry elmnt la or usy 1 container mn inject krdy , ab ye jo reactelnt h hmn react ki smjh dykhni thi k react mn kaisy bnty to khud k hisab s type or properties or phir usky ndr jo likhna , 2 approach s bnaya 1 to jhn hm 1,1 attribute set kr rhy or 2nd iteration jismn dom elmnt ko repeat krwadia , ab ye th custm rndr or mn expect kr rha th k jb bhi app pass krogy es syntax mn krogy type prop , 



//phr hm ghy main.js mn esmn hmny dykha agr app.js agr methd h hai to kya mn yhn mthd likh skta but krna nh parnthesis lga k phir mhny dykha agr react bhi ye sb 1 tree structr mn banati or usy inject krti to mein mera elmnt bhi to krskta wo nh chal rha th phir meiny socha agr mn es trhn elmnt dyta a tag mn pura ka pura html h dydyta to kam kr rha th , mry elmnt mn no burae but proprtes keys meiry mn s bnae to react mn nh chalegi to phir , 
//react.createElement method jo babble inject krta h esko transpiler or phir meiny dykha pehla elmnt a then agr koi attr h to rkhain wrna esy empty {} but dena h prta h third elmnt mn expect krta children jo k mjhy text inject krna h , a tg mn parag mn ya h tag mn , or final aya evaluated expression jhn var injct krty ye bts. 

//acha 1 chex app jsx ko direct bhi call krskty 
// import {jsx as __jsx} from "react/jsx-runtime.js"
//yhn s app appny evaluated expression ko direct createElemnet ki jaga jsx s bhi krskty lkn etna asaan nh but kia jskta , 

// learings for custom react (bts of React) in html create div attach js , in js get that div and create our own custom elmnt (as like react sees elmnt ) thn for rendering we create custom render methods which create the elemnt in html ans inject it in the div or container 

// lecture # 5 why you need hook and projects 
// hooks prhna h q h , jb india or australia ki cricket mtch series hoti th tb indian btsmn pull shot ki bht prctice krty 
// thy q k ball bounce kha k upr aati thi but jb india banglades ya pak to whn straight drive cover drive ki more prctc krty , ball base line s neechy h rhti thi jb tk aisy scenerios h nh ahy to prctc h q krni , hm aisi situation bnaty or phsty jhn hmn hooks prhna pre, project bnaty counter project 1 btn s up or 1 s down , ab create krty vite s project , vite p ghy or get strted , (scaffolding your fiest vite projct)vite p ghy or copy, trmnl p paste kia 