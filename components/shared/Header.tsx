import Link from 'next/link'
import Image from "next/image";
import {  SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Button from '@mui/material/Button';
import NavItem from './NavItem';
import MobileNav from './MobileNav';
function Header() {
  return (
    <header className='w-full border-b'>
        <div className='wrapper flex items-center justify-center'>
            <Link href="/" className='w-36'>
                <Image 
                src="/assets/images/logo.svg" width={128} height={38}
                alt='logo'
                />
            </Link>
            <SignedIn>
              <nav className="md:flex-between hidden w-full max-w-xs">
                <NavItem />
              </nav>
            </SignedIn>
            <div className='flex w-32 justify-end gap-3 ml-auto'>

              <SignedIn>
                <UserButton afterSignOutUrl='/'/>
                <MobileNav/>
              </SignedIn>
              <SignedOut >
                <button className='rounded-full' >
                  <Link href={"/sign-in"}>
                    <Button variant="contained" >Login</Button>

                  </Link>
                </button>
              </SignedOut>
            </div>
        </div>
    </header>
  )
}

export default Header