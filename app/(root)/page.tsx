//import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import ContentCard from "@/components/shared/ContentCard";
import { FaSearch } from "react-icons/fa";
import { SignedIn } from "@clerk/nextjs";
import Card from "@/components/shared/Card";
import Category from "../../components/shared/Category";
import SearchBar from "@/components/shared/Search";

export default function Home() {

  return (
    <div >
     <SignedIn>
      <SearchBar/>
      <Category/>

      <section className="w-full-screen">
          <Card />
          {/*<DotsMobileStepper />*/}
      </section>
    </SignedIn>
    </div>
  )
}
