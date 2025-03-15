//sabsy phly usecontext lyna h then userContext to lyna h prega wrna bataonga kaisy k kosy contxt ki bt krrha , 5,6 cntxt aksr 10,10 bhi hoty , yhn user laingy setuser nh, jo data lyna h wo q k mjhy mthd nh chahye yhn p . ab conditional return karty ab if ko chck krlyty agr koi user h h nh to smple sa return krdo , ye return koi magicl thori na h jsx h to return kr rha h , to div lylyty or usmn please login , ab agr hai to return krdyty div mn welcome {user.username} user mein s username extract krlia. 
import React, {useContext} from "react";
import UserContext from "./context/userContext";

function Profile (){
    const {user} = useContext(UserContext)

        if (!user) return <div>please login</div>

        return <div>Welcome {user.username}</div>

}
export default Profile

//ab chlty app.jsx mn q k yhn kafi kch horha h lkn hmny kch kia nh h ab tk 35;00