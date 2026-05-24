import Estate from '../../../components/services/development/Estate'

export const metadata = {
  title: 'უძრავი ქონების ვებსაიტის შექმნა | Apollo Creations',
  description:
    'უძრავი ქონების სააგენტოს ვებსაიტის შექმნა თბილისში — ობიექტების კატალოგი, ძებნა და ფილტრაცია, Google Maps, SEO ოპტიმიზაცია. Next.js ტექნოლოგიაზე, 2499₾-დან.',
  keywords: [
    'უძრავი ქონების ვებსაიტის შექმნა',
    'უძრავი ქონების საიტის დამზადება',
    'სააგენტოს ვებსაიტი',
    'უძრავი ქონების სააგენტო საიტი',
    'real estate website Georgia',
    'real estate website development Tbilisi',
    'უძრავი ქონების საიტი თბილისი',
    'Apollo Creations',
  ],
  alternates: {
    canonical: 'https://apollocreations.net/real-estate-development',
    languages: {
      en: 'https://apollocreations.net/real-estate-development',
      ka: 'https://apollocreations.net/ka/real-estate-development',
    },
  },
  openGraph: {
    title: 'უძრავი ქონების ვებსაიტის შექმნა | Apollo Creations',
    description:
      'უძრავი ქონების სააგენტოს საიტი — კატალოგი, ფილტრაცია, Maps, SEO. Next.js. ვებ სტუდია თბილისი.',
    url: 'https://apollocreations.net/real-estate-development',
    siteName: 'Apollo Creations',
    locale: 'ka_GE',
    type: 'website',
  },
}

export default function EstatePage() {
  return <Estate />
}