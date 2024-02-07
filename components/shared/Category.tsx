import { categories } from '@/app/helper/helper'
import Link from "next/link";
function Category() {
  return (
    <div className='mx-auto text-center flex sm:grid-cols-3 '>
        { 
            categories.map((category : string) : any =>{
                return (
                <Link href="/">
                    <button className='border rounded-xl w-40 h-10 hover:text-amber-600 hover:transition-300 mb-3'>
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
