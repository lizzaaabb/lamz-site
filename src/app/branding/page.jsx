import Branding from '../../components/services/Branding'

export const metadata = {
  title: 'Branding Services | Apollo Creations',
  description:
    'From logo design to a full brandbook — we build strong, professional brand identities for businesses in Georgia. Explore our branding packages and find the right fit for your business.',
  keywords: [
    'branding services Georgia',
    'logo design Tbilisi',
    'brand identity agency Georgia',
    'full brandbook design',
    'visual identity Georgia',
    'branding agency Tbilisi',
    'Apollo Creations branding',
  ],
  alternates: {
    canonical: 'https://apollocreations.net/branding',
    languages: {
      en: 'https://apollocreations.net/branding',
      ka: 'https://apollocreations.net/ka/branding',
    },
  },
  openGraph: {
    title: 'Branding Services | Apollo Creations',
    description:
      'Logo design, basic branding, full brandbook and video production — professional brand identity services for businesses in Georgia.',
    url: 'https://apollocreations.net/branding',
    siteName: 'Apollo Creations',
    locale: 'en_US',
    type: 'website',
  },
}

export default function BrandingPage() {
  return <Branding />
}