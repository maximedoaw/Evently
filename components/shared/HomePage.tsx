"use client"
import  { ReactNode } from 'react';
import Card from './Card';
import { fakeDataArray } from '@/app/helper/helper';
 import { useSearchParams } from 'next/navigation';

 function HomePage() {
   const url = useSearchParams() 
   const categoryEvent : any = url.get("category") 
   const word : any = url.get("word") 
   let filterdata = [...fakeDataArray]
   filterdata = word !== null ? filterdata.filter((val)  => val.EventName.toLowerCase().includes(word.toLowerCase()) ) : fakeDataArray
   if (word !== null) {
    return (
      <div className='grid lg:grid-cols-3 grid-gap-1 sm:grid-cols-2 xl:grid-cols-4'>
        {
          filterdata.map((data,idx) : ReactNode =>{
            
            return(
              <Card 
              index={idx} 
              imgURL={data.ImageUpload}
              name={data.EventName}
              price={data.Price}
              date={data.Date}
              />
            )
          })
        }
       
      </div>
    )    
   } else {
    filterdata = categoryEvent !== null ? filterdata.filter((val)  => val.category === categoryEvent ) : fakeDataArray
    return (
      <div className='grid lg:grid-cols-3 grid-gap-1 sm:grid-cols-2 xl:grid-cols-4'>
        {
          filterdata.map((data,idx) : ReactNode =>{
            
            return(
              <Card 
              index={idx} 
              imgURL={data.ImageUpload}
              name={data.EventName}
              price={data.Price}
              date={data.Date}
              />
            )
          })
        }
       
      </div>
    )
   }

}

export default HomePage
;
