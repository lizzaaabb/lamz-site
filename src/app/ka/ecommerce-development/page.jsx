import Ecommerce from '../../../components/services/development/Ecommerce'

export const metadata = {
  title: 'ონლაინ მაღაზიის დამზადება | Apollo Creations',
  description:
    'ონლაინ მაღაზიის დამზადება თბილისში — Next.js ტექნოლოგიაზე, ონლაინ გადახდებით (BOG/TBC), ადმინ პანელით და SEO ოპტიმიზაციით. ინტერნეტ მაღაზიის შექმნა 2499₾-დან.',
  keywords: [
    'ონლაინ მაღაზიის დამზადება',
    'ინტერნეტ მაღაზიის შექმნა',
    'ონლაინ მაღაზიის შექმნა',
    'ინტერნეტ მაღაზიის დამზადება',
    'ელექტრონული მაღაზიის შექმნა',
    'e-commerce საიტის დამზადება',
    'ონლაინ მაღაზია საქართველო',
    'ონლაინ მაღაზია თბილისი',
    'online store development Georgia',
    'ecommerce website Tbilisi',
    'Apollo Creations',
  ],
  alternates: {
    canonical: 'https://apollocreations.net/ecommerce-development',
    languages: {
      en: 'https://apollocreations.net/ecommerce-development',
      ka: 'https://apollocreations.net/ka/ecommerce-development',
    },
  },
  openGraph: {
    title: 'ონლაინ მაღაზიის დამზადება | Apollo Creations',
    description:
      'ინტერნეტ მაღაზიის შექმნა — კატალოგი, კალათა, ონლაინ გადახდა, SEO. Next.js ტექნოლოგია. ვებ სტუდია თბილისი.',
    url: 'https://apollocreations.net/ecommerce-development',
    siteName: 'Apollo Creations',
    locale: 'ka_GE',
    type: 'website',
  },
}

export default function EcommercePage() {
  return <Ecommerce />
}