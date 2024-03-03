//import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import ContentCard from "@/components/shared/ContentCard";
import { FaSearch } from "react-icons/fa";
import { SignedIn } from "@clerk/nextjs";
import Card from "@/components/shared/Card";
import Category from "../../components/shared/Category";
//import DotsMobileStepper from "../../components/shared/DotsMobileStepper";

export default function Home() {
  return (
    <div >
     <SignedIn>
      <section className=" bg-gray-600 bg-dotted-pattern bg-contain
       w-full-screen  space-y-3 text-white py-5">
          <h2 className=" font-bold text-center">Discover Amazing Event</h2>
          <div className="flex bg-gray-400 w-80 h-6 p-5 rounded-lg mx-auto ">
            <input type="text" placeholder="Search event" className="input-search border-none bg-transparent w-full h-full 
            placeholder:text-white"/>
            <FaSearch className="text-white"/>
          </div>

      </section>

      <Category/>

      <section className="w-full-screen">
          <Card />
          {/*<DotsMobileStepper />*/}
      </section>
    </SignedIn>
    </div>
  )
}
