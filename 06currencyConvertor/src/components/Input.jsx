// import react, { useId } from react;
// 23;28 ab hm dykhty k kis trhn com ko reusable bnaty, src m 1 new foldr or usy khty cmponnts esmn 2 file bnhngy , aproach ye k jb ziada comp bn jaty appky fldr mn tb bhi 1 expot ka approc app ly skty or 1 regulr approch bhi ly skty , best konsi ye bhi bataonga , ab cmpont mn 1 new file input.jsx , to input.jsx h ye jo projct h na esmn es box ko mn inut kh rha esmn labels h kch from etc to ye jo inner container h white k andr esko mn input k andr banan cht.. jitny bhi cmponnt h wo uppercase 
//react snippet nam s extension h to rfce likho to basic ye deta 

//ab ye inputbox h jo k 2 input ly rha appsy 1 lbl or 1 class name agr classname kch nh h to default empty daal di 

// function InputBox({
//     label,
//     amount,
//     onAmountChange,
//     onCurrencyChange,
//     currencyOptions = [],
//     selectCurrency = 'usd',
//     amountDisable = false ,
//     currencyDisable = false,
//     className = '',

    //ab user s app kya kya lyna chahty ho ye app p depend krta label to mn lyna chahta hn q k mn ye dispplay krna chahta hn from pass kr rhy ya to, wo mn lnga , usky elawa     amount etc bhi lyna hoga q k eod sab yhn display hoga , usky bd               
    
    // mn onamountChange bhi mn lnga  wo es liye lnga k jo bhi es cmpnnt ko call kr rha h whn p hm eski bt kringy q k amount chnge hoga to state bhi to chng krni hogi na to input cntrol to yhn s horha h to whn p bhi hm 1 usestate bnahngy amountchng or onamountchng taky hmn pata chly k kb chzn horae , q k dykhn agr from k neechy app amount chg kra chahogy to api call usi s hojaegi sari calcultion whn s hojaegi to w bhi to chahye data to wo hm state mn krngy ye mthd hogahy ab esy dykhngy kaisy use krna , esi trhn s ye currncy bhi chnge hoskti h currncy type k neechy ye jo filter h usky liye bhi es trhn ka data lyna hoga , thn laingy currncyoption ,  
    
    

//ab crncy option kya h mein chahta koi na koi arr mn h app mjhy pass kro iin case h kro to mn default empty arr lyln q k ye jo crncy option h na ye hm arr s h loop through krngy ahaingy khn s q k json data mn hm chrcha krngy but assume jo bhi cal krega wo dega but mera app crash na ho to default empty arr dedia ,                         now       

// selectcurrncy q k list to h lkn pata h na slct konsi krni by default app kch bhi do lkn mn usd dedeta taky 1 currncy slcct rhy agr kch nh h to usky bd                      hoskta kch user amount nh dena chahty ya dena chahty to wo bhi hm lylyty eski neend nh app chaho to ignore bhi krskty bydefault mn esy false rkhng          

// usky bd app currncy mn bhi able disabled kr skty ye sb esliye bata rha k poduction grade ap mn ye sb lgta    input hmny kafi lyliye ab unko kaisy use krna . neechy jo hmny label likha h usy {} wrap krdain to ab ye var s ajaega data ,

////usky bd neechy input field h wo enable h k disable ussy hm govern krty , hamary pass jo disable property h usko hm bolngy k amountdisble s , by default ye false h but agr kisi n pass kia to ussy puch lngy , ab value bhi to hogi kch to value ab amount s lylo ,

// ab agr ye amn chng hota to mn kya krn ab hr input box p 1 onchng value to aati ab es onchnge ko use kaisy krn k meiry cmponnt s sabko pata lg jae , to cmpnnt s app 1 e fire krskty hn or e s 1 mtd cl krskty hn konsa mthd cl krn esi dn k liye upr hmny onamount chng lia h , taky drctly jo esy cl krega to whn hmara ye onamountchnge h , whn s hmny ye mtd access mil jae , 

