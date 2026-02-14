import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* ... 기존 헤더/히어로 섹션 ... */}

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* 1. 공지사항 카드 연결 */}
          <Link href="/board/notice" className="group">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-500 transition-all cursor-pointer">
              <h2 className="text-2xl font-bold mb-4 group-hover:text-blue-600">공지사항 📢</h2>
              <p className="text-gray-500">동아리의 새로운 소식을 가장 먼저 확인하세요.</p>
            </div>
          </Link>

          {/* 2. 자유게시판 카드 연결 */}
          <Link href="/board/free" className="group">
            <div className="bg-[#0F172A] p-8 rounded-2xl shadow-sm text-white hover:ring-2 hover:ring-blue-500 transition-all cursor-pointer">
              <h2 className="text-2xl font-bold mb-4">자유게시판 💬</h2>
              <p className="text-slate-400">부원들과 자유롭게 이야기를 나누는 공간입니다.</p>
            </div>
          </Link>

        </div>
      </div>
    </main>
  );
}