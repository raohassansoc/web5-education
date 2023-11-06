"use client"
import './globals.css'
import './theme.css'
import { Inter } from 'next/font/google'
import { AuthProvider } from './AuthContext'
import { usePathname } from 'next/navigation';

import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Web5 University',
  description: 'Get Your Blockchain Courses',
}

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isLoginRoute = pathname === '/login' || pathname === '/signup';

  const renderHeader = !isLoginRoute && <Navbar />;
  const renderFooter = !isLoginRoute && <Footer />;

  return (
    <html lang="en">
         {/* <link rel="icon" href="/favicon.png" /> */}
      <body className={inter.className}>
      <AuthProvider>
        {renderHeader}
          {children}
        {renderFooter}
      </AuthProvider>
    </body>
    </html>
  )
}
