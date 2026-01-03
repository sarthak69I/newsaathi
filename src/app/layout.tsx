import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { QueryProvider } from '@/components/QueryProvider';

export const metadata: Metadata = {
  title: 'ChaskaEvent - Premier Event Management & Planning',
  description: 'ChaskaEvent specializes in creating unforgettable corporate events, tech summits, workshops, and concerts. Discover, attend, and host amazing events that bring people together.',
  keywords: ['event management', 'event planning', 'corporate events', 'tech conference', 'workshop', 'concerts', 'ChaskaEvent'],
  openGraph: {
    title: 'ChaskaEvent - Unforgettable Events',
    description: 'From corporate conferences to intimate workshops, ChaskaEvent brings your vision to life.',
    url: 'https://www.chaskaevent.com',
    siteName: 'ChaskaEvent',
    images: [
      {
        url: 'https://pixabay.com/get/g68bd6f3b02a062b14c09d4e46373f4db61f149f388e8d0d3bf298f6339332ec91da6d928e7e90dc9af2c477f823bd19c975d1931409b7d1b4c30efba44dc1627_1280.jpg',
        width: 1280,
        height: 853,
        alt: 'A large audience at a ChaskaEvent concert',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ChaskaEvent - Premier Event Management & Planning',
    description: 'Your expert partner for creating unforgettable corporate events, tech summits, workshops, and concerts.',
    images: ['https://pixabay.com/get/g68bd6f3b02a062b14c09d4e46373f4db61f149f388e8d0d3bf298f6339332ec91da6d928e7e90dc9af2c477f823bd19c975d1931409b7d1b4c30efba44dc1627_1280.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className="antialiased">
        <QueryProvider>
          {children}
        </QueryProvider>
        <WhatsAppButton />
        <Toaster />
      </body>
    </html>
  );
}
