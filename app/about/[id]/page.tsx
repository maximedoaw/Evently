import { db, storage } from '@/app/firebase';
import Event, { get_event } from '@/app/helper/action';
import { fakeDataArray } from '@/app/helper/helper';
import { Button } from '@mui/material';
import { collection, getDocs } from 'firebase/firestore';
import { StorageReference, getDownloadURL, listAll, ref } from 'firebase/storage';
import Image from 'next/image';
import React from 'react'


 function page({ params } : any) {

  const EventId = params.id  
  return (
    <div className='w-1/2 h-full mx-auto my-auto'>
      <div className='flex my-5 lg:flex-row  sm:flex-col border'>
        <Image
        src={fakeDataArray[EventId].ImageUpload}
        alt=''
        placeholder='blur'
        blurDataURL='/assets/images/spinner.svg'
        width={400}
        height={400}
        className='mx-auto '
        />
        <div className='text-center'>
          <div className='flex h-full border-l sm:flex-col sm:border-t '>
            {fakeDataArray[EventId].Description}
          </div>
        </div>
      </div>
      <Button 
      variant="outlined" 
      color="success" 
      className='mx-auto'
      >
              Ajouter au panier
      </Button>
    </div>
  )
}

export default page
