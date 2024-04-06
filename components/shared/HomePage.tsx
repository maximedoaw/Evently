//"use client"
import  { ReactNode, useEffect } from 'react';
import Card from './Card';
import { get_event } from '@/app/helper/action';
import { fakeDataArray } from '@/app/helper/helper';
import { Action } from '@/types';
//import { useSearchParams } from 'next/navigation';

 function HomePage
 () {
  // const url = useSearchParams() 
  // const word : any = url.get("word")
  // console.log(word);
  
  // let filterdata = [...fakeDataArray]
  // filterdata = word !== null ? filterdata.filter((val)  => val.EventName.toLowerCase().includes(word.toLowerCase()) ) : fakeDataArray
  return (
    <div className='grid lg:grid-cols-3 grid-gap-1 sm:grid-cols-2 xl:grid-cols-4'>
      {
        fakeDataArray.map((data,idx) : ReactNode =>{
          
          return(
            <Card 
            index={idx} 
            imgURL={fakeDataArray[idx].ImageUpload}
            name={fakeDataArray[idx].EventName}
            price={fakeDataArray[idx].Price}
            date={fakeDataArray[idx].Date}
            />
          )
        })
      }
     
    </div>
  )
}

export default HomePage
;
