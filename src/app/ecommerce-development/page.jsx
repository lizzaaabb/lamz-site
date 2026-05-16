import Ecommerce from '../../components/services/development/Ecommerce'

export const metadata = {
  title: 'E-Commerce Website Development | Online Store Development',
  description: 'We build high-converting online stores with secure payments, product catalogs, and admin panels. Custom e-commerce solutions built for growth.',
  keywords: 'ecommerce development, online store development, online shop, ecommerce website, custom online store',
  alternates: {
    canonical: 'https://apollocreations.net/ecommerce-development',
    languages: {
      'en': 'https://apollocreations.net/ecommerce-development',
      'ka': 'https://apollocreations.net/ka/ecommerce-development',
    },
  },
  openGraph: {
    title: 'E-Commerce Website Development | Online Store Development',
    description: 'We build high-converting online stores with secure payments, product catalogs, and admin panels.',
    url: 'https://apollocreations.net/ecommerce-development',
    siteName: 'Apollo Creations',
    locale: 'en_US',
    type: 'website',
  },
}

export default function EcommercePage() {
  return <Ecommerce />
}