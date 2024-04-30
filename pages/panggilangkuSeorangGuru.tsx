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
        <img src="Panggilanku_seorang_guru.jpeg" alt="Product Image" />
      </div>
      <div className="description-container">
        <h2 className="product-name">Panggilanku Seorang Guru</h2>
        <p className="product-description">Buku ini ditulis oleh 16 guru, menguraikan soal panggilan menjadi guru dari berbagai sudut pandang. Semua kisah ini menarik untuk dibaca oleh semua yang rindu menjadi guru, atau sendang menjalani panggilan yang mulia ini.</p>
        <p className="product-price">Rp60.000</p>
        <button className="button" onClick={() => window.location.href='https://shopee.co.id/erika_arianto'}>Buy Now</button>
    </div>  
    </div>
        <Footer />
    </>
    
  )
} 

