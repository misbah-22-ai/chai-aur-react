// import {  useState } from 'react'

// import {InputBox} from './components'
// import useCurrencyInfo from './hooks/useCurrencyInfo'


// function App() {
  
//   const [amount, setAmount] = useState(0)

  //agr appny dhng s dykha hoga to 1 h from val or 1 h to value, cnvrt usd to inr to pata kaisy chlyga to jaisy jaisy user bolega to whn s , default appka jo mn krywo value dal dn , usky bd hmn cnvrt kr k bhi dikhana hoga k actuly mn value ae kya h , result bhi to dikhaa prega na to usy bol dyty cnvrted or setcnvrtedamount
//   const [from, setFrom] = useState('usd')
//   const [to, setTo] = useState('inr')
//   const [convertedAmount, setConvertedAmount] = useState(0)


  //ab hook , ab esmn value dyni h currency peechy likha h na ab yhn s konsi pass krskta state s to 'to to pass nh krskta from h krnga yhnn s to cnvrsion chahye , ab ye crash bhi nh hoga q k bydefault 1 usd to h he usky andr , ab ye jo crncyInfo h to appko yd ho to hmny yhn s Data bhi lia th , ab data arha object formt mn , yae to value ahegi eski key s lo to ab es obj mn ye keys  h ye values , ab option app jo user ko dogy wo value to dogy nh keys chahye appko, to obj mn s sari keys nikal pao. 

//   const currencyInfo = useCurrencyInfo(from)

// curncy option yae to h jo hmny lia h arr jo th currency options
 //swap mn bs inr to usd or usd to inr yae chng horha h to agr mn dykhn to , to or from h to chng horhy 
    //setCnvrtdAmunt ko chng krdyty hamary amount s jo bhi amount user n dia th jo bhi store kr rkha ye krna h kro nh krna nh kro ye 2no 

//   const options = object.keys(currencyInfo)

//   const swap = () => {
//     setFrom (to)
//     setTo (from)
//     setConvertedAmount(amount)
//     setAmount(convertedAmount)

//   }
//   //51;00
//   const convert = () =>{
//     setConvertedAmount(amount * currencyInfo[to])
//   }

//ab actuly mn jb user cnvrt p clk kr rha to ho kya , q k agr user cnvrt p clk kr rha to usko nh h mtlb kya api cl horae kya h mjhy bas result chahye to reslt k liye crncyInfo n sara kam kr h dia h na data etc sabhi dyrha , ab mjhy kya krna h , ab es puri list mn s jo bhi user n kha h ussy mjhy * kra h bs mjhy . 
//setCnvrtedAmount ye wo state h jo hmn final result display kregi ab esmn jo amount h usko * krdo ab ye sari values h or ye currencyInfo mn rkhi h, or jismn bhi cnvrt kra wo [to] s lylng, ab esy 1 mthd p cl krwadyty tky button p cl ho ye , to 1 fun bnado convert, ye hogae funtionlity puri now move to the notes
// return (
//   <div
//       className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
//       style={{
//           backgroundImage: `url("https://images.pexels.com/photos/290275/pexels-photo-290275.jpeg?auto=compress&cs=tinysrgb&w=600")`,
//       }}
//       // app chaho to variable mn store kr k whn s bhi ly skty ho, ye code meiny currency.md s lia h , ab ye form h pura ka pura to ye sbmit hoga to kya ho , to form jb bhi submt hota h to khn jata h kisi address p url p we dont want k jhy to e fire kia default prevnt,, hm chahty tb 1 mthd cl ho to wo mthd ka nam convert h or funtionality upr lga li  

//   >
//       <div className="w-full">
//           <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
//           /
//               <form
//                   onSubmit={(e) => {
//                       e.preventDefault();
//                       convert()
                     
//                   }}
                  //ab iputbox h esmn kya kya value dyni h label dedia from ab zhr h esko 1 amount bhi chahye hoga , amount 1 property h jo k hm state mn s dedngy, currncyOption dyny prngy usy , or dyna hoga k currncy chng ho to kya kry onCurrencyChange ye cl bk he hai , ye fire kia yhn or setAmount pass krdyty or Amount kya set ho jo bhi newAmount aya ho , bht basic h bas crncychng k liye hmny clbk yhn pass krdia k whn kch chng ho to yhn rflct hojae , selectCurrency bhi dea hoga k slct krpahy  , ab btn mn onclk dedo or swap ka rfrncr dedo, ab dsry inputBox mn bhi ye sari values deni hogi to yhn s copy 
