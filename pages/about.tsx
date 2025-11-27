import '../app/globals.css'
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import About from '@/components/About';
import Communities from '@/components/Communities';

export default function Home() {
  return (
    <>
      <Seo title="About Us" />
      <Navbar />
      <Hero />
      <About />
      <Communities />
      <Footer />
    </>
  )
} 
