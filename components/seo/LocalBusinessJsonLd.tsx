export function LocalBusinessJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Arcobaleno Senza Glutine',
    description: 'Negozio specializzato in prodotti senza glutine per celiaci a Casalfiumanese, a soli 10 minuti da Imola.',
    url: 'https://www.arcobalenosenzaglutine.it',
    telephone: '+393884043388',
    image: 'https://www.arcobalenosenzaglutine.it/logo.png',
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Via Montanara 13/g',
      addressLocality: 'Casalfiumanese',
      postalCode: '40020',
      addressRegion: 'BO',
      addressCountry: 'IT',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 44.2805,
      longitude: 11.6231,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:30',
        closes: '13:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '15:30',
        closes: '19:30',
      },
    ],
    serviceArea: [
      { '@type': 'City', name: 'Casalfiumanese' },
      { '@type': 'City', name: 'Imola' },
      { '@type': 'City', name: 'Fontanelice' },
      { '@type': 'City', name: 'Borgo Tossignano' },
      { '@type': 'City', name: 'Castel del Rio' },
      { '@type': 'City', name: 'Castel San Pietro Terme' },
    ],
    hasMap: 'https://maps.google.com/?q=Via+Montanara+13g+Casalfiumanese',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
