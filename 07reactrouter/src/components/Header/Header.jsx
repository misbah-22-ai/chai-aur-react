//ab esmn appko 2 new chzn dikhngi 1 to link or 2sra ye navLink , jb app reactrouterDom install krty to jaisy appko react k sath useEffct usestate or kfi chxn mili to reactroutrt k sath bhi appko milti , ab chlty import krty wo hm krngy reactrouter dom s (import {link, navLink} from 'react-router-dom') 

//ab link or navLink dfrnce , link or navlink hony ko to dono sm but nav link mn appko thori or funtionality milti h , link to hm use krty in place of a tag q k a tg jb  hi app use krty to actully mn appka pg pura rfrshhota or react mn rfrsh wal concpt h nh h seedha dom jata yhn s or new value inject hojti nodes ki ,

//to interviwe mn pucha jata k a tg use krty ya nh, to agr pura painting dobra s bn rha pg ka to kis kam ka react . to a tag nh krty q k pg refresh hota to link krty jo lnk ka kam bhi krta href etc , href to exctly nh hota but usky tgs  milty appy ko attribute or unky through hm kam lylyty , to jb sara kam horha th to nav lnk ki kya need 

//nav link ki need esliye coz it provide you additionl chxn , ab dykhn link mn jo hm href likhty uski jagah likhty to .
//phly str bta deta appko pehly pura navigtion bar h usmn 3 portion ho rkhy h 1st portion logo , 2nd jo h wo rightMost jo app login or ye dykh rhy , yhn s hmny lg:order-2 lga dia css h bsc yhn s appky 2 link h jo login or get strtd , usky neechy app jao gy to navLink h jo k srf home derha h , hmny dykha th about bhi h home bhi h or github bhi h . 
///////////////// ab ye jo navln mny lia esko agr app ghor s dykho to es br thora diff h str , ziada tr to hm classes direct h likh dyty thy es br meiny cl bk m or yhn pura ka pura bcktcks mn likha , aisa app bhi krogy or khi br krogy , jb appko classes es trhn chnge krni ho to hm navln mn es trhn krt////////////////////////// q k mn chta es projct mn home highlited h to home ko kaisy pta k abhi user home p h/home p , ya phir about p jarha to /about p kaisy jhy to colorHighliting kaisykr usky liye one of th best treeka k app clbk mn classes likhiye or usky bd callbk ki classes ko maipulte kaisy krna wo btata hn , jb bhi app navlnk lyty to es trhn jb app clbk lyty to you hv acces 1 varriable ka isActive , ye appko drctly mlta , or thori si classes manipult krty coz actully ho kya rha text ka color h to chng horha h , hm appna yhn var inject krskty ${isActive} to automaticlly ye navlnk appko btadega k , kya app js pg p hain wo active pg h kya , k app /about p ho ye appki url s mtchng krta h , url mn agr about h to app active ho us pg k andr , agr true h to kch krdaingyor flse h to kch or . to bri h asaani s hmny skh lia or hmny khn p bhi appna dmgh khrb nh kia k ul khn hoga kaisy hoga , jo imp or main bt thi wo agae h hmn smjh .

//ye to navigtionbr ka componnt cmplt ab footer mn hmny kch bhi additionl nh kia . ye appko prctice krna h same navlink waly ki trhn , yhn home or about h appko en dono p prctc krna k ye bhi kisi trhn orng hojae now go to footer woi new file bnhngy .

/////////////////////////////////////////////
//jb mny url mn /about likhato whn about to aya lkn etna khubeurt nh th , but hmn routing smjh agae, ab home h hmary pass about nh h to kaisy fix krngy hm header mn jhngy or header mn i know k ye navlnk h ye li hai to copy kr k paste home ko h , to dono h active horhy q k to chk krna hoga k isActive konsa wala h , appny navlnk ko btaya nh k app jaa khn rhy hn to jis trhn link mn to lgta hmesha k app khn jarahy esi trhn apppko navlnk ko bhi btana prega  to = "/" and 2nd to "/about ". ab ye linking automtc es isActive mn data inject krdegi , hmn kch krna h nh reactRouterDom kr rha bts. 

import React from "react";
import {Link, NavLink} from 'react-router-dom'

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center 
                    lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink 
                                to = '/'
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ?
                                            'text-orange-700' : 
                                            'text-gray-700'
                                        } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>


                            <li>
                                <NavLink
                                to = '/about'
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ?
                                            'text-orange-700' : 
                                            'text-gray-700'
                                        } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                to = '/contact'
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ?
                                            'text-orange-700' : 
                                            'text-gray-700'
                                        } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            
                            <li>
                                <NavLink
                                to = '/github'
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ?
                                            'text-orange-700' : 
                                            'text-gray-700'
                                        } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}


//33;00 bht components bn ghy next contact or esmn file contct.jsx , to ab appka man kre to app app alg file banaln index.js q k app jo main.jsx mn etna bara bara ly k arhy ho ./ s or componnt ye sab . to mjhy to ye sb nh chahye bas / cmponnt n usky bd ye sb nh to index file bnalo or whn s sara xport krlo , ///////////////// ab akser log mstk krty eader mn contct li ly k copypaste kia or contact.jsx mn krlia but main.jsx s puri routing cntrol horae h , es 1 elmnt s jo h outer provider to hmn whn nesting mn 1 or add krna hoga , wrna / mn nh jaga kch bhi 