import '../app/globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";



export default function Home() {
  return (
    <>
        <Seo title="Saat Aku Melepas Dia Pergi" description="Saat Aku Melepas Dia Pergi Siap atau tidak siap, perpisahan pasti akan terjadi. Perpisahan selamanya dalam dunia manyisakan kedukaan mendalam. Dulu selalu berdu" />
      <Navbar />
        <div className="container">
      <div className="image-container">
        <img src="Melepas Dia Pergi.png" alt="Product Image" />
      </div>
      <div className="description-container">
        <h2 className="product-name">Saat Aku Melepas Dia Pergi</h2>
        <p className="product-description">Saat Aku Melepas Dia Pergi Siap atau tidak siap, perpisahan pasti akan terjadi. Perpisahan selamanya dalam dunia manyisakan kedukaan mendalam. Dulu selalu berdua, hidup dalam pernikahan. Kau dan aku menggenggam tangan untuk seia sekata. Namun, hidup kita di dunia tak selamanya. Kematian datang menjemputmu dan aku harus melepas genggammu untuk pergi... pergi... pergi... Bunga rampai tulisan para Single Parent menginspirasi tentang cinta sejati</p>
        <p className="product-price">Rp80.000</p>
        <button className="button" onClick={() => window.location.href='https://shopee.co.id/erika_arianto'}>Buy Now</button>
    </div>  
    </div>
        <Footer />
    </>
    
  )
} 

