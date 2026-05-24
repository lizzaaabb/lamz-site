import Cat from '../../../components/services/development/Cat'

export const metadata = {
  title: 'ონლაინ კატალოგის ვებსაიტის შექმნა | Apollo Creations',
  description:
    'ონლაინ კატალოგის ვებსაიტის შექმნა თბილისში — პროდუქციის კატალოგი, ფილტრაცია, ადმინ პანელი და SEO ოპტიმიზაცია. Next.js ტექნოლოგიაზე, 1499₾-დან.',
  keywords: [
    'ონლაინ კატალოგის შექმნა',
    'ონლაინ კატალოგის ვებსაიტი',
    'ციფრული კატალოგის დამზადება',
    'პროდუქციის კატალოგი საიტი',
    'კატალოგის საიტის დამზადება',
    'product catalog website Georgia',
    'online catalog development Tbilisi',
    'Apollo Creations',
  ],
  alternates: {
    canonical: 'https://apollocreations.net/product-catalog-websites',
    languages: {
      en: 'https://apollocreations.net/product-catalog-websites',
      ka: 'https://apollocreations.net/ka/product-catalog-websites',
    },
  },
  openGraph: {
    title: 'ონლაინ კატალოგის ვებსაიტის შექმნა | Apollo Creations',
    description:
      'ციფრული კატალოგის შექმნა — პროდუქციის კატეგორიები, ფილტრაცია, SEO. Next.js. ვებ სტუდია თბილისი.',
    url: 'https://apollocreations.net/product-catalog-websites',
    siteName: 'Apollo Creations',
    locale: 'ka_GE',
    type: 'website',
  },
}

export default function CatPage() {
  return <Cat />
}