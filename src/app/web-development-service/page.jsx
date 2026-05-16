import WebDevelopment from '../../components/services/WebDevelopment'

export const metadata = {
  title: 'Web Development Services | Custom Websites & Web Applications',
  description: 'We build professional websites and web applications for businesses of all sizes. Corporate websites, e-commerce stores, real estate platforms, car rental systems, tourism websites, and fully custom web solutions.',
  keywords: 'web development services, website development, custom website, corporate website, ecommerce development, real estate website, car rental website, tourism website, web application development',
  alternates: {
    canonical: 'https://apollocreations.net/web-development-service',
    languages: {
      'en': 'https://apollocreations.net/web-development-service',
      'ka': 'https://apollocreations.net/ka/web-development-service',
    },
  },
  openGraph: {
    title: 'Web Development Services | Custom Websites & Web Applications',
    description: 'We build professional websites and web applications for businesses of all sizes. Corporate websites, e-commerce stores, real estate platforms, and fully custom web solutions.',
    url: 'https://apollocreations.net/web-development-service',
    siteName: 'Apollo Creations',
    locale: 'en_US',
    type: 'website',
  },
}

export default function WebDevelopmentPage() {
  return <WebDevelopment />
}