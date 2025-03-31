import '../app/globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



export default function Home() {
  return (
    <>
        <Navbar />
        <div className="container">
      <div className="image-container">
        <img src="Langkah_Kecil.jpg" alt="Product Image" />
      </div>
      <div className="description-container">
        <h2 className="product-name">Langkah Kecil, Kasih Besar</h2>
        <p className="product-description">Kumpulan 52 renungan yang berisi nilai-nilai kehidupan tentang pernikahan, parenting dan dinamika rumah tangga ini bukan sekedar tulisan, melainkan wujud panggilan untuk membangun warisan sejarah iman bagi generasi.
        Di tengah zaman yang semakin cepat dan dunia yang penuh tantangan, kelaurga bukan hanya tempat berlindung, tetapi medan pertempuran rohani yang sesungguhnya. Tuhan memanggil keluarga-keluarga untuk bangkit, bersatu dan berjalan bersama sebagai satu team. Ketika suami, istri dan anak-anak bersatu dalam doa dan kebenaran dalam Firman Tuhan maka keluarga akan menjadi benteng  iman yang kuat dan terang bagi lingkungan sekitar.</p>
        <p className="product-price">Rp Soon</p>
        <button className="button" onClick={() => window.location.href='https://shopee.co.id/erika_arianto'}>Buy Now</button>
    </div>  
    </div>
        <Footer />
    </>
    
  )
} 

