import '../app/globals.css'
import BookDetail from "@/components/BookDetail";
import { BOOKS } from "@/constants/books";

export default function Home() {
  const product = BOOKS.find(b => b.id === '7-Pilar-Kekuatan-Gereja');

  if (!product) {
    return <div>Book not found</div>;
  }

  return <BookDetail product={product} />;
}
