'use client'

import Link from 'next/link'
import { useState } from 'react'

interface Region {
  id: string
  name: string
  color: string
  href: string
}

const regions: Region[] = [
  { id: 'hualien', name: '花蓮', color: '#34D399', href: '/area/hualien' },
  { id: 'taitung', name: '台東', color: '#F59E0B', href: '/area/taitung' },
  { id: 'taipei', name: '台北', color: '#3B82F6', href: '/area/taipei' },
  { id: 'taichung', name: '台中', color: '#8B5CF6', href: '/area/taichung' },
  { id: 'tainan', name: '台南', color: '#EF4444', href: '/area/tainan' },
  { id: 'kaohsiung', name: '高雄', color: '#EC4899', href: '/area/kaohsiung' },
]

const TaiwanMap = () => {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null)

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <svg
          viewBox="0 0 400 600"
          className="w-full max-w-md h-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* 台北 */}
          <Link href="/area/taipei">
            <path
              d="M150 60 L200 55 L220 80 L210 100 L170 105 L140 90 Z"
              fill={hoveredRegion === 'taipei' ? '#2563EB' : '#3B82F6'}
              stroke="#1F2937"
              strokeWidth="2"
              className="taiwan-map-region"
              onMouseEnter={() => setHoveredRegion('taipei')}
              onMouseLeave={() => setHoveredRegion(null)}
            />
            <text x="175" y="85" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">
              台北
            </text>
          </Link>

          {/* 台中 */}
          <Link href="/area/taichung">
            <path
              d="M120 180 L180 175 L200 200 L190 230 L150 235 L110 210 Z"
              fill={hoveredRegion === 'taichung' ? '#7C3AED' : '#8B5CF6'}
              stroke="#1F2937"
              strokeWidth="2"
              className="taiwan-map-region"
              onMouseEnter={() => setHoveredRegion('taichung')}
              onMouseLeave={() => setHoveredRegion(null)}
            />
            <text x="155" y="205" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">
              台中
            </text>
          </Link>

          {/* 花蓮 */}
          <Link href="/area/hualien">
            <path
              d="M220 120 L280 115 L300 140 L290 180 L250 185 L220 160 Z"
              fill={hoveredRegion === 'hualien' ? '#10B981' : '#34D399'}
              stroke="#1F2937"
              strokeWidth="2"
              className="taiwan-map-region"
              onMouseEnter={() => setHoveredRegion('hualien')}
              onMouseLeave={() => setHoveredRegion(null)}
            />
            <text x="260" y="155" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">
              花蓮
            </text>
          </Link>

          {/* 台東 */}
          <Link href="/area/taitung">
            <path
              d="M250 200 L310 195 L330 220 L320 270 L280 275 L250 250 Z"
              fill={hoveredRegion === 'taitung' ? '#D97706' : '#F59E0B'}
              stroke="#1F2937"
              strokeWidth="2"
              className="taiwan-map-region"
              onMouseEnter={() => setHoveredRegion('taitung')}
              onMouseLeave={() => setHoveredRegion(null)}
            />
            <text x="290" y="240" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">
              台東
            </text>
          </Link>

          {/* 台南 */}
          <Link href="/area/tainan">
            <path
              d="M110 320 L170 315 L185 340 L175 370 L135 375 L100 350 Z"
              fill={hoveredRegion === 'tainan' ? '#DC2626' : '#EF4444'}
              stroke="#1F2937"
              strokeWidth="2"
              className="taiwan-map-region"
              onMouseEnter={() => setHoveredRegion('tainan')}
              onMouseLeave={() => setHoveredRegion(null)}
            />
            <text x="142" y="345" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">
              台南
            </text>
          </Link>

          {/* 高雄 */}
          <Link href="/area/kaohsiung">
            <path
              d="M120 420 L180 415 L195 440 L185 470 L145 475 L110 450 Z"
              fill={hoveredRegion === 'kaohsiung' ? '#DB2777' : '#EC4899'}
              stroke="#1F2937"
              strokeWidth="2"
              className="taiwan-map-region"
              onMouseEnter={() => setHoveredRegion('kaohsiung')}
              onMouseLeave={() => setHoveredRegion(null)}
            />
            <text x="152" y="445" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">
              高雄
            </text>
          </Link>
        </svg>
      </div>

      {/* Region Information */}
      <div className="mt-8 text-center">
        <p className="text-gray-600 mb-4">地図上の地域をクリックして詳細を表示</p>
        
        {hoveredRegion && (
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="font-bold text-lg">
              {regions.find(r => r.id === hoveredRegion)?.name}
            </h3>
            <p className="text-gray-600">クリックして詳細を見る</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default TaiwanMap