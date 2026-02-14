'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { PostEditor } from '@/features/board/presentation/components/PostEditor';

export default function FreeWritePage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState<File[]>([]);

  // 파일 선택
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles((prev) => [...prev, ...Array.from(e.target.files!)]);
    }
  };

  // 파일 삭제
  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    if (!title || !content) {
      alert('제목과 내용을 입력해주세요!');
      return;
    }
    console.log('작성된 글:', { title, content, files });
    alert(`작성 완료! (파일 ${files.length}개 첨부됨)`);
    router.push('/board/free');
  };

  return (
    <main className="container mx-auto px-4 py-8 text-black min-h-screen max-w-4xl mt-24">
      <h1 className="text-3xl font-bold mb-6">자유게시판 글쓰기</h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="제목을 입력해 주세요."
          className="w-full bg-white border border-gray-300 rounded-lg p-4 text-lg focus:outline-none focus:border-blue-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="mb-6">
        <PostEditor value={content} onChange={setContent} />
      </div>

      <div className="mb-8">
        <label className="block text-sm font-bold text-gray-700 mb-2">첨부파일 (사진, 동영상 등)</label>
        
        <div 
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer bg-white"
        >
          <input 
            type="file" 
            multiple 
            hidden 
            ref={fileInputRef} 
            onChange={handleFileChange} 
          />
          <p className="text-gray-500 text-lg">
            📂 <span className="font-bold text-blue-600">클릭</span>하여 파일을 추가하세요
          </p>
          <p className="text-gray-400 text-sm mt-1">또는 파일을 여기로 끌어다 놓으세요</p>
        </div>

        {/* 파일 목록 */}
        {files.length > 0 && (
          <ul className="mt-4 space-y-2">
            {files.map((file, index) => (
              <li key={index} className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-lg text-sm">
                <span className="flex items-center gap-2 text-gray-700 truncate">
                  📎 {file.name} <span className="text-gray-400 text-xs">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                </span>
                <button onClick={() => removeFile(index)} className="text-red-500 hover:text-red-700 font-bold px-2">
                  삭제 ✕
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* 버튼 영역 */}
      <div className="flex justify-end space-x-4">
        <button
          onClick={() => router.back()}
          className="px-6 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium"
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