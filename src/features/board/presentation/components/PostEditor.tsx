'use client';

import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import 'react-quill-new/dist/quill.snow.css'; // 👈 스타일 파일 경로가 바뀌었습니다!

// 👈 라이브러리 이름이 'react-quill-new'로 바뀌었습니다!
const ReactQuill = dynamic(() => import('react-quill-new'), { 
  ssr: false,
  loading: () => <div className="h-[400px] bg-slate-50 animate-pulse rounded-lg" />
});

interface PostEditorProps {
  value: string;
  onChange: (content: string) => void;
}

export function PostEditor({ value, onChange }: PostEditorProps) {
  
  const modules = useMemo(() => ({
    toolbar: {
      container: [
        [{ 'header': [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'align': [] }],
        ['link', 'image'],
        ['clean']
      ],
    },
  }), []);

  return (
    <div className="bg-white text-black rounded-lg overflow-hidden border border-gray-300">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        className="h-[400px]"
        placeholder="내용을 입력해 주세요..."
      />
      <div className="h-12 bg-white border-t border-gray-100" />
    </div>
  );
}