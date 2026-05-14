import Blog2Page from '../../../components/Blog2Page'

export const metadata = {
  title: 'ვორდპრესი VS Next.js - 5 მიზეზი თუ რატომ არის Next.js უკეთესი თქვენი ბიზნესისთვის',
  description:
    'ვორდპრესი თუ Next.js? გაიგეთ 5 მთავარი მიზეზი, რის გამოც Next.js უკეთეს შედეგებს იძლევა სისწრაფის, SEO-სთვის და ბიზნესის მუდმივი განვითარებისთვის.',
  keywords: [
    'ვორდპრესი vs Next.js',
    'Next.js საქართველო',
    'საიტის დამზადება Next.js',
    'ვებსაიტის სისწრაფე',
    'SEO ოპტიმიზაცია',
    'Apollo Creations',
  ],
  alternates: {
    canonical: 'https://apollocreations.net/ka/wordpress-vs-nextjs',
    languages: {
      en: 'https://apollocreations.net/wordpress-vs-nextjs',
      ka: 'https://apollocreations.net/ka/wordpress-vs-nextjs',
    },
  },
  openGraph: {
    title: 'ვორდპრესი VS Next.js - 5 მიზეზი თუ რატომ არის Next.js უკეთესი',
    description:
      'ვორდპრესი თუ Next.js? სისწრაფე, SEO, მასშტაბურობა — რომელია უკეთესი თქვენი ბიზნესისთვის?',
    url: 'https://apollocreations.net/ka/wordpress-vs-nextjs',
    siteName: 'Apollo Creations',
    locale: 'ka_GE',
    type: 'article',
    publishedTime: '2026-02-16',
  },
}

export default function KaBlogPost2Page() {
  return <Blog2Page />
}