import Link from "next/link";
import Image from "next/image";
import { SignedIn } from "@clerk/nextjs";
import Category from "../../components/shared/Category";
import SearchBar from "@/components/shared/Search";
import { fakeDataArray } from "../helper/helper";
import Card from "@/components/shared/Card";
import { ReactNode } from "react";
import HomePage from "@/components/shared/HomePage";




export default function Home() {

  return (
    <div >
     <SignedIn>
     <SearchBar/>
        
      <Category/>
      <section className="w-full-screen">
        <HomePage />
          {/*<DotsMobileStepper />*/}
      </section>
    </SignedIn>
    </div>
  )
}
