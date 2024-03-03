// "use client"
// import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
// import MobileStepper from '@mui/material/MobileStepper';
// import Button from '@mui/material/Button';
// import { useRouter } from 'next/navigation';
// import { get_event } from '@/app/helper/action';


// async function PaginationControlled({ nbpage } : any ) {
//   const theme = useTheme();
//   const navigate = useRouter()
//   const [activeStep, setActiveStep] = React.useState(0);
//   let param = window.location.search
//   let startIndex
//   let activePage = await get_event()
//   const navigatePage = () =>{
//     startIndex = (parseInt(param.split('=')[1]) * 8 ) - 1
//     navigate.push(`/?page=${activeStep}`)
//     activePage = activePage.slice(startIndex,startIndex + 8)

//   }
//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     navigatePage()
//   };
//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//     navigatePage()
//   };
  
//   return (
//     <MobileStepper
//       variant="dots"
//       steps={Math.floor(nbpage/8)}
//       position="static"
//       activeStep={activeStep}
//       sx={{ maxWidth: 400, flexGrow: 1 }}
//       nextButton={
//         <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
//           Next
//         </Button>
//       }
//       backButton={
//         <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
//           Back
//         </Button>
//       }
//     />
//   );
// }

// export default PaginationControlled;