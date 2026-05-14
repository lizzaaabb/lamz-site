import AllProjects from '../../components/AllProjects'

export const metadata = {
  title: 'Projects — Web Design & Development Portfolio',
  description: 'Browse our web development and design portfolio. See real websites we have built for businesses — modern, fast and SEO-optimized.',
  keywords: 'web development portfolio, website examples, web design projects, Next.js projects, business websites, web agency portfolio Georgia',
  alternates: {
    canonical: 'https://apollocreations.net/projects',
    languages: {
      'en': 'https://apollocreations.net/projects',
      'ka': 'https://apollocreations.net/ka/projects',
    },
  },
  openGraph: {
    title: 'Projects — Web Design & Development Portfolio',
    description: 'Browse our web development and design portfolio. See real websites we have built for businesses.',
    url: 'https://apollocreations.net/projects',
    siteName: 'Apollo Creations',
    locale: 'en_US',
    type: 'website',
  },
}

export default function ProjectsPage() {
  return <AllProjects />
}