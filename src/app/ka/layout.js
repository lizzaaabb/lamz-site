// app/ka/layout.js
// Wraps all /ka/* pages with Georgian SEO metadata

export const metadata = {
  title: {
    default: "საიტის დამზადება | ვებგვერდის შექმნა | Apollo Creations",
    template: "%s | საიტის დამზადება - Apollo Creations",
  },
  description:
    "საიტის დამზადება პროფესიონალურად — სწრაფი, თანამედროვე და მიმზიდველი ვებგვერდები. ციფრული სააგენტო თბილისში.",
  keywords: [
    "საიტის დამზადება",
    "ვებგვერდის დამზადება",
    "ვებგვერდის შექმნა",
    "ვებ დიზაინი",
    "საიტის შექმნა",
    "ციფრული სააგენტო თბილისი",
    "პროგრამირება საქართველო",
    "ვებსაიტი თბილისი",
  ],
  alternates: {
    canonical: "https://apollocreations.net/ka",
    languages: {
      "en": "https://apollocreations.net",
      "ka": "https://apollocreations.net/ka",
    },
  },
  openGraph: {
    title: "საიტის დამზადება | ვებგვერდის შექმნა | Apollo Creations",
    description:
      "საიტის დამზადება პროფესიონალურად — სწრაფი და თანამედროვე ვებგვერდები.",
    url: "https://apollocreations.net/ka",
    siteName: "Apollo Creations",
    locale: "ka_GE",
    type: "website",
    images: [
      {
        url: "https://apollocreations.net/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "საიტის დამზადება | Apollo Creations",
      },
    ],
  },
};

export default function KaLayout({ children }) {
  return children
}