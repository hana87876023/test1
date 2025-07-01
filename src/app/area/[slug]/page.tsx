import { areaData } from '@/lib/areaData'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface AreaPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return Object.keys(areaData).map((slug) => ({
    slug,
  }))
}

export default function AreaPage({ params }: AreaPageProps) {
  const data = areaData[params.slug]

  if (!data) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center">
            <span className="text-9xl opacity-20">🏔️</span>
          </div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {data.title}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            {data.description}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Sections */}
        <div className="space-y-16">
          {data.sections.map((section, index) => (
            <div key={index} className={`flex flex-col ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } gap-8 items-center`}>
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">
                  {section.title}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {section.content}
                </p>
              </div>
              <div className="flex-1">
                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center">
                    <span className="text-6xl opacity-60">
                      {index === 0 ? '🏔️' : index === 1 ? '🌊' : '🏮'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Highlights */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-gray-800">見どころ</h3>
            <ul className="space-y-2">
              {data.highlights.map((highlight, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <span className="text-taiwan-ocean mr-2">✓</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          {/* Best Time */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-gray-800">ベストシーズン</h3>
            <p className="text-gray-600 text-lg">{data.bestTime}</p>
            <div className="mt-4 text-sm text-gray-500">
              気候が良く、観光に最適な時期です
            </div>
          </div>

          {/* Access */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-gray-800">アクセス</h3>
            <p className="text-gray-600">{data.access}</p>
            <div className="mt-4 text-sm text-gray-500">
              台北からの主要なアクセス方法
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-16 text-center">
          <Link
            href="/"
            className="btn-primary inline-block"
          >
            他の地域も見る
          </Link>
        </div>
      </div>
    </div>
  )
}