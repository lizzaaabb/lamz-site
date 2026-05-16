import Car from '../../components/services/development/Car'

export const metadata = {
  title: 'Automotive Website Development | Car Rental, Sales & Auto Parts',
  description: 'We build automotive websites for car rentals, vehicle dealerships, and auto parts stores. Fleet management, booking systems, filtering, and online payments — built for the auto industry.',
  keywords: 'car rental website development, automotive website, car dealership website, auto parts online store, vehicle sales website, car booking system',
  alternates: {
    canonical: 'https://apollocreations.net/car-website-development',
    languages: {
      'en': 'https://apollocreations.net/car-website-development',
      'ka': 'https://apollocreations.net/ka/car-website-development',
    },
  },
  openGraph: {
    title: 'Automotive Website Development | Car Rental, Sales & Auto Parts',
    description: 'We build automotive websites for car rentals, vehicle dealerships, and auto parts stores. Fleet management, booking systems, and online payments.',
    url: 'https://apollocreations.net/car-website-development',
    siteName: 'Apollo Creations',
    locale: 'en_US',
    type: 'website',
  },
}

export default function CarPage() {
  return <Car />
}