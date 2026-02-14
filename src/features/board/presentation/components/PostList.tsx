'use client';

import Link from 'next/link';

export interface Post {
  id: number;
  title: string;
  content: string;
  author: {
    id: number;
    nickname: string;
    profileImage?: string;
  };
  thumbnailUrl?: string;
  viewCount: number;
  likeCount: number;
  createdAt: string;
  type: 'NOTICE' | 'FREE';
  isPinned?: boolean; // ✨ 추가됨: 상단 고정 여부 (중요 공지)
}

interface PostListProps {
  posts: Post[];
  boardType: 'NOTICE' | 'FREE';
}

export function PostList({ posts, boardType }: PostListProps) {
  // 📌 고정된 글(중요 공지)과 일반 글 분리하기
  const pinnedPosts = posts.filter((post) => post.isPinned);
  const normalPosts = posts.filter((post) => !post.isPinned);

  // 1. 자유게시판 (FREE) - 카드 형태
  if (boardType === 'FREE') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 중요 글이 자유게시판에 있다면 먼저 보여줌 (선택사항) */}
        {pinnedPosts.map((post) => (
          <PostCard key={post.id} post={post} isPinned={true} />
        ))}
        {normalPosts.map((post) => (
          <PostCard key={post.id} post={post} isPinned={false} />
        ))}
      </div>
    );
  }

  // 2. 공지사항 (NOTICE) - 리스트 형태
  return (
    <div className="w-full bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-gray-800 text-gray-300">
          <tr>
            <th className="p-4 w-20 text-center">번호</th>
            <th className="p-4">제목</th>
            <th className="p-4 w-32 text-center">작성자</th>
            <th className="p-4 w-32 text-center">작성일</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          {/* 🌟 중요 공지 먼저 출력 (배경색 다르게) */}
          {pinnedPosts.map((post) => (
            <NoticeRow key={post.id} post={post} isPinned={true} />
          ))}
          {/* 일반 공지 출력 */}
          {normalPosts.map((post) => (
            <NoticeRow key={post.id} post={post} isPinned={false} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

// (내부용) 공지사항 한 줄 컴포넌트
function NoticeRow({ post, isPinned }: { post: Post; isPinned: boolean }) {
  return (
    <tr className={`transition-colors ${isPinned ? 'bg-gray-800/80' : 'hover:bg-gray-800/50'}`}>
      <td className="p-4 text-center">
        {isPinned ? (
          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
            필독
          </span>
        ) : (
          <span className="text-gray-500">{post.id}</span>
        )}
      </td>
      <td className="p-4">
        <Link href={`/board/notice/${post.id}`} className="text-white hover:text-blue-400 flex items-center gap-2">
           {/* 중요 공지면 제목 앞에 아이콘 추가 */}
          {isPinned && <span className="text-red-400">📢</span>}
          <span className={isPinned ? 'font-bold text-gray-100' : ''}>{post.title}</span>
        </Link>
      </td>
      <td className="p-4 text-center text-gray-400">{post.author.nickname}</td>
      <td className="p-4 text-center text-gray-500">
        {new Date(post.createdAt).toLocaleDateString()}
      </td>
    </tr>
  );
}

// (내부용) 자유게시판 카드 컴포넌트
function PostCard({ post, isPinned }: { post: Post; isPinned: boolean }) {
  return (
    <Link href={`/board/free/${post.id}`} className="block group">
      <div className={`bg-gray-900 border rounded-lg overflow-hidden transition-colors ${isPinned ? 'border-red-500/50' : 'border-gray-800 hover:border-blue-500'}`}>
        <div className="aspect-video bg-gray-800 relative">
          {isPinned && (
             <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded font-bold z-10">
               공지
             </div>
          )}
          {post.thumbnailUrl ? (
            <img src={post.thumbnailUrl} alt={post.title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-600">No Image</div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 truncate">
            {post.title}
          </h3>
          <div className="flex justify-between text-sm text-gray-400">
            <span>{post.author.nickname}</span>
            <span>{new Date(post.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}