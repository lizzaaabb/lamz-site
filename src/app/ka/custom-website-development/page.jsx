import Custom from '../../../components/services/development/Custom'

export const metadata = {
  title: 'ინდივიდუალური საიტის დამზადება | Apollo Creations',
  description:
    'ინდივიდუალური ვებსაიტის შექმნა თბილისში — Next.js ტექნოლოგიაზე, სრულად მორგებული დიზაინი, SEO ოპტიმიზაცია და ძლიერი ფუნქციონალი. Custom ვებ საიტი თქვენი ბიზნესის სპეციფიკისთვის.',
  keywords: [
    'ინდივიდუალური საიტის დამზადება',
    'custom ვებსაიტის შექმნა',
    'საიტის დამზადება',
    'საიტის დამზადება თბილისი',
    'საიტის აწყობა',
    'ვებგვერდის შექმნა',
    'ვებ საიტის დამზადება',
    'საიტის გაკეთება',
    'custom website development Georgia',
    'website development Tbilisi',
    'Apollo Creations',
  ],
  alternates: {
    canonical: 'https://apollocreations.net/custom-website-development',
    languages: {
      en: 'https://apollocreations.net/custom-website-development',
      ka: 'https://apollocreations.net/ka/custom-website-development',
    },
  },
  openGraph: {
    title: 'ინდივიდუალური საიტის დამზადება | Apollo Creations',
    description:
      'Custom ვებსაიტის შექმნა — სრულად მორგებული დიზაინი, Next.js, SEO. ვებ სტუდია თბილისი. Apollo Creations.',
    url: 'https://apollocreations.net/custom-website-development',
    siteName: 'Apollo Creations',
    locale: 'ka_GE',
    type: 'website',
  },
}

export default function CustomPage() {
  return <Custom />
}