//               >
                
//                   <div className="w-full mb-1">
//                       <InputBox
//                           label="From"
//                           amount = {amount}
//                           currencyOptions = {options}
//                           onCurrencyChange= {(currency)=> setAmount(amount)}
//                           selectCurrecy = {from}
                          
//                       />
//                   </div>
//                   <div className="relative w-full h-0.5">
//                       <button onClick={swap}
//                       //cal krwany ki need h nh q k rfrnce s h kam hojaega 
//                           type="button"
//                           className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                          
//                       >
//                           swap
//                       </button>
//                   </div>
//                   <div className="w-full mt-1 mb-4">

//                       <InputBox
//                           label="To"
//                           amount = {convertedAmount}
//                           //q k to mn jo show horha wo cnverted Amount h , yhn onCurncyChnge mn hm lyty to eski stng ka hm kya krty hm lyty yhn currency j0 bhi crncy ki valu h or 1 clbk yhn fire krty or esmn setTo mn esko set krngy , ab mn nh chata k user lower k case mn yhn amount chnge krpahy , amountDisable jo field th wo pass krdia kch nh likha to mtlb true h 
//                           currencyOptions = {options}
//                           onCurrencyChange= {(currency)=> setAmount(currency)}
//                           selectCurrecy = {from}
//                           amountDisable
                          
//                           //ab es cnvrt ko or interesting bna skty thori js likh do kis sy kismn cnvrt krna 
//                       />
//                   </div>
//                   <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
//                       Convert {from.toUpperCase()} to {to.toUpperCase()}

                     
//                   </button>
//               </form>
//           </div>
//       </div>
//   </div>
// );

// }

// export default App


//lecture 11 custom hooks in react | currency project

// es currncy cnvrtr mn bht kch fancy h hm ziada tr hota nh currncy cnvrtr mn but esmn h usually we take hardcoded value agr rupee mn dia h to dollr ka multiplication by 82 to hardcoted val lylyty hm but esmn hm sort of api call and take all data from there , uniques h coz you get more data and you get also conversion data usi hisaab s or we also see how you optimize your pg , usd p clck kia to how long the list is ab ye ache s scroll hopae ye bht major imppact h frndend or react mn how we optimize , also see swap functionlity, hm dykhain gy remarkable componnt reusubility coponnt ko hamary pass h from or to or currncytyp or crncytyp, RCR s muraad we oftn see btn ko h componnt bnado or usi ko use krlo , but ye jo input h its real case scenerio ab yhn kch chzn chng horae but kch chzn ko chng kia jskta h , to hm kaisy 1 sepert comp bnhn gy ui p kam nh krngy wo mn appko drctly classes dnga but actully mn reuseabble cmpnt bnaty huey kaisy approach li jati wo dykhn , md file mn css h whn s lylain .
//2sra h app.jsx esmn woi bkgr img h appko lyni h lo nh lyni nh lo , yhn meiny 1 input component call kia ye jo upr h esy hm 1 separate cmpont bnahngy , jb ye bn jaega to hm yhn input use kr rhy yhn btn agya swap or ye neechy input lkn ye use nh horha basic styling use krny k liye . 
//9;30 ab hmary pass yhn 1 already hook h ye variable h count or setcount fun h ab ap sochn ye hua kaisy hog , to koi na koi mthd hoga us mthd s kch na kch retur value aarae hogi wo return val appko 1 arr return kr rha h , us arr mn appny 1 var or 1 fun ka rfr lia hoga . 
///////////////////////////////////////////////////////

//1 cstm hook ka bhi cncpt hota khi br hmary pass aisy hook nh hoty but hm , hook h kya 1 fun h to hai or ye fun ye val retur  kr rha h , , hm src mn costum hook bnaty to usy 1 fldr mn h rkh lyty hn , hook fun h hai ab esmn 1 file nam useCurrencyinfo yh jsx mt rkhn q k ye jo hooks hoty ye purly majority cases mn js return krty or achi prctc h jb  appky pass jsx return hoha to app jsx rkho or agr jsx nh horha to file nam js ya .ts h rkho. 

////////////////////////////////////////

