import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      
      {/* 1. 히어로 섹션 (KATHENA 배너) */}
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden bg-slate-900">
        {/* 배경 이미지 (실제 이미지 경로가 없다면 어두운 배경으로 대체됨) */}
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-4 tracking-tighter">KATHENA</h1>
          <p className="text-lg md:text-xl text-slate-300 font-medium mb-8">
            경기대학교 중앙 게임 동아리 <br className="md:hidden" />
            <span className="text-blue-400">함께 게임하고, 함께 성장합니다</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold transition-all transform hover:scale-105">
              지원하기
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-3 rounded-xl font-bold transition-all">
              동아리 소개
            </button>
          </div>
        </div>
      </section>

      {/* 2. 하단 대시보드 그리드 */}
      <section className="container mx-auto px-4 -mt-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* 다가오는 내전 (2칸 차지) */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-slate-800">다가오는 내전 ⚔️</h2>
              <button className="text-slate-400 text-sm hover:text-blue-600">전체보기 &gt;</button>
            </div>
            
            <div className="space-y-4">
              {[
                { game: 'LoL', title: '겨울 롤 내전', status: '모집중', date: '02.15', time: '19:00', slots: '8/50' },
                { game: 'VAL', title: '발로란트 5vs5', status: '마감임박', date: '02.22', time: '20:00', slots: '28/30' }
              ].map((match, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 rounded-lg font-bold text-xs ${match.game === 'LoL' ? 'bg-blue-100 text-blue-600' : 'bg-red-100 text-red-600'}`}>
                      {match.game}
                    </span>
                    <div>
                      <h3 className="font-bold text-slate-800">{match.title}</h3>
                      <p className="text-xs text-slate-500">🗓️ {match.date} ⏰ {match.time}</p>
                    </div>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold">참가신청</button>
                </div>
              ))}
            </div>
          </div>

          {/* 포인트 랭킹 (1칸 차지) */}
          <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">포인트 랭킹 🏆</h2>
            <div className="space-y-6">
              {[
                { rank: 1, name: '김카테나', point: '4,520', diff: '+120' },
                { rank: 2, name: '이게이머', point: '3,890', diff: '+85' },
                { rank: 3, name: '박플레이', point: '3,450', diff: '-30' },
                { rank: 4, name: '최동아리', point: '3,200', diff: '+50' }
              ].map((user) => (
                <div key={user.rank} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className={`w-6 h-6 flex items-center justify-center rounded-md font-bold text-xs ${
                      user.rank === 1 ? 'bg-yellow-400 text-white' : 'bg-slate-100 text-slate-400'
                    }`}>
                      {user.rank}
                    </span>
                    <span className="font-bold text-slate-700">{user.name}</span>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-slate-800 text-sm">{user.point}</p>
                    <p className={`text-[10px] font-bold ${user.diff.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                      {user.diff}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* 하단 바로가기 (공지사항 & 자유게시판) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <Link href="/board/notice" className="group p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-blue-500 transition-all">
            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600">공지사항 📢</h3>
            <p className="text-slate-500 text-sm">동아리의 새로운 소식을 확인하세요.</p>
          </Link>
          <Link href="/board/free" className="group p-6 bg-[#0F172A] rounded-2xl text-white shadow-sm hover:ring-2 hover:ring-blue-500 transition-all">
            <h3 className="text-xl font-bold mb-2">자유게시판 💬</h3>
            <p className="text-slate-400 text-sm">부원들과 자유롭게 이야기를 나누세요.</p>
          </Link>
        </div>
      </section>
    </main>
  );
}