//likhny ko to mn onChange= {(e)=> onAmountChange} drctly lkh skta but upr koi default value pass nh ki kr bhi nh skty fun h empty halover thori na banaogy 30;50 to app 2 ampersand lagado 'agr ye availble h to hm ye onamountchng use krngy' to ye 1 checker h k ye exist krta k nh agr exist krta o hm, ye && s phly onamountchnge jo h ye checer h or $ k bd to hm use kr h rhy hn // onChane = {(e)=> onAmountcheck $$ onAmountChange(e.target.value) }   ab yhn hi problem h dykhn e or trgt vlu sae h , datatype num bhi thk h lkn js thori notorious h hr br e mein jo value h usy str formt mn lylytyi h , khi br bht time lgta es bug ko resolvee krny mn to bas number mn wrap krdo hogaya kam // onChane = {(e)=> onAmountcheck $$ onAmountChange(number(e.target.value)) } 

    
// }) {
//39;00 yhn tk appka wo tutorial jo appka basc dyta ab wo tutorial jo appko next levle p ly k jata , acha 1 bt es sb mn koi dikkat nh but or optimize bnaya jskta dykhn jo hm ye label use kr rhy yhn p , ye label appka hr br repeat hoga hr br chnge hog konsa label app use kr rhy to yh 1 optimize approach ly skta jis ky through app value ko or acha krskty h react mn 1 or hook h use id esky bry mn prh bhi lyty 'useId ies a react hook for genertng unique ids that can be passed to accesibility attributes. accesibity attribute kya hoty he html mn AA hoty jissy user agr tab tab tab kr k kch access lyna chhy to whn s ly skta h but uski mapping khi br difficult hojti h ks users k sth , etni unique dyna possible nh hamary case mn q k currency value kafi arrae appny dykha , to esy use kaisy krty agr krny ka mn to kriye wrna nh hm seedha const amountInputid  = useId()
//dega kya 1 unique value ahegi 1 unique num str ko use krty huey 1 unique val apko mil jaegi , ab unique value mil gae to hm bind kr daingyx 
//to label mn appko pata h html for kar k to jo bhi valueae yhn bind krdyty label html For = {amountInputId} ab yhn label to lg rha uniqueness k liy, khn br appko map etc mn prob ahy to react khud bhi bolta h attribute etc k liye esy use krly but label to hogya ab input k sth bhi to bind kro, q k input bhi to dena h tab etc k through hn jee to app iput k sth bind krdo 

    // const amountInputId = useId()
   //ab return mn html or css likhi h scnd div mn hmny str mn likh di or 1st div mn to wo js mn ` bckticks lga k likhi h ye esliye k mn user s 1 css bhi ly rha ho hoskta h user ko kch alg s dikhana ho or wo appni css injectkry to jo bhi user classname pass kr rha to additionly wo mn dal dnga 26;00 , thn label lgya then input  rkha or phir currncy type rkha jo k appka optionlly slctr h usmn usd, es hook ko krna h kro wrna nh , bhtkm usehotadykho gy app esy , linkdn ka bhi soucrceCode dykhogy to whn bhi es trhn ki ids use hoti h 
   //its pitfall, donot call useID to generate keys in a list , agr keys genert krni to ussky liye nh use krn , 
   //agr ap soch ry mn aisa bhi field do k ye jo etni sari input keys h sabky sth h unique input lga dn or loop k sth h use krln to whn react ka documntation khta aisa mt kriyega  . acha myid or myid kr k bhi dono ko label ko or input ko bind krskty thy but mn chahta 1 unique id generte hojae . ab chlty app.jsx m ab cheezon ko jamana baqi , whn inputBox import krwahngy

    // return (
    //     <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
    //         <div className="w-1/2">
           
    //             <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
    //                 {label}  
                    
    //             </label>

    //             <input
    //                 id = {amountInputId}
    //                 className="outline-none w-full bg-transparent py-1.5"
    //                 type="number"
    //                 placeholder="Amount"
    //                 disabled={amountDisable}
    //                 value={amount}
    //                 onChange={(e) => onAmountChange && onAmountChange(number(e.target.value))}
                    // ye hmary pass dsabled proprty h hm es sy bolngy k amountdisable s puch lo by default it false but agr kisi n pass kia to usy puch lo wo utilize krlaingy to eski koi value bhi hogi to wo hmny amount s lyli 

                    // ab value bhi to hogi kch to value ab amount s lylo , ab agr ye amn chng hota to mn kya krn ab hr input box p 1 onchng value to aati ab es onchnge ko use kaisy krn k meiry cmponnt s sabko pata lg jae , to cmpnnt s app 1 e fire krskty hn or e s 1 mtd cl krskty hn konsa mthd cl krn esi dn k liye upr hmny onamount chng lia h , taky drctly jo esy cl krega to whn hmara ye onamountchnge h , whn s hmny ye mtd access mil jae , likhny ko to mn onChange= {(e)=> onAmountChange} drctly lkh skta but upr koi default value pass nh ki kr bhi nh skty fun h empty halover thori na banaogy 30;50 to app 2 ampersand lagado 'agr ye availble h to hm ye onamountchng use krngy' to ye 1 checker h k ye exist krta k nh agr exist krta o hm, ye && s phly onamountchnge jo h ye checer h or $ k bd to hm use kr h rhy hn // onChane = {(e)=> onAmountcheck $$ onAmountChange(e.target.value) }   ab yhn hi problem h dykhn e or trgt vlu sae h , datatype num bhi thk h lkn js thori notorious h hr br e mein jo value h usy str formt mn lylytyi h , khi br bht time lgta es bug ko resolvee krny mn to bas number mn wrap krdo hogaya kam // onChane = {(e)=> onAmountcheck $$ onAmountChange(number(e.target.value)) } 
            //     />
            // </div>

            // <div className="w-1/2 flex flex-wrap justify-end text-right">
            //     <p className="text-black/40 mb-2 w-full">Currency Type</p>
            //     <select
            //         className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
            //          //ab chlty h dosry segmnt p to from hogya nubr hogy nmbrchnge bhi horh numbrUpdate bhi horhcurrncy typ bhi lkh rkha h , ab bt ati es usd ki abhi jo hmary ps inputfield h usmn ziada vlus nh h ye slct field or usmn ye options h to en option mn hm loop krny waly hn but phly slct fild ko hm thora values dydai , ab slct field ki crnt value kya h value{selectCurrency}, upr hmny selectCurrency wala field lia h bydefault usd daal dia , hoskta honcurrency chnge mn koi value n ho to usy && krdia ,
                     
                     // yhn ye string mn h hai dykha app khud logc bnarhy , es br numbr mn chge nh kia ye fild enable h k disable to puch lijiye , ab es field ko mn loop krnga to esy krty hn cut <option value ="usd>" usd </option> esko cut kia or phir li js or currncyOptions k sth map lgado , map mn appko pata h hr 1 value milegi es cl bk mn apko,  {} ye lagaonga to curlybraces s return krna parega
                     
                     //, ye js mn appko chkkh chkkh k btaya th , hr 1 individul curncy ka access milega to app yhn currncy boln , ab es mn 1 compnnt return krna , to hr es trhn valu repeat hogi but jb es trhn repeat hoti to react prefrmnc mn bht prob krt , q k react ko pata h nh k dom jo elmnt baanhy jrha bnahy jarha wo ik h elmnt hazar br nh bnha rha es chz ko rokny k liye field aata apky pass jb bhi app loop lgahn kisi jsx mn , jsx s h to apko dom elmnt bn rhy key pass krni paregi , to key p bhi discussion hoskta k arr m agr loop kr rhy to kya key honi chhye .  {currencyOptions.map((currency) => (<option value ="usd>" usd </option>)) }

                     //ab agr arr mn loop kr rhy to key kya index hoskti h ? hn hoskti but appny app mn usky bhi prfrmnc drawback hoskty usko bd mn discuss but remeber agr appko prfrmnc lani loop mn elmts ko repeat krny mn to key pass krni h .  {currencyOptions.map((currency) => (<option key = {currency} value ="usd>" usd </option>)) } to key hm currency dyty q k mjhy pata h esmn crncy values hn , app chhty to index bhi deskty thy mn map m  index bhi pass krskta th but bettr option index nh but app unique field arha wo lylo ids bhi ly slty agr database s kr rhy
                     
                     //ids ziada prefer krnga mn index k bjahy , ab value hm js s laingy value {currency } ye jo currncy hm loop kr rhy yae yhn display krwadia , 
                     //ab hr br usd thori display krwahn gy to usd ki jagah bhi {currency},ye bn gya hmara componnt , ab appkoi bhi cmponnt bnaogy to app reusebility k bry mn bht sochogy thought process  kadi rhega 

