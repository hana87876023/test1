import Link from 'next/link'
import Image from 'next/image'
import { areaData } from '@/lib/areaData'
import { imageUrls } from '@/lib/imageUrls'

export default function AreasPage() {
  const areas = Object.values(areaData)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <Image
          src={imageUrls.heroes.areasHero}
          alt="台湾の風景"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 opacity-80"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            地域別観光ガイド
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            台湾の魅力的な地域をそれぞれ詳しくご紹介
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area) => (
            <Link key={area.id} href={`/area/${area.id}`} className="group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden card-hover">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={
                      area.id === 'taipei' ? imageUrls.areas.taipei :
                      area.id === 'taichung' ? imageUrls.areas.taichung :
                      area.id === 'tainan' ? imageUrls.areas.tainan :
                      area.id === 'kaohsiung' ? imageUrls.areas.kaohsiung :
                      area.id === 'hualien' ? imageUrls.areas.taroko :
                      area.id === 'taitung' ? imageUrls.areas.sunMoonLake :
                      imageUrls.areas.taipei101
                    }
                    alt={area.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-taiwan-ocean transition-colors">
                    {area.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {area.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {area.highlights.slice(0, 3).map((highlight, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>ベストシーズン: {area.bestTime}</span>
                    <span className="text-taiwan-ocean font-medium group-hover:underline">
                      詳細を見る →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/" className="btn-primary">
            ホームに戻る
          </Link>
        </div>
      </div>
    </div>
  )
}