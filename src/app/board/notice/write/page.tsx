'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { PostEditor } from '@/features/board/presentation/components/PostEditor';

export default function NoticeWritePage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isPinned, setIsPinned] = useState(false);
  const [files, setFiles] = useState<File[]>([]); // 👈 파일 저장소

  // 파일 선택 핸들러
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...newFiles]); // 기존 파일에 추가
    }
  };

  // 파일 삭제 핸들러
  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    if (!title || !content) {
      alert('제목과 내용을 입력해주세요!');
      return;
    }
    console.log('등록 데이터:', { title, content, isPinned, files });
    alert(`공지사항이 등록되었습니다! (첨부파일 ${files.length}개)`);
    router.push('/board/notice');
  };

  return (
    <main className="container mx-auto px-4 py-8 text-black min-h-screen max-w-4xl mt-24">
      <h1 className="text-3xl font-bold mb-6">공지사항 작성</h1>

      {/* 제목 입력 */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="제목을 입력해 주세요."
          className="w-full bg-white border border-gray-300 rounded-lg p-4 text-lg focus:outline-none focus:border-blue-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {/* 에디터 */}
      <div className="mb-6">
        <PostEditor value={content} onChange={setContent} />
      </div>

      {/* 파일 첨부 영역 */}
      <div className="mb-8">
        <label className="block text-sm font-bold text-gray-700 mb-2">첨부파일 (사진, 동영상 등)</label>
        
        {/* 드래그 앤 드롭 박스 */}
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
            accept="image/*,video/*,.pdf,.zip" // 허용 파일 형식
          />
          <p className="text-gray-500 text-lg">
            📂 <span className="font-bold text-blue-600">클릭</span>하여 파일을 추가하세요
          </p>
          <p className="text-gray-400 text-sm mt-1">또는 파일을 여기로 끌어다 놓으세요</p>
        </div>

        {/* 선택된 파일 목록 */}
        {files.length > 0 && (
          <ul className="mt-4 space-y-2">
            {files.map((file, index) => (
              <li key={index} className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-lg text-sm">
                <span className="flex items-center gap-2 text-gray-700 truncate">
                  📎 {file.name} <span className="text-gray-400 text-xs">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                </span>
                <button 
                  onClick={() => removeFile(index)} 
                  className="text-red-500 hover:text-red-700 font-bold px-2"
                >
                  삭제 ✕
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* 하단 버튼 영역 */}
      <div className="flex justify-between items-center">
        {/* 중요 공지 체크 */}
        <label className="flex items-center gap-2 cursor-pointer bg-red-50 px-4 py-2 rounded-lg hover:bg-red-100 transition-colors border border-red-100">
          <input 
            type="checkbox" 
            checked={isPinned} 
            onChange={(e) => setIsPinned(e.target.checked)}
            className="w-5 h-5 accent-red-500" 
          />
          <span className="font-bold text-red-500">📢 중요 공지로 등록</span>
        </label>

        {/* 취소 / 등록 */}
        <div className="flex gap-4">
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
      </div>
    </main>
  );
}