// 47;00 yhn react import ki neend nh h waisy m kr rhy thy acgi bt h , 1 to chahye createContext , waisy hm react.createContext kh rhy thy wo bhi thk hai , or 1 chahye useContext almost sbhi file mn. 
// theme context ko hm xport krty whn bhi kr rhy thy us time p hm koi val nh dal rhy thy lkn yhn default value dali jaskti h , ye thora df hai kam woi h , jaisy router mn smjhaya th appko 2 tareeqy hn chzn ko krny k  .

//to createContext ko yani jb appka context bnega initial jo state hogi whn bhi app kch val deskty , phli br jb bny cntx to kya kya valu alre feed ho, whn nh dia th but yhn i want k default 1 obj ho s obj mn 1 to thmmode ho uski value ho light to agr nh dnga to drctly call krdeg or koi valu add h h to crash hojaega ya null ahega . to mn chahta jb bhi user ko thm set krni ho to 1 default valu ho whn 
// thn darkthm fun ho or light thm funti ho , waisy to toggle kr wa k 1 h fun s kam krskty thy but mn 2 krleta , to ye dono mthd h ye khn s milngy mjhy to jb bhi koi contxt call kregye thm bhi mil jaega or 2 mthd bhi.49;00

//to app var bhi deskty or mthd bhi , to jo hm pehly contextprovider mn de rhy thy minicontext mn wo vari or mthd de rhy thy. kahi log khty state deskty nae aisa nh h kch bhi pass krskty. 


import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: 'light',
    darkTheme: () => {},
    lightTheme: () => {},
})

// This creates a context called ThemeContext using createContext. The context holds an object with three values:
// themeMode: Initially set to "light", this holds the current theme (either "light" or "dark").
// darkTheme and lightTheme: These are empty functions that you will likely use to change the theme later.
 
//ab hm export krty hn themeProvider but provider to hm alg class mn likhty nh , zaroori nh khi lig themContext.provider yhn s export krdyty , faida kch nh yhn s export ka but syntax h style h alg alg 

//pchli dafa app mn userContextprovdr hmny dctly h access ly lia th kaisy? userContextprovdr file mn app , userCotext.provdr mn apny childrn pass kdiye thy, actully mn EOD kam to yae horh h , hamara jo app h wo bhi yhn p reder horha or usmn or compont render horh, agr appp chhty ye sb nh krna to hm drct yhn s export kdyty 

export const ThemeProvider = ThemeContext.Provider

// This exports the Provider component of ThemeContext. The Provider is used to wrap components and make the context values available to them.


//to thm provider kya h 1 var to export kr rhy ho , etna h nh app appny customhook bhi bna skty jo aksr log bnaty usy bhi export kia jata , 51;00
//etna h nh app yhn appny costm hook bhi ba skty ho usko bhi export kia jata h, usethem appko usecontxt return krta or usecntxt mn cntxt bhi dena hoga , uper s h lia them context , ab appko hr jaga 2,2 import ki zrort nh h , abhi tk hmny filon mn dykha th profle mn dykha th  app hr jaga usecontxtly rhy thy phir app 2,2 file import krrhy th usecontext or usercontxt , login m bhi dykha th , to ab ye 2,2 kam na kr k q k wo contxt whn set hogya h to bas mjhy usetthem h to lyna 

export default function useTheme(){
    return useContext(ThemeContext)

}

// This is a custom hook called useTheme. It uses useContext to access the current value of ThemeContext, which means any component that calls useTheme() will be able to access the current theme (themeMode), and also the darkTheme and lightTheme functions.

// How to Use This:
// To change or get the theme in a component, you'd wrap your app in the ThemeProvider and call useTheme() inside any child component to access or update the theme.







//to dykhn themprovdr mn lylnga wrap krdnga kam hojaega , themecontxt mn s kisi ka acess chahye to usethm use krnga or extract krlong. ab dykhain ye sara kam 1 file mn krdia aksr productin code mn 1 file mn kia jata ziada better approcah h ye , phly 2 file mn kia th ab 1 mn krlia . ab app.jsx mn ja k wrap krngy 


