// import {  useState } from 'react'

// import {InputBox} from './components'
// import useCurrencyInfo from './hooks/useCurrencyInfo'


// function App() {
  
//   const [amount, setAmount] = useState(0)
//   const [from, setFrom] = useState('usd')
//   const [to, setTo] = useState('inr')
//   const [convertedAmount, setConvertedAmount] = useState(0)


//   const currencyInfo = useCurrencyInfo(from)
  
//   const options = object.keys(currencyInfo)

//   const swap = () => {
//     setFrom (to)
//     setTo (from)
//     setConvertedAmount(amount)
//     setAmount(convertedAmount)

//   }
//   //51;00
//   const convert = () =>{
//     setConvertedAmount(amount * currencyInfo[to])
//   }
//   return (
//     <div
//         className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
//         style={{
//             backgroundImage: `url("https://images.pexels.com/photos/290275/pexels-photo-290275.jpeg?auto=compress&cs=tinysrgb&w=600")`,
//         }}
      
//   >
//       <div className="w-full">
//           <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
//           /
//               <form
//                   onSubmit={(e) => {
//                       e.preventDefault();
//                       convert()
                     
//                   }}
//                 //   
//               >
                
//                   <div className="w-full mb-1">
//                       <InputBox
//                           label="From"
//                           amount = {amount}
//                           currencyOptions = {options}
//                           onCurrencyChange= {(currency)=> setAmount(amount)}
//                           selectCurrecy = {from}
                          
//                       />
//                   </div>
//                   <div className="relative w-full h-0.5">
//                       <button onClick={swap}
//                       //cal krwany ki need h nh q k rfrnce s h kam hojaega 
//                           type="button"
//                           className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                          
//                       >
//                           swap
//                       </button>
//                   </div>
//                   <div className="w-full mt-1 mb-4">

//                       <InputBox
//                           label="To"
//                           amount = {convertedAmount}
//                           currencyOptions = {options}
//                           onCurrencyChange= {(currency)=> setAmount(currency)}
//                           selectCurrecy = {from}
//                           amountDisable
                          
//                           //ab es cnvrt ko or interesting bna skty thori js likh do kis sy kismn cnvrt krna 
//                       />
//                   </div>
//                   <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
//                       Convert {from.toUpperCase()} to {to.toUpperCase()}

                     
//                   </button>
//               </form>
//           </div>
//       </div>
//   </div>
// );

// }

// export default App
//////////////////////////////////////////////////////////////////////////

// import { useState } from 'react';
// import InputBox from './components/Input.jsx';
// import useCurrencyInfo from './hooks/useCurrencyInfo';

// function App() {
//     const [amount, setAmount] = useState(0);
//     const [from, setFrom] = useState('usd');
//     const [to, setTo] = useState('inr');
//     const [convertedAmount, setConvertedAmount] = useState(0);

//     const currencyInfo = useCurrencyInfo(from);
//     const options = Object.keys(currencyInfo);

// chatgpt ki 
    // const swap = () => {
    //     setFrom((prevFrom) => {
    //         setTo(prevFrom); // set `to` as the previous `from`
    //         return to;       // set `from` as the previous `to`
    //     });
    //     setAmount(convertedAmount); // set amount to converted amount
    // };
    
// sir ki swap funtionality
    // const swap = () => {
    //     setFrom(to);
    //     setTo(from);
    //     setConvertedAmount(amount);
    //     setAmount(convertedAmount);
    // };

    // const convert = () => {
    //     setConvertedAmount(amount * (currencyInfo[to] || 0));
    // };

//     return (
//         <div
//             className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
//             style={{
//                 backgroundImage: `url("https://images.pexels.com/photos/290275/pexels-photo-290275.jpeg?auto=compress&cs=tinysrgb&w=600")`,
//             }}
//         >
//             <div className="w-full">
//                 <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
//                     <form
//                         onSubmit={(e) => {
//                             e.preventDefault();
//                             convert();
//                         }}
//                     >
//                         <div className="w-full mb-1">
//                             <InputBox
//                                 label="From"
//                                 amount={amount}
//                                 currencyOptions={options}
//                                 onAmountChange={(value) => setAmount(value)}
//                                 onCurrencyChange={(currency) => setFrom(currency)}
//                                 selectCurrency={from}
//                             />
//                         </div>
//                         <div className="relative w-full h-0.5">
//                             <button
//                                 onClick={swap}
//                                 type="button"
//                                 className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
//                             >
//                                 Swap
//                             </button>
//                         </div>
//                         <div className="w-full mt-1 mb-4">
//                             <InputBox
//                                 label="To"
//                                 amount={convertedAmount}
//                                 currencyOptions={options}
//                                 onCurrencyChange={(currency) => setTo(currency)}
//                                 selectCurrency={to}
//                                 amountDisable
//                             />
//                         </div>
//                         <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
//                             Convert {from.toUpperCase()} to {to.toUpperCase()}
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default App;

