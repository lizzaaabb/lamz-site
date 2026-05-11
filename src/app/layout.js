import "./globals.css";
import { LangProvider } from '../components/LanguageContext'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: {
    default: "საიტის დამზადება | ვებგვერდის შექმნა | Web Development | Apollo Creations",
    template: "%s | საიტის დამზადება - Apollo Creations",
  },
  description:
    "საიტის დამზადება პროფესიონალურად — სწრაფი, თანამედროვე და მიმზიდველი ვებგვერდები. Professional web development agency in Georgia. Fast, modern & beautiful websites built by Apollo Creations.",
  keywords: [
    "საიტის დამზადება",
    "ვებგვერდის დამზადება",
    "ვებგვერდის შექმნა",
    "ვებ დიზაინი",
    "საიტის შექმნა",
    "ციფრული სააგენტო თბილისი",
    "პროგრამირება საქართველო",
    "ვებსაიტი თბილისი",
    "web development Georgia",
    "website development Tbilisi",
    "web design agency Georgia",
    "professional website development",
    "Next.js development Georgia",
    "React development Georgia",
    "web agency Tbilisi",
    "Apollo Creations",
  ],
  alternates: {
    canonical: "https://apollocreations.net",
    languages: {
      "en": "https://apollocreations.net",
      "ka": "https://apollocreations.net/ka",
    },
  },
  openGraph: {
    title: "საიტის დამზადება | ვებგვერდის შექმნა | Apollo Creations",
    description:
      "საიტის დამზადება პროფესიონალურად — სწრაფი და თანამედროვე ვებგვერდები. Professional web development agency in Georgia.",
    url: "https://apollocreations.net",
    siteName: "Apollo Creations",
    locale: "ka_GE",
    alternateLocale: "en_US",
    type: "website",
    images: [
      {
        url: "https://apollocreations.net/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "საიტის დამზადება | Apollo Creations - Web Development Agency",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://apollocreations.net"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LangProvider>
          <Header />
          {children}
          <Footer />
        </LangProvider>
      </body>
    </html>
  );
}