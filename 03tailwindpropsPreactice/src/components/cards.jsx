// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Typography,
//   Button,
// } from "@material-tailwind/react";
 
// function CardDefault(props) {
//   console.log('props', props);
  
//   return (
//     <Card className="mt-6 w-96">
//       <CardHeader color="blue-gray" className="relative h-56">
//         <img
//           src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
//           alt="card-image"
//         />
//       </CardHeader>
//       <CardBody>
//         <Typography variant="h5" color="blue-gray" className="mb-2">
//           UI/UX Review Check
//         </Typography>
//         <Typography>
//           The place is close to Barceloneta Beach and bus stop just 2 min by
//           walk and near to &quot;Naviglio&quot; where you can enjoy the main
//           night life in Barcelona.
//         </Typography>
//       </CardBody>
//       <CardFooter className="pt-0">
//         <Button>Read More</Button>
//       </CardFooter>
//     </Card>
//   );
// }

// export default CardDefault

// ///////////////////////////////////////////////////////////////
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Typography,
//   Button,
// } from "@material-tailwind/react";
 
// function CardDefault({username, btnText='visit me'}) {
  
  
//   return (
//     <Card className="mt-6 w-96">
//       <CardHeader color="blue-gray" className="relative h-56">
//         <img
//           src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
//           alt="card-image"
//         />
//       </CardHeader>
//       <CardBody>
//         <Typography variant="h5" color="blue-gray" className="mb-2">
//           UI/UX Review Check
//         </Typography>
//         <Typography>
//           {username}
          
          
          
//         </Typography>
//       </CardBody>
//       <CardFooter className="pt-0">
//         <Button>{btnText}</Button>
//       </CardFooter>
//     </Card>
//   );
// }

// export default CardDefault
// ///////////////////////////////////////////////////////////////
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Typography,
//   Button,
// } from "@material-tailwind/react";
 
// function CardDefault({userInfo   }) {
  
  
//   return (
//     <Card className="mt-6 w-96">
//       <CardHeader color="blue-gray" className="relative h-56">
//         <img
//           src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
//           alt="card-image"
//         />
//       </CardHeader>
//       <CardBody>
//         <Typography variant="h5" color="blue-gray" className="mb-2">
//           UI/UX Review Check
//         </Typography>
//         <Typography>
          
//           {userInfo.username}
          
          
          
          
//         </Typography>
//       </CardBody>
//       <CardFooter className="pt-0">
//         <Button>{userInfo.age}</Button>
//       </CardFooter>
//     </Card>
//   );
// }

// export default CardDefault

///////////////////////////////////////////////////

// import {
//   Card,
//   CardHeader,
//   CardBody,
//   Typography,
//   Button,
// } from "@material-tailwind/react";
 
// function HorizontalCard({userInfo}) {
//   return (
//     <Card className="w-full max-w-[48rem] flex-row">
//       <CardHeader
//         shadow={false}
//         floated={false}
//         className="m-0 w-2/5 shrink-0 rounded-r-none"
//       >
//         <img
//           src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
//           alt="card-image"
//           className="h-full w-full object-cover"
//         />
//       </CardHeader>
//       <CardBody>
//         <Typography variant="h6" color="gray" className="mb-4 uppercase">
//           {userInfo.name}
//         </Typography>
//         <Typography variant="h4" color="blue-gray" className="mb-2">
//           {userInfo.paragraph}
//         </Typography>
//         <Typography color="gray" className="mb-8 font-normal">
//           {userInfo.paragraph}

//         </Typography>
//         <a href="#" className="inline-block">
//           <Button variant="text" className="flex items-center gap-2">
//             {userInfo.button}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//               className="h-4 w-4"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
//               />
//             </svg>
//           </Button>
//         </a>
//       </CardBody>
//     </Card>
//   );
// }

// export default HorizontalCard
/////////////////////////////////////////////////

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
 
function ProfileCard({username, destination}) {
  return (
    <Card className="w-96">
      <CardHeader floated={false} className="h-80">
        <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {username}
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          {destination}
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <Tooltip content="Like">
          <Typography
            as="a"
            href="#facebook"
            variant="lead"
            color="blue"
            textGradient
          >
            <i className="fab fa-facebook" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#twitter"
            variant="lead"
            color="light-blue"
            textGradient
          >
            <i className="fab fa-twitter" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#instagram"
            variant="lead"
            color="purple"
            textGradient
          >
            <i className="fab fa-instagram" />
          </Typography>
        </Tooltip>
      </CardFooter>
    </Card>
  );
}
export default ProfileCard