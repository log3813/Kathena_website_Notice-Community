'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Pagination } from '@/shared/components/ui/Pagination';

// 가짜 데이터
const MOCK_NOTICES = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  title: i < 2 ? `[공지] 공지사항 내용을 확인해주세요` : `일반 공지사항 테스트 글 ${i + 1}`,
  author: i < 2 ? '회장' : '서기',
  date: '2026. 2. 14.',
  viewCount: 11 + i * 5,
  isPinned: i < 2, 
}));

export default function NoticePage() {
  const [page, setPage] = useState(1);

  return (
    <main className="container mx-auto px-4 py-8 text-black min-h-screen mt-20"> 
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">공지사항</h1>
        <p className="text-gray-500">동아리의 주요 소식을 확인하세요.</p>
      </div>

      {/* 테이블 */}
      <div className="w-full overflow-hidden rounded-xl bg-[#0F172A] text-slate-200 shadow-lg">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-700/50 text-slate-400 text-sm">
              <th className="py-4 px-6 font-medium w-24 text-center">번호</th>
              <th className="py-4 px-6 font-medium">제목</th>
              <th className="py-4 px-6 font-medium w-32 text-center">작성자</th>
              <th className="py-4 px-6 font-medium w-32 text-center">작성일</th>
              <th className="py-4 px-6 font-medium w-24 text-center">조회수</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {MOCK_NOTICES.slice((page - 1) * 10, page * 10).map((post) => (
              <tr key={post.id} className="hover:bg-slate-800/50 transition-colors cursor-pointer text-sm">
                
                {/* 1. 번호 */}
                <td className="py-4 px-6 text-center text-slate-500">
                  {post.isPinned ? (
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold whitespace-nowrap inline-block">
                      중요
                    </span>
                  ) : (
                    post.id
                  )}
                </td>

                {/* 2. 제목 */}
                <td className="py-4 px-6 font-medium text-slate-100">
                  {post.isPinned && <span className="text-red-400 mr-2">📢</span>}
                  {post.title}
                </td>

                {/* 3. 작성자, 날짜, 조회수 */}
                <td className="py-4 px-6 text-center text-slate-400">{post.author}</td>
                <td className="py-4 px-6 text-center text-slate-500">{post.date}</td>
                <td className="py-4 px-6 text-center text-slate-400">{post.viewCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="relative mt-8 flex justify-center items-center">
        <Pagination 
          currentPage={page} 
          totalPages={5} 
          onPageChange={(newPage) => setPage(newPage)} 
        />

        <Link 
          href="/board/notice/write"
          className="absolute right-0 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-bold transition-colors text-sm flex items-center gap-2"
        >
          <span>글쓰기</span>
          <span>✏️</span>
        </Link>
      </div>
    </main>
  );
}