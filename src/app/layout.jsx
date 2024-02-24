import { Manrope } from "next/font/google";
import "./globals.css";
// importing custom components
import { Footer } from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
// importing theme provider
import { ThemeProvider } from "@/components/Theme/ThemeProvider";

const manrope = Manrope({
  weight: ['400', '700', '800'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Macademics Writers",
  description: "Assignment Help Website created with next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={manrope.className}>
        <ThemeProvider attribute='class' defaultTheme='light'>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
