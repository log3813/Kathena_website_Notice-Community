'use client';

import Link from 'next/link';

const pointRanking = [
    { rank: 1, name: '김카테나', points: 4520, change: '+120' },
    { rank: 2, name: '이게이머', points: 3890, change: '+85' },
    { rank: 3, name: '박플레이', points: 3450, change: '-30' },
    { rank: 4, name: '최동아리', points: 3200, change: '+50' },
    { rank: 5, name: '정부원', points: 2980, change: '+15' },
];

const rankStyles: Record<number, string> = {
    1: 'bg-gradient-to-r from-amber-400 to-amber-500 text-white shadow-lg shadow-amber-200',
    2: 'bg-gradient-to-r from-slate-300 to-slate-400 text-white shadow-lg shadow-slate-200',
    3: 'bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-lg shadow-amber-200',
};

export function PointRanking() {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/60 card-hover">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-slate-900">포인트 랭킹</h2>
                <Link
                    href="/ranking"
                    className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-500 hover:text-primary-600 hover:border-primary-200 hover:bg-primary-50/50 transition-all"
                >
                    전체보기
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>

            <div className="space-y-2">
                {pointRanking.map((user) => (
                    <div
                        key={user.rank}
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                        {/* Rank Badge */}
                        <div
                            className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 ${rankStyles[user.rank] || 'bg-slate-100 text-slate-600'
                                }`}
                        >
                            {user.rank}
                        </div>

                        {/* User Info */}
                        <div className="flex-1 min-w-0">
                            <div className="font-medium text-slate-900 truncate">
                                {user.name}
                            </div>
                        </div>

                        {/* Points */}
                        <div className="text-right flex-shrink-0">
                            <div className="font-semibold text-slate-900">
                                {user.points.toLocaleString()}
                            </div>
                            <div className={`text-xs font-medium ${user.change.startsWith('+') ? 'text-emerald-600' : 'text-rose-600'
                                }`}>
                                {user.change}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
