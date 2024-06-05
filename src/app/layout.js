import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@components/Header"
import Footer from "@components/Footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PortoFolio App",
  description: "Fullstack developer | Built by me with Next Js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <main className="bg-slate-900 py-4 min-h-screen">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
