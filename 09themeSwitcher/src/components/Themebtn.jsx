// import useTheme from "../context/theme";
//hmn krny 2 kam onchnge or checked q k chcked wala h , to onchnge dedia or agr wo checked rhy to konsi them ho , to themeMode hamara hojaeg dark , to theme jb chng hogi to kya krna h , kch nh krna bas mthd ko cal krngy value chng krwadaingy , to drkmodestatus lyna to prega na k abhi value kya h  to hm , app directly chckboxes mn event ko ly skty ho , hmny dom mn discuss kia th ye sb if you remebr, ab hmary pass status agya k abhi uska status h dark  , ab chng krna us staus ko to if , drkmodstatus agr usmn koi valu h to drkthm call seedha h or else mn lightthm cal kwadia . jinhony dom nh prhi to thori prob ahegi mein summarize krwa deta 

// export default function ThemeBtn() {
//     const {themeMode, lightTheme, darkTheme}=useTheme()

//     const onChangeBtn = (e) => {
//         const darkModeStatus = e.currentTarget.checked

//         if(darkModeStatus) {
//             darkTheme()

//         } else {
//             lightTheme()
//         }

//     }

//     return (
//         <label className="relative inline-flex items-center cursor-pointer">
//             <input
//                 type="checkbox"
//                 value=""
//                 className="sr-only peer"
//                 onChange={onChangeBtn}
//                 checked = {themeMode=== 'dark'}
//             />
//             <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
//             <span className="ml-3 text-sm font-medium text-gray-900">Toggle Theme</span>
//         </label>
//     );
// }
/////////////////////////////////////////////////
//1;06;00
// dykhain ye h appky chckboxes or chkboxes mn hoti state k wo chk h k unchk to hmny seedha check dedia or themmode===dark dedia  to chk k bd appki dark value ajegi , hm drkmodestatus lylaingy agr DMS true ho to drkthm mn dala else light mn , lkn hmary crd ko nh pata k ye sara kam hmny krdia to card ko kon bataega , etny s mein to hmara kam hogya q k ye states h or state dirctly link h appki theme s  or thm mn hmny ye sarivalues li h or jo app.jsx h , usmn hmny kha h k thememode mn agr koi bhi chnge ho to useeffct ho wo sara appny app run hojaega to interstng thn is appka jo ui developer h usny jo bhi css etc likh k di dek mode etc ko appko usmn chnge h nh krny hn yae to sbsy intrstng bt h esliye app dykhty tailwind etc mn 1 h btn ata upr q k ye kam appky react enginner kr rhy unhn ny 1 btn uper dala jo html mein sirf 1 valu chng krdyty or hr chx wrap h context api s , to app exactly tailwind ki h funtinlity bna rht thy appko pata nh t, taiwind clone nam deta many views, ab run kia to nh chl rha . lkn inspect mn togle s horha h 
//code mn issue nh issue th tailwind mn , to tailwind ki conf mn dikkat h q k hm boilerplate config kr rhy thy , to tailwind cofig mn gya , 1;9;00 q k ye funtio html k pass s ati to enable krny k liye mode hota to appko enable krna hota darkmode  to 2 properties milti 1 class , 2 media to hm nh chahty  system k bases p chly jo k chlta bydefault to mein y class ki . refrsh kia to toggle thm kam kr rha h jaisy h eable kia to automticlly sb jga ubdate hogya h sabko acces mil gya k hm darkmode mn chl rhy hn , jaiy jaisy agy jhngy or chllnges , agr phr usmn mn contxtapi smjhao to bn gya projc. agy ja k hm login bhi hndle kr rhy authentication bhi kr rhy , kch socil media bhia rhy hn.

//tailwind mn choti si config krni es project mn . 


import useTheme from "../context/theme";




export default function ThemeBtn() {
    const {themeMode, lightTheme, darkTheme}=useTheme()
    // Using the Theme Context:
    // The useTheme hook is called to access the current theme (themeMode), as well as the functions to toggle the theme (lightTheme and darkTheme).





// The onChangeBtn function is triggered when the checkbox is toggled.
// It checks the status of the checkbox (e.currentTarget.checked), and if it’s checked (dark mode), it calls darkTheme(). Otherwise, it calls lightTheme().

    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked

        if(darkModeStatus) {
            darkTheme()

        } else {
            lightTheme()
        }

    }

    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={onChangeBtn}
                checked = {themeMode=== 'dark'}
                // The checked property is set based on whether themeMode is 'dark'.

            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900">Toggle Theme</span>
        </label>
    );
}

// Summary:
// ThemeBtn is a toggle switch (checkbox) that lets users change the theme (light or dark). When the switch is toggled, it calls either darkTheme() or lightTheme() based on the checkbox status. The component uses Tailwind CSS for styling and provides a smooth transition between themes.






//////////////////////////////////////////
// 3;57 am sunday 17Nov// 13 lecture pura kia 


//lecture # 14 kal prhty hn Allah Hafiz.