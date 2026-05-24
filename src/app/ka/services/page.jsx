import Services from '../../../components/Services'

export const metadata = {
  title: 'სერვისები | Apollo Creations',
  description:
    'Apollo Creations — ვებ გვერდის დამზადება და ბრენდინგი თბილისში. თანამედროვე, სწრაფი და SEO ოპტიმიზებული ვებსაიტები და ძლიერი ბრენდ იდენტობა თქვენი ბიზნესისთვის.',
  keywords: [
    'ვებ გვერდის დამზადება',
    'ბრენდინგი საქართველო',
    'ვებსაიტის შექმნა თბილისი',
    'ლოგოს შექმნა',
    'ბრენდ იდენტობა',
    'ციფრული სააგენტო თბილისი',
    'web development Georgia',
    'branding Tbilisi',
    'Apollo Creations სერვისები',
  ],
  alternates: {
    canonical: 'https://apollocreations.net/services',
    languages: {
      en: 'https://apollocreations.net/services',
      ka: 'https://apollocreations.net/ka/services',
    },
  },
  openGraph: {
    title: 'სერვისები | Apollo Creations',
    description:
      'ვებ გვერდის დამზადება და ბრენდინგი — Apollo Creations. ციფრული სააგენტო თბილისი.',
    url: 'https://apollocreations.net/ka/services',
    siteName: 'Apollo Creations',
    locale: 'ka_GE',
    type: 'website',
  },
}

export default function ServicesPage() {
  return <Services />
}