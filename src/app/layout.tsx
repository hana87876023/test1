import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: '台湾旅行ガイド - 美しい台湾を発見しよう',
  description: '台湾の魅力的な観光地、文化、グルメを紹介する総合ガイドサイト',
  keywords: '台湾,旅行,観光,グルメ,文化,花蓮,台東',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}