import Full from '../../components/services/branding/Full'

export const metadata = {
  title: 'Full Brandbook Service | Apollo Creations',
  description:
    'A complete professional brand identity system — full guidelines, logo rules, typography hierarchy, color system, photography direction, and a clear identity for future designers and developers.',
  keywords: [
    'full brandbook Georgia',
    'professional brand guidelines',
    'complete brand identity system',
    'brand style guide Tbilisi',
    'scalable brand identity',
    'branding for websites Georgia',
    'Apollo Creations brandbook',
  ],
  alternates: {
    canonical: 'https://apollocreations.net/full-brandbook',
    languages: {
      en: 'https://apollocreations.net/full-brandbook',
      ka: 'https://apollocreations.net/ka/full-brandbook',
    },
  },
  openGraph: {
    title: 'Full Brandbook Service | Apollo Creations',
    description:
      'A polished, scalable brand identity system covering websites, social media, print, and marketing — built for long-term consistency.',
    url: 'https://apollocreations.net/full-brandbook',
    siteName: 'Apollo Creations',
    locale: 'en_US',
    type: 'website',
  },
}

export default function BrandPage() {
  return <Full />
}