//lecture # 15 REDUX TOOLKIT CRASH COURSE
//redux ki informtion k liye uski journey ko bhi or implementation ko bhi smjhna zaroori h , react mn hm sara kam funtional s kr rhy jo bhi component bana rhy 1 funtion bana k export kr derhy hn, lkn react mn kch kam classes base p bhi hoty hn , class base cmpnnt p bhi bnty hn , lakin ziada tr log esy depricate krna h chahty hn, almost sari organization h migrate hogae kch agr bachi hui h to wo bhi chah rae kch achy engineers bula k jinko funtin cmponnt ki achi knowlege ho wo bhi transition kr jhn . 

//enki knowlege achi bt h but priority p nh rkh skty , 1 classBase componnt h unmein s or 1 classic redux kaisy kaam krta ye bhi usmn s 1 topic h , ajki date mn jo redux h wo thora modernize redux h jisy hm RTK reduxTOOLKIt khty , lkn ye eventual upgradation h rdux ka , almost similar to react h eski bhi interstng history , jo hmny contxt , cntxt api prha ye help krega redux ko janny mn or bri asaani s smoothly app RTK p transiton hojaogy , koi bhi projct RTK mn bna paogy etni gurantee h, jaisy h app redux serch krogy redux-toolkit.js.org, or redux serch kro to redux.js.org.

// jaisy hmny dykha th k react h or 1 h reactDom , react appny app mn alg library h or reactDom appny app mn alg library , browser p reactDom or mobile p reactNative, esi trhn gameDevelompmt sbky liye alg alg h . 

//esi trhn Redux bhi appnyapp mn 1 stateMangmnt library h.

//redux ko jisbhi FrameWork mn appko implemnt krna ho esko eska 1 trhn s saga bhai mil jata h esko , to whn bhi appko reactREdux mil jaega , redux ko khn bhii implemnt krskty ho app react mn , jis trhn react ko kam mn lyny k liye react bhi chahye or react dom nhi , esi trhn agr redux ko appny react mn use krna h to redux to chahye ga h wo to core library h lkn uska bridge bnta h taky app usy react mn use krpao usky liye react Redux hota h , 

//redux appnyapp mn independent library h usko connection dyny k liye react k sath react-redux mil jata h , 
//5;00 redux or redux-toolkit dfrnce , bts
//agr mjhy outer s inner mn prop pass kra th to andr s andr s andr, tb inner ko wo propert value milti thi , ab conntxt api mn hmny dykha k sari chxn center mn store krlo jisko bhi chahye wo 1 hook s lylo hm use nam s 1 hook bna lyty thy or uski value llylyty thy k hmn cntxt use karna or provider s wrap krlyty thy , kch esi trhn ki kahani thi , ab ye jo kahani h na usecntxt ya cntxtapi, ye kahani actually mn etni purani h cntxt api to bht bd mn aya , ussy phly kafi kch develpmnt hogya th ab kya kya dvlpmnt hua  wo dykhty, redux s bhi pehly th flux th 6;20, flux jo th woarchietecture fb n design kia th SM ki prob unhn bhi aarae thi k khn prop pass krn , khn extra pass horhy jo zaroort h nh h , flux bhi to pata hona chahye q k ye sab drive to flux s h horha h , redux purana h to flux bhi to h 2noka knowlege hona chahye ,

//sabsy phly jo architecture design hua fb mn uska nam th flux , flux ki khani ye thi k 1 to sabsy bri prob thi sM , 1 central store hona chaye , sara data mn whn s lylo , global value 1 trhn s , 1 or kam jo hota th wo tha data flow ka , abhi jo cntxtApi hm use kr rhy usmn bhi dataflow etna strong nh jitna redux mn h , dataFlow s mtlb data 1 h trhn store k andr jahn or update hojae or jb mn value lo to value es trhn s lo, to ks trhn value store hogi or kis trhn mn value log, eska 1 structr or machanism hona chahye wrna prob hojaegi , apny dykha jb hmny usecntxt use kia th to jo bhi arr mn value th , phly usy spread kr rhy thy q k hmny purani values khoni nh thi , agr mn bhool jao to sari value app overwrite krdogy , koi na koi str hona chahye jismn automatic chzn manag ho or mn bas arr mn value daal rha ho , naya arr create kr rha ho to appny app naya value ml jae, mjhy chinta nh krna pre k uski state ko spread karo purani  value lo usy cheron mt , ye sb bht dikkat wala h , to es liye flux mn data flow p bht kam kia , ab flex ka dataflow bhi etna acha nh th.

