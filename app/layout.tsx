import type { Metadata } from 'next';

import { interVar, roboto } from '@/assets/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Issue Tracker',
  description:
    'A collaborative tool for managing and maintaining a lists of issues to address',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${interVar.variable} ${roboto.variable} font-sans`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
