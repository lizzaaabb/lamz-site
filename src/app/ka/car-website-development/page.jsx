import Car from '../../../components/services/development/Car'

export const metadata = {
  title: 'მანქანების ვებსაიტის შექმნა | Apollo Creations',
  description:
    'პროფესიონალური ავტო ვებსაიტის შექმნა თბილისში — ავტოიმპორტის, ავტოდილერის და მანქანების გაქირავების საიტები. Next.js ტექნოლოგიაზე, SEO ოპტიმიზაციით და ონლაინ კატალოგით.',
  keywords: [
    'მანქანების ვებსაიტის შექმნა',
    'ავტოიმპორტის საიტის დამზადება',
    'ავტო დილერის საიტის დამზადება',
    'მანქანების გაქირავების ვებსაიტი',
    'ავტო ვებ საიტი საქართველო',
    'car website development Georgia',
    'auto dealer website Tbilisi',
    'car import website Georgia',
    'Apollo Creations',
    'საიტის დამზადება თბილისი',
  ],
  alternates: {
    canonical: 'https://apollocreations.net/car-website-development',
    languages: {
      en: 'https://apollocreations.net/car-website-development',
      ka: 'https://apollocreations.net/ka/car-website-development',
    },
  },
  openGraph: {
    title: 'მანქანების ვებსაიტის შექმნა | Apollo Creations',
    description:
      'ავტო ვებსაიტის შექმნა — ავტოიმპორტი, ავტოდილერი, გაქირავება. თანამედროვე დიზაინი, კატალოგი, SEO. ვებ სტუდია თბილისი.',
    url: 'https://apollocreations.net/car-website-development',
    siteName: 'Apollo Creations',
    locale: 'ka_GE',
    type: 'website',
  },
}

export default function CarPage() {
  return <Car />
}