//////////////////////////////////////////////////////////////////////

import { useState, useEffect } from 'react';
import InputBox from './components/Input.jsx';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState('usd');
    const [to, setTo] = useState('inr');
    const [convertedAmount, setConvertedAmount] = useState(0);

    // Fetch currency information based on the "from" currency
    const currencyInfo = useCurrencyInfo(from);
    const options = Object.keys(currencyInfo);

    // Swap functionality
    const swap = () => {
        setFrom((prevFrom) => {
            setTo(prevFrom); // Swap `to` with the previous `from`
            return to;       // Set `from` as the previous `to`
        });
    };

    // Convert amount whenever `from`, `to`, or `amount` changes
    useEffect(() => {
        if (currencyInfo[to]) {
            setConvertedAmount(amount * currencyInfo[to]);
        }
    }, [amount, from, to, currencyInfo]);

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url("https://images.pexels.com/photos/290275/pexels-photo-290275.jpeg?auto=compress&cs=tinysrgb&w=600")`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onAmountChange={(value) => setAmount(value)}
                                onCurrencyChange={(currency) => setFrom(currency)}
                                selectCurrency={from}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                onClick={swap}
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            >
                                Swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency={to}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;


//lecture 12 
//lecture router crash course 
// aksr log youtube p , amazon ka clone bnadia , zumaito ka clone bnadia ya twiter ka or aksr usmn srf or srf ui clone , jaisi dikhti h waisy, hmary pass 1 login pg hoga , hmary pass product ka listing page hoga dykho bn gya and then say amzon clone to bht hogahy hr koi bna rha , ary nh , aksr hmny un projects mn sirf ui clone bnahy koi api tk hndle nhki, un ui mn khrabi koi nh but wo tb achyhjb app appna ui whn showcase krna chahrhy , tailwind k brymn btana chahrhy ya phir koi or librry framewrk appny usekia usky bry mn showcase krna chahrhy , 

//esmn hm bnany wly hn , ye vdo appny app mn crsh course h react router ka . app bnahn gy , ab app url ghor s dykhiye ga sari kahani whn h , about pg h whn hmara componenet pura chng hua lakin navigation br or footer same rha , contct mn bhi top navbar or bottom ka footer same rha , sirf innerElemnt chngy hoty jarahy jaisa k realWorldWs mn hota , usky bd github link h esmn jo github k foloers arhy actually github Api s aarhy hn , ye img bhi github api s but cntr nh wo assigmnt h , esky alwa 1 or componnet h jiska url hmny nh de rkha usky bry mn bhi chrcha will , jaisy h i wrote mypram/123 hamary pass yhn 123 agaya , 123 zarrori nh we will learn to capture prameter here , k kisi bhi url mn paramtr h jaisy hitesh hogya 123 hogy wo kaisy pura ka pura capture kr k display krwaskty , 1 br capture krna seekh ghy usky bd id, product id exactly sm h kaam h . 

//ab ye sari kahani h react router dom ki jo k react ka essential core part nh h ye h third party libr, to pehli br hm third party libr ki trf jarhy jhn p hm cheexon ko,  dosri prty ko install krna seekhngy whn s pura ka pura kam seekhngy.

//5;00 ab github p notes likh diye ab yhn header cmp h or bsc css or html likh rkhi h or bas bsc cmpnnt return horha . github or mypram cmpn nh h onTheGo bna lngy , ye dummy btn h kch krta nh h right p , eski jga chhta to amazon clone lgadet , routing Amazn Clone s seekha deta video populr hojata .

// go reactrouter.com , react routr khi br chng hua h specially ye jo router dom h khi br chnge . abhi 6.4 version mn or chnge agya . now go tailwind p 
