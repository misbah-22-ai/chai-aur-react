//ab es github mn mn krna chahta hn k kch basc folllowers aajah or kch bsc ajahn . 

//es div mn phly clsss add krdi basc ki ab mjhy yhn chahye github followers: 
// bt ye h k github followers milngy kaisy sabsy phly to navigation bar mn 1 link hona chahye , to usky liye main.jsx mn 1 route to lagao phly , phir header mn ja k copy krlo . followers ly k kaisy aogy to aksr kam kia jata api call kr k , 

// import React from "react";

// function Github (){
//     return(
//         <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github followers:</div>
//     )
// }

// export default Github
///////////////////////////////////////////
// followers ly k kaisy aogy to aksr kam kia jata api call kr k , api call mn krna chahta hn jb mera ye componnt load ho , wo prh rkha h k app useefct use krskty ho or ussy jb bhi ye cmpnnt load hoga to hm ly ahaingy thk h . koi dependency arr hai nh . useeffct appka phli br call hoga jaisy h 1 componnt load hoga , componnt jaisy h mount hoga kam hojaega . fetch call krna github ki apis p krna . await etc ki chrcha abhi nh kr rha mn . respons str format mn h to json mn cnvrt krdia hmny , phr s 1 .the chahye es .thn mn kya milega , esmn data milega ab es data ko kaisy lyna hmny app chhn to es data ko log kriye , lkn consl log s kam thori hoga pg k andr render thori hoga kch 
// to state chahye hogi data or setData , or usestate mn [] daal dyty empty arr , console log krlia to setData call krlo or usmn sara data pass krdo . to appky pass data mil gya ab yhn s data mn sy val kaisy nikalni . to appko 1 br api study krni hogi without study data nh milega , meiny khi br ki hai to mjhy pata h mein yhn variable inject kr k dirctly data k bd . lga k values ly skta . 
// import React, { useEffect, useState } from "react";

// function Github (){
//     const [data, setData] = useState([])
//     useEffect(() => {
//         fetch('https://api.github.com/users/hiteshchoudhary')
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             setData(data)
            
//         })
//     })
//     return(
//         <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github followers: {data.followers}
//         <img src= {data.avatar_url} alt="Git picture" width = {300} />
//         </div>
//     )
// }

// export default Github
///////////////////////////////////////////////////

// ye sara ka sara hmny kia q hai ye to hm drctly bhi rsty thy , hn jee krskty thy but appko interestng bt batata hn ye jo optimization h na jo appko react router de rha h ye nextjs bhi deta h , start next js n h kia th obviouly but react router bhi deta . ab esmn 1 or new concept aaya h . kya h q hai bataonga phly chlty main.jsx mn , hmny dykha k path h elmnt . to sirf ye nh hai or bhi chxn hoskti h , appko aj kal 1 or access milta k appky pass 1 or proprty availble h jo h loader.
//react router mn docummntation mn ghy , acha hmara dynamic segmnt bhi hogya . loader jo hai appka , koi bhi data appko fetch kra api etc s ya phir dataBase s kch bhi to app direct api call yhn s mar skty hn . actully optimzation es trhn hota k jb bhi app web pg p jhngy to click krny se pehly cursor appka ahega he to wo event appka hochuka h . usi event p wo api call krdega or appky pass data fetchng phly h start hojaegi hn jeee appky useefct s bhi phly.  to 1 br fecting krlyty to usy cache mn bhi rkhty hn ye . 
//53;00
//ab loader mn app chahn to yhn p api call likh skty koi bhi prob nh h yhn appko es trhn call bk fire kra allow happ apna fetch request jo krna h app sb kariye to ye treeka appko docmntation mnm milega , to client Side Routing mn aaty hn or esmn exmpl h . loader lia woi appna clbk kia , ckbk mein appny request mn data load krlia sara ka sara or fetch appny seedha ka seedha dedia h , usi k just neechy redirectIfUser. to uper to pucha h user h k nh or yhn nechy ehn ny 1 mthd cal kia h . 
///////////////////////////////////////////
////////////////////////////////////////////////


//ab bt ye hai k mthd kahn s call krn abhi tk ki jo recommndtions h wo ye k ye jo appny fetch wala jitna bhi kam kia h github ki api wala wo esi file mn krlo github.jsx mn taky esi file mn usky routes reh jhn ab khi log khngy k bilkul sae nh h , jee mn bhi mnta ho . agr es trhn ka kam h appky pass to alg h file mn kro , woi better . khair abhi yhn bnaty .


// import React, { useEffect, useState } from "react";


// function Github (){
//     // const [data, setData] = useState([])
//     // useEffect(() => {
//     //     fetch('https://api.github.com/users/hiteshchoudhary')
//     //     .then(response => response.json())
//     //     .then(data => {
//     //         console.log(data);
//     //         setData(data)
            
//     //     })
//     // },[])
//     return(
//         <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github followers: {data.followers}
//         <img src= {data.avatar_url} alt="Git picture" width = {300} />
//         </div>
//     )
// }

