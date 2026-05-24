import Logo from '../../components/services/branding/Logo'

export const metadata = {
  title: 'Logo Design Service | Apollo Creations',
  description:
    'Professional logo design built to work across websites, social media, and print. Includes main logo, variations, black & white versions, and export files for web and print.',
  keywords: [
    'logo design Georgia',
    'professional logo design Tbilisi',
    'logo design service',
    'brand logo Georgia',
    'logo for business Georgia',
    'logo design agency Tbilisi',
    'Apollo Creations logo design',
  ],
  alternates: {
    canonical: 'https://apollocreations.net/logo-design',
    languages: {
      en: 'https://apollocreations.net/logo-design',
      ka: 'https://apollocreations.net/ka/logo-design',
    },
  },
  openGraph: {
    title: 'Logo Design Service | Apollo Creations',
    description:
      'A clean and professional logo designed to work across websites, social media, and print — with variations, black & white versions, and full export files.',
    url: 'https://apollocreations.net/logo-design',
    siteName: 'Apollo Creations',
    locale: 'en_US',
    type: 'website',
  },
}

export default function LogoPage() {
  return <Logo />
}