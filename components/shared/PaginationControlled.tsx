"use client"
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { fakeDataArray } from '@/app/helper/helper';
import { useRouter, useSearchParams } from 'next/navigation';

export default function DotsMobileStepper() {
  const theme = useTheme();
  const router = useRouter()
  const page = useSearchParams()
  const numpage : any = page.get("page")
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    router.push(`manage?page=${parseInt(numpage)+1}`)
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    router.push(`manage?page=${parseInt(numpage)-1}`) 
};

  return (
    <div className="mx-auto">
            <MobileStepper
                variant="dots"
                steps={Math.floor(fakeDataArray.length/3)}
                position="static"
                activeStep={activeStep}
                sx={{ maxWidth: 400, flexGrow: 1 }}
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
                    Next
                    {theme.direction === 'rtl' ? (
                        <FaArrowLeft />
                    ) : (
                        <FaArrowRight />
                    )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                    {theme.direction === 'rtl' ? (
                        <FaArrowLeft />
                    ) : (
                        <FaArrowRight />
                    )}
                    Back
                    </Button>
                }
                />
    </div>
  );
}
