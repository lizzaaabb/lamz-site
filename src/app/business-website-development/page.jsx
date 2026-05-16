import BusinessWeb from '../../components/services/development/BusinessWeb'

export const metadata = {
  title: 'Corporate Website Development | Professional Business Websites',
  description: 'We build professional corporate websites with modern design, SEO optimization, and fast loading speeds. Custom business websites tailored to your brand.',
  keywords: 'corporate website development, business website, professional website design, company website',
  alternates: {
    canonical: 'https://apollocreations.net/business-website-development',
    languages: {
      'en': 'https://apollocreations.net/business-website-development',
      'ka': 'https://apollocreations.net/ka/business-website-development',
    },
  },
  openGraph: {
    title: 'Corporate Website Development | Professional Business Websites',
    description: 'We build professional corporate websites with modern design, SEO optimization, and fast loading speeds.',
    url: 'https://apollocreations.net/business-website-development',
    siteName: 'Apollo Creations',
    locale: 'en_US',
    type: 'website',
  },
}

export default function BusinessWebPage() {
  return <BusinessWeb />
}