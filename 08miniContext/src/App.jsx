//Context api crash course with 2 projects lecture 13
// ye jo topc hm yhn laingy wo laingy context ka , aksr log context ko directly context api ko ya react k documnntion s prhny lg jaty hn , jb k wo strting point hota h nh es topc ka , eska strting point aata h props s , agr props smjh ata h to props ki prob ko smjhogy phir usky bd appka cntxt api ata phir usky bd further version jo apka redux , redux tool , zistand etc yhn s ata , 1;00.
//2 project esliye q k app 2 coding style dykhgy or esky bd you dont need to watch any context api video , 1 dm empty canvas chahye phr hm smjh phngy . bany lgy hain hm theme toggler h , light mode dark mode ab app khogy ary sir ye to 5 mnt mn bn jaega lakin lakin , jaisy h context api app introduce krty ho kch bhi 5 mt mn nh hota . agr mn yhn koi e commerce ya koi bhi complex projct lylyta app 5 dn bhi bethy rhty nh ata smjh esi liye ye project ly ha hn . 
////////////////////////////////////3;00 //suppose meiny bnaya 1 card ,,, or ye meri app hai , ab app k through mjhy es crd mn data pass krna . jo crd componnt bnaya capital c s . ab es crd mn data pass krna th , ab appny app m dedia username = 'chai'.
// <App username = 'chai'/> ab esyy hua kya , to ye jo card mn jo bhi val accept kr rha th to props ki jaisy accept kr rha th to card mn usny print krdia hitesh to ab ye jo card h ye pura ka pura material es app mnjrha th yhn tk koi prob nh .
//appki br mein bna rha koi admin dashboard kisi websiye k liye  1 new scenerio aaya. appny bnaya <dashboard/> es dashbr mn h 1 leftsideNavigation bar or 1 rightsideNavigationBar , es right side mn 2 portion horkhy hn 1 top or 1 bottom ye sab componnet h appny app mn ab ye appky pass card h rigsideNavBr k top mn whn kaisy display krna usernam , woi same card h ab kaisy krogy . ////////////////////// usernam appky pass chai mn rkha hua h chaiComponnet m , zaroori nh yhn ho hoskta h koi state mn rkha ho es crd mn kaisy pass krogy data . ////////////////////////////////////// sabsy pehly to jaogy dashboard k pass ussy bola ye lo hmara title jo k chai h . <dashboard title = 'chai' /> ab dashboard k andr hmny 1 leftsidCom bhi bnaya hua h or 1 rightsidCom bhi bna rkhi . <leftSide />, <RightSide/>, <TopComp/> , <Card/> ye compont h, to ab es crd mn to data aya h nh q k actully mn data dashboard k pass h to dashboard s khn jaega , ye jo data h title jo h chai' app s appny pass kia dashboard mn , dashboard s pass kia es right side mn , right sd s top mn or top s finally card mn tb ahega card mn data , pr hmny dykha es right waly ko xarort to thi nh us title ki or top ko bhi nh thi////////////////////////, ab usky andr comp h tbhi pass krna pra , agr individual kahn alg s bhi hota to data ko pass krny ka treeka h nh h hmary pass react ka desig h yae h to prop k andr props  props h pass krny hongy koi or option h h nh esi trhn hm kam kr rhy thy jb react initial days mn aya , ye unoptimize approach day one p kisi ko bhi pata lg jaega k es mn usage h he nh data handle kr rhy . 

