import React from 'react';

export const LocalBusinessSchema = () => {
  const baseUrl = 'https://www.arcobalenosenzaglutine.it';

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Arcobaleno Senza Glutine",
    "image": `${baseUrl}/img/locale.jpeg`,
    "@id": `${baseUrl}/#localbusiness`,
    "url": baseUrl,
    "telephone": "+393884043388",
    "priceRange": "€€",
    "currenciesAccepted": "EUR",
    "paymentAccepted": "Contanti, Carte di credito, Tessera sanitaria celiaci",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via Montanara 13/g",
      "addressLocality": "Casalfiumanese",
      "addressRegion": "BO",
      "postalCode": "40020",
      "addressCountry": "IT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 44.30,
      "longitude": 11.60
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Imola",
        "sameAs": "https://it.wikipedia.org/wiki/Imola"
      },
      {
        "@type": "City",
        "name": "Casalfiumanese",
        "sameAs": "https://it.wikipedia.org/wiki/Casalfiumanese"
      },
      {
        "@type": "City",
        "name": "Bologna",
        "sameAs": "https://it.wikipedia.org/wiki/Bologna"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/arcobalenosenzaglutine/",
      "https://www.facebook.com/arcobalenosenzaglutine/"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:30",
        "closes": "13:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "15:30",
        "closes": "19:30"
      }
    ],
    "description": "Il miglior negozio di prodotti senza glutine a Casalfiumanese, a soli 10 minuti da Imola. Ampia scelta di prodotti senza glutine, pane fresco, dolci artigianali e consulenza esperta per celiaci e neodiagnosticati."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
