// // pages/products/[productId].tsx

// import { useRouter } from 'next/router';
// import { products } from '../../../../constants';

// export default function ProductPage({ product }) {
//   const router = useRouter();
//   const { productId } = router.query;

//   // Find the product with matching ID
//   const product = products.find(product => product.id === parseInt(productId));

//   // Render loading state if product data is being fetched
//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>{product.name}</h1>
//       <p>{product.description}</p>
//       <p>Price: {product.price}</p>
//       {/* Render other product details here */}
//     </div>
//   );
// }

// export async function getServerSideProps({ params }) {
//   // Fetch product data based on the productId parameter
//   const productId = params.productId;
//   // No need to fetch from an external API, just directly access the products array
//   return {
//     props: {
//       product: products.find(product => product.id === parseInt(productId)),
//     },
//   };
// }
// pages/products/[productId].tsx

// pages/products/[productId].tsx

// pages/products/[productId].tsx

import { useRouter } from 'next/router';
import { products } from '../../../../constants';

export default function ProductPage() {
  const router = useRouter();
  const { productId } = router.query;
  
  // Ensure productId is a string or provide a default value
  const productIdString = typeof productId === 'string' ? productId : '';

  // Find the product with matching ID
  const productItem = products.find(product => product.id === parseInt(productIdString));

  // Render loading state if product data is being fetched
  if (!productItem) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{productItem.name}</h1>
      <p>{productItem.description}</p>
      <p>Price: {productItem.price}</p>
      {/* Render other product details here */}
    </div>
  );
}

interface Params {
  productId: string;
}

export async function getServerSideProps({ params }: { params: Params }) {
  // Fetch product data based on the productId parameter
  const productId = params.productId;
  // Ensure productId is a string or provide a default value
  const productIdString = typeof productId === 'string' ? productId : '';

  // No need to fetch from an external API, just directly access the products array
  return {
    props: {
      product: products.find(product => product.id === parseInt(productIdString)),
    },
  };
}
