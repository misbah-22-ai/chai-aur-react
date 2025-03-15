// import React from "react";

// const UserContext = React.createContext()
// export default UserContext
//phly hmny reacct import kia and then appko bnana 1 context. ab ye 1 mthd hesy store krlia 1 var mn. es var ko app output mn throw krdo , abhi tk jo kam kia esm koi dikkat h kya ? 1 var bnana usy throw krdia output mn or hmn hmara context mil gya ye hua part 1

// ab jaisy h appny cntxt bnaya to cntxt kya hota h appko mjr chx dega provider . q k context h kya appko var provide h to kr rha h to hr 1 context 1 provider hota h. to usercntxt bhi appny app mn provdr  to hm kya krngy es wrapper lgahngy appny dykha hoga div ko bhi as a wrper ue krty , khi br frgmnts ko bhi.

//supose app alg alg cmpnt bna rhy login hog, koi card compnt hogya usky andr bhi cmpnt hoskty thy. card mn suppose dashboard th ya data nam s aajahy ya dashboar jo bhi rkhna app en sbhi ko user context s wrap krwadngy, jaisy h wrap kia ye b jaega provdr. mtlb ye h k esmn jo bhi cmpnt h en sary cmpnt ko global user context ka acces mil jaega. ye cntxt kya h esko globl var ki trhn  mano esy ziada or kchnh . 
// repeat krta hn cntxt bn gya to esky sth provdr bhi bnana prta wo q ? jo k data provd kreg usko use krngy es trhn <UserContext> top lvl p hm esko lga daing , to compont usercontxt k through sari states ka acces ly ksty. 

/* <UserContext>
    <Login/>
    <Card>
    <Data/>
    <Card/>
<UserContext/> */
////////////////////////////////////////
//ab hmn 1 provider bhi bnana prhta h 20;00, esko bny k 2 ways , to contxt mn file bnae userContxtProvider.jsx. abhi tk js th q k whn jsx return nh kr rhy thy lkn jaisy h appny contextProvider bnaya ab hmn jsx bnana prega , q abhi to btaya jo hm frgmnts ly rhy thy top level p usko rkhna preg tabhi to sary var mn access ho paega. esi liye esy jsx bnaya  

import React from "react";

const UserContext = React.createContext()
export default UserContext

// Creates a new context. A context lets you share data (like a logged-in user) across components without having to pass props manually at every level.
