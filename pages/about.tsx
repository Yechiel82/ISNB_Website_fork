import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import '../app/globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";



export default function Home() {
  return (
    <>
      <Seo title="About Us" />
      <Navbar />
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <GetApp />  
      <Footer />
    </>
    
  )
} 

