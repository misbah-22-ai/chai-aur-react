// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';
// import CardDefault from './components/cards';


// function App() {
//     const [count, setCount] = useState(0);
//     let myObj = {
//         username: 'misbah',
//         age: '21'
//     }
//     let myArr = [1, 2 ,3 ,4 ,5]

//     return (
//         <>
//             <h1 className='bg-green-400'>chaiAurCode</h1>
//             <CardDefault channel = 'chaiAurCode' someObj = {myObj} anyObj = 'mirha' someArr = {myArr} />
//             <CardDefault/>
          
//         </>
//     );
// }

// export default App;


//////////////////////////////////////////////////////////////
// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';

// import CardDefault from './components/cards';


// function App() {
//     const [count, setCount] = useState(0);
//     let myObj = {
//         username: 'misbah',
//         age: '21'
//     }
//     let myArr = [1, 2 ,3 ,4 ,5]

//     return (
//         <>
//             <h1 className='bg-green-400'>chaiAurCode</h1>
//             <CardDefault username = 'chai aurCode' btnText = 'clickme' />
          
//             <CardDefault username = 'mirha Minsa' btnText = 'visit me' />
          
//             <CardDefault username = 'chaiAurNashta'  />
          
//         </>
//     );
// }

// export default App;
////////////////////////////////////////////////////


// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';

// import CardDefault from './components/cards';


// function App() {
//     const [count, setCount] = useState(0);
//     let user = {
//         username: 'misbah',
//         age: '21'
//     }
    
//     let users = {
//         username: 'ansa',
//         age: '221'
//     }
//     let array = [1, 2 ,3 ,4 ,5]

//     return (
//         <>
//             <h1 className='bg-green-400'>chaiAurCode</h1>
            
//             <CardDefault userInfo = {user}/>
//             <CardDefault userInfo = {users}/>
            
          
//         </>
//     );
// }

// export default App;
///////////////////////////////////////////////


// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';
// import HorizontalCard from './components/cards';


// function App() {
//     const [count, setCount] = useState(0);
//     let user = {
//         name: 'MisbahRehman',
//         paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, eaque.',
//         button: 'ClickMe'
//     }
   
//     let company = {
//         name: 'kaafEngineers',
//         paragraph: 'Lorem ipsum dolor sit amet, c.',
//         button: 'Read more'
//     }
   
//     return (
//         <>
//             <h1 className='bg-green-400'>chaiAurCode</h1>
//             <br />
//             <HorizontalCard userInfo = {user}/>
//             <br />
//             <HorizontalCard userInfo = {company}/>

            
          
//         </>
//     );
// }

// export default App;
///////////////////////////////////////////////

import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ProfileCard from './components/cards';


function App() {
    const [count, setCount] = useState(0);
   
    return (
        <>
            <h1 className='bg-green-400'>chaiAurCode</h1>
            <br />
            <ProfileCard username = 'mirha Amin' destination = 'chairman enterprise operation'/>
            <ProfileCard username = 'mina Amin' destination = 'chef executive officer'/>
            <ProfileCard username = 'Misbah Rehman' destination = 'bank manager'/>
            <ProfileCard username = 'Amina ' destination = 'sales service department'/>
        
            
            
            
          
        </>
    );
}

export default App;


