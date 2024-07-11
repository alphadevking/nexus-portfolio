'use client';
import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CustomNavbar from "@/components/Navbar";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Suspense fallback={<Loading/>}>
        <CustomNavbar />
        <Hero />
        <AboutMe />
        <Footer />
      </Suspense>
    </div>
  );
}
