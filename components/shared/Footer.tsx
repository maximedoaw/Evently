import React from 'react'
import Link from "next/link";
import Image from 'next/image';
function Footer() {
  return (
    <footer className='border-t'>
      <div className='flex p-5 flex-between flex-col
      text-center sm:flex-row'>
        <Link href="/">
          <Image
          src="/assets/images/logo.svg"
          alt='logo'
          width={128}
          height={38}
          />
        </Link>   
        <p>2023 Evently. All Right Reserved</p>    
      </div>
 
    </footer>
  )
}

export default Footer