const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">台湾旅行ガイド</h3>
            <p className="text-gray-300">
              美しい台湾の魅力を発見し、素晴らしい旅の思い出を作りましょう。
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">観光情報</h4>
            <ul className="space-y-2 text-gray-300">
              <li>花蓮・太魯閣</li>
              <li>台東・知本</li>
              <li>台北・九份</li>
              <li>台南・安平</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">旅行ガイド</h4>
            <ul className="space-y-2 text-gray-300">
              <li>台湾高速鉄道</li>
              <li>文化と習慣</li>
              <li>グルメガイド</li>
              <li>交通アクセス</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 台湾旅行ガイド. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer