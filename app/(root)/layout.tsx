import Category from "@/components/shared/Category";
import Footer from "@/components/shared/Footer"
import Header from "@/components/shared/Header"
import {  SignedIn } from '@clerk/nextjs';

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="flex h-screen flex-col overflow-x-scroll">
        <Header/>
        <main className="flex-1">{children}</main>
        <Footer/>
      </div>
    )
  }