import { Metadata } from 'next';

const siteConfig = {
  name: 'Nitrox Inteligência',
  description: 'Site oficial da Nitrox Inteligência',
  url: 'https://nitrox.com.br',
  ogImage: 'https://nitrox.com.br/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/nitroxinteligencia',
    github: 'https://github.com/nitroxinteligencia',
  },
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['inteligência artificial', 'nitrox', 'tecnologia', 'inovação'],
  authors: [
    {
      name: 'Nitrox Inteligência',
      url: siteConfig.url,
    },
  ],
  creator: 'Nitrox Inteligência',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@nitroxinteligencia',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default siteConfig; 