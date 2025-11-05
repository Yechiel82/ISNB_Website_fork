import type { AppProps } from 'next/app';
import '../app/globals.css';
// Note: Pages already include their own Navbar/Footer, so this wrapper is minimal.

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
