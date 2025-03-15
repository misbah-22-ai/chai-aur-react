// // function hello(){
// //     return[]
//1 cstm hook ka bhi cncpt hota khi br hmary pass aisy hook nh hoty but hm , hook h kya 1 fun h to hai or ye fun ye val retur  kr rha h , , hm src mn costum hook bnaty to usy 1 fldr mn h rkh lyty hn , hook fun h hai ab esmn 1 file nam useCurrencyinfo yh jsx mt rkhn q k ye jo hooks hoty ye purly majority cases mn js return krty or achi prctc h jb  appky pass jsx return hoha to app jsx rkho or agr jsx nh horha to file nam js ya .ts h rkho. 


// import { useEffect } from "react";

// // }
// function useCurrencyInfo (currency){

//     useEffect(()=>{
//         fetch(`https://v6.exchangerate-api.com/v6/4077bbab11ef1284c53de717/latest/USD`)
//         .then((res)=> res.json())

//ye jo json data h ye json formt mn h lkn jb bhi appko data mlta wo json nh hota strn mn hota , hmn esko str s chnge krna hog json mn ye jso dikh rhA h lkn h nh , mostly api cl ati str mn , reactquery etc by default krdeti h but bd mn chrcha , 1 to appko date ki req h to nh hai , dosra ye jo obj hai json h esmn 1 key h inr usmn jo data arha h ye pura data mjhy chahye.appka man h app esy var mn banao appka man h to app ` mn rkho ye hogaya api call fetch , fetch s app chaining krskty ho .then lga k ab thn mn 1 callbk milta ab yhn s 1 res aya h ab yhn s mn curly braces hatata wrna return statemnt likhna prh jaega . ab ye jo res h esy cnvrt krlo json mn , ab json mn cnvrt krny k many ways yhn .json krogy kam hojaega nh jamta to app capitl json parse unsy bhi krskty 
// .then((res) => res.json())

//         //ab ye cnvrt hogya now we hold abhi .thn lgaty usy pta h response json formt mn aya but esy hold khn krn, ab agr mn data ko regulr var mn hold krdng to prob hogi q k ui mn kbhi update nh hoga , to ye jo hook h hm directly usestate s value return krwadety, to hm smple sa esy khty k 1 data bnao or setdata or usestate use krlyty or 1 empty obj daal dety usestate mn k agr fetch cl nh arae h to atlest contingency plan hogaya k gr vlu nh arae h to empty obj h uspy loop lgaogy to crash nh kreg, fetch mn usd h to key bhi usd h aegi yani ye currency ki value key ahegi , or mjhy pta h k hr br 1 obj k0 access krny k liye .zarrori nh mn [] s bhi acces ly skta

//     },[])
// }
/////////////////////////////////////////////////
// import { useEffect, useState } from "react";
//to ye bhi appka return kr rha arr or 2 vari return krdain ye bhi 1 custom hook h no prob . ye jo cstm hook h ye bhi appky built in hook ko use kr skty useState etc ko , , hmn 2 chzn chahye yhn import krwaty useEfc or Usestate ko , use lagaty coz unspoken rule h 1 standard rule when you use hook sbky peechy use lga do 
// hooks appky upr kahi hook optionl argumnt lyty hmara hook optionl argumnt nh lyta usko currency ki info dei h prht h appkoi bhi nam likho ,ye return krega hook data , actuly i want to call api , konsi ? waisy to mn directly fetch mn bhi cl krdkta, but mn chahta jb ye hook load hoga jb use krega tb mn es hook ko cl krwao ya us api ko cl krwao . ab aisa konsa hook h jisy mn invoke krskta jb bhi koi comonnt mount hota h uska life cycle trigr hota to we have useeffect essy automticly mera fetch cl hojaeg , es fun mn or fun nh bnana prega k ab fun cl hoga ab mera api cl krdo ab es hok ko chahye 2 chzn 1 to clbk or dosra dpndnc arr , k es chx mn koi bhi chng ahega to mn wapis s api cl krng. ab md mn h url esko krngy stdy ab es url n  $currncy ye lkha hua h url ko aisa var nh ata smjh to hm s currncy ki jaya usd likha ab kitna bara data appky pass aata 
// https://chatgpt.com/share/66fed3d9-364c-800b-a168-f7dfe51d9591


// function useCurrencyInfo (currency){
//     const [data, setData] = useState({})

//     useEffect(()=>{
//         fetch(`https://v6.exchangerate-api.com/v6/4077bbab11ef1284c53de717/latest/USD`)
//         .then((res)=> res.json())
//         .then((res)=> setData(res[currency]))

