import Contact from '../../../components/Contact'

export const metadata = {
  title: 'კონტაქტი — ვებსაიტის დამზადება და შექმნა',
  description: 'დაგვიკავშირდით ვებსაიტის შეკვეთისთვის, ბრენდინგისთვის ან ციფრული მარკეტინგისთვის. პროფესიონალური ვებ დეველოპმენტი საქართველოში.',
  keywords: 'ვებსაიტის დამზადება, ვებსაიტის შექმნა, ვებსაიტის შეკვეთა, ვებ დეველოპერი, საიტის დამზადება, საიტის შექმნა, ვებ დიზაინი, Next.js დეველოპერი, ვებ სააგენტო თბილისი, ვებ სააგენტო საქართველო',
  alternates: {
    canonical: 'https://apollocreations.net/ka/contact',
    languages: {
      'en': 'https://apollocreations.net/contact',
      'ka': 'https://apollocreations.net/ka/contact',
    },
  },
  openGraph: {
    title: 'კონტაქტი — ვებსაიტის დამზადება და შექმნა',
    description: 'დაგვიკავშირდით ვებსაიტის შეკვეთისთვის, ბრენდინგისთვის ან ციფრული მარკეტინგისთვის.',
    url: 'https://apollocreations.net/ka/contact',
    siteName: 'Apollo Creations',
    locale: 'ka_GE',
    type: 'website',
  },
}

export default function ContactPage() {
  return <Contact />
}