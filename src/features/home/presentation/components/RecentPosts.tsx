'use client';

import Link from 'next/link';

const recentPosts = [
    {
        id: 1,
        category: '공지',
        title: '2025 1학기 정기 총회 안내',
        author: '운영진',
        time: '2시간 전',
        comments: 5,
        isNotice: true,
    },
    {
        id: 2,
        category: '자유',
        title: '발로 듀오 구합니다 실버~골드',
        author: 'Player123',
        time: '4시간 전',
        comments: 12,
        isNotice: false,
    },
    {
        id: 3,
        category: '활동',
        title: '1월 롤 내전 결과 및 포인트 지급',
        author: '운영진',
        time: '1일 전',
        comments: 8,
        isNotice: false,
    },
    {
        id: 4,
        category: '자유',
        title: '이번 주 금요일 번개 있나요?',
        author: '게임러버',
        time: '1일 전',
        comments: 23,
        isNotice: false,
    },
];

const categoryStyles: Record<string, string> = {
    '공지': 'bg-rose-50 text-rose-700 border-rose-200',
    '자유': 'bg-slate-50 text-slate-600 border-slate-200',
    '활동': 'bg-primary-50 text-primary-700 border-primary-200',
};

export function RecentPosts() {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/60">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-xl font-semibold text-slate-900">최근 게시글</h2>
                    <p className="text-sm text-slate-500 mt-1">커뮤니티 최신 소식</p>
                </div>
                <Link
                    href="/board/free"
                    className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-500 hover:text-primary-600 hover:border-primary-200 hover:bg-primary-50/50 transition-all"
                >
                    전체보기
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>

            <div className="space-y-1">
                {recentPosts.map((post) => (
                    <Link
                        key={post.id}
                        href={`/board/${post.id}`}
                        className="group flex items-center gap-4 p-4 -mx-2 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                        {/* Category Badge */}
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border ${categoryStyles[post.category]}`}>
                            {post.category}
                        </span>

                        {/* Title */}
                        <span className="flex-1 font-medium text-slate-900 group-hover:text-primary-600 transition-colors truncate">
                            {post.title}
                        </span>

                        {/* Meta */}
                        <div className="hidden sm:flex items-center gap-4 text-sm text-slate-500 flex-shrink-0">
                            <span>{post.author}</span>
                            <span className="flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                                {post.comments}
                            </span>
                            <span className="text-slate-400">{post.time}</span>
                        </div>

                        {/* Arrow */}
                        <svg className="w-5 h-5 text-slate-300 group-hover:text-primary-500 group-hover:translate-x-1 transition-all flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                ))}
            </div>
        </div>
    );
}
