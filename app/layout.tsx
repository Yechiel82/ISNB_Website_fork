// import type { Metadata } from 'next';

import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// export const metadata: Metadata = {
//   title: 'Yayasan Satu Visi Bagi Indonesia',
//   description: 'Yayasan Satu Visi Bagi Indonesia adalah lembaga nirlaba, nonpolitik, dan independen dari partai atau golongan manapun. Memfokuskan pada bidang keagamaan, sosial, dan kemanusiaan, yayasan ini bertujuan membangun fondasi kuat dalam Iman Kristen untuk menghadapi tantangan hidup. Didirikan oleh Pdt. Erika Fanny, S.Th., M.Min., dan Pdt. Arianto, S.E., S.Th., M.Min.</p>',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
