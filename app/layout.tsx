import { CookieBanner } from "@/components/CookieBanner";
import './globals.css';
import { Playfair_Display, JetBrains_Mono } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata = {
  title: 'Tattoos by Jake Llewellyn',
  description: 'Custom and flash tattoo artistry, specializing in fine-line, illustrative blackwork, and high-detail custom designs.',
};

export default function RootLayout({
  children,
}: {
  children: React.Node;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jetbrains.variable}`}>
      <body className="bg-[#FFFFFF] text-[#111827] antialiased min-h-screen font-sans selection:bg-[#3B82F6]/20">
        {children}
              <CookieBanner />
      </body>
    </html>
  );
}