//                      value={selectCurrency}
//                      onChange={(e)=> onCurrencyChange && onCurrencyChange (e.target.value)}
//                      disabled = {currencyDisable}

                
//    //30;00
                    
//                 >
//                     {currencyOptions.map((currency) => (
//                          <option key= {currency} value= {currency}>
//                          {currency}
//                      </option>

//                     ))}
                    
                                     
//                 </select>
//             </div>
//         </div>
//     );
// }
//39;00 yhn tk appka wo tutorial jo appka basc dyta ab wo tutorial jo appko next levle p ly k jata , acha 1 bt es sb mn koi dikkat nh but or optimize bnaya jskta dykhn jo hm ye label use kr rhy yhn p , ye label appka hr br repeat hoga hr br chnge hog konsa label app use kr rhy to yh 1 optimize approach ly skta jis ky through app value ko or acha krskty h react mn 1 or hook h use id esky bry mn prh bhi lyty 'useId ies a react hook for genertng unique ids that can be passed to accesibility attributes. accesibity attribute kya hoty he html mn AA hoty jissy user agr tab tab tab kr k kch access lyna chhy to whn s ly skta h but uski mapping khi br difficult hojti h ks users k sth , etni unique dyna possible nh hamary case mn q k currency value kafi arrae appny dykha , to esy use kaisy krty agr krny ka mn to kriye wrna nh hm seedha const amountInputid  = useId()
//dega kya 1 unique value ahegi 1 unique num str ko use krty huey 1 unique val apko mil jaegi , ab unique value mil gae to hm bind kr daingyx 
//to label mn appko pata h html for kar k to jo bhi valueae yhn bind krdyty label html For = {amountInputId} ab yhn label to lg rha uniqueness k liy, khn br appko map etc mn prob ahy to react khud bhi bolta h attribute etc k liye esy use krly but label to hogya ab input k sth bhi to bind kro, q k input bhi to dena h tab etc k through hn jee to app iput k sth bind krdo 
// export default InputBox;


