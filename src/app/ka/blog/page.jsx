import Blog from '../../../components/Blog'

export const metadata = {
  title: 'ბლოგი',
  description: 'სტატიები ვებ დეველოპმენტის, Next.js-ის, WordPress-ის, ბრენდინგისა და ციფრული მარკეტინგის შესახებ. გაიგეთ რატომ სჭირდება თქვენს ბიზნესს ვებსაიტი.',
  keywords: 'ვებ დეველოპმენტი, Next.js, WordPress, ვებსაიტის დამზადება, ციფრული მარკეტინგი, ბრენდინგი, ვებსაიტის შეკვეთა, ბიზნეს ვებსაიტი',
  alternates: {
    canonical: 'https://apollocreations.net/ka/blog',
    languages: {
      'en': 'https://apollocreations.net/blog',
      'ka': 'https://apollocreations.net/ka/blog',
    },
  },
  openGraph: {
    title: 'ბლოგი',
    description: 'სტატიები ვებ დეველოპმენტის, Next.js-ის, ბრენდინგისა და ციფრული მარკეტინგის შესახებ.',
    url: 'https://apollocreations.net/ka/blog',
    siteName: 'Apollo Creations',
    locale: 'ka_GE',
    type: 'website',
  },
}

export default function BlogPage() {
  return <Blog />
}