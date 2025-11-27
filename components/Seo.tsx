import Head from 'next/head';

interface SeoProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const Seo: React.FC<SeoProps> = ({
  title = 'Yayasan Satu Visi Bagi Indonesia',
  description = 'Yayasan Satu Visi Bagi Indonesia adalah lembaga nirlaba, nonpolitik, dan independen. Memfokuskan pada bidang keagamaan, sosial, dan kemanusiaan.',
  keywords = 'Yayasan, Satu Visi, Indonesia, Kristen, Sosial, Kemanusiaan, Nirlaba',
  image = '/satuvisibagiindonesia-removebg.png',
  url,
}) => {
  const siteTitle = title === 'Yayasan Satu Visi Bagi Indonesia' ? title : `${title} | Yayasan Satu Visi Bagi Indonesia`;

  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      {url && <meta property="og:url" content={url} />}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
};

export default Seo;
