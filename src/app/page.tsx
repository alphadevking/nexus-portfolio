'use client'
import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CustomNavbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <CustomNavbar />
      <Hero />
      <AboutMe />
      <Footer/>
    </div>
  );
}
