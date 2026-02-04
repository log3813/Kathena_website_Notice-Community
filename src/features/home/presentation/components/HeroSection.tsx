'use client';

import Image from 'next/image';

export function HeroSection() {
    return (
        <section className="relative h-[65vh] min-h-[480px] max-h-[640px] rounded-[2.5rem] overflow-hidden mb-12 shadow-2xl shadow-primary-900/10">
            {/* Background Image */}
            <Image
                src="/images/main.png"
                alt="KATHENA"
                fill
                className="object-cover scale-105"
                priority
            />

            {/* Refined Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent" />

            {/* Accent Glow */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary-500/10 to-transparent opacity-60 mix-blend-overlay" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 max-w-4xl">
                <div className="space-y-2 animate-fade-up">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.1]">
                        KATHENA
                    </h1>
                    <p className="text-lg md:text-2xl text-slate-200 font-medium tracking-wide max-w-xl leading-relaxed opacity-90">
                        경기대학교 중앙 게임 동아리<br />
                        <span className="text-primary-300">함께 게임하고, 함께 성장합니다</span>
                    </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.1s' }}>
                    <button className="px-8 py-3.5 bg-primary-600 hover:bg-primary-500 text-white rounded-2xl font-bold transition-all shadow-lg hover:shadow-primary-500/30 hover:-translate-y-0.5">
                        지원하기
                    </button>
                    <button className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md rounded-2xl font-semibold transition-all border border-white/10 hover:-translate-y-0.5">
                        동아리 소개
                    </button>
                </div>
            </div>
        </section>
    );
}
