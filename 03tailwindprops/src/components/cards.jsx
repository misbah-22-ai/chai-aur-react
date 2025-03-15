// import React from "react"

// function Card (props) {
//     console.log('props', props);
//     // ye appky props hor jo value mil rae h wo prop

    
//     return (
//         <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//     <a href="#">
//         <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
//     </a>
//     <div className="p-5">
//         <a href="#">
//             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
//         </a>
//         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
//         <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//             Read more
//              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
//             </svg>
//         </a>
//     </div>
// </div>


//     )
// }


// export default Card

//log krwaya to props object aya , 4 br q load hua we discus late ye react ka new featue h built mn aisa nh hota stict mode etc ki waja s hota but we discuss later, obj mein default aya prototype etc , jb bhi squre square brckrt ahy to ye hidden scope h jb bhi app documnntation prty , dirctly kch bhi accessible nh h , abhi ye props obj h empty , to ab esy kaisy bha jae k app yhn kch rcv krain , jb app <Card/> ko lyty to jo bhi yhnpass krngy to wo props m show hogi  eg  <Card channel = 'chaiAurCode'/> , sv kia to pehly prop obj th khali th abhi auto reload k bad prop ki value chael chaiaurcode , agr mn ye val nh deta suppose koi arr pass krderta ya esky bad likh deta myArr=[1,2,3] to esny kha ye nh krny dnga  agr obj deta to lylyta to obj bhi nh ly rha , uper ja k 1 obj declare kia let myPObj or usy someObj m dia to bhi nh allow , agr appko yd ho hmny khud ka react bnaya th to ye value kaisy display hogi i told you 1 obj hoga usmn 1,1 value rkhi jti , 1 paramtr define krta card dyna then us mn create elmnt uski propr or last mn jo ap js ko final values lkhty jo bhi wo sb as it is ajaya to ye sb variable mn pas kra hoga usky liye curly braces lagana hog
//////////////////////////////////////////////////////
////////////////////////////////////
 

// to mjhy pata h es trhn .obj h or obj h 1 pass horhqa h to khi br shortcut kl iye esy props ko hata k destructurng krdi jati h jo k hmny js m prhi thi , direct h appny username lylia to hr jaga props.username krny ki need nh, ab h1 jo text h udher ye js inject krni h {username}, ye card fun mn jo code likha h yhn h5 mn ja k meiny {username} variable inject kia through js or eski value meiny app.jsx mn card mn di 

// import React from "react"

// function Card ({username, btnText}) {
//     console.log(username);
    
    

    
//     return (
//         <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//     <a href="#">
//         <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
//     </a>
//     <div className="p-5">
//         <a href="#">
//             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{username}</h5>
//         </a>
//         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
//         <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//             {btnText}
//              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
//             </svg>
//         </a>
//     </div>
// </div>


//     )
// }


// export default Card

//////////////////////////////////////////////

// import React from "react"

// function Card ({username, btnText}) {
//     console.log(username);
    
    

    
//     return (
//         <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//     <a href="#">
//         <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
//     </a>
//     <div className="p-5">
//         <a href="#">
//             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{username}</h5>
//         </a>
//         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
//         <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//             {btnText || 'visit me'}

            
//              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
//             </svg>
//         </a>
//     </div>
// </div>


//     )
// }



// export default Card

///////////////////////////////////////////////////
//default value yhn dedi

import React from "react"

function Card ({username, btnText = 'visit me'}) {
    console.log(username);
    
    

    
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{username}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {btnText}

             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>


    )
}


export default Card


//tailwind bhi seekh li component hi ly ahy , khud k copnnts banana seekh gahy , componnt mn koi bhi value pass krna obj, string , arr usy hndle krna h seekh ghy app ka basc bhi pros k bsc ka abstrction bh dykh lia , default bhi lyli 