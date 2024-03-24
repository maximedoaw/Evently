import { db, storage } from '@/app/firebase';
import Event, { get_event } from '@/app/helper/action';
import { fakeDataArray } from '@/app/helper/helper';
import { Button } from '@mui/material';
import { collection, getDocs } from 'firebase/firestore';
import { StorageReference, getDownloadURL, listAll, ref } from 'firebase/storage';
import Image from 'next/image';
import React from 'react'

let list : any[] = []
async function page({ params } : any) {
  

  const EventId = params.id
  const imgEvent : StorageReference = await ref(storage,'images')
  const imgList = await listAll(imgEvent)
  const querySnapshot = await getDocs(collection(db,'event'))
  
  imgList.items.map((item) =>{
    getDownloadURL(item).then((url) => list.push([url]))
  })



  
  
  return (
    <div className='w-1/2 h-full mx-auto my-auto'>
      <div className='flex my-5 lg:flex-row  sm:flex-col border'>
        <Image
        src={(await get_event())[EventId]}
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
