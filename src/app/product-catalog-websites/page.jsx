import Cat from '../../components/services/development/Cat'

export const metadata = {
  title: 'Online Catalog Website Development | Product Catalog Without Payments',
  description: 'We build online catalog websites where products can be browsed, filtered, and organized by category — without an online payment system. Perfect for showrooms, brands, and distributors.',
  keywords: 'online catalog website, product catalog website development, showroom website, catalog without payments, product showcase website',
  openGraph: {
    title: 'Online Catalog Website Development | Product Catalog Without Payments',
    description: 'We build online catalog websites where products can be browsed, filtered, and organized by category — without an online payment system.',
    type: 'website',
  },
}

export default function CatPage() {
  return <Cat />
}