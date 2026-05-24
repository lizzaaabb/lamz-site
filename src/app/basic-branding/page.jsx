import Basic from '../../components/services/branding/Basic'

export const metadata = {
  title: 'Basic Branding Service | Apollo Creations',
  description:
    'Build a professional and cohesive brand identity from the ground up. Our Basic Branding package includes logo design, color palette, font system, brand guidelines, and visual direction for your online presence.',
  keywords: [
    'basic branding package',
    'brand identity design Georgia',
    'logo and branding Tbilisi',
    'brand guidelines design',
    'visual identity for business',
    'branding service Apollo Creations',
    'small business branding Georgia',
  ],
  alternates: {
    canonical: 'https://apollocreations.net/basic-branding',
    languages: {
      en: 'https://apollocreations.net/basic-branding',
      ka: 'https://apollocreations.net/ka/basic-branding',
    },
  },
  openGraph: {
    title: 'Basic Branding Service | Apollo Creations',
    description:
      'A complete visual foundation for businesses that want a professional and cohesive online presence — logo, colors, fonts, and brand guidelines.',
    url: 'https://apollocreations.net/basic-branding',
    siteName: 'Apollo Creations',
    locale: 'en_US',
    type: 'website',
  },
}

export default function BasicPage() {
  return <Basic />
}