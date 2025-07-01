import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mb-6">
          ページが見つかりません
        </h2>
        <p className="text-gray-500 mb-8">
          お探しのページは存在しないか、移動された可能性があります。
        </p>
        <Link href="/" className="btn-primary">
          ホームに戻る
        </Link>
      </div>
    </div>
  )
}