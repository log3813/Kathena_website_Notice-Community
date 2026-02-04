import { cn } from '@/shared/utils';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
    glow?: 'blue' | 'purple' | 'green' | 'orange' | 'none';
}

export function Card({ children, className, hover = true, glow = 'none' }: CardProps) {
    const glowStyles = {
        blue: 'hover:shadow-blue-500/20',
        purple: 'hover:shadow-purple-500/20',
        green: 'hover:shadow-green-500/20',
        orange: 'hover:shadow-orange-500/20',
        none: '',
    };

    return (
        <div
            className={cn(
                'relative rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 overflow-hidden',
                hover && 'transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-slate-600/50',
                glowStyles[glow],
                className
            )}
        >
            {children}
        </div>
    );
}

interface CardHeaderProps {
    children: React.ReactNode;
    className?: string;
}

export function CardHeader({ children, className }: CardHeaderProps) {
    return <div className={cn('p-6 pb-0', className)}>{children}</div>;
}

interface CardContentProps {
    children: React.ReactNode;
    className?: string;
}

export function CardContent({ children, className }: CardContentProps) {
    return <div className={cn('p-6', className)}>{children}</div>;
}
