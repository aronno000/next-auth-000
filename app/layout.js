import { Kdam_Thmor_Pro } from 'next/font/google'
import './globals.css'
import NavBar from "@/components/NavBar";
import Footer from '@/components/Footer';

const kDam_Thmor_Pro = Kdam_Thmor_Pro({ subsets: ['latin'], weight: ['400'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kDam_Thmor_Pro.className}>
        <NavBar />
          <div className='my-10'>
            {children}
          </div>
        <Footer />
      </body>
    </html>
  )
}
