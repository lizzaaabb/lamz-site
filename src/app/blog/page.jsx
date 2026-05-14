import Blog from '../../components/Blog'

export const metadata = {
  title: 'Blog',
  description: 'Articles on web development, Next.js, WordPress, branding and digital marketing. Learn why your business needs a website and how to order one successfully.',
  keywords: 'web development, Next.js, WordPress, website design, digital marketing, branding, order a website, business website',
  alternates: {
    canonical: 'https://apollocreations.net/blog',
    languages: {
      'en': 'https://apollocreations.net/blog',
      'ka': 'https://apollocreations.net/ka/blog',
    },
  },
  openGraph: {
    title: 'Blog',
    description: 'Articles on web development, Next.js, WordPress, branding and digital marketing.',
    url: 'https://apollocreations.net/blog',
    siteName: 'Apollo Creations',
    locale: 'en_US',
    type: 'website',
  },
}

export default function BlogPage() {
  return <Blog />
}