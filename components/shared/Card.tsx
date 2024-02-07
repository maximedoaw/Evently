import React from 'react'
import Image from "next/image";
import { FaCalendarAlt, FaMapMarkerAlt, FaMoneyBillAlt } from 'react-icons/fa';

function Card() {
  return (
  <div className="card-shadow w-60 h-60 rounded-lg border
  mt-10 cursor-pointer font-semibold  text-center hover:shadow-2xl
  hover:transition-shadow">
    <Image 
    src="/AnimePicture/Avion.jpg" 
    alt="Image d'avion" 
    width={250}
    height={250}
    placeholder='blur'
    blurDataURL='/assets/images/spinner.svg'
    className='mx-auto'
    />
    <h2> Avion</h2>
    <p className='flex'><FaCalendarAlt className='text-amber-400'/> 10-13 December 2021</p>
    <p className='flex'><FaMapMarkerAlt className='text-amber-400'/> New york |    <FaMoneyBillAlt className='text-amber-400'/> 1000$</p>
  </div>
  )
}

export default Card
