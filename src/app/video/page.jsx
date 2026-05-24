import Video from '../../components/services/branding/Video'

export const metadata = {
  title: 'Content Creation & Videography Services | Apollo Creations',
  description: 'Professional content creation and videography in Georgia. Reels, event coverage, monthly content packages, long-form editing and Instagram story promotion. Starting from 150₾.',
  keywords: [
    'videography Georgia',
    'content creation Tbilisi',
    'video production Georgia',
    'Instagram reels Georgia',
    'event coverage Tbilisi',
    'social media content Georgia',
    'Apollo Creations videography',
  ],
  openGraph: {
    title: 'Content Creation & Videography | Apollo Creations',
    description: 'We create atmosphere people want to experience. Reels, event films, monthly content and more.',
    url: 'https://apollocreations.ge/en/services/videography',
    siteName: 'Apollo Creations',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Content Creation & Videography | Apollo Creations',
    description: 'Professional videography and content packages starting from 150₾.',
  },
  alternates: {
    canonical: 'https://apollocreations.ge/en/services/videography',
    languages: {
      'en': 'https://apollocreations.ge/en/services/videography',
      'ka': 'https://apollocreations.ge/ka/services/videography',
    },
  },
}

export default function VideoPage() {
  return <Video />
}