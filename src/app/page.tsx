import Link from 'next/link'
import Image from 'next/image'
import { imageUrls } from '@/lib/imageUrls'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src={imageUrls.heroes.taiwanNightView}
          alt="台湾の夜景"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-70"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            台湾へようこそ
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            美食、文化、そして温かい人々があなたを待っています
          </p>
          <Link href="/areas" className="btn-primary">
            エリアを探索する
          </Link>
        </div>
      </section>

      {/* Features Grid with Images */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">台湾の魅力</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 観光地 */}
            <Link href="/areas" className="card group hover:scale-105 transition-transform duration-300">
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={imageUrls.areas.taipei101}
                  alt="台北101"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">観光地</h3>
              <p className="text-gray-600">台北101、九份、日月潭など魅力的なスポット</p>
            </Link>

            {/* 台湾料理 */}
            <Link href="/culture-differences" className="card group hover:scale-105 transition-transform duration-300">
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={imageUrls.culture.taiwanFood}
                  alt="台湾料理"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">文化と食事</h3>
              <p className="text-gray-600">小籠包、タピオカミルクティー、夜市グルメ</p>
            </Link>

            {/* 交通 */}
            <Link href="/train-guide" className="card group hover:scale-105 transition-transform duration-300">
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={imageUrls.travel.taiwanHsr}
                  alt="台湾高速鉄道"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">交通ガイド</h3>
              <p className="text-gray-600">高速鉄道、MRT、バスの使い方</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">フォトギャラリー</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative h-64 overflow-hidden rounded-lg">
              <Image
                src={imageUrls.areas.jiufen}
                alt="九份の街並み"
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg">
              <Image
                src={imageUrls.culture.nightMarket}
                alt="夜市"
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg">
              <Image
                src={imageUrls.areas.sunMoonLake}
                alt="日月潭"
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg">
              <Image
                src={imageUrls.culture.temple}
                alt="台湾の寺院"
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action with Background */}
      <section className="relative py-20">
        <Image
          src={imageUrls.heroes.taiwanLandscape}
          alt="台湾の風景"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            台湾旅行を始めよう
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            忘れられない思い出があなたを待っています
          </p>
          <Link href="/how-to-travel" className="btn-primary">
            旅行プランを立てる
          </Link>
        </div>
      </section>
    </div>
  )
}