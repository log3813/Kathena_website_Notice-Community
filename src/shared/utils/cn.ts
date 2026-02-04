/**
 * 클래스명 병합 유틸리티
 * @description Tailwind CSS 클래스 충돌 해결을 위한 유틸리티
 */

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
