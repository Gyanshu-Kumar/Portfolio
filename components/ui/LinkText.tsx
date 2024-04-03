import { cn } from '@/lib/utils';
import Link, { LinkProps } from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface LinkTextProps extends LinkProps {
  children?: React.ReactNode;
  className?: string;
  target?: '_blank' | '_parent' | '_self' | '_top';
}

const LinkText: React.FunctionComponent<LinkTextProps> = ({
  className,
  target,
  ...attr
}) => {
  return (
    <Link
      className={cn(
        'flex flex-row items-center justify-start gap-0.5 text-base font-medium transition-all text-zinc-900 hover:text-zinc-700 hover:gap-1 active:text-orange-500',
        className,
      )}
      {...attr}
      target={target}>
      <span className="link-text-content-wrapper">{attr?.children}</span>
      <ArrowUpRight className="w-4" />
    </Link>
  );
};

export default LinkText;
