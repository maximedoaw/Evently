//import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import ContentCard from "@/components/shared/ContentCard";
export default function Home() {
  return (
    <>
    <section className="bg-primary-50 bg-dotted-pattern bg-contain
    py-5 md:py-10">
      <div className="wrapper grid grid-cols-1 gap-3 md:grid-cols-2
      2xl:gap-0">
        <div className="flex flex-col justify-center gap-8">
          <h1 className="h1-bold">
          Host, Connect, Celebrate: Your Events, Our Platform!
          </h1>
          <p className="p-regular-20 md:p-regular-24">Book and learn helpful tips from 3,168+ mentors in world-class companies with our global community.</p>
          <button  className="button w-full
          sm:w-fit" >
          <Link href="#event">
          Explore now
          </Link>
          </button>
        </div>

        <Image
        src="/assets/images/hero.png"
        alt="hero"
        width={500}
        height={500}
        className="max-h-[70vh] object-center object-contain
         2xl:max-h-[50vh]"
        />
      </div>
    </section>
    <section id="events" className="wrapper my-8 flex flex-col gap-8 
    md:gap-12">
      <h2 className="h2-bold">Trust by <br /> Thousands Events</h2>
      <div className="flex flex-col w-full gap-5 md:flex-row">
        Search
        CategoryFilter
      </div>
      <ContentCard/>
    </section>
    </>
  )
}
