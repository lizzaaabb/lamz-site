import Estate from '../../components/services/development/Estate'

export const metadata = {
  title: 'Real Estate Website Development | Property Listing & Management',
  description: 'We build real estate websites for agencies, developers, and agents. Property listings, search filters, Google Maps, and lead capture - everything your agency needs.',
  keywords: 'real estate website development, property listing website, real estate platform, house rental website, property management website',
  openGraph: {
    title: 'Real Estate Website Development | Property Listing & Management',
    description: 'We build real estate websites for agencies, developers, and agents. Property listings, search filters, Google Maps, and lead capture.',
    type: 'website',
  },
}

export default function EstatePage() {
  return <Estate />
}