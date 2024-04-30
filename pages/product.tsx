import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import '../app/globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Product from "@/components/Product";



export default function Home() {
  return (
    <>
      <Navbar />
      <Product />
      <Footer />
    </>
    
  )
} 

// isbn_website_vercel/pages/product.tsx

// isbn_website_vercel/pages/product.tsx

// import Link from 'next/link';
// import { products } from '../constants'; // Import product data from constants

// export default function ProductPage() {
//   return (
//     <div>
//       <h1>Products</h1>
//       <ul>
//         {products.map(product => (
//           <li key={product.id}>
//             {/* Generate dynamic link to each product page */}
//             <Link href={`/products/${product.id}`}>
//               {/* Use a div or other non-link element as the child */}
//               <div>{product.name}</div>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
