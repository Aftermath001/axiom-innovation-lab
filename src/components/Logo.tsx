import { Link } from "@tanstack/react-router";

interface LogoProps {
  className?: string;
  showWordmark?: boolean;
}

export function Logo({ className = "", showWordmark = true }: LogoProps) {
  return (
    <Link to="/" className={`group inline-flex items-center gap-2.5 ${className}`} aria-label="MetaMind home">
      <span className="relative grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-brand to-accent shadow-glow">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-primary-foreground" fill="none" aria-hidden="true">
          <path
            d="M4 18V6l4 6 4-6 4 6 4-6v12"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="12" r="1.6" fill="currentColor" />
        </svg>
        <span className="absolute inset-0 rounded-lg bg-brand/40 blur-md opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
      </span>
      {showWordmark && (
        <span className="font-display text-lg font-semibold tracking-tight text-foreground">
          Meta<span className="text-brand">Mind</span>
        </span>
      )}
    </Link>
  );
}
