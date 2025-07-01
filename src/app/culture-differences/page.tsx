import Link from 'next/link'
import Image from 'next/image'
import { imageUrls, additionalImages } from '@/lib/imageUrls'

export default function CultureDifferences() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <Image
          src={imageUrls.heroes.cultureHero}
          alt="台湾の文化"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-80"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            台湾の文化と習慣
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            台湾独特の文化的背景と日本との違いを理解して、より深い旅を
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Cultural Background */}
        <section className="mb-16">
          <h2 className="section-title">台湾の文化的背景</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">多様な文化の融合</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                台湾は漢民族、原住民、日本、オランダ、スペインなど、
                多様な文化が重なり合って形成された独特な文化を持っています。
                この多文化性が台湾の魅力的な個性を生み出しています。
              </p>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-bold text-taiwan-ocean mb-2">文化的要素</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• 中華文化の伝統</li>
                  <li>• 日本統治時代の影響</li>
                  <li>• 原住民の伝統文化</li>
                  <li>• 現代的な西洋文化</li>
                </ul>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={additionalImages.lanterns}
                  alt="台湾の伝統的なランタン"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Language & Communication */}
        <section className="mb-16">
          <h2 className="section-title">言語とコミュニケーション</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-taiwan-ocean">使用言語</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800">中国語（北京官話）</h4>
                  <p className="text-sm text-gray-600">公用語、教育・ビジネスで使用</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">台湾語（閩南語）</h4>
                  <p className="text-sm text-gray-600">日常会話、地域コミュニティで使用</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">客家語</h4>
                  <p className="text-sm text-gray-600">客家系住民のコミュニティで使用</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">原住民語</h4>
                  <p className="text-sm text-gray-600">16の原住民族の言語</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-taiwan-ocean">コミュニケーションの特徴</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-taiwan-ocean mr-2 mt-1">•</span>
                  <span>人懐っこく親切な人が多い</span>
                </li>
                <li className="flex items-start">
                  <span className="text-taiwan-ocean mr-2 mt-1">•</span>
                  <span>間接的な表現を好む傾向</span>
                </li>
                <li className="flex items-start">
                  <span className="text-taiwan-ocean mr-2 mt-1">•</span>
                  <span>年長者への敬意を重視</span>
                </li>
                <li className="flex items-start">
                  <span className="text-taiwan-ocean mr-2 mt-1">•</span>
                  <span>面子（メンツ）を大切にする</span>
                </li>
                <li className="flex items-start">
                  <span className="text-taiwan-ocean mr-2 mt-1">•</span>
                  <span>身振り手振りを使った表現が豊か</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Religious Culture */}
        <section className="mb-16">
          <h2 className="section-title">宗教と信仰</h2>
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center mb-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">多宗教社会</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                台湾は宗教的寛容性が高い社会。仏教、道教、キリスト教、イスラム教など
                様々な宗教が共存しています。特に民間信仰が日常生活に深く根ざしており、
                廟（お寺）は地域コミュニティの中心的役割を果たしています。
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-red-50 p-3 rounded">
                  <h4 className="font-bold text-red-600">仏教・道教</h4>
                  <p className="text-gray-600">最も一般的な信仰</p>
                </div>
                <div className="bg-blue-50 p-3 rounded">
                  <h4 className="font-bold text-blue-600">キリスト教</h4>
                  <p className="text-gray-600">約6%の人口</p>
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <h4 className="font-bold text-green-600">民間信仰</h4>
                  <p className="text-gray-600">媽祖信仰など</p>
                </div>
                <div className="bg-purple-50 p-3 rounded">
                  <h4 className="font-bold text-purple-600">原住民信仰</h4>
                  <p className="text-gray-600">伝統的なアニミズム</p>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={imageUrls.culture.temple}
                  alt="台湾の寺院"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Social Customs */}
        <section className="mb-16">
          <h2 className="section-title">社会的習慣・マナー</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <Image
                  src={imageUrls.culture.greeting}
                  alt="台湾の挨拶文化"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative z-10">
                <div className="text-4xl mb-4 text-center">🤝</div>
                <h3 className="text-xl font-bold mb-4 text-taiwan-ocean text-center">挨拶・礼儀</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 握手が一般的な挨拶</li>
                  <li>• 名刺は両手で受け取る</li>
                  <li>• 年長者への敬語使用</li>
                  <li>• お辞儀は軽く会釈程度</li>
                  <li>• 靴を脱ぐ習慣は少ない</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <Image
                  src={imageUrls.culture.dining}
                  alt="台湾の食事文化"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative z-10">
                <div className="text-4xl mb-4 text-center">🍽️</div>
                <h3 className="text-xl font-bold mb-4 text-taiwan-ocean text-center">食事マナー</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 箸の使い方は日本と類似</li>
                  <li>• 取り分け用の箸を使う</li>
                  <li>• 乾杯の文化がある</li>
                  <li>• 年長者が先に食べ始める</li>
                  <li>• 残すことは失礼ではない</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <Image
                  src={imageUrls.culture.gift}
                  alt="台湾の贈り物文化"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative z-10">
                <div className="text-4xl mb-4 text-center">🎁</div>
                <h3 className="text-xl font-bold mb-4 text-taiwan-ocean text-center">贈り物</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 両手で渡し、受け取る</li>
                  <li>• 包装は重要視される</li>
                  <li>• 時計は避ける（縁起が悪い）</li>
                  <li>• 白い花は避ける</li>
                  <li>• 赤い包装は縁起が良い</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Daily Life */}
        <section className="mb-16">
          <h2 className="section-title">日常生活の文化</h2>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">夜市文化</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  夜市は台湾の重要な社会文化の一部。単なる食事の場ではなく、
                  地域コミュニティの交流の場でもあります。家族連れから友達同士まで、
                  様々な人々が集まる社交の場として機能しています。
                </p>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-bold text-taiwan-ocean mb-2">夜市での楽しみ方</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• 友人・家族と一緒に訪れる</li>
                    <li>• 様々な屋台を回って少しずつ食べる</li>
                    <li>• ゲームや射的を楽しむ</li>
                    <li>• 地元の人との交流を楽しむ</li>
                  </ul>
                </div>
              </div>
              <div className="flex-1">
                <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={imageUrls.culture.nightMarket}
                    alt="台湾の夜市"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">家族重視の価値観</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  台湾では家族の絆を非常に重視します。世代を超えた家族の結束が強く、
                  重要な決定は家族全体で話し合うことが多いです。
                  親への孝行も重要な価値観の一つです。
                </p>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-bold text-taiwan-ocean mb-2">家族文化の特徴</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• 世代間の同居が一般的</li>
                    <li>• 家族での食事を大切にする</li>
                    <li>• 祖先を敬う文化</li>
                    <li>• 家族の行事を重視</li>
                  </ul>
                </div>
              </div>
              <div className="flex-1">
                <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={imageUrls.culture.festival}
                    alt="台湾の家族文化"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cultural Differences with Japan */}
        <section className="mb-16">
          <h2 className="section-title">日本との文化的違い</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead className="bg-taiwan-ocean text-white">
                <tr>
                  <th className="px-6 py-3 text-left">項目</th>
                  <th className="px-6 py-3 text-left">台湾</th>
                  <th className="px-6 py-3 text-left">日本</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-800">時間観念</td>
                  <td className="px-6 py-4 text-gray-600">比較的ゆったりとした時間感覚</td>
                  <td className="px-6 py-4 text-gray-600">厳格な時間管理</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-800">コミュニケーション</td>
                  <td className="px-6 py-4 text-gray-600">直接的で感情表現が豊か</td>
                  <td className="px-6 py-4 text-gray-600">間接的で控えめな表現</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-800">プライベート空間</td>
                  <td className="px-6 py-4 text-gray-600">人との距離が比較的近い</td>
                  <td className="px-6 py-4 text-gray-600">個人の空間を重視</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-800">おもてなし</td>
                  <td className="px-6 py-4 text-gray-600">温かく親しみやすい接客</td>
                  <td className="px-6 py-4 text-gray-600">丁寧で礼儀正しい接客</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-800">食事文化</td>
                  <td className="px-6 py-4 text-gray-600">大皿料理をシェア</td>
                  <td className="px-6 py-4 text-gray-600">個人の膳で食事</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Practical Tips */}
        <section className="mb-16">
          <h2 className="section-title">文化を理解するためのコツ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-taiwan-ocean">台湾での心得</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>積極的に地元の人と交流する</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>夜市や地元の店を訪れる</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>寺廟を訪れて宗教文化を体験</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>地元の祭りや行事に参加</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>台湾の歴史について学ぶ</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-taiwan-ocean">注意すべきこと</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">×</span>
                  <span>政治的に敏感な話題は避ける</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">×</span>
                  <span>寺廟では静粛に行動する</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">×</span>
                  <span>人を指差すのは失礼</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">×</span>
                  <span>大声で話すのは控える</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">×</span>
                  <span>日本の常識を押し付けない</span>
                </li>
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