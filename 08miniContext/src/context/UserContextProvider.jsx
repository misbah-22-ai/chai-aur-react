
//ab hmn 1 provider bhi bnana prhta h 20;00, esko bny k 2 ways , to contxt mn file bnae userContxtProvider.jsx. abhi tk js th q k whn jsx return nh kr rhy thy lkn jaisy h appny contextProvider bnaya ab hmn jsx bnana prega , q abhi to btaya jo hm frgmnts ly rhy thy top level p usko rkhna preg tabhi to sary var mn access ho paega. esi liye esy jsx bnaya 

// hmny kch outlet sikhy thy k jo bhi value h header as its rkho footer as it is rkho or outlet jo bhi h wo display krwado , usi trhn 1 or concept hota h appky pass jo bhi prop aarhy children usko as it is yhn use krlo. childrn koi magicl kch nh hota jasiy app apna div etc dyty woi childrn h, 1 trhn s children 1 generic nam h k jo bhi appky pass rha h usy as it is agy pass krdo SH zaroori nh childrn h nam do but state etc mn already use hota th to hmny bhi yae use.

//ab hmny return mn valu deni h wrap kr k us k andr kya daingy jo bhi hmary pass arha wo children hm render krwadngy , ab esmn hoskta h card comp ahy hoskta h card mn dshbrd ahy. childrn likhy ka mtlb h jo bhi arha h wo as it is likh do to ye <UserContext> akely lkhny s kch nh hota eski 1 valu appko access krni prhti 1 proprty to wo h contxt.provider literlly provdr h bolty. to app yhn es trhn UserContext.Provider s kam nh hoga kya acces krega koi data bhi to dena hoga .

// import React from "react";
// import UserContext from "./userContext";

// const UserContextProvider  = ({children}) =>{

//     return(
//         <UserContext.Provider>
//             {children}
//         <UserContext.Provider/>



//     )
// }

// export default UserContextProvider

/////////////////////////////////////////////////////
// to hm yhn state dedaingy esmn mthd dedia setUser. or hm lylyty hn useState s. React.useState slylyty q he import  krwahn . appny provider s wrap to krdaia but actully mn konsi value ka access de rhy wo bhi to btana prega na . USKY  liye provider mn 1 property milti h hn jee prop yhnbhi app prop h pass kr rhy 1 trhn s wo h value={} to mn yhn value pass nh krnga 1 obj pass krdnga to mera jo mn chahy data dyskta ho to mein user ka acces bhi yhn s derha setuser ka  hi derh or bhi 5 chxn h to 5on ka accs dedo . ye hogya almost adha kam. value={user, setUser}
import React from "react";
import UserContext from "../userContext";

const UserContextProvider  = ({children}) => {
    // children refers to the components wrapped inside this provider when used.

    const [user, setUser] = React.useState(null)
    // Creates a state variable user (initially null) and a function setUser to update it.


    return(

         <UserContext.Provider value={{user, setUser}}>
            {children}
         </UserContext.Provider>
            
    )
    // Wraps child components (children) with the context provider.
// value={{ user, setUser }} makes the user and setUser functions available to any component that uses this context.

}
export default UserContextProvider

// UserContext is the context to store and share user-related data.
// UserContextProvider is the wrapper component that allows you to manage and provide user and setUser to other components.
// Components wrapped with UserContextProvider can access and modify the user state without needing to pass props manually.






//
//provider next time bnhngy speed mn bnahngy k jo bhi api call krni h wo yhn p krlo state wali jgha p, yhn jo acces mil gya wo seedha provider mn throwIn krdo , var bna daingy state mn store krlaing , useeffect jo lgana lgaiye 24;00. ab ye to hogya k store bn gya ab es store ka acces kasiy mieg. kch log store ka acces drct main.jjsx m dedet kch app.jsx mn whn bhi same h kam hog . appko userContextProvider import krna hoga chlty app.jsx






















