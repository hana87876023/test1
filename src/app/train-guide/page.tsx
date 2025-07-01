import Link from 'next/link'
import Image from 'next/image'
import { imageUrls } from '@/lib/imageUrls'

export default function TrainGuide() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <Image
          src={imageUrls.heroes.trainHero}
          alt="台湾の電車"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-80"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            台湾電車ガイド
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            台湾高速鐵道と台湾鐵路の利用方法を詳しく解説
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* HSR Section */}
        <section className="mb-16">
          <h2 className="section-title">台湾高速鐵道（高鐵・HSR）</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">日本の新幹線技術</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                台湾高速鐵道は日本の新幹線技術（700T系）を採用した高速鉄道システム。
                最高速度300km/hで台湾西部を南北に結んでいます。
                安全性と快適性において世界最高水準を誇ります。
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-taiwan-ocean mb-2">主要区間の所要時間</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• 台北 ⇔ 台中：約1時間</li>
                  <li>• 台北 ⇔ 台南：約1時間30分</li>
                  <li>• 台北 ⇔ 高雄：約1時間45分</li>
                  <li>• 台中 ⇔ 高雄：約50分</li>
                </ul>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={imageUrls.train.hsrStation}
                  alt="台湾高速鉄道駅"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* HSR Stations */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-lg font-bold mb-3 text-taiwan-ocean">北部エリア</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• 南港駅（台北）</li>
                <li>• 台北駅</li>
                <li>• 板橋駅</li>
                <li>• 桃園駅</li>
                <li>• 新竹駅</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-lg font-bold mb-3 text-taiwan-ocean">中部エリア</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• 苗栗駅</li>
                <li>• 台中駅</li>
                <li>• 彰化駅</li>
                <li>• 雲林駅</li>
                <li>• 嘉義駅</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-lg font-bold mb-3 text-taiwan-ocean">南部エリア</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• 台南駅</li>
                <li>• 左営駅（高雄）</li>
              </ul>
            </div>
          </div>

          {/* Ticket Information */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-taiwan-ocean">チケット購入・料金</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-2">購入方法</h4>
                <ul className="space-y-1 text-gray-600 mb-4">
                  <li>• 駅の券売機（日本語対応）</li>
                  <li>• 窓口での購入</li>
                  <li>• 公式アプリ「T Express」</li>
                  <li>• オンライン予約</li>
                  <li>• コンビニエンスストア</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">座席タイプ</h4>
                <ul className="space-y-1 text-gray-600 mb-4">
                  <li>• 自由席（自由座）</li>
                  <li>• 指定席（対号座）</li>
                  <li>• ビジネス席（商務座）</li>
                </ul>
                <div className="bg-green-50 p-3 rounded">
                  <p className="text-sm text-gray-600">
                    <strong>割引情報：</strong>
                    早期購入割引（早鳥票）で最大35%オフ！
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRA Section */}
        <section className="mb-16">
          <h2 className="section-title">台湾鐵路（台鐵・TRA）</h2>
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center mb-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">台湾全島をカバー</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                台湾鐵路は台湾全島を網羅する在来線鉄道。高鐵が通らない東部（花蓮、台東）
                への重要なアクセス手段です。のんびりとした旅を楽しみたい方におすすめ。
                景色を楽しみながらの鉄道旅行が魅力です。
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold text-taiwan-ocean mb-2">人気路線</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• 台北 ⇔ 花蓮：約2時間</li>
                  <li>• 花蓮 ⇔ 台東：約2時間30分</li>
                  <li>• 台北 ⇔ 台東：約4時間30分</li>
                  <li>• 環島線：台湾一周も可能</li>
                </ul>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={imageUrls.train.tra}
                  alt="台湾鉄路"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Train Types */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-lg font-bold mb-3 text-taiwan-ocean">太魯閣号</h4>
              <p className="text-sm text-gray-600 mb-2">最高級の特急列車</p>
              <ul className="space-y-1 text-xs text-gray-500">
                <li>• 台北-花蓮間</li>
                <li>• 全車指定席</li>
                <li>• 最速・最快適</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-lg font-bold mb-3 text-taiwan-ocean">普悠瑪号</h4>
              <p className="text-sm text-gray-600 mb-2">東部幹線の主力</p>
              <ul className="space-y-1 text-xs text-gray-500">
                <li>• 台北-台東間</li>
                <li>• 全車指定席</li>
                <li>• 高速運転</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-lg font-bold mb-3 text-taiwan-ocean">自強号</h4>
              <p className="text-sm text-gray-600 mb-2">特急列車</p>
              <ul className="space-y-1 text-xs text-gray-500">
                <li>• 全島運行</li>
                <li>• 指定席・自由席</li>
                <li>• 標準的特急</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-lg font-bold mb-3 text-taiwan-ocean">区間車</h4>
              <p className="text-sm text-gray-600 mb-2">普通列車</p>
              <ul className="space-y-1 text-xs text-gray-500">
                <li>• 各駅停車</li>
                <li>• 自由席のみ</li>
                <li>• 料金最安</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Practical Tips */}
        <section className="mb-16">
          <h2 className="section-title">利用のコツ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-taiwan-ocean">予約・購入のポイント</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-taiwan-ocean mr-2 mt-1">•</span>
                  <span>高鐵は事前予約で早期割引が適用される</span>
                </li>
                <li className="flex items-start">
                  <span className="text-taiwan-ocean mr-2 mt-1">•</span>
                  <span>台鐵の人気列車は満席になりやすいので早めの予約を</span>
                </li>
                <li className="flex items-start">
                  <span className="text-taiwan-ocean mr-2 mt-1">•</span>
                  <span>券売機は日本語対応、操作も簡単</span>
                </li>
                <li className="flex items-start">
                  <span className="text-taiwan-ocean mr-2 mt-1">•</span>
                  <span>悠遊卡で区間車の乗車も可能</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-taiwan-ocean">乗車時の注意</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-taiwan-ocean mr-2 mt-1">•</span>
                  <span>車内での飲食は基本的にOK</span>
                </li>
                <li className="flex items-start">
                  <span className="text-taiwan-ocean mr-2 mt-1">•</span>
                  <span>優先席では携帯電話の使用を控える</span>
                </li>
                <li className="flex items-start">
                  <span className="text-taiwan-ocean mr-2 mt-1">•</span>
                  <span>大きな荷物は荷物置き場に</span>
                </li>
                <li className="flex items-start">
                  <span className="text-taiwan-ocean mr-2 mt-1">•</span>
                  <span>車掌さんによる検札あり</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Recommended Routes */}
        <section className="mb-16">
          <h2 className="section-title">おすすめ鉄道ルート</h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-taiwan-ocean">東海岸景勝ルート</h3>
              <p className="text-gray-600 mb-3">
                台北 → 花蓮 → 台東：太平洋の美しい海岸線を楽しむ
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-white px-3 py-1 rounded-full text-sm">台鐵太魯閣号</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm">約6時間</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm">絶景ルート</span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-taiwan-ocean">西部高速ルート</h3>
              <p className="text-gray-600 mb-3">
                台北 → 台中 → 台南 → 高雄：主要都市を効率よく周遊
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-white px-3 py-1 rounded-full text-sm">高鐵</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm">約3時間</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm">効率重視</span>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="text-center">
          <Link href="/" className="btn-primary">
            ホームに戻る
          </Link>
        </div>
      </div>
    </div>
  )
}