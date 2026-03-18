import React from 'react';

export const SectionSchemas = () => {
  const baseUrl = 'https://www.arcobalenosenzaglutine.it';

  // FAQ Schema - Calcolatore Buono
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quanto vale il buono per prodotti senza glutine in Emilia Romagna?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Il valore mensile varia per genere ed età: uomini 18-59 anni ricevono 110€, donne 90€. Per i bambini 0-5 anni è 56€ per entrambi i generi. Per i ragazzi 14-17 anni: maschi 124€, femmine 99€. Per gli over 60: uomini 89€, donne 75€."
        }
      },
      {
        "@type": "Question",
        "name": "Dove si trova il negozio Arcobaleno Senza Glutine?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ci troviamo in Via Montanara 13/g, 40020 Casalfiumanese (BO), a soli 10 minuti da Imola. Siamo aperti dal lunedì al sabato (escluso martedì) dalle 09:30 alle 13:00 e dalle 15:30 alle 19:30."
        }
      },
      {
        "@type": "Question",
        "name": "Quali prodotti senza glutine vendete?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Offriamo un'ampia selezione di prodotti senza glutine: pane fresco, croissant artigianali, torte di compleanno personalizzate, farine, mix pronti, pasta, e prodotti delle migliori marche come Schär, Nutrifree, Farabella, Massimo Zero e molti altri."
        }
      },
      {
        "@type": "Question",
        "name": "Accettate i buoni per celiaci della tessera sanitaria?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sì, accettiamo i buoni per celiaci caricati sulla tessera sanitaria dell'Emilia Romagna. Puoi utilizzare l'intero importo mensile nel nostro negozio."
        }
      }
    ]
  };

  // AggregateRating Schema - Recensioni
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Arcobaleno Senza Glutine",
    "@id": `${baseUrl}/#reviews`,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "3",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Marco L." },
        "datePublished": "2026-02-01",
        "reviewBody": "Vasto assortimento e personale gentilissimo. Finalmente un posto dove trovo tutto quello che mi serve senza stress.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Elena G." },
        "datePublished": "2026-02-15",
        "reviewBody": "Ottimo supermercato per celiaci, pane fresco e panettoni squisiti. Una qualità superiore rispetto a ciò che si trova in farmacia.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Roberto F." },
        "datePublished": "2026-01-15",
        "reviewBody": "Il proprietario è preparatissimo e sa consigliarti al meglio sui mix di farine. Consigliatissimo per chi ha appena ricevuto la diagnosi.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
      }
    ]
  };

  // BreadcrumbList Schema - Navigazione sezioni
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl },
      { "@type": "ListItem", "position": 2, "name": "Chi Siamo", "item": `${baseUrl}/#chi-siamo` },
      { "@type": "ListItem", "position": 3, "name": "Il Metodo", "item": `${baseUrl}/#esperienza` },
      { "@type": "ListItem", "position": 4, "name": "Perché Noi", "item": `${baseUrl}/#perche-noi` },
      { "@type": "ListItem", "position": 5, "name": "Dicono di Noi", "item": `${baseUrl}/#recensioni` },
      { "@type": "ListItem", "position": 6, "name": "Prodotti", "item": `${baseUrl}/#novita` },
      { "@type": "ListItem", "position": 7, "name": "Calcola Buono", "item": `${baseUrl}/#calcolatore` },
      { "@type": "ListItem", "position": 8, "name": "Dove Trovarci", "item": `${baseUrl}/#dove-siamo` }
    ]
  };

  // WebSite Schema with SearchAction
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Arcobaleno Senza Glutine",
    "url": baseUrl,
    "description": "Il miglior negozio di prodotti senza glutine a Imola e Casalfiumanese. Pane fresco, dolci artigianali e consulenza esperta per celiaci.",
    "inLanguage": "it-IT"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
};