//1 bettr approach hoskti h , k agr mn yhn 1 title bna deta ho es trhn s , ye suppose krn hmara 1 global obj h es global obj mn 1 title hota h jiski value hoti chai , to koi aisa mechanism hoskta th k ye chai yhn directly aa k essy ye sari value puchleta to mjhy pass krny ki zarort nh parhti to ab ye cad directly es globl componnt s ya jo bhi file h yh s sb puchleta or mera kam asaan hojta. 8;00/////////////////////// khn pass krny ki zaroort h nh thi ye cheezai, to dash oad mn bhi q h pass krna jb directlyaccess hoskta h , infact app n bhi zaroort nh thi but assume krta mn k app n koi daa base s request maari or whn s username lia . lkn acha hota k app bhi koi aisa h kam kti yhn s directly es mn pass krti data globl mn . to asi preshani ki bt h nh thi to appky pass data aya ap prop mn pass h nh kro , to app seedha jao or app s bhi data hatao , hn data pass krogy but prop mn nh ap direct h component level s yhn data pass kardo {title: 'chai'}///////// globl file bna k hmn kitna adv h k edhar s udhar faltu phelana nh ha , es concept ko bola jata h prop drilling , prop drilling s actully mn smjh kch nh ata k hokya rha h . interview aram s crack krogy
/////////////////////////
//ab es ky liye hoti h appki context api , to context api akela nh h or bhi libraries h jo ye kam kr rae hn q k ye proprietory problem khali ect ki nh h , view mn bhi thi or ye sab react etc populr hua usy phly 1 backbone js chlta th usky andr bhi yae same prob thi to context api to kya h , context api pure or pure associated h pure react s ye react k bhr exist nh krta h lkn q k prob sirf react ki nh h or bhi cheezain xist krti hng jo exact same prob ko solve krti hngi or usi ka nam redux h , hn jeredux bhi dykhaing hm es mn , redux ka kam h ye jo stateMangemnt h esko kam mn krna , yani jo data edhr s udhr pass horha usy 1 organisd way mn pass krna , redux k kafi version appko milngy , redux ko 1 akela standAlne lib h , lkin reactRedux k liye k react mn agr kam krwana h to we have react-redux . infact es redux ka 1 easier version hi mrkt mn h jisy bola jata redux-toolkit esi ko short mn sunogy RTK. acha react redux ki to ye kahani h to kya or bhi  es trh k /////////////////////////////////////////
// or bhi stateMang es trhn k kam h , zustand bhi 1 easy lib h stateMang k liye or bhi bht lib h but koi faida nh h , ziada tr app redux p h kam krogy , koi naya statrup h ya naya code likha jarha usmn hoskta app zustand use krlo . 1 br appko cotext api smjh agya to appko reduc, redux tool kid or xustnd smjh ajaga.
//contextApi , react.dev p dykhngy , legacy mn nh dykhngy . official documnntion h chahye . ye h appka context ya UseContext esi ko hm smjhngy . eska docmntion etna acha nh h . 
//////////////////////////////////////////////////////////////////////////////////
// 12;30 new project bnaty hhm , npm create vite@latest

//esmn tilwind nh hai , acha additional appko kch bhi intall krny ki zarort nh h , ye jo context h contexxt api ye sath mn h ata h , statemang etna comn prob th k react n eventully socha k aisa kxh hmary andr bhi hona chahye dirctly SM lib ko sustanible bnany k liye , to es liye unhn ny drctly hn eso add krlia. 
//ab esko dykhty kaisy h sochty kaisy h 14;50
//ye context ka kya h app kisi bhi project m bd mn bhi inject krskty hn or pehly bhi , agr appko pata h appka project thora sa complex hony walaa h ya good prctices foloow krni h to almost sabhi react k proct mn statemng lgta h , almost lgta h , specially agr app server s deal kr rhy ho ya api s deal kr rhy ho , thora complex proj h resume mn add like h , usmn koi na koi stateman hota h hai , pehly to esko bare minimum bnaty app. mn jaa k minimixe kr k remove krty 15;00
//
//hmn hndle krna h context api ko , context api mtlb 1 globl var bna rha us var mn sara data jaega but ye react h state hmny dykha etni asani s update nh hojata agr hota to mein directly 1 globl.jsx k am s file bna lyt whn s valu lylyta but wo acha syntax nh h , eventully app usi prob mn phas jaogy jo react solve krny ki koshish kr rha , state mismatch h , synchronization nh h . ye idea appka thk h 1 globl fll balo globl.js or usi mn sari var rkhlo ,but appka pro hr jga s prob mn ajaega q k koi bhi var usko update krdega or app jhn nh chahty whn bhi update hojag . 