//         //setdata use kia or kha ye jo res aya h usky andr s 
//         //jo bhi mn yhn currncy ki value dnga key vlu woi ahegi, or hr br obj ko acces k liye .zerori nh mn [] s bhi access ly skta, mera prob khtm hogaya k usd bolna k inr jo bhi mn url mn dia request, whn s ly lnga  
//         console.log(data);
        

//     },[currency])
// }
/////////////////////////////////////////////////////////////////////////
    //ab app soch rhy hn k mn yhn s return kya krn data , ab data rtn kia to prob hojegi , 1 kam krty setdata rtn krdyty nh wo bhi krngy to data ka access nh rhega , 1 kam krdo sir 1 arr banao appny kha th custom hook h data ko bhi or setdata ko bhi return krdo// return [data,setData] kafi hd tk sae h app lkn ye call kaisy hoga q k currncy ka access kaisy logy to ye approach es situation mn thk nh beth rae . 
    // const [data, setData] = useState({})

    // useEffect(()=>{
    //     fetch(`https://v6.exchangerate-api.com/v6/4077bbab11ef1284c53de717/latest/USD`)
    //     .then((res)=> res.json())
    //     .then((res)=> setData(res[currency]))
  
    //     console.log(data);
        

    // },[currency])

    // to es mthd s hm srf or srf data return krty hn , return krngy sirf data ko to set nh kapahngy kbhi value, currency nh krpahngy, nhiiii , esky liye h appki 1 functinlity h esi liye hm esy cutm hook bol rhy q k mn yhn syntax likhnga export default useCurrencyInfo ab mny kia kya h 1 funtionlity desgn ki or us pury k pury mthd ko h return krdia or appka jo use state hook h whn p bhi yae horha h pura ka pura mthd h retur hojata h ab us mthd s app kya kya value drive kr rhy ho , q k mthd bhi eoftheday return kr rha data to mn whn s bhi acces lylnga data ka access 20;00
///////////////////////////////////////////////////////////////////////////////


// import {useEffect, useState} from "react"


// function useCurrencyInfo(currency){
//     const [data, setData] = useState({})
//     useEffect(() => {
//         fetch(`https://v6.exchangerate-api.com/v6/aeac217a126d382896585138/latest/${currency}`)

//         .then((res) => res.json())
//         .then((res) => setData(res[currency]))
//         console.log(data);
//     }, [currency])
//     console.log(data);
//     return data
    // to es mthd s hm srf or srf data return krty hn , return krngy sirf data ko to set nh kapahngy kbhi value, currency nh krpahngy, nhiiii , esky liye h appki 1 functinlity h esi liye hm esy cutm hook bol rhy q k mn yhn syntax likhnga export default useCurrencyInfo ab mny kia kya h 1 funtionlity desgn ki or us pury k pury mthd ko h return krdia or appka jo use state hook h whn p bhi yae horha h pura ka pura mthd h retur hojata h ab us mthd s app kya kya value drive kr rhy ho , q k mthd bhi eoftheday return kr rha data to mn whn s bhi acces lylnga data ka access 20;00
////
// }

// export default useCurrencyInfo;

//ab hm dykhty k kis trhn com ko reusable bnaty, src m 1 new foldr or usy khty cmponnts esmn 2 file bnhngy , aproach ye k jb ziada comp bn jaty appky fldr mn tb bhi 1 expot ka approc app ly skty or 1 regulr approch bhi ly skty , best konsi ye bhi bataonga , ab cmpont mn 1 new file input.jsx , to input.jsx h ye jo projct h na esmn es box ko mn inut kh rha esmn labels h kch from etc to ye jo inner container h white k andr esko mn input k andr banan cht.. jitny bhi cmponnt h wo uppercase 
//whay the hell is this to ake sure 


// import {useEffect, useState} from "react"


// function useCurrencyInfo(currency){
//     const [data, setData] = useState({})
//     useEffect(() => {
//         fetch(`https://v6.exchangerate-api.com/v6/aeac217a126d382896585138/latest/${currency}`)

//         .then((res) => res.json())
//         .then((res) => setData(res[currency]))
//         console.log(data);
//     }, [currency])
//     console.log(data);
//     return data
// }

// export default useCurrencyInfo;

import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    
    useEffect(() => {
        async function fetchCurrencyData() {
            try {
                const res = await fetch(`https://v6.exchangerate-api.com/v6/aeac217a126d382896585138/latest/${currency}`);
                const result = await res.json();
                setData(result.conversion_rates || {});
                console.log("Fetched data:", result.conversion_rates);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchCurrencyData();
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
