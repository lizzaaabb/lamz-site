import Custom from '../../components/services/development/Custom'

export const metadata = {
  title: 'Custom Website Development | Tailored Web Platforms & Applications',
  description: 'We build fully custom web platforms tailored to your business needs. No templates — just purpose-built systems with the exact features, logic, and design your business requires.',
  keywords: 'custom website development, custom web application, bespoke website, tailored web platform, SaaS development, custom web solution',
  alternates: {
    canonical: 'https://apollocreations.net/custom-website-development',
    languages: {
      'en': 'https://apollocreations.net/custom-website-development',
      'ka': 'https://apollocreations.net/ka/custom-website-development',
    },
  },
  openGraph: {
    title: 'Custom Website Development | Tailored Web Platforms & Applications',
    description: 'We build fully custom web platforms tailored to your business needs. No templates — purpose-built systems with the exact features your business requires.',
    url: 'https://apollocreations.net/custom-website-development',
    siteName: 'Apollo Creations',
    locale: 'en_US',
    type: 'website',
  },
}

export default function CustomPage() {
  return <Custom />
}