// export default Github

//simple sa export const bnaty githubinfoloader ye bsc asyn call hai , ab es asyn call mn fetch karna , woi api hiteshchdhry, to async call  hai to esy wait kralyty basc js 101, const or response , sbsy interestng  k ye jo respons h na esy drctly return krskty hn json mn kr k return . 
//to actully mn ye abhi ki date mn proms h . to agr app uper bhi dykhn to ye jo .then kr k hai . to ye proms  h to aata h, ye hndle esi liye horha k ye proms h to tbhi to .thn lga parahy hn . to uper jo use effct data h usy cmnt krdo kisi kam ka nh abhi meiry , jb useefct ko cmnt kia to problm hui k data.folloers ye sb nh milega .ab main.jsx mn loader mn to kch h he nh  .56;00 to jaisy h sv kia to value crash horae.

// yhn intesrtng cncpt ye bhi hoskta h k agr appko val mile to app usy unlock kro , explore kro , agr nh mile to whn bhi hm null etc dal skty thy {data?.followers} k agr valu h ? yhn etna appropriate h nh mjhy ifData followere are there, to mein data.followers yhn use krnga but  abhi chlty us cncpt py, abhi etna kam hogya abhi yhn s githubinfoloader appny ly lia h , to main.jsx m kaisy use kia jae loader ka concept use kaisy kia jae.


// export const githubInfoLoader = async () => {
//     const response = await fetch ('https://api.github.com/users/hiteshchoudhary')
//     return response.json()



// }
//////////////////////////////////////////
//57;00

import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
//ye hook ka faida h k app dirct bol skty mjhy data do to jo bhi data yhn s retur horha hoga aloaderdata s wo appko mil jaega usy kisi var mn rkhlo . to agr mn uska var ka nam data rkhlo to meri state ka nam bhi to data th to automaticlly mjhy data.followers mil jaega agr kch or bhi rkhty to kchOr.followers or imges rkhty 

function Github (){
    const data = useLoaderData()
    return(
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github followers: {data.followers}
        <img src= {data.avatar_url} alt="Git picture" width = {300} />
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch ('https://api.github.com/users/hiteshchoudhary')
    return response.json()



}
//58;00 ye jo hmara react Router h ye bht h iterestng hota jrha h q k hmry pass loader wala concpt nh or bhi cncpt h , dynamic segmt bhi hmny dykh liye active links kis trn h ye bhi dykh lia dataLoadng bhi dkhlia . 
//summary 
//componts hmny bnahy usmn appko dikkat nh 1000 bnao sabsy phly interestng kam hmny layout mn kia th , layout ko hmny boa hm appko 1 outLet daingy , outlet means jo cmpnnt call kr rha wo fix h , jo outlet app dogy esmn automaticlly reactRouterDom ki trf s nestng kia jaskti h . 

//nestng ki hmny main.js mn , nesting ka jo top level th umn layout dia , ab top p layout dia tbhi to usmn ye sary outllet aaparhy to yae cncpt h main kch log root khty esy . to esmn layout laga rkha h to h to ye sab render krega wrna nh kreg. 

//usky bd hmny dykha router kis trhn bnaty , appko sirf 1 provider chahye router provider , ye royterProvder appka 1 wrapper h usmn sbkch lapet dia h , esy 1 h chz chahye k mjhy router ba k dedo or mjhy kch nh chahye 1;00;00

//ab router bnanhy kaisy 2 tareeky ythy , trky dono 1 h hai but syntax alg alg h . createBrowserRourt s h router bnyga hmasha , agr app chahy to arr mn hdirect obj pass krdijiy, agr kisi ko cnfusing lgta ya kam usmn infotmtion h to phir app mthd use karain createRoutesfromElemnt or esmn app jo bhi route bnany wo bnaly . hr 1 route nesting hoskta jaisy appko about k andr bhi kch krna h , about k bad / about / hitesh ho to bht h asaan h , to es about ko app closng route bnalijiye , ab esmn aa k or neting krskty route kr k to ye hua / about/ hitesh , / to h he sab mn phir appny about ko or nesting kia to automntc usmn / agya . ye kr  dykhiyega app

//ab hmny dykha dynamic value kaisy ly phn to userid lia hmny kha th k agr id ly rhy to id note down or agr userid ly rhy ho to userid lyllyna to jhn bhi elmnt load horha h jaisy user k andr to usy extract bhi usi trhn krna id lia to id userId lia to userid . appny app kch nh hoga usepram hook  use krna hoga . 
//1;2;30 funton s h fiuntionity ati 

//ab next aya k hm kaisy chxn ko optimixe krskty jhn api calls ho , api call hmn asaani s ati js mn prh k ahy , to hmny lia loader or 1 mthd bna dia or elemnt load krdia , es elmnt mn hmny dykha basc useeffct s kaisy krty or hmny router k through ye bhi dykh lia k github ki loader informtion ko bhi kis trhn krty . 


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


































































