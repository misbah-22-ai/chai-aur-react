//lecture 12 
//lecture router crash course 
// aksr log youtube p , amazon ka clone bnadia , zumaito ka clone bnadia ya twiter ka or aksr usmn srf or srf ui clone , jaisi dikhti h waisy, hmary pass 1 login pg hoga , hmary pass product ka listing page hoga dykho bn gya and then say amzon clone to bht hogahy hr koi bna rha , ary nh , aksr hmny un projects mn sirf ui clone bnahy koi api tk hndle nhki, un ui mn khrabi koi nh but wo tb achyhjb app appna ui whn showcase krna chahrhy , tailwind k brymn btana chahrhy ya phir koi or librry framewrk appny usekia usky bry mn showcase krna chahrhy , 

//esmn hm bnany wly hn , ye vdo appny app mn crsh course h react router ka . app bnahn gy , ab app url ghor s dykhiye ga sari kahani whn h , about pg h whn hmara componenet pura chng hua lakin navigation br or footer same rha , contct mn bhi top navbar or bottom ka footer same rha , sirf innerElemnt chngy hoty jarahy jaisa k realWorldWs mn hota , usky bd github link h esmn jo github k foloers arhy actually github Api s aarhy hn , ye img bhi github api s but cntr nh wo assigmnt h , esky alwa 1 or componnet h jiska url hmny nh de rkha usky bry mn bhi chrcha will , jaisy h i wrote mypram/123 hamary pass yhn 123 agaya , 123 zarrori nh we will learn to capture prameter here , k kisi bhi url mn paramtr h jaisy hitesh hogya 123 hogy wo kaisy pura ka pura capture kr k display krwaskty , 1 br capture krna seekh ghy usky bd id, product id exactly sm h kaam h . 

//ab ye sari kahani h react router dom ki jo k react ka essential core part nh h ye h third party libr, to pehli br hm third party libr ki trf jarhy jhn p hm cheexon ko,  dosri prty ko install krna seekhngy whn s pura ka pura kam seekhngy.

//5;00 ab github p notes likh diye ab yhn header cmp h or bsc css or html likh rkhi h or bas bsc cmpnnt return horha . github or mypram cmpn nh h onTheGo bna lngy , ye dummy btn h kch krta nh h right p , eski jga chhta to amazon clone lgadet , routing Amazn Clone s seekha deta video populr hojata .

// go reactrouter.com , react routr khi br chng hua h specially ye jo router dom h khi br chnge . abhi 6.4 version mn or chnge agya . now go tailwind p .

//1st step is phly jitny bhi cmpnnts h wo bnany hngy then we talk functinality , cmpn strutre app kaisy lyty its upto you i do tell my best practices in indusrty , phly appko index file bna k btaya th k sary kis trhn export krskty cmpn, ab ye dosra h .

//es cmpn fldr mn mein 1,1 kr k fldr files etc bnata jata 1 foldr bnaya cmpntfldr mn header then footer, phly fldr es liye bna rha k str thk rhy , ab jo ye header or footer baya esmn basic cmpnt dalny that it is header mn file header.jsx . esmn rfce kr k fun likh dia 

// now react router how to install, sb documnnttion mn aty yhn s dykhty 'react router' tutorial mn ja k npm install react-router-dom npm. sir k github p reactrouter.md k nam s notes usmn s copy kia or header mn paste
//20;26
// ab 3no cheezon ko assemble kaisy krna h , many ways hn assemble krny k , agr app chaho to app.jsx mn krskty 3no ko assembl krskty , 3 componnt ko render krwa skty  ab chlty app.jsx mn
  // <Header/>
  //   <Home/>
  //   <Footer/>
    //to auto import to wo krdega but agr appko or achi prctc krni h to app index file s bhi export krskty h
  // but errors aarhy hn , 
    // actually hmary navigtionnBar mn hmny header mn router ka use krlia to usky rendering mn issue aarha , to agr header na krn render , to actully mn hojaata h to hmny reactRouter dom bhi ins krlia or usy khi jaga use bhi krlia to issue aarha h , to yhnn ////////////app.jsx mn es trhn kam nh hog thora hmn chxn ko chng krna hog , ///////infct es pury vdo mn appko app.jsx ki zrort h nh h app dirct h sara ka sara kam krskty , infct app app ko dlt bbhi krskty hn . ab jty hn app .jsx mn ab yhn app app ko render kr rhy 


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Footer from './components/Footer/Footer'
// import Header from './components/Header/Header'
// import Home from './components/Home/Home'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     <Header/>
//     <Home/>
//     <Footer/>
    
//     </>
//   )
// }

// export default App
