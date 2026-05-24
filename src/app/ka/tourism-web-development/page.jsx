import Tour from '../../../components/services/development/Tour'

export const metadata = {
  title: 'ტურისტული ვებსაიტის დამზადება | Apollo Creations',
  description:
    'ტურისტული ვებსაიტის დამზადება თბილისში — ტურების კატალოგი, ჯავშნების სისტემა, SEO ოპტიმიზაცია. Next.js ტექნოლოგიაზე. ინფორმაციული საიტი 1499₾-დან, ჯავშნებით 2299₾-დან.',
  keywords: [
    'ტურისტული ვებსაიტის დამზადება',
    'ტურისტული საიტის შექმნა',
    'ტურისტული ვებსაიტის შექმნა',
    'სამოგზაურო საიტის დამზადება',
    'სასტუმროს ვებსაიტი',
    'ტური საიტი საქართველო',
    'tourism website development Georgia',
    'travel website Tbilisi',
    'Apollo Creations',
  ],
  alternates: {
    canonical: 'https://apollocreations.net/tourism-web-development',
    languages: {
      en: 'https://apollocreations.net/tourism-web-development',
      ka: 'https://apollocreations.net/ka/tourism-web-development',
    },
  },
  openGraph: {
    title: 'ტურისტული ვებსაიტის დამზადება | Apollo Creations',
    description:
      'ტურისტული საიტის შექმნა — ტურების კატალოგი, ჯავშნები, SEO. Next.js. ვებ სტუდია თბილისი.',
    url: 'https://apollocreations.net/ka/tourism-web-development',
    siteName: 'Apollo Creations',
    locale: 'ka_GE',
    type: 'website',
  },
}

export default function TourPage() {
  return <Tour />
}