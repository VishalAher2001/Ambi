import { Link } from 'react-router-dom';

interface CtaButtonProps {
  label: string;
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'outline' | 'dark' | 'light';
  size?: 'md' | 'lg';
  className?: string;
}

function ChevronSvg() {
  return (
    <svg
      className="cta-chevron"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4.5 2.5 8 6l-3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CtaButton({
  label,
  to,
  href,
  onClick,
  type = 'button',
  disabled = false,
  variant = 'primary',
  size = 'md',
  className = '',
}: CtaButtonProps) {
  const variantClass =
    variant === 'secondary'
      ? 'ambilux-cta-secondary'
      : variant === 'outline'
        ? 'ambilux-cta-outline'
        : '';

  const classes = [
    'ambilux-cta focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00943e]',
    variantClass,
    size === 'lg' ? 'ambilux-cta-lg' : '',
    disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      <span>{label}</span>
      <span className="cta-dot" aria-hidden="true">
        <ChevronSvg />
      </span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {content}
    </button>
  );
}
