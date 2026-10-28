import { Geist, Geist_Mono ,Bodoni_Moda, DM_Sans,Cormorant_Garamond} from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BookingProvider from "@/components/booking/BookingContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bodoniModa = Bodoni_Moda({
  variable:"--font-bodoni",
  subsets:['latin'],
    weight: ["400", "500", "600", "700"],
})

const dmSans = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata = {
  title: "Lumière Beauty Studio | Makeup Artist Website",
  description:
    "Discover bridal makeup, beauty services and a stunning makeup portfolio.",
  openGraph: {
    title: "Lumière Beauty Studio",
    description:
      "A premium makeup artist website concept.",
    url: "https://makeup-tau-navy.vercel.app/",
    siteName: "Lumière Beauty Studio",
    type: "website",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Lumière Beauty Studio",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${bodoniModa.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
           <BookingProvider>
        <header className=''>
          <Nav/>
          </header>  
          <main className='flex-1'>
         
               {children}
         
               
          </main>
        <Footer />
           </BookingProvider>
        </body>
    </html>
  );
}
