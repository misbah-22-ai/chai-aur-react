// acha 1 chz jo mein chahta k mera header or footer sme rhy or usky andr k cmpnnt chnge hoty rhy . to mn home mn alg cmpnnt daal dnga , contct us mn alg cmpnt dal dng to esi trhn . to 1 to appka ye classic treeka h k hm header hr componnt mn call krwhn, h0me mn bhi contct us mn bhi about mn bhi but ye optimize treeka nh .

// to src mn new file bnahy or uska nam aksr root dety mn layout dedeta hn layout.jsx, infct app ye sara kam app.jsx mn bhi krskty hn . to phly to esy frgmnt bnao div hatao. chllty hn layout.jsx m .  ab esmn layout ret krny k bjahy mn krnga return header footer but mn chahta hn dynamicallly chxn pass krdn,  home bhi krdn , about us bhi krdn to ks trhn mn krskta . to esky liye q k ye bht h comn scenerio h to appko react router dom s interestng chx mlti h outlet , ye outlet kya krta h es layout ko as a base use krlega or esky andr jo bhi chx ahegi upr ka or nnechy ka wo sme rkhy ga yhn bhi appny outlet dedia whn app chxn ko chng krskty, agr bottom mn dia to top ki sm rhegi , ye outlet jo bnaya esko use krny ka hi 1 syntax h aisa nh k bas bnaya or aisy h use krlia . 

//actully mn appko index file mn btana hog l mn 1 lyout use krrha usky andr de rha sb kch q k routing ho kaisy hi h , home k ander about us h home k andr contct us h , nesting to ho h rae h / k andr h sb kch , to hm dykhty esy ks trhn dykhty .

//ab main.jsx mn meiny path dia / ab / kya h top level elmnt esky andr nestng horae h to ye kya render krega wo batana parega , ab elmnt konsa daingy layout deskta . app chho t app.jsx s ly ao  kam 1 h jaisy hona th . ab esmn next prop aata h wo hai childn , jo k mn krna chahta home, about us , contct us.///////////// to es trhn app chdrn add krskty dykhn actually mn  kam to bas etna th k 1 obj jismn 2 value ho path or elemnt but q k further esmn or value hn es liye mjhy 1 or chldrn bnana para or usmn 1 arr dena para or ab us arr mn , jitny bhi nesting route krni kijiye {},{} koi bt h nh . pehly route mn woi path or elmnt 


import React from "react"
import { Outlet } from "react-router-dom"
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function Layout(){
    return(
        <>
    <Header/>
    <Outlet/>
    <Footer/>
    
        </>
    )
}
export default Layout