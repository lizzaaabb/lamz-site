import Services from '../../components/Services'

export const metadata = {
  title: 'Our Services | Web Development, Branding & Digital Marketing',
  description: 'We offer professional web development, branding, and digital marketing services. From corporate websites to e-commerce stores, SEO, and social media advertising — everything your business needs to grow online.',
  keywords: 'web development services, branding services, digital marketing, SEO, Facebook ads, Google ads, online store development, corporate website, custom web development',
  alternates: {
    canonical: 'https://apollocreations.net/services',
    languages: {
      'en': 'https://apollocreations.net/services',
      'ka': 'https://apollocreations.net/ka/services',
    },
  },
  openGraph: {
    title: 'Our Services | Web Development, Branding & Digital Marketing',
    description: 'We offer professional web development, branding, and digital marketing services. From corporate websites to e-commerce stores, SEO, and social media advertising.',
    url: 'https://apollocreations.net/services',
    siteName: 'Apollo Creations',
    locale: 'en_US',
    type: 'website',
  },
}

export default function ServicesPage() {
  return <Services />
}