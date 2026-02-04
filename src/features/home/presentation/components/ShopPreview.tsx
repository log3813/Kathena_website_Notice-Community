'use client';

import Link from 'next/link';
import Image from 'next/image';

// 임시 데이터 이미지랑 매칭 안됨
const shopItems = [
    {
        id: 1,
        name: '아메리카노',
        price: 500,
        stock: 12,
        image: '/images/1.webp',
        desc: '시험기간 필수템'
    },
    {
        id: 2,
        name: '문화상품권 5천원',
        price: 5000,
        stock: 5,
        image: '/images/2.jpg',
        desc: '다양한 곳에서 사용 가능'
    },
    {
        id: 3,
        name: '랜덤박스',
        price: 1000,
        stock: 20,
        image: '/images/3.png',
        desc: '무엇이 나올까요?'
    },
    {
        id: 4,
        name: '굿즈 스티커팩',
        price: 300,
        stock: 50,
        image: '/images/1.webp', 
        desc: '노트북 꾸미기 딱'
    },
];

export function ShopPreview() {
    return (
        <section className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-xl font-semibold text-slate-900">포인트샵</h2>
                    <p className="text-sm text-slate-500 mt-1">열심히 모은 포인트로 원하는 상품을 GET하세요!</p>
                </div>

                <Link
                    href="/shop"
                    className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-500 hover:text-primary-600 hover:border-primary-200 hover:bg-primary-50/50 transition-all"
                >
                    전체보기
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {shopItems.map((item) => (
                    <div
                        key={item.id}
                        className="group bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:border-primary-200 transition-all duration-300 cursor-pointer"
                    >
                        {/* Image Area */}
                        <div className="relative aspect-square rounded-xl bg-slate-50 mb-4 overflow-hidden group-hover:bg-primary-50/30 transition-colors">
                            <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            {/* Overlay Badge */}
                            {item.stock <= 5 && (
                                <div className="absolute top-2 left-2 px-2 py-1 bg-rose-500 text-white text-[10px] font-bold rounded-lg shadow-sm">
                                    품절임박
                                </div>
                            )}
                        </div>

                        {/* Content */}
                        <div>
                            <div className="text-xs text-slate-400 mb-1 truncate">{item.desc}</div>
                            <h3 className="text-slate-900 font-bold mb-2 truncate group-hover:text-primary-600 transition-colors">
                                {item.name}
                            </h3>
                            <div className="flex items-center justify-between">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-lg font-bold text-primary-600">{item.price.toLocaleString()}</span>
                                    <span className="text-xs text-slate-400 font-medium">P</span>
                                </div>
                                <button className="w-8 h-8 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
