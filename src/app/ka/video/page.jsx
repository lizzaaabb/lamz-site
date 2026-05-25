import Video from '../../../components/services/branding/Video'

export const metadata = {
  title: 'კონტენტის შექმნა და ვიდეოგრაფია | Apollo Creations',
  description: 'პროფესიონალური ვიდეოგრაფია და კონტენტის შექმნა საქართველოში. რილსები, ივენთების გაშუქება, ყოველთვიური კონტენტ პაკეტები, მონტაჟი და Instagram სთორი. 150₾-დან.',
  keywords: [
    'ვიდეოგრაფია თბილისი',
    'კონტენტის შექმნა საქართველო',
    'ვიდეო პროდაქშენი თბილისი',
    'Instagram რილსი საქართველო',
    'ივენთის გაშუქება თბილისი',
    'სოციალური მედია კონტენტი',
    'ვიდეო მონტაჟი თბილისი',
    'Apollo Creations ვიდეოგრაფია',
  ],
  openGraph: {
    title: 'კონტენტის შექმნა და ვიდეოგრაფია | Apollo Creations',
    description: 'ვიღებთ კადრებს, რომლებიც ბრენდს აცოცხლებს. რილსები, ივენთ ფილმები, ყოველთვიური კონტენტი და სხვა.',
    url: 'https://apollocreations.ge/ka/video',
    siteName: 'Apollo Creations',
    locale: 'ka_GE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'კონტენტის შექმნა და ვიდეოგრაფია | Apollo Creations',
    description: 'პროფესიონალური ვიდეოგრაფია და კონტენტ პაკეტები 150₾-დან.',
  },
  alternates: {
    canonical: 'https://apollocreations.ge/ka/video',
    languages: {
      'ka': 'https://apollocreations.ge/ka/video',
      'en': 'https://apollocreations.ge/en/video',
    },
  },
}

export default function VideoPage() {
  return <Video />
}