// 1st src mn folder and name is context, esi nam s ye fldr rkha jata but SH koi naming restriction nh h q k its lib not framewrk to naming convntion etna strng nh hota . and then create file UserContext.js /// q k yhn pure and pure js he hoti h aksr. ab ye jo context h hm 2 file mn nhngy break kr k userContext h usi trhn login ka bhi hoskta h products ka bhi or cards ka bhi hoskta h , multipl cntxt app bna skty h . agy wly projct mn meiny redux rreduxtoolkit, context bht kch use so appka revision hota rheg. no tensin 
//25;00
//ap dykhogy k khi log userContext ko dosri trhn export krty app khi jaga dekhogy     <UserContext.Provider> wo bhi 1 h bt hai whn s file s export ho k aya , chahy yhn likho phir yhn access dyty value etc     <UserContextProvider value = {}> ab es app mn app jo bhi cmpnt hoga usko acces milrega directly. kch components bna lyty taky pata rhy hmn k kis trhn laingy 26;00
// src mn foldr componnet or phir 2 file login.jsx or profile.jsx 
//1 mn hm data kis trhn acces hota wo dykh liangy or 1 mn send hota kis trhn data to don khani clear




// import './App.css'
// import UserContextProvider from './context/UserContextProvider'

// function App() {
 
//   return (

//     <UserContextProvider>
//       <h1>React with Chai</h1>
//     </UserContextProvider>
        
//   )
// }

// export default App

//////////////////////////////////////////////////////////////////////
// 35;00 ab yhn 2 cmponnt export krwany h or wo compont kaisy data acces krngy wo hmny cmpnnt k adr h hndle krlia h yhn mjhy kch nh krna h, 
//hoskta h appny app.jsx mn koi api cl ki ho koi ditkkt wli bt nh app userContext lo usecontext use kro or data whn fetch krdo jb bhi appko lyna ho data jis bhi compont mn usecontext use kro or data lylo etna sa to kam h 
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
 
  return (

    <UserContextProvider>
      <h1>React with Chai</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
        
  )
}

export default App
// jaisy h username likha hitesh or passwrd kch bhi q k koi check to h nh to interstng chx h k yhn hitesh agya , jo log drctly kood pre hn , ye konsi bri bt h yhn etna sb kch krny ki zarort h kya th , agr hm app.jsx mn directly pass krdyty prop mn hitesh to mtlb appko letre smjh h nh aya <Profile/>

////hn je fact h agr koi aisa bolta hua dikhy to usy khiyega ary hae etni mhnt s prhya , taky appko khani smjh ahy. 



























// aksr log tutorial yhnrok dyty but mn 1 step or agy ly k jaong q k appko 1 or syntax , 1 or treeka smjhana zaroori h nh to app kisi or ka code base dykhogy corporte etc mnn jaoto pakka phasogy 38;00 s ban rha hai 9th project esimn 
// jb app tailwind p jaaty to tailwind appko directly allow krta h cdn etc k through app esy play krlo , tailwind ka actully mn 1 plyground bhi h , playground nav mein hai. yhn appky pass top mn 1 btn h jo k switch kr rha light or dark mode m . inspect kar k dykhai , top p html h whn appko clsses dikhng, tailwin kaisy detect krta k light h k drk. kuch k agy drk: hai to automtlly tailwind mn jb classes likhty to es trhn likhty k agr drkmode ho to ye class active hojae or light mode ho to ye class , bas appko 1 switch yhn enable krna prhta , dark ki jga light likhna prht. 
//q k hmny themebtnUi mn aisy h likh rkha h , css jo likhi h hmny to ye dark etc drctly include kr rkha h 41;00 sab jgah likhi h. to hmny esi trhn css likhi h k dark mode ho to wo dtct krly light ho to wo

//hmn krna kya h , hmn 1 switch toggle krna h jo k es html mn dark or light mode toggle krdy , lkn agr 1 alg cmponnt bnahngy switch ka to hmary cad ko kon bateg k toggle hochuka h usky andr state update hochuki h appky html ki . or agr card ko pata lg gya or wpis s togle hu to btn ko kon batega , woi login or profile wali khani h k dono 1 sth synch to rhny chahy. thmBtnui or card ui or appui dy rkha h 42;00