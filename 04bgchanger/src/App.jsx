// import { useState } from "react"




// function App() {
//   const [color, setColor] = useState("olive")

//   return (
    
//     <div className="w-full h-screen duration-200"
//     style = {{backgroundColor: color}}>
//       <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
//         <div className="flex flex-wrap justify-center  bg-white gap-3 shadow-lg px-3 py-2 rounded-3xl">

//           <button 
//           onClick={() => setColor('red')}
//           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//           style={{backgroundColor: 'red'}}
//         >Red</button>

//           <button
//           onClick= {() => setColor('green')}
//           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//           style={{backgroundColor: 'green'}}
//         >Green</button>

//           <button
//           onClick= {() => setColor('blue')}
//           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//           style={{backgroundColor: 'blue'}}
//         >blue</button>

//           <button
//           onClick= {() => setColor('oive')}
//           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//           style={{backgroundColor: 'olive'}}
//         >Olive</button>

//           <button
//           onClick= {() => setColor('gray')}
//           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//           style={{backgroundColor: 'gray'}}
//         >Gray</button>

//           <button
//           onClick= {() => setColor('yellow')}
//           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//           style={{backgroundColor: 'yellow'}}
//         >yellow</button>

//           <button
//           onClick= {() => setColor('pink')}
//           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//           style={{backgroundColor: 'pink'}}
//         >pink</button>

//           <button
//           onClick= {() => setColor('purple')}
//           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//           style={{backgroundColor: 'purple'}}
//         >purple</button>

//           <button
//           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//           style={{backgroundColor: 'lavender'}}
//         >lavender</button>

//           <button
//           onClick= {() => setColor('white')}
//           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//           style={{backgroundColor: 'white'}}
//         >White</button>

//           <button
//           onClick= {() => setColor('black')}
//           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//           style={{backgroundColor: 'black'}}
//         >Black</button>
//         </div>
//       </div>
//     </div>
    
    
//   )
// }

// export default App

//bckgrouond chnger h screen ka appny ly rkha elmnt esmn color p click to wo chnge , ab es project ko approach kya ho krny ki ab hmny dykha colors chnge horhy to i need to hold kisi variable mn ,, bottom mn bar, to div lia usmn position lyli ab usky andr bar banaonga for button , ab es button ko chng kaisy krna h , pehla step jo mind mn ata k hr butto p 1 onclik lagadnga, onclick hndler lylonga or yhn ja k state update krdnga koi burae nh us approach mn 1 dm prfct h lkn 
//onclick ko fun chahye fun s jo return arha h wo nh chahye , ab onclick = {setColor} yhn tk to prob nh thi on click ko q k usy fun chahye or set color fun h hai lakin jb app es trhn likh dety ho onClick = {setcolor()} to fun jo return kar rha h value wo mil jaega, ab return kr rha h ab fun ,fun h thori return kr rha mjhy kya pata andr kya h return kr rha hoskta andr stri ho num ho to es trhn jb likhty to appky pass koi chara nh app return value de rhy ho usko , lkn q k mjhy prnthesis mn parameter bhi pass krny thy to parameter ka prob h to mjhy yhn red to pass krna h hai to es ko hata k callback lylo , clbk fun h or onclick ko fu chahye th ab clbk setColor ko call kr rha , fun mn 1 or fun call kr rhy or yhn red likh dia ,
// onclick = {setcolor} ye app de rhy ho fun ka rfrn ye bhi thk h fun wo lylega, fun jb app es trhn s dogy to app parameter nh pass kr sty , parameter agr passkrny to apko ye es trhn h krna hoga setcolor('') syntax h , syntax ka prob h react ka prob nh h , js ka bhi nh , agr es trhn pass krta to meiny drct h execute krdia , to fun jo returnn value dega wo onclick mn chala jaega , onclick ko to fun chahye 

// lecture 10 , useEffect, useRef and useCallback with 1 project 
//koi na koi mtd run kr rha hoga jo k ye rndom text de rha mjhy paswrdGenertr h basically to kch na kvch bydefault ru horha hoga , dosra thought k jb mn slider ko cher rha hnto tb bhi text genert horha h , kch na kch aisa mthd hoga ye paswrdgent kr rha jaisy h mn slide ko kr rha to wps s run , numbers p meiry pass mn number included h to ye bhi koi mthd hoga or chararcter ka bhi koi mthd hoga , mjhy page bhi rfresh nh krna prha , 1 chz seekhny wali h k agr 1 h mthd ko etni br run krrhy to basically run krdogy ya koi optimize taeeka h run krny ka , DSA mn to hm bht bt krty hn optimize way ki but agr us dsa ko yhn implement h nh kia to kya faida , to yhn concept ata memoizationn ka k react automatically hmn kuch aisy hooks deta h jinko use kr k app aisi situation mn chxn ko optimize krskty ho mthd 1 he hai run hona h lki app jitni chzon ko yaad rkh saky memory mn rkh skn to benefit hamara h esi ko hm sbsy phly take down krngy , 
//ab yhn h copy ye interestng hook h yhn p or eska best use yhn kia jata k jb app esy krty ho copy to ye txt h copy hua h , lenth number bhi hoskta th, to yae input field copy krna to wo kaisy ye sbsy interestng h , 
//hmny 3,4 chxn ko yhn lia h sabsy pehli to kis trhn hm chzon ko pg load hoty h krpahn , phr kch depedencies hlike number box h , lenght ka slider bocx h , unpy kch bhi cherchar s wo mthd dobara run hota h then we learn how to optimize , abhi hm copy kr k targt kr rhy hoskta h apky alg sceerios or situation ho  to na k input field blky koi bhi elmnt hoga to app usko trgt krna ajega ye sara kam hook s hota 
////////////////////////////////////////////////////
import { useState } from "react"




const bgChanger = ()=>{
  const [color, setColor] = useState('olive')
  const handleColorChange = (color)=>{
    setColor(color)

  }
  return(
    <div className="w-full h-screen duration-200"
       style = {{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center  bg-white gap-3 shadow-lg px-3 py-2 rounded-3xl">

       <button onClick={()=>handleColorChange('red')}
       className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: 'red'}}>Red</button>
       
       <button onClick={()=>handleColorChange('blue')}
       className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: 'blue'}}>Red</button>
       
       <button onClick={()=>handleColorChange('gray')}
       className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: 'gray'}}>Red</button>
       
       <button onClick={()=>handleColorChange('yellow')}
       className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: 'yellow'}}>Red</button>
       
       </div>
        </div>
          </div>


  )
}

export default bgChanger