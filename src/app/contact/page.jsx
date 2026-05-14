import Contact from '../../components/Contact'

export const metadata = {
  title: 'Contact Us — Web Design & Development Agency',
  description: 'Get in touch to order a website, branding or digital marketing. Fast, professional web development agency. Call or email us today.',
  keywords: 'contact web developer, order a website, hire web designer, website development agency, web design Georgia, Next.js developer, website creation, build a website',
  alternates: {
    canonical: 'https://apollocreations.net/contact',
    languages: {
      'en': 'https://apollocreations.net/contact',
      'ka': 'https://apollocreations.net/ka/contact',
    },
  },
  openGraph: {
    title: 'Contact Us — Web Design & Development Agency',
    description: 'Get in touch to order a website, branding or digital marketing.',
    url: 'https://apollocreations.net/contact',
    siteName: 'Apollo Creations',
    locale: 'en_US',
    type: 'website',
  },
}

export default function ContactPage() {
  return <Contact />
}