//1 cnfrnc mn whn redux introduce hua bht better version nh th phir bhi , kch terms ae single source of truth hona chaye yani 1 h store hona chahye , state ko read only hona chahye yhn p 1 line famouse hui thi redux mn us line ko bolty thy you should never modify/mutate your state ye cncpt un ny dia th , or chnge jo state mn hony chahye wo funtion k through hony chahye drctly nh hony chahye.changes should be made us pure functions ya jinko hm reducers bolty hn k reducers k through h hony chahye , aisa nh k kisi n bhi funcin lia usny value overwrite krdi to wo thora problamatc hojata h k appny fun ka refernce lia appny kch bhi functionality usky andr daal di , funtionality reducers k through h jaani chahye , agy jaa k bht h acha support dega , usky elwa sab kam proper machanism k through hoga eski shuruat redux mn hogawe thi to jb redux aya na to logon n kafi appreciate kia q k jtni bhi js libraries thi unky sath achy s stickup horha th , or redux srf react ki propritory nh thi , redux independnt library run with react also view and also any js faramework p lgana chaho , 
// 
// //esi liye bola jata 'A PREDICTABLE STATE CONTAINER FOR JS APPS' , flux s journey start hui or redux to chl rha th to 1 reduxThunk nam ka 1 concept h , kch middle wears thy jo appko debugging mn help krty eski alg tool kit mtlb app chrome mn jaa k dykhogy appko chromeAdones bhi ml jaengy to appko redux dev tools mil jaengy , to ye kam redux mn kaafi mhnt lgti thi krny k liye , cntxtApi mn hmny jaisy time lgaya , redux mn to ussy 3,4 gunah lgta th , phir middle weas any lgy redux thunk aya redux saga aya jnky khi sideeffct or problms thy , phir aaya redux-toolkit, ye th batteries included , hazar setup ki need nh smple sa flow derha hn or chzn internally khd s manage. 

//ab kya h abstraction ziada h redux-tool-kit mn esmn appko store bnany ka bht h easy treeka milta h , phly kafi problem hoti thi configuration ziada thi , wo kahi na khi copy paste appko snippt mn rkhna prhta th or whn s app lyty thy but ab appky builtIn middle wears h , appka slicing enhn ny naya wrd introduce kia h k app reducers ko kaisy rkho to wo bhi defn kr rkha h , infct appky redux thunk type k mddlewears esmn already included hoty. 13;00 end of redux theoritical story history here. 

// concept p aty jo app redux or RTK dono mn h dykho gy , sabsy phly cncpt store ka , jhn s hm sari ki sari chxn single source of truth s lylyty , to 1 store bnahngy global type s man lo or whn s sab ch
// zn laingy 
//thn reducer hota h , reducer kya hota appko store mn kch bhi chnge krna h, konsy store mn chnge krna h q k oath ka store, product store, mtlb store k ander mini store hoskty , store to 1 h hota h , to reducers kaisy control krngy khn s krngy to wo funtionality wala part reducers k through h jata h , educers kya h object h sab kch . 

//usky bd 2 h mthd appko parhny 1 hai useSelector  or useDispatch , nam s h pata chl rha selector jb koi value slct krni store s , dispatcher jb koi vaue bhjni h . 

// im not focus here of my ui look but concern my project should be run smoothly. sir n es project mn tailwnd use nh kia , 17;07 , now RTK wbsite p ghy gettng started but tutorial p nh jana eska tutorial lil complex , installation mn btaya k create aa react app to essy chnta nh krngy k next s banao k veet s parcel s bs mn bnalonga ab krna kya h to 2 command di h npm installl reduxjs/toolkit or npm install react-redux , 2 libraries q use krni pregi ? 

//18;00 ab whats Included mn h sara likh rkha h , 1 store appko configure krna prega , usky bd 1 reducer bnana prega, usky andr appko actions bnany prngy , slice bnana prega phir async etc setup krna h to app kariye 

//mein appko smplify kr k dikhata k ks trhn ye am hota , src mn h hm sara kam krngy , store kahn rkha jata h ye sab opinated chxn hain , kch khngy yhn rkho kch store folder mn , kch app ka khngy its totally your choice, i make folder in src name app and thn file name store , store.js , store aisy nh bn gya theres a process sabsy phly appny configure store ly k ana h woi 1 mthd h jissy kam krta. store mn chlty
/////////////////////////////////////////////
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  

  return (
    <>

    {/* 53;00  appky m mn sawal hoga k phly jo cntxt api li thi usmn jo wrapper lgya thprovider wala, to wo yhn bhi lgta h , lkn mein extra step batna chah rha , esko yhn bhi lgaskty lkn appp kahi br dykho gy esy main.jsx mn bhi lga dety , koi problm wali bt nh  endoftheday jitny bhi componnts h sab usmn wrap hojae ab top level p ho second p , appko jhn thk lgy 
    
    //ab appko 2 chxn chahye hoti 1 to provider react-redux s mioega or 1 store , store ko import h kia jata h or esi wajah s hm ny App ko app.jsx nh App ko export kia th ab jaty hn main.jsx mn 55;00*/}

     <h1 className="text-3xl font-bold underline">Learn about Redux toolkit</h1>
     <AddTodo/>
     <Todos/>
    </>
  )
}

