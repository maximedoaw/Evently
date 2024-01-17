import React from 'react'
import Image from "next/image";
function Card() {
  return (
<div className="w-60 h-80 bg-white p-3 flex flex-col gap-1 rounded-lg border">
 
  <Image
  src={"/assets/images/hero.png"}
  alt='card media'
  width={200}
  height={100}
  placeholder='blur'
  blurDataURL='/assets/images/spinner.png'
  />
  <div className="flex flex-col gap-4">
    <div className="flex flex-row justify-between">
      <div className="flex flex-col">
        <span className="text-xl text-gray-50 font-bold">Long Chair</span>
        <p className="text-xs text-gray-400">ID: 23432252</p>
      </div>
      <span className="font-bold  text-red-600">$25.99</span>
    </div>
    <button className="hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 rounded-lg">Add to cart</button>
  </div>
</div>
  )
}

export default Card
