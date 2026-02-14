'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // 이동 도구
import { PostEditor } from '@/features/board/presentation/components/PostEditor';

export default function WritePage() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // 등록 버튼 눌렀을 때 실행되는 함수
  const handleSubmit = () => {
    if (!title || !content) {
      alert('제목과 내용을 입력해주세요!');
      return;
    }
    
    // 나중에 서버로 데이터를 보내야 함
    console.log('전송할 데이터:', { title, content });
    
    alert('작성 완료! (실제 저장은 안 됨)');
    router.push('/board/free'); // 목록으로 이동
  };

  return (
    <main className="container mx-auto px-4 py-8 text-white min-h-screen max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">글쓰기</h1>

      {/* 제목 입력 칸 */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="제목을 입력해 주세요."
          className="w-full bg-gray-900 border border-gray-700 rounded-lg p-4 text-lg text-white focus:outline-none focus:border-blue-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {/* 에디터 */}
      <div className="mb-6 text-black">
        <PostEditor value={content} onChange={setContent} />
      </div>

      {/* 하단 버튼들 */}
      <div className="flex justify-end space-x-4">
        <button
          onClick={() => router.back()}
          className="px-6 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white font-medium"
        >
          취소
        </button>
        <button
          onClick={handleSubmit}
          className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold"
        >
          등록
        </button>
      </div>
    </main>
  );
}