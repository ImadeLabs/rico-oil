import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rico Oil | Premium Palm Oil",
  description: "Producer and wholesale supplier of high-quality palm oil in Benin City.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      {/* 'h-full' on html/body and 'flex flex-col' on body 
         ensures the layout stretches to the full height of the device.
      */}
      <body className="h-full flex flex-col bg-orange-50 text-gray-900">
        
        {/* Navbar */}
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-orange-100 p-6">
          <nav className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold text-orange-700">Rico Oil</h1>
            <div className="space-x-6 text-sm font-medium">
              <a href="#about" className="hover:text-orange-600">About</a>
              <a href="#services" className="hover:text-orange-600">Services</a>
            </div>
          </nav>
        </header>

        {/* Main Content: flex-grow-1 pushes the footer to the bottom */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-orange-100 py-8 text-center text-gray-500 text-sm">
          <div className="max-w-7xl mx-auto">
            &copy; {new Date().getFullYear()} Rico Oil Production. All rights reserved.
          </div>
        </footer>
        
      </body>
    </html>
  );
}