//ye sir ncurrency.md s karwaya h copy github s . es field ko appn use kia to app diectly export krskty export default InputBox;,  es export mn koi khrabi nh but 1 better way bhi h bry project mn 1 recommend , yhn to mn khud h dirct exort krta but 
// componnts mn 1 new file bnahy or name dedo index.js to kya hota k jitny bhi componnts h hm usy yhn laty or yh s export krty , wrna kya hota hr bar appki file jo ap import krogy inputBox serchBox to bht sara bn jata to direct h hm index file ko cmponnt folder ko import krwalyty index or index s h sabko access krlyty , like import iputBox from './inputBox
// export {iputBox, serchBox}

// import React, {useId} from "react";
// function InputBox({
//     label,
//     amount,
//     onAmountChange,
//     onCurrencyChange,
//     currencyOptions = [],
//     selectCurrency = 'usd',
//     amountDisable = false ,
//     currencyDisable = false,
//     className = '',
// }) {
//     const amountInputId = useId()

//     return (
//         <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
//             <div className="w-1/2">
           
//                 <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
//                     {label}  
                    
//                 </label>

//                 <input
//                     id = {amountInputId}
//                     className="outline-none w-full bg-transparent py-1.5"
//                     type="number"
//                     placeholder="Amount"
//                     disabled={amountDisable}
//                     value={amount}
//                     onChange={(e) => onAmountChange && onAmountChange(number(e.target.value))}
//                                  />
//             </div>

//             <div className="w-1/2 flex flex-wrap justify-end text-right">
//                 <p className="text-black/40 mb-2 w-full">Currency Type</p>
//                 <select
//                     className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
   
//                     value={selectCurrency}
//                     onChange={(e)=> onCurrencyChange && onCurrencyChange (e.target.value)}
//                     disabled = {currencyDisable}

               
//   //30;00
                   
//                >
//                    {currencyOptions.map((currency) => (
//                         <option key= {currency} value= {currency}>
//                         {currency}
//                     </option>

//                    ))}
                   
                                    
//                </select>
//            </div>
//        </div>
//    );
// }

// export default InputBox;

import React, { useId } from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = 'usd',
    amountDisable = false,
    currencyDisable = false,
    className = '',
}) {
    const amountInputId = useId();

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>

                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) =>
                        onAmountChange && onAmountChange(parseFloat(e.target.value) || 0)
                    }
                />
            </div>

            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency.toUpperCase()}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;

