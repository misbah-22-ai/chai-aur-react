// import Chai from "./chai"

// function App() {

//   return (
//     <> 
//     <Chai/>
//     <h1>Chai aur react</h1>
//     <p>test</p>
//     </>

  
  
//   )
// }

// export default App

//ab es app mn 1 kahani aati k app variable kaisy inject krgy EOD ye hai jsx h ,to x to hmn smjh agaya html wala part , variable or js kaisy inject hogi wo bhi bara interstng cncpt , suppose mn yhn 1 var deta username , mjhy ab ye username h1 k sath likhna ,     <h1>Chai aur react username</h1> but es trhn ye vr nh smple str h or username aisi h agaya, to yhn syntax h 1 {} to jhn bhi { } hoga whn variable treat like jaisa bctcks mn tha waisy str but ${} to wo variable , es br direct 

// {username}     {/* esko khty hn expression or evaluated expression */}, 35:00, yhn app puri js nh likhty js ka final outcome jo evaluate ho k aaya h wo likhty ye etni bari jargon q , yae h technical communication agr y {username} js ha to kya mn yhn if statemnt likh skta ye sb likh skta evaluation expression ka mtlb h mn yhn final outcome likhnga if evaluation ka kam h ye sb app const username k neechy kro ya outside krlo ye return expression mn yhn nh krskty q nh krskty uska reason msjh ahy ga jb hm clumsy code mn jhngy main.js mn , 





import Chai from "./chai"



function App() {
  const username = 'chai aur code'

  return (
    <> 
    <Chai/>
    <h1>Chai aur react {username}</h1>
    

    <p>test</p>
    </>

  
  
  )
}

export default App