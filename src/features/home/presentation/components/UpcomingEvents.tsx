'use client';

import Link from 'next/link';

const upcomingEvents = [
    {
        id: 1,
        game: 'League of Legends',
        gameShort: 'LoL',
        title: '겨울 롤 내전',
        date: '02.15',
        time: '19:00',
        spots: { current: 8, max: 50 },
        status: 'open',
    },
    {
        id: 2,
        game: 'VALORANT',
        gameShort: 'VAL',
        title: '발로란트 5vs5',
        date: '02.22',
        time: '20:00',
        spots: { current: 28, max: 30 },
        status: 'closing',
    },
];

const gameColors: Record<string, { bg: string; text: string; border: string }> = {
    LoL: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
    VAL: { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200' },
};

export function UpcomingEvents() {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/60">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-xl font-semibold text-slate-900">다가오는 내전</h2>
                    <p className="text-sm text-slate-500 mt-1">참가 신청하고 함께 플레이하세요</p>
                </div>
                <Link
                    href="/event"
                    className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-500 hover:text-primary-600 hover:border-primary-200 hover:bg-primary-50/50 transition-all"
                >
                    전체보기
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>

            <div className="space-y-4">
                {upcomingEvents.map((event) => {
                    const colors = gameColors[event.gameShort] || gameColors.LoL;
                    const fillPercentage = (event.spots.current / event.spots.max) * 100;

                    return (
                        <div
                            key={event.id}
                            className="group relative p-5 rounded-xl border border-slate-200 hover:border-primary-300 hover:shadow-lg hover:shadow-primary-100/50 transition-all duration-300 cursor-pointer"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                                {/* Game Badge */}
                                <div className={`w-14 h-14 rounded-xl ${colors.bg} ${colors.border} border flex items-center justify-center flex-shrink-0`}>
                                    <span className={`text-lg font-bold ${colors.text}`}>
                                        {event.gameShort}
                                    </span>
                                </div>

                                {/* Event Info */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="font-semibold text-slate-900 group-hover:text-primary-600 transition-colors">
                                            {event.title}
                                        </h3>
                                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${event.status === 'open'
                                            ? 'bg-emerald-50 text-emerald-700'
                                            : 'bg-amber-50 text-amber-700'
                                            }`}>
                                            {event.status === 'open' ? '모집중' : '마감임박'}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-4 text-sm text-slate-500">
                                        <span className="flex items-center gap-1.5">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            {event.date}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            {event.time}
                                        </span>
                                    </div>
                                </div>

                                {/* Spots & CTA */}
                                <div className="flex items-center gap-4 sm:flex-col sm:items-end">
                                    <div className="flex-1 sm:flex-none sm:text-right">
                                        <div className="text-sm font-semibold text-slate-900">
                                            {event.spots.current}/{event.spots.max}명
                                        </div>
                                        <div className="w-24 h-1.5 bg-slate-100 rounded-full mt-1.5 overflow-hidden">
                                            <div
                                                className={`h-full rounded-full transition-all ${fillPercentage > 80 ? 'bg-amber-500' : 'bg-primary-500'
                                                    }`}
                                                style={{ width: `${fillPercentage}%` }}
                                            />
                                        </div>
                                    </div>
                                    <button className="px-5 py-2.5 bg-primary-600 text-white text-sm font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 hover:-translate-y-0.5">
                                        참가신청
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
