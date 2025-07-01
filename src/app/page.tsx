import TaiwanMap from '@/components/TaiwanMap'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-500 opacity-90"></div>
        <div className="relative z-10 text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            美しい台湾への旅
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            息をのむような自然、豊かな文化、美味しい料理。
            台湾の魅力を発見しましょう。
          </p>
          <Link
            href="#map"
            className="btn-primary text-lg px-8 py-4 inline-block"
          >
            旅を始める
          </Link>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">台湾を探索する</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            地図上の地域をクリックして、その地域の魅力を発見してください
          </p>
          <TaiwanMap />
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">人気の観光地</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 花蓮 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden card-hover">
              <div className="h-48 bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
                <span className="text-white text-6xl">🏔️</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">花蓮・太魯閣</h3>
                <p className="text-gray-600 mb-4">
                  壮大な渓谷と美しい自然が織りなす絶景スポット
                </p>
                <Link
                  href="/area/hualien"
                  className="text-taiwan-ocean font-medium hover:underline"
                >
                  詳細を見る →
                </Link>
              </div>
            </div>

            {/* 台東 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden card-hover">
              <div className="h-48 bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center">
                <span className="text-white text-6xl">🌊</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">台東・知本</h3>
                <p className="text-gray-600 mb-4">
                  温泉と海岸線が美しい癒しの観光地
                </p>
                <Link
                  href="/area/taitung"
                  className="text-taiwan-ocean font-medium hover:underline"
                >
                  詳細を見る →
                </Link>
              </div>
            </div>

            {/* 台北 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden card-hover">
              <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                <span className="text-white text-6xl">🏙️</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">台北・九份</h3>
                <p className="text-gray-600 mb-4">
                  現代都市と伝統文化が融合する台湾の首都
                </p>
                <Link
                  href="/area/taipei"
                  className="text-taiwan-ocean font-medium hover:underline"
                >
                  詳細を見る →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Guides */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">旅行ガイド</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/how-to-travel" className="group">
              <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg p-8 text-white text-center card-hover">
                <div className="text-4xl mb-4">✈️</div>
                <h3 className="text-xl font-bold mb-2">観光方法</h3>
                <p className="opacity-90">台湾旅行の基本情報とコツ</p>
              </div>
            </Link>

            <Link href="/train-guide" className="group">
              <div className="bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg p-8 text-white text-center card-hover">
                <div className="text-4xl mb-4">🚄</div>
                <h3 className="text-xl font-bold mb-2">電車ガイド</h3>
                <p className="opacity-90">高速鉄道と在来線の利用方法</p>
              </div>
            </Link>

            <Link href="/culture-differences" className="group">
              <div className="bg-gradient-to-r from-orange-400 to-red-500 rounded-lg p-8 text-white text-center card-hover">
                <div className="text-4xl mb-4">🏮</div>
                <h3 className="text-xl font-bold mb-2">文化と習慣</h3>
                <p className="opacity-90">台湾の文化的背景と礼儀</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}