'use client';

import Link from 'next/link';

const quickLinks = [
    {
        label: '공지사항',
        href: '/board/notice',
        description: '새로운 소식 확인',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </svg>
        ),
    },
    {
        label: '활동내역',
        href: '/board/activity',
        description: '지난 활동 보기',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        label: '자유게시판',
        href: '/board/free',
        description: '부원들과 소통',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
        ),
    },
    {
        label: '마이페이지',
        href: '/mypage',
        description: '내 정보 관리',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
        ),
    },
];

export function QuickLinks() {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/60 card-hover">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">
                빠른 메뉴
            </h2>
            <div className="grid grid-cols-2 gap-3">
                {quickLinks.map((link) => (
                    <Link
                        key={link.label}
                        href={link.href}
                        className="group flex flex-col p-4 rounded-xl bg-slate-50 hover:bg-primary-50 border border-transparent hover:border-primary-200 transition-all duration-200"
                    >
                        <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-slate-500 group-hover:text-primary-600 group-hover:shadow-md transition-all mb-3">
                            {link.icon}
                        </div>
                        <span className="text-sm font-semibold text-slate-900 group-hover:text-primary-700 transition-colors">
                            {link.label}
                        </span>
                        <span className="text-xs text-slate-500 mt-0.5">
                            {link.description}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
}
