import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import Seo from '@/components/Seo'

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Hubungi Kami - Yayasan Satu Visi Bagi Indonesia"
        description="Hubungi Yayasan Satu Visi Bagi Indonesia untuk informasi lebih lanjut, donasi, atau pertanyaan lainnya."
      />
      <Navbar />
      <Contact />
      <Footer />
    </>
  )
}
