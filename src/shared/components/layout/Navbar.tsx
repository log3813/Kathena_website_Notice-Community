'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/shared/utils';

const navLinks = [
    { href: '/board/notice', label: '공지사항', en: 'Notice' },
    { href: '/event', label: '내전', en: 'Event' },
    { href: '/shop', label: '포인트샵', en: 'Shop' },
    { href: '/board/free', label: '커뮤니티', en: 'Community' },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header
                className={cn(
                    'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]',
                    scrolled ? 'h-16' : 'h-24'
                )}
            >
                {/* Dynamic Background */}
                <div
                    className={cn(
                        "absolute inset-0 transition-all duration-500 ease-out border-b backdrop-blur-md",
                        scrolled
                            ? "bg-white/80 border-slate-200/60 shadow-sm"
                            : "bg-transparent border-transparent"
                    )}
                />

                <nav className="relative h-full max-w-7xl mx-auto px-6 flex items-center justify-between">

                    {/* Logo Area */}
                    <Link href="/" className="group flex items-center gap-3 relative z-10 p-2">
                        <div className="relative w-10 h-10 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:rotate-12 group-hover:scale-110">
                            <Image
                                src="/images/logo.png"
                                alt="KATHENA"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className={cn(
                                "text-xl font-black tracking-tight leading-none transition-colors duration-300",
                                scrolled ? "text-slate-900" : "text-slate-900/90"
                            )}>
                                KATHENA
                            </span>
                            <span className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                Gaming Club
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8 relative z-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="relative group/link py-2"
                            >
                                <span className="text-[15px] font-bold text-slate-600 transition-colors duration-300 group-hover/link:text-primary-600">
                                    {link.label}
                                </span>
                                {/* Underline Animation */}
                                <span className="absolute bottom-0 left-0 w-0 h-[2.5px] bg-primary-600 transition-all duration-300 ease-out group-hover/link:w-full rounded-full" />
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Auth Buttons */}
                    <div className="hidden md:flex items-center gap-4 relative z-10">
                        <Link
                            href="/login"
                            className="text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors px-4 py-2"
                        >
                            로그인
                        </Link>

                        <Link
                            href="/signup"
                            className="px-6 py-2.5 rounded-xl bg-primary-600 text-white text-sm font-bold hover:bg-primary-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
                        >
                            회원가입
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden relative z-50 w-12 h-12 flex items-center justify-center rounded-2xl transition-colors hover:bg-slate-100"
                    >
                        <div className="flex flex-col gap-[5px]">
                            <span className={cn(
                                "w-6 h-0.5 bg-slate-800 rounded-full transition-all duration-300",
                                isOpen && "rotate-45 translate-y-2"
                            )} />
                            <span className={cn(
                                "w-6 h-0.5 bg-slate-800 rounded-full transition-all duration-300",
                                isOpen && "opacity-0"
                            )} />
                            <span className={cn(
                                "w-6 h-0.5 bg-slate-800 rounded-full transition-all duration-300",
                                isOpen && "-rotate-45 -translate-y-2"
                            )} />
                        </div>
                    </button>
                </nav>

                {/* Mobile Full Screen Menu */}
                <div
                    className={cn(
                        'fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl transition-all duration-500 cubic-bezier(0.19,1,0.22,1)',
                        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
                    )}
                >
                    <div className="h-full flex flex-col justify-center px-8 z-50">
                        <div className="space-y-6">
                            {navLinks.map((link, idx) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "block text-4xl font-black text-slate-900 hover:text-primary-600 transition-colors translate-y-4 opacity-0",
                                        isOpen && "animate-fade-up-stagger"
                                    )}
                                    style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'forwards' }}
                                >
                                    {link.label}
                                    <span className="text-lg font-medium text-slate-300 ml-4 font-sans tracking-tight">
                                        {link.en}
                                    </span>
                                </Link>
                            ))}
                        </div>

                        <div className="mt-12 flex flex-col gap-4">
                            <Link
                                href="/signup"
                                onClick={() => setIsOpen(false)}
                                className="w-full py-4 text-center text-lg font-bold text-white bg-slate-900 rounded-2xl shadow-xl shadow-slate-900/20 active:scale-95 transition-transform"
                            >
                                회원가입하고 시작하기
                            </Link>
                            <Link
                                href="/login"
                                onClick={() => setIsOpen(false)}
                                className="w-full py-4 text-center text-lg font-semibold text-slate-500 hover:text-slate-900 active:scale-95 transition-transform"
                            >
                                이미 계정이 있으신가요?
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
