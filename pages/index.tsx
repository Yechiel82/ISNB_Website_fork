
import '../app/globals.css'
import Camp from "@/components/Camp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';


export default function Home() {
  return (
    <>
      <Seo />
      <Navbar />
      <Hero />
      <Camp />
      <Guide />
      <Footer />
    </>
  );
}


