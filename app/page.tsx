export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-black text-white p-6">

      <div className="max-w-3xl text-center space-y-8">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-400 to-teal-400 pb-2">
          KATHENA
        </h1>

        <p className="text-2xl md:text-3xl font-bold text-slate-200">
          경기대학교 중앙 게임 동아리
        </p>

        <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
          더 나은 플레이 경험을 위해 새로운 플랫폼을 준비하고 있습니다.
        </p>

        <div className="mt-12 inline-flex items-center gap-3 px-8 py-4 bg-slate-800/40 rounded-2xl border border-slate-700/50 backdrop-blur-md shadow-lg shadow-blue-500/5">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
          </span>
          <span className="text-blue-100 font-semibold text-lg">
            현재 개발 진행 중입니다 🚧
          </span>
        </div>
      </div>

      <div className="absolute bottom-8 text-slate-600 text-sm font-medium">
        Coming Soon · Project Kathena
      </div>
    </main>
  );
}