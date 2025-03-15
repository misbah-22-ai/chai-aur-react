//4
//app ny agr dom prha h to app ye methd design krskty , 1 fun ln customRender or ussy 2 elmnt expect krn 1 to app mjhy reactelmnt dogy (app uska nam kch bhi rkho usky liye abhi ye placeholder h parameter jisy bolty) or 1 container jhn mn inject krnga 
 //ab injct kaisy sbsy phly wo dom elmnt lo to dom elmnt create krna hoga , appko yad ho to phly dom elmnt creat phir jhn injctkrna hota th append child krky likh lyty thy , const kr k domelmnt banaya
 //const domElemnt = document.createElent('p') but q k mn esuy moduler fun bna rha to react k through create but dirctly react to h derha wo value ussy puchna prega appka type esi liye createElmnt mn meiny sabko keys di h 

// 

//  function customRender(reactElement, mainContainer){
//     const domElement = document.createElement(reactElement.type)
//     //elemnt to hogaya create lakin elmnt to khali h na khali container
//     domElement.innerHTML = reactElement.Children
//     //woi react elmnt s lo or uska children add krdo , 2 prt hogahy elmnt create or childrn add ab attributes bhi set krngy 
//     domElement.setAttribute('href', reactElement.props.href)
//     domElement.setAttribute('target', reactElement.props.target)

//     //ab lst mn krna h ye jo maincontainer appny provide kia h jisy root s slct kia h bas usmn add krdo 
//     mainContainer.appendChild(domElement)
//  }



////////////////////////////////////////////////
//  function customRender(reactElement, mainContainer){
//     const domElement = document.createElement(reactElement.type)
//     domElement.innerHTML = reactElement.Children
    
//     domElement.setAttribute('href', reactElement.props.href)
//     domElement.setAttribute('target', reactElement.props.target)

//     mainContainer.appendChild(domElement)
//  }
/////ORRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR
//hmny thora sa kam brha lia hm esky or versions or itterations dlngy tky or smjh ahy k react esy kasy generalize kr rhy ab ye code to uper wala thk nh q k agr third attribute hota to prob agr 1 attribute hota to prob hojati agr 1 h1 hota ya agr 1 div hota to prob to ab loop based code , ab hm esy thora moduler bnaty 

 function customRender(reactElement, mainContainer){


const domElement = document.createElement(reactElement.type)
//woi react elemnt jo pass hua ussy puchlo appka type 
domElement.innerHTML = reactElement.Children
//key ko hmny bola prop q k obj hmary pass h props , , ab hr 1 elmnt mn jao or uska vlue dykho , kahi br props mn h logon n children etc dedia to whn chota sa code hota th if statmnt mn k agr appky pass prop === children to continue , abhi lgao na lagao q k hmny prob mn koi children rkha h nh h , ignore bhi krskty es line ko 
for (const prop in reactElement.props) {
    if (prop === "Children") continue;
    domElement.setAttribute(prop, reactElement.props[prop])
   
}
//abhi konsa att set krna prop es prop mn value kya add krni h q k key value h to h wo hm puch lngy reactelmnt k props k andr jaa k ye ye key pass krdngy jo bhi h prop, ye code btr h q k pechly mn hm repeat kr rhy thy yhn thori si pehtr funtnlity li h 

mainContainer.appendChild(domElement)


 }






// sbsy phly root grab , ab mjhy esko rnder krna h suppose a tag , bts a tag kis trh dia jata wo esi trhn daingy jaisy apka fun jo h usky andr jo elemnt return kia wo react kaisy dykhta wo dykhngy hm , esy khngy const reactElemnt, q k mn appko ye similation krwana chahta k end of the day jo appny fun mn html return kia h wo react ko kaisa dikhta , ya react usko compile krny k bad kaisa dikhta loosely use compile word 



//to react jo h na appka jo bhi elmnt h ussy tree bnany ki koshsh krta h , tree dikhta app app.js mn dykhn 1 h1 tag h phir p text h , yhn a tag hoskta th uski proprtes hoskti thi href or trgt wo sabko kaisy dykhta , props jo h ye obj hota esmn properties hoti , ye sb terminologies h aisa actually mn likha hua nh hota , ye kam uth react ka hota h , abhi hm react use nh krrhy customised kr rhy , ab mn chahta ho koi methd ho jo es elmnt ko render krdy
//2
const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    Children: "click me to visit google"
}
//en of the day react mn esi trhn kam hota app jo bhi elmnt dyty ho wo esi trhn evaluate hota h 

//ab mn chahta hn 1 elmnt ho ya 1 mthd ho jo esy rndr krdy es elmnt ko add krdy root mn , yae to hota dom mn k hmara jo root h ya div hai usmn mein kch elmnt inject krna chahta ho , 




//1
const mainContainer = document.querySelector('#root')

//3
customRender (reactElement, mainContainer)

 //mein method ko nam deta customRender ye 2 chzn expect krta appsy k pehli to kya inject krn or khn p karn , lkn lkn abhi hmn nh pata k custom rnder kam kaisy krega 
 //app ny agr dom prha h to app ye methd design krskty , 1 fun ln customRender or ussy 2 elmnt expect krn 1 to app mjhy reactelmnt dogy (app uska nam kch bhi rkho usky liye abhi ye placeholder h parameter jisy bolty) or 1 container jhn mn inject krnga 
 //ab injct kaisy sbsy phly wo dom elmnt lo to dom elmnt create krna hoga , appko yad ho to phly dom elmnt creat phir jhn injctkrna hota th append child krky likh lyty thy , const kr k domelmnt banaya
 //const domElemnt = document.createElent('p') but q k mn esuy moduler fun bna rha to react k through create but dirctly react to h derha wo value ussy puchna prega appka type esi liye createElmnt mn meiny sabko keys di h 


//  summary
//  const reactElement = {
//     type: 'a',
//     props: {
//         href: "https://google.com",
//         target: "_blank"
//     },
//     Children: "click me to visit google"
// }
//en of the day react mn esi trhn kam hota app jo bhi elmnt dyty ho wo esi trhn evaluate hota h tree graph s , yae h appka custom react , whn bhi andr 1 methd hota h jo continuosly elmnt create krta rhta h , elmnt es trhn tree graph banta rhta or end mn jo app bolty inject krdo to inject krdyty 













// 