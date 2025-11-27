
import '../app/globals.css'
import Hero from "@/components/Hero";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import About from '@/components/About';
import Communities from '@/components/Communities';
// Optionally import Product preview here later if desired

export default function Home() {
  return (
    <>
      <Seo />
      <Navbar />
      <Hero />
      <About />
      <Communities />
      <Footer />
    </>
  );
}
