import Tour from '../../components/services/development/Tour'

export const metadata = {
  title: 'Tourism Website Development | Travel & Tour Booking Websites',
  description: 'We build tourism and travel websites for agencies, tour guides, and hotels. Tour catalogs, booking systems, Google Maps, and online payments — everything your travel business needs.',
  keywords: 'tourism website development, travel website, tour booking website, hotel website, travel agency website, tour operator website',
  alternates: {
    canonical: 'https://apollocreations.net/tourism-web-development',
    languages: {
      'en': 'https://apollocreations.net/tourism-web-development',
      'ka': 'https://apollocreations.net/ka/tourism-web-development',
    },
  },
  openGraph: {
    title: 'Tourism Website Development | Travel & Tour Booking Websites',
    description: 'We build tourism and travel websites for agencies, tour guides, and hotels. Tour catalogs, booking systems, and online payments.',
    url: 'https://apollocreations.net/tourism-web-development',
    siteName: 'Apollo Creations',
    locale: 'en_US',
    type: 'website',
  },
}

export default function TourPage() {
  return <Tour />
}