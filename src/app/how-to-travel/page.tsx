import Image from 'next/image'
import Link from 'next/link'
import { imageUrls } from '@/lib/imageUrls'

export default function HowToTravel() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <Image
          src={imageUrls.heroes.travelHero}
          alt="台湾旅行"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 opacity-80"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            台湾観光方法ガイド
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            初めての台湾旅行を成功させるための実践的なアドバイス
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Entry Requirements */}
        <section className="mb-16">
          <h2 className="section-title">入国と準備</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-taiwan-ocean">ビザ・パスポート</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 日本国籍の場合、90日以内の観光は査証不要</li>
                <li>• パスポートの残存期間は3ヶ月以上必要</li>
                <li>• 往復航空券または第三国への航空券が必要</li>
                <li>• 入国時に入国カードの記入が必要</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-taiwan-ocean">通貨・支払い</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 通貨：新台湾ドル（NT$）</li>
                <li>• クレジットカード対応店舗が多い</li>
                <li>• 夜市では現金が主流</li>
                <li>• 空港やコンビニでATM利用可能</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Transportation */}
        <section className="mb-16">
          <h2 className="section-title">交通手段</h2>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">台湾高速鉄道（高鐵）</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  台北から高雄まで約1時間45分で結ぶ新幹線。日本の新幹線技術を採用しており、
                  快適で安全な移動が可能です。事前予約で割引料金もあります。
                </p>
                <ul className="space-y-1 text-gray-600">
                  <li>• 台北 ⇔ 台中：約1時間</li>
                  <li>• 台北 ⇔ 台南：約1時間30分</li>
                  <li>• 台北 ⇔ 高雄：約1時間45分</li>
                </ul>
              </div>
              <div className="flex-1">
                <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={imageUrls.travel.taiwanHsr}
                    alt="台湾高速鉄道"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">MRT（地下鉄）・バス</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  台北、高雄、桃園にMRTが運行。悠遊卡（EasyCard）があれば
                  MRT、バス、一部のタクシーで利用可能。コンビニでも使えて便利です。
                </p>
                <ul className="space-y-1 text-gray-600">
                  <li>• 悠遊卡は駅やコンビニで購入</li>
                  <li>• 市内バスは悠遊卡利用で割引</li>
                  <li>• 夜間バスも充実している</li>
                </ul>
              </div>
              <div className="flex-1">
                <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={imageUrls.travel.mrt}
                    alt="MRT地下鉄"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accommodation */}
        <section className="mb-16">
          <h2 className="section-title">宿泊</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <Image
                  src={imageUrls.travel.hotel}
                  alt="ホテル"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative z-10">
                <div className="text-4xl mb-4 text-center">🏨</div>
                <h3 className="text-xl font-bold mb-4 text-taiwan-ocean text-center">ホテル</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 国際チェーンから地元ホテルまで</li>
                  <li>• 朝食付きプランが多い</li>
                  <li>• 英語対応可能な場合が多い</li>
                  <li>• 価格帯：NT$2,000〜15,000/泊</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-4xl mb-4 text-center">🏠</div>
              <h3 className="text-xl font-bold mb-4 text-taiwan-ocean text-center">民宿・B&B</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 家庭的な雰囲気を楽しめる</li>
                <li>• 地元の文化に触れられる</li>
                <li>• オーナーとの交流が魅力</li>
                <li>• 価格帯：NT$1,500〜4,000/泊</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-4xl mb-4 text-center">🛏️</div>
              <h3 className="text-xl font-bold mb-4 text-taiwan-ocean text-center">ゲストハウス</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• バックパッカー向け</li>
                <li>• 他の旅行者との交流</li>
                <li>• キッチン利用可能な場合も</li>
                <li>• 価格帯：NT$800〜2,500/泊</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Food Culture */}
        <section className="mb-16">
          <h2 className="section-title">台湾グルメ体験</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">夜市文化</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                台湾の夜市は単なる食事の場所ではなく、地元の文化を体験できる場所。
                小籠包、牛肉麺、臭豆腐、マンゴーかき氷など、様々な台湾グルメが楽しめます。
              </p>
              <div className="bg-taiwan-green/10 p-4 rounded-lg">
                <h4 className="font-bold text-taiwan-ocean mb-2">おすすめ夜市グルメ</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• 小籠包 - 上海小籠湯包</li>
                  <li>• 牛肉麺 - 台湾の代表的麺料理</li>
                  <li>• 臭豆腐 - 発酵豆腐の揚げ物</li>
                  <li>• 胡椒餅 - 胡椒風味の肉まん</li>
                </ul>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={imageUrls.culture.taiwanFood}
                  alt="台湾グルメ"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="mb-16">
          <h2 className="section-title">旅行のコツ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-taiwan-ocean">言語・コミュニケーション</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 公用語は中国語（北京官話）</li>
                <li>• 英語は観光地で通じる場合が多い</li>
                <li>• 翻訳アプリを活用</li>
                <li>• 筆談も効果的</li>
                <li>• 台湾人は親切で優しい人が多い</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-taiwan-ocean">インターネット・Wi-Fi</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 空港でSIMカードかWi-Fiレンタル</li>
                <li>• 主要都市は無料Wi-Fiスポット多数</li>
                <li>• カフェ、MRT駅でWi-Fi利用可能</li>
                <li>• Google翻訳アプリが便利</li>
                <li>• VPNは必要な場合がある</li>
              </ul>
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