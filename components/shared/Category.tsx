"use client"
import { categories } from '@/app/helper/helper'
import Link from "next/link";
import { useRouter } from 'next/router';

function Category() {
  const searchParams = new URLSearchParams(window.location.search);
  const paramValue = searchParams.get('category');

  return (
    <div className='mx-auto text-center flex sm:grid-cols-3 '>
        { 
            categories.map((category : string) : any =>{
                return (
                <Link href={`/?category=${category}`}>
                    <button className={`border rounded-2xl w-40 h-10 hover:text-amber-600 hover:transition-300 mt-3
                    ${paramValue == category ? 'bg-black text-white' : ""}`}>
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
