import { Link } from "@tanstack/react-router";
import MetaMindLogo from "@/assets/MetaMindLogo.jpeg";

interface LogoProps {
  className?: string;
  showWordmark?: boolean;
}

export function Logo({ className = "", showWordmark = true }: LogoProps) {
  return (
    <Link to="/" className={`group inline-flex items-center gap-2.5 ${className}`} aria-label="MetaMind home">
      <span className="relative grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-brand to-accent shadow-glow overflow-hidden">
        <img
          src={MetaMindLogo}
          alt="MetaMind"
          className="h-[70%] w-[70%] object-contain"
        />
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
