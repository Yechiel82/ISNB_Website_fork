import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import '../app/globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
        <Navbar />
        <div className="container">
      <div className="image-container">
        <img src="mei-ai.png" alt="Product Image" />
      </div>
      <div className="description-container">
        <h2>Product Name</h2>
        <p>Lorem ipsum dolor sit tie dui fermentum.</p>
        <p>$99.99</p>
        <button className="button" onClick={() => window.location.href='https://shopee.co.id/erika_arianto'}>Buy Now</button>
    </div>  
    </div>
        <Footer />
    </>
  );
}
