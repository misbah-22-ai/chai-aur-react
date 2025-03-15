
// src mn foldr componnet or phir 2 file login.jsx or profile.jsx 
//1 mn hm data kis trhn acces hota wo dykh liangy or 1 mn send hota kis trhn data to don khani clear
//rfce s login ka cmponnt aya , ab login wali chx bhi chahye hong q k data bhejna bhi to h. to kch chzn appko import krni hogi 1 to useState or 1 useContext 0r esi k hisab s appka documntation yhn s stt hota jo react wala h. usecontext 1 hook h wh s app dirct access ly skty lkn wo setup wala process bhi h, esky elawa hm appna userCotext bhi ly aaty hn , 

//hm appna ui define krlrty. plceholdr mn jo apka man h wo daliye hmain to value context mn provide krni h whn fetch krni h ussy dykhty hn esi trhn 1 iput hoga passwrd or 1 btn . form nh ly rhy hm//////////////////////////////////// , hm btn p he onclick lylyty, onclk p hndlesubmt to obviousy methd bhi bnana hog. ab ye jo plachldr, usernm or paswrd lia esky liye 1 state to lgegi or state mn value update krni hogi . ab state bnadi to ab ye value control kaisy hogi q k abh tk state hawa mn h//////////// , to wo cntrl hoti h k jo appki value h wo app govern krngy username s. lkn  es field mn agr koi chng ho to wo state bhi to update honi chah to hmny onchnge lia or event fire kia k koi bhi e ho to us e ko lijiye or setUsername ko call kijiye or whn es valu ko pass krdn 3;00


// import React, {useState, useContext} from "react";
// import UserContext from "../context/userContext";

// function Login (){
//     const [username, setUsername] = useState('')
//     const [password, setPassword] = useState('')
//     const handleSubmit = () => {

//     }
// return(
//     <div>
//     <h2>Login</h2>
//     <input type="text" 
//     value={username}
//     onChange={(e) => setUsername(e.target.value)}
//     placeholder="username" />

//     <input type="text" 
//     value={password}
//     onChange={(e) => setPassword(e.target.value)}
//     placeholder="password" />
//     <button onClick={handleSubmit}>Submit</button>
    
//     </div>

// )

// }

//////////////////////////////////////////////////////


//values hogae govern eta kam to hmn bhi ata th but actully mn jo process sikhna th k es userContext mn jo values h wo kaisy fetch krga mn usky liye appko help krta h ye usecontxt, how , to jis trhn appny usestate hook use kia h usi trhn esy bhi use krngy. ab jo log bhoo l ghy hn thora to ye setUser khn  s aya to context mn jaiye or ye jo usercontxt mn jaiye or whn jo setUser h jo hm pass kr rhy thy to ye jo 2,2 val h esi liye to yhn s pass ki h prop s, taky us val s agr koidata chahye to us user s lyln

//lakin agr   es field mn user mn state mn agr koi value add krni h to meiry pass mthd h na setUser // const [user, setUser] = React.useState(null)//  to ye jo setUser ka access h ye khn s ml rha h mjhy es useContext s , es useCotext mn wo context dena prhta h q k abhi to appka 1 context h hoskta h login context ho product contxt ho , api call cntxt ho to properly right cntxtdna prega appko to wo proprly contxt dogy app tbhi ussy app wo setUser ly paogy 

//ab setuser appny ly h lia h to yhn ap ko krna kya h pehly to event ahega 1 hndlesubmit p or phir preventdefault , q k bydefault app jb bhi sumt krty ho to value through url khn na khn chali jat ya postmthd k through to wo mn nh chahta kjhy. to setuser mn usernm or passwrd krdo to hmn data bheja to agya k kesy bhjn. ye easy esliye k easy bnya gya 32;41

//ye bt hui bhejny ki ab lena kaisy h , if you thnk data lyny k liye exat same kam krna hog , setuser ki jaga user lylng to whn s data extract klng to 1 dm sae ho app to profile mn aty 
//{'     '} space k liye dala ye 


import React, {useState, useContext} from "react";
import UserContext from "./context/userContext";
// UserContext is imported, which allows the component to access shared state.
// username and password are state variables to store the input values for username and password.
// setUser comes from UserContext, allowing the component to update the user information in the shared context.

function Login (){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
        // updates the user data in the shared context with the entered username and password (setUser({username, password})).

    }
return(
    <div>
    <h2>Login</h2>
    <input type="text" 
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    placeholder="username" />
    {'   '}
    

    <input type="text" 
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    placeholder="password" />
    <button onClick={handleSubmit}>Submit</button>
    
    </div>

)

}
export default Login