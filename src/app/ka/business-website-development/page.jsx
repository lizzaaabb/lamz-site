import BusinessWeb from '../../../components/services/development/BusinessWeb'

export const metadata = {
  title: 'ბიზნეს ვებსაიტის შექმნა | Apollo Creations',
  description:
    'პროფესიონალური ბიზნეს ვებსაიტის შექმნა თბილისში — თანამედროვე დიზაინით, სწრაფი ჩატვირთვით და SEO ოპტიმიზაციით. Next.js ტექნოლოგიაზე დამზადებული ვებსაიტები, რომლებიც რეალურ შედეგებს იძლევა.',
  keywords: [
    'საიტის დამზადება',
    'საიტის დამზადება თბილისი',
    'ბიზნეს ვებსაიტის შექმნა',
    'კორპორატიული ვებსაიტი',
    'ვებ სტუდია საქართველო',
    'ვებსაიტის შექმნა',
    'საიტის აწყობა',
    'business website development Georgia',
    'web design Tbilisi',
    'Apollo Creations',
  ],
  alternates: {
    canonical: 'https://apollocreations.net/business-website-development',
    languages: {
      en: 'https://apollocreations.net/business-website-development',
      ka: 'https://apollocreations.net/ka/business-website-development',
    },
  },
  openGraph: {
    title: 'ბიზნეს ვებსაიტის შექმნა | Apollo Creations',
    description:
      'პროფესიონალური ბიზნეს ვებსაიტის შექმნა — თანამედროვე დიზაინი, სწრაფი ჩატვირთვა, SEO ოპტიმიზაცია. ვებ სტუდია თბილისი.',
    url: 'https://apollocreations.net/business-website-development',
    siteName: 'Apollo Creations',
    locale: 'ka_GE',
    type: 'website',
  },
}

export default function BusinessWebPage() {
  return <BusinessWeb />
}