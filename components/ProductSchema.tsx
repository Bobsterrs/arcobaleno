import React from 'react';

export const ProductSchema = () => {
  const baseUrl = 'https://www.arcobalenosenzaglutine.it';

  const products = [
    {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "Pane Fresco Senza Glutine",
      "image": `${baseUrl}/img/rosetta.jpeg`,
      "description": "Pane fresco artigianale senza glutine, sfornato quotidianamente. Croccante fuori e morbido dentro.",
      "brand": {
        "@type": "Brand",
        "name": "Gloria Senza Glutine"
      },
      "offers": {
        "@type": "Offer",
        "url": `${baseUrl}/#novita`,
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStoreOnly",
        "itemCondition": "https://schema.org/NewCondition"
      }
    },
    {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "Croissant Artigianali Senza Glutine",
      "image": `${baseUrl}/img/croissant.jpeg`,
      "description": "Cornetti e croissant artigianali senza glutine, ideali per una colazione golosa e sicura.",
      "brand": {
        "@type": "Brand",
        "name": "Gloria Senza Glutine"
      },
      "offers": {
        "@type": "Offer",
        "url": `${baseUrl}/#novita`,
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStoreOnly",
        "itemCondition": "https://schema.org/NewCondition"
      }
    },
    {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "Torte di Compleanno Senza Glutine",
      "image": `${baseUrl}/img/torta.jpeg`,
      "description": "Torte personalizzate senza glutine per ogni occasione. Belle da vedere e ottime da mangiare.",
      "brand": {
        "@type": "Brand",
        "name": "Gloria Senza Glutine"
      },
      "offers": {
        "@type": "Offer",
        "url": `${baseUrl}/#novita`,
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStoreOnly",
        "itemCondition": "https://schema.org/NewCondition"
      }
    }
  ];

  return (
    <>
      {products.map((product, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(product) }}
        />
      ))}
    </>
  );
};
