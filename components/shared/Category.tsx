"use client"
import { categories, fakeDataArray } from '@/app/helper/helper'
import Link from "next/link";
import { useSearchParams } from 'next/navigation';

function Category() {
  const url = useSearchParams() 
  const paramValue : any = url.get("category")

  return (
    <div className='mx-auto text-center flex sm:grid-cols-3 '>
        { 
            categories.map((category : string) : any =>{
                return (
                <Link href={`/?category=${category}`}>
                    <button className={`border rounded-2xl w-40 h-10 hover:text-amber-600 hover:transition-300 mt-3
                    ${paramValue == category ? 'bg-gray-700 text-white' : ""}`}>
                      {category}
                    </button>
                </Link>

                )
            } )
        }
    </div>
  )
}

export default Category
