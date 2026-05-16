import Marketing from '../../components/services/Marketing'

export const metadata = {
  title: 'Digital Marketing Services | Facebook Ads, Google Ads & SEO',
  description: 'We offer full digital marketing services including Facebook & Instagram Ads, Google Ads, SEO optimization, Google Business setup, video production, and SEO blog writing.',
  keywords: 'digital marketing services, Facebook ads, Instagram ads, Google ads, PPC, SEO optimization, SEO blog writing, video production, Google Business setup',
  alternates: {
    canonical: 'https://apollocreations.net/digital-marketing',
    languages: {
      'en': 'https://apollocreations.net/digital-marketing',
      'ka': 'https://apollocreations.net/ka/digital-marketing',
    },
  },
  openGraph: {
    title: 'Digital Marketing Services | Facebook Ads, Google Ads & SEO',
    description: 'We offer full digital marketing services including Facebook & Instagram Ads, Google Ads, SEO optimization, Google Business setup, video production, and SEO blog writing.',
    url: 'https://apollocreations.net/digital-marketing',
    siteName: 'Apollo Creations',
    locale: 'en_US',
    type: 'website',
  },
}

export default function MarketingPage() {
  return <Marketing />
}