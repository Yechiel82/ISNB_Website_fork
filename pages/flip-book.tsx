import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const FlipBook = dynamic(() => import('@/components/FlipBook'), { ssr: false });

export default function FlipBookPage() {
  return (
    <>
      <Navbar />
      <FlipBook />
      <Footer />
    </>
  );
}
