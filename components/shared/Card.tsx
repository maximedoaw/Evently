import React, { ReactNode } from 'react'
import Image from "next/image";
import { FaCalendarAlt, FaMapMarkerAlt, FaMoneyBillAlt } from 'react-icons/fa';
import { get_event } from '@/app/helper/action';
import Link from 'next/link'
import { fakeDataArray } from '../../app/helper/helper';
import {  CardType } from '@/types';


  async function Card({index,imgURL,name,price,date} :  CardType) {

 
  return (
    <div  className='grid lg:grid-cols-3 grid-gap-1 sm:grid-cols-2 xl:grid-cols-4'>
    
    <div className="flex items-center py-20  lg:h-screen ">
    
        <div className="max-w-5xl px-4 mx-auto ">
          <div className="grid grid-cols-1 gap-4 lg:gap-8 sm:gap-4 sm:grid-cols-2 lg:grid-cols-2">
            <div className="w-full">
              <div className="p-6 bg-white rounded shadow dark:bg-gray-700 group w-80 hover:shadow-xl transition-duration-300">
                <Link className="block mb-2" href={`about/${index}`}>
                  <div className="relative overflow-hidden">
                    <div className="mb-5 overflow-hidden">
                      <img className="object-cover w-full mx-auto transition-all rounded h-72 
                      group-hover:scale-110" src={imgURL} alt=""/>
                    </div>
                    <div className="absolute flex flex-col top-4 right-4">
                      <div className="flex items-center">
                          </div>
                          </div>
                      </div>
                  <h3 className="mb-2 text-xl font-bold dark:text-white"> {name} </h3>
                  <p className="text-lg font-bold text-blue-500 dark:text-blue-300 ">
                    <span>${price}</span>
                  </p>
                  <p className='text-sm color text-gray-400 mr-auto'>{date}</p>
                </Link>
              </div>
            </div>
        
          </div>
        </div>
      </div>

</div>
  )
}

export default Card;
