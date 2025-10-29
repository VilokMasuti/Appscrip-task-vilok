import { getProducts } from '@/actions/getProducts';
import Productlistingpage from '@/app/components/ProductListingPage/Product-listing-page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Discover Our Products | mettā muse - Premium Fashion & Accessories",
  description:
    "Explore our curated collection of premium fashion products, accessories, and lifestyle items. Shop customizable products with worldwide shipping. Find your perfect style at mettā muse.",
  keywords: "fashion, accessories, premium products, customizable fashion, online shopping, mettā muse",
  openGraph: {
    title: "Discover Our Products | mettā muse",
    description: "Explore our curated collection of premium fashion products and accessories.",
    type: "website",
  },
};

export default async function Page() {
  const products = await getProducts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Product Collection - mettā muse",
    description: "Discover our curated collection of premium products",
    url: "https://mettamuse.com/products",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: products.length,
      itemListElement: products.map((product: any, index: number) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Product",
          name: product.title,
          image: product.image,
          description: product.description,
          offers: {
            "@type": "Offer",
            price: product.price,
            priceCurrency: "USD",
          },
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Productlistingpage products={products} />
    </>
  );
}
