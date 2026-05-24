import WebDevelopment from '../../../components/services/WebDevelopment'

export const metadata = {
  title: 'ვებ გვერდის დამზადება | Apollo Creations',
  description:
    'ვებ გვერდის დამზადება თბილისში — ბიზნეს საიტები, ონლაინ მაღაზიები, უძრავი ქონების, ტურისტული და ინდივიდუალური ვებ პლატფორმები. Next.js ტექნოლოგიაზე, SEO ოპტიმიზაციით.',
  keywords: [
    'ვებ გვერდის დამზადება',
    'საიტის დამზადება თბილისი',
    'ვებსაიტის შექმნა',
    'საიტის აწყობა',
    'ვებ სტუდია საქართველო',
    'web development Georgia',
    'website development Tbilisi',
    'Apollo Creations',
  ],
  alternates: {
    canonical: 'https://apollocreations.net/web-development-service',
    languages: {
      en: 'https://apollocreations.net/web-development-service',
      ka: 'https://apollocreations.net/ka/web-development-service',
    },
  },
  openGraph: {
    title: 'ვებ გვერდის დამზადება | Apollo Creations',
    description:
      'ვებ გვერდის დამზადება — ბიზნეს საიტი, ონლაინ მაღაზია, კატალოგი, ტურისტული საიტი. Next.js. ვებ სტუდია თბილისი.',
    url: 'https://apollocreations.net/ka/web-development-service',
    siteName: 'Apollo Creations',
    locale: 'ka_GE',
    type: 'website',
  },
}

export default function WebDevelopmentPage() {
  return <WebDevelopment />
}