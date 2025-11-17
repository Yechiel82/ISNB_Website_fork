import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CvTesting = dynamic(() => import('@/components/CvTesting'), { ssr: false });

export default function CvTestingPage() {
  return (
    <>
      <Navbar />
      <CvTesting />
      <Footer />
    </>
  );
}
