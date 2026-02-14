'use client';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  // 페이지 번호 배열 만들기 (예: [1, 2, 3, 4, 5])
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center space-x-2 mt-8">
      {/* 이전 버튼 */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded bg-gray-800 text-white disabled:opacity-50 hover:bg-gray-700 disabled:cursor-not-allowed"
      >
        &lt;
      </button>

      {/* 페이지 번호들 */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 rounded transition-colors ${
            currentPage === page
              ? 'bg-blue-600 text-white font-bold' // 현재 페이지
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700' // 다른 페이지
          }`}
        >
          {page}
        </button>
      ))}

      {/* 다음 버튼 */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded bg-gray-800 text-white disabled:opacity-50 hover:bg-gray-700 disabled:cursor-not-allowed"
      >
        &gt;
      </button>
    </div>
  );
}