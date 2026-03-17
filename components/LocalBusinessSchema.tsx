import React from 'react';

export const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Arcobaleno Senza Glutine",
    "image": "https://images.unsplash.com/photo-1555507036-ab1f40ce88f4?q=80&w=2626&auto=format&fit=crop",
    "@id": "http://localhost:3000/#localbusiness",
    "url": "http://localhost:3000",
    "telephone": "+393884043388",
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
    "description": "Il miglior negozio di prodotti senza glutine a Casalfiumanese vicino a Imola. Ampia scelta di prodotti e consulenza esperta per celiaci."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