export default App

//lecture # 15
//what is your choice for mega project in react
// 80 to 90% cover , jb bhi app industry level ka project bnahngy to whn 2,3 cncpt aisy ahngy ya introduce jhn pko issue ya prob.zomato, zoho , postman mn job lg gae agr whn to real wrld prob ati k hmara userye krna chah rha ye h horha to most optimize way mn how? 
//ya phir hmara server ka bill ziada arha h es query p ziada arha h to kya es query ko optimize krskty hn , kya data structure chnge kr k dykh skty taky bill km ahy . kch or seekhny k liye we make mega project in this series, we have 2 option , option 1 is easy way
//option1 ; easyway in this app authentication krpaogy, signup hoga , logout krpaogy , login , usky elawa hm 1 blog appli bnana chah rhy hn to app blog create bhi krpaogy update bhi krpaogy, dlt bhi krpaogy sara data hm appwrite k andr send krdaingy , app chaho to firebox , superbase bht sari services h , to 1 br ye seekh jaogy to kisi mn bhi use krpaogy . ab kch chzain easy way mn btae jasakti h but wo productin ready nh hti , lkn jis din react ka koi productin level application samny agya appky passeny chot jhngy. 

//hardway2 , production mn kis trhn kam hota h kya file structure hota kaisy code likha jata alg alg developers kaisy likhty , 2,3 tareeky bataonga . syntax or syntax k version ye sb bhi zaroori seekhna , production grade mn jaty kasiy variable  environment hmary pass hoty , kaisy vendor lock prevent kia jata ye concept kaisy aata h , services kaisy bnae jatii h hoga woi login h lkn thora complex tareeky s krngy q k vendor lockng nh chahye, appki application etni achi bnegi k kl ko appko firebox s move kr k appwrite mn jana ho , ya appwrt s firebx to appp UTHood sb krlogy, koi ui mn chnge nh na funtioncl mn. 

//1 chota s input field bhi h na usmn bhi appny app mn 15 s 20 mnt jaega , woi same input login mn rgstr mn sab jaga use hoga. 

//hm editors bhi use krngy , realtime editing bhi use krgy jaisy bold, italic k andr kaisy rkha jata , kasy best treeka h usy sv krny ka , authentification dykhngy , signup login , user k token session kaisy mng hoty hn , services kaisy likhi jaati h . 

///////////////////////////////////////////////
//lecture # 16
//our mega project in react//
//es project mn app full fledged appp bnaogy jismn kaafi funtionality h , i divided these videos in segmnt , react-router mn hmny api cl ki thi , appny github ki api p cl kia tha response hndle kia h tha . woi starting point th k kaisy api cl krty . or web k response kaisy hndle krty hn third party api kaisy hndle krty hn wo sb dykhngy, 
//2;00 hm bnany waly hn full fledged app , ab kitna portion react hndle krega kitna nh krega wo prhngy, ye website h ye kh rae h login to read post , to h app webs read krpaogy we have footer acha navigation bar h , home h phir hm login p jasakty hn hm routing use kr rhy hn jo seekha th uska kafi usage h then signup process bhi h to 1 foam hndle krna wo bhi hm seekhngy , ye amm form nh h jitny hm input use krty ahy thy ussy cmplex h , or thrd party library hm use kr rhy or q wo bhi dykhngy . jaisy h create kia account to post dikhngy appk0 , app es post mn hmny color dy rkha h , to srf color nh app bold italic , to fullfledged 1 article kaisy likha ata wo dykhty. 

//ab home p jao to AI article h appny esy bold kia hua h , yhn hmn koi edit or dlt btn nh milta h , mein addpost p clk kreta ho to yhn s 1 title dysakta ho , meiny space dy k likha lkn slug jo h yani jo url bnega , database mn bhi es trhn save hoga to automatclly whn space ki jaga dashes ajega , to moitoring horae h 2 forms k bech mn 2 input k bech mn . usky bd hm tiny cloud use kr rhy hn jo k hmn fullfledged editor deta h , fullfleged jitna hoskta h bold italic jsab hoskta h or bhi option h app enable krskty , hm yhn kch likh k color chnge krskty hn kis trhn database mn save rkh skty hn . , app imges bhi use krskty ho , choose krskty k apko blog ko show krna knh , active ya inactive . jaisy h app submit krngy , hamari processing hogi esmn assignments bhi h apky pass qsss

