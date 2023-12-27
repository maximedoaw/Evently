import Link from 'next/link'
import Image from "next/image";
import {  SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Button } from '../ui/button';
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
            <div className='flex w-32 justify-end gap-3 ml-auto'>
              <SignedIn>
                <UserButton afterSignOutUrl='/'/>
              </SignedIn>
              <SignedOut >
                <Button asChild className='rounded-full' size={"lg"}>
                  <Link href={"/sign-in"}>Login</Link>
                </Button>
              </SignedOut>
            </div>
        </div>
    </header>
  )
}

export default Header