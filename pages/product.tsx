import '../app/globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Product from "@/components/Product";
import Seo from "@/components/Seo";



export default function Home() {
  return (
    <>
      <Seo title="Products" description="Explore our books and publications." />
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
