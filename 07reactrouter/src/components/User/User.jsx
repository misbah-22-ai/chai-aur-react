// import React from "react";

// function User (){
//     return(
//         <div>User:</div>
//     )
// }

// export default User

//ab jhngy main.jsx mn to jitna bhi kam h k kis trhn app parameters logy wo actually mn sara kam mein.jsx m hota . 

//ab duplicate kr k ''user/:id'//////////  : k bd app jo bhi valu lkh rhy bht imp h kahi br app userid likh rhy ho to jo bhi kr rhy note down krlena khn p, konsa componenet yhn render hona chahye meiny User componnt lia to mn User cmpnnt render krwadeta hn . eska ab mainMenu mn koi path nh h hona bhi nh chahye jb m yhn ata or enter krta to user to agya 

/////////////////////////////////////

// ab es valu ko yhn lia kaisy jata h asli mudda to usi bt ka h kis trhn s app usky paramter ly paogy , ab parameter to appny lia h userid  nam se , automtc appko eska acces milta hai us elemnt mn jo bhi appny yhn lia mtlb componnt mein jaisy User. ab cmpnnt mn appko access ml gya to mn drctly yhn aa k {userid} . react s kbhi bhi cnfuse mt hoiyega react hawa mn kch bhi nh krdeta whn val ati h jati h mthds s props s pass ki jaati , to whn bhi appko mthd dia jata usePrams ye reactRouterdom s aata . ab appko yd ho t hmny bhi usi trhn k mthds bnahy thy const {userid} = usePrams().

//ab userid llylyty cons or ye khn s milega usePrams s , cstm hook hmny banany skh liye ab koi dikkt h nh , save krty hn ab chlty hn to user:100 agya ab zaroori nh hoskta h , ab essy ye  nh k valu usmn kya arae hoskta h , val hoskta num arae ho hoskta username arae ho but jo bhi url mn ahega wo appko access ml jaega . usky bases p app display krwana chahty hoskta h app koi database call krwana chty whn s info ly chahty 


import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>User: {userid}</div>
  )
}

export default User

//44;00 ye hogya hamary pass k kis trhn dynamically data lia jta h , ye apppka crash course h chal rha reactRouterDom ka , ab bnaana h appko 1 or componnt . 

//ab chahye 1 or component or es componenet ka nam h github 