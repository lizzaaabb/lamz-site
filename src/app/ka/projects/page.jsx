import AllProjects from '../../../components/AllProjects'

export const metadata = {
  title: 'პროექტები — ვებსაიტების პორტფოლიო',
  description: 'იხილეთ ჩვენი შესრულებული პროექტები. რეალური ვებსაიტები, რომლებიც ბიზნესებისთვის შევქმენით — თანამედროვე, სწრაფი და SEO ოპტიმიზებული.',
  keywords: 'ვებსაიტების პორტფოლიო, შესრულებული პროექტები, ვებ დიზაინი, ვებსაიტის მაგალითები, Next.js პროექტები, ბიზნეს ვებსაიტი, ვებ სააგენტო საქართველო, ვებ სააგენტო თბილისი',
  alternates: {
    canonical: 'https://apollocreations.net/ka/projects',
    languages: {
      'en': 'https://apollocreations.net/projects',
      'ka': 'https://apollocreations.net/ka/projects',
    },
  },
  openGraph: {
    title: 'პროექტები — ვებსაიტების პორტფოლიო',
    description: 'იხილეთ ჩვენი შესრულებული პროექტები. რეალური ვებსაიტები, რომლებიც ბიზნესებისთვის შევქმენით.',
    url: 'https://apollocreations.net/ka/projects',
    siteName: 'Apollo Creations',
    locale: 'ka_GE',
    type: 'website',
  },
}

export default function ProjectsPage() {
  return <AllProjects />
}