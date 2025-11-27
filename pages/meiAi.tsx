import '../app/globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";



export default function Home() {
  return (
    <>   
        <Seo title="Mei Ai" description="buku kisah nyata diangkat dari seorang anak usia 5 tahun dimana mamanya tengah berjuang dalam kanker ganas. Kata &quot;Kanker&quot; adalah sebuah kata asing baginya. Mei " />
      <Navbar />
        
        <div className="container">
      <div className="image-container">
        <img src="mei-ai.png" alt="Product Image" />
      </div>
      <div className="description-container">
        <h2 className="product-name">Mei Ai</h2>
        <p className="product-description">buku kisah nyata diangkat dari seorang anak usia 5 tahun dimana mamanya tengah berjuang dalam kanker ganas. Kata "Kanker" adalah sebuah kata asing baginya. Mei Ai kecil dipaksa menjadi mandiri bahkan dia harus mampu menyimpan kesedihan hati bahkan kebutuhan seorang anak kecil untuk dilayani menjadi melayani sang mama yang sakit. Dan kaki mungilnya pernah terlintas ban kursi roda saat dia ikut mendorong kursi roda mama. Hingga suatu malam, sebuah kalimat mei Ai lontarkan pada sang mama, rupanya itu menjadi motivasi mama untuk bangkit dan mau sembuh. Mama Mei Ai seorang pejuang 7 kanker ganas, agresif, jenis langka, 2 kali di hajar kanker ganas, dan bukan hanya itu... Dari sana lahir sebuah komunitas kanker IC3 (Indonesia Christian Cancer Community) dibawah yayasan satu visi bagi Indonesia..lahir dari seorang Caregiver cancer anak bernama Mei Ai. </p>
        <p className="product-price">Rp50.000</p>
        <button className="button" onClick={() => window.location.href='https://shope.ee/g3ldnt0Q4'}>Buy Now</button>
    </div>  
    </div>
        <Footer />
    </>
  );
}
