'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Pagination } from '@/shared/components/ui/Pagination';

// 더?미 데이터
const MOCK_POSTS = Array.from({ length: 15 }).map((_, i) => {
  // 랜덤날짜
  const randomDay = Math.floor(Math.random() * 28) + 1;
  const dateObj = new Date(2026, 1, randomDay); // 2026년 2월 randomDay일

  return {
    id: i + 1,
    title: `자유게시판 질문입니다! ${i + 1}`,
    author: '김카테나',
    // 2. 화면에 보이는 날짜
    date: `2026. 2. ${randomDay}.`,
    // 3. 정렬할 때 쓰는 날짜
    createdAt: dateObj.getTime(),
    viewCount: Math.floor(Math.random() * 1000),
    likeCount: Math.floor(Math.random() * 100),
  };
});

type SortType = 'latest' | 'popular' | 'views';

export default function FreeBoardPage() {
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState<SortType>('latest');

  // 정렬 로직
  const sortedPosts = [...MOCK_POSTS].sort((a, b) => {
    if (sortBy === 'popular') return b.likeCount - a.likeCount; // 인기순
    if (sortBy === 'views') return b.viewCount - a.viewCount;   // 조회순
    return b.createdAt - a.createdAt; // 최신순
  });

  return (
    <main className="container mx-auto px-4 py-8 text-black min-h-screen mt-20">
      
      {/* 상단 헤더 & 정렬 버튼 */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">자유게시판</h1>
          <p className="text-gray-500">자유롭게 이야기를 나누는 공간입니다.</p>
        </div>

        <div className="flex bg-gray-100 p-1 rounded-lg">
          {[
            { id: 'latest', label: '최신순' },
            { id: 'popular', label: '인기순 🔥' },
            { id: 'views', label: '조회순 👁️' }
          ].map((type) => (
            <button
              key={type.id}
              onClick={() => setSortBy(type.id as SortType)}
              className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${
                sortBy === type.id 
                  ? 'bg-white text-blue-600 shadow-sm' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>
      </div>

      {/* 테이블  */}
      <div className="w-full overflow-hidden rounded-xl bg-[#0F172A] text-slate-200 shadow-lg">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-700/50 text-slate-400 text-sm">
              <th className="py-4 px-6 font-medium">제목</th>
              <th className="py-4 px-6 font-medium w-32 text-center">작성자</th>
              <th className="py-4 px-6 font-medium w-32 text-center">작성일</th>
              <th className="py-4 px-6 font-medium w-24 text-center">조회</th>
              <th className="py-4 px-6 font-medium w-24 text-center text-red-400">좋아요</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {sortedPosts.slice((page - 1) * 10, page * 10).map((post) => (
              <tr key={post.id} className="hover:bg-slate-800/50 transition-colors cursor-pointer text-sm">
                
                {/* 제목 */}
                <td className="py-4 px-6 font-medium text-slate-100">
                  {post.title}
                  {post.likeCount >= 50 && (
                    <span className="ml-2 bg-red-500/20 text-red-400 text-[10px] px-1.5 py-0.5 rounded font-bold align-middle border border-red-500/20">
                      HOT
                    </span>
                  )}
                </td>

                {/* 작성자 */}
                <td className="py-4 px-6 text-center text-slate-400">{post.author}</td>

                {/* 날짜 */}
                <td className="py-4 px-6 text-center text-slate-500">{post.date}</td>

                {/* 조회수 */}
                <td className="py-4 px-6 text-center text-slate-400">{post.viewCount}</td>
                
                {/* 좋아요 */}
                <td className="py-4 px-6 text-center font-bold text-red-400 flex items-center justify-center gap-1">
                  <span>♥</span> {post.likeCount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="relative mt-8 flex justify-center items-center">
        <Pagination currentPage={page} totalPages={5} onPageChange={setPage} />
        <Link 
          href="/board/free/write"
          className="absolute right-0 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-bold transition-colors text-sm flex items-center gap-2"
        >
          <span>글쓰기</span>
          <span>✏️</span>
        </Link>
      </div>
    </main>
  );
}