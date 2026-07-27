import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
} from "./ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { serviceLinks } from "@/lib/site-data";

const primaryLinks = [
  { to: "/solutions", label: "Solutions" },
  { to: "/industries", label: "Industries" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/about", label: "About" },
  // { to: "/blog", label: "Blog" },
  // { to: "/careers", label: "Careers" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/70 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide flex h-16 items-center justify-between gap-6">
        <Logo />

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-sm font-medium text-foreground/80 data-[state=open]:text-foreground">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[640px] grid-cols-2 gap-1 p-4">
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      className="group flex gap-3 rounded-lg p-3 transition-colors hover:bg-secondary/60"
                    >
                      <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-md bg-brand/10 text-brand ring-1 ring-brand/20">
                        <s.icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-medium text-foreground group-hover:text-brand">
                          {s.title}
                        </span>
                        <span className="mt-0.5 block text-xs text-muted-foreground line-clamp-2">
                          {s.summary}
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {primaryLinks.map((l) => (
              <NavigationMenuItem key={l.to}>
                <Link
                  to={l.to}
                  className="inline-flex h-9 items-center px-3 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                  activeProps={{ className: "text-foreground" }}
                >
                  {l.label}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild variant="ghost" size="sm">
            <Link to="/contact">Contact</Link>
          </Button>
          <Button asChild size="sm" variant="brand">
            <Link to="/consultation">Book Consultation</Link>
          </Button>
        </div>

        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm border-l border-border/60 bg-ink p-0">
              <SheetHeader className="border-b border-border/60 p-4">
                <SheetTitle className="flex items-center justify-between">
                  <Logo />
                  <Button variant="ghost" size="icon" aria-label="Close menu" onClick={() => setOpen(false)}>
                    <X className="h-5 w-5" />
                  </Button>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col p-4">
                <details className="group border-b border-border/60 py-3">
                  <summary className="flex cursor-pointer items-center justify-between text-base font-medium">
                    Services
                    <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="mt-2 flex flex-col gap-1 pl-1">
                     {serviceLinks.map((s) => (
                       <Link
                         key={s.slug}
                         to={`/services/${s.slug}`}
                         className="rounded-md px-2 py-2 text-sm text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
                         onClick={() => setOpen(false)}
                       >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </details>
                {primaryLinks.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="border-b border-border/60 py-3 text-base font-medium"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="border-b border-border/60 py-3 text-base font-medium"
                  onClick={() => setOpen(false)}
                >
                  Contact
                </Link>
                <div className="pt-4">
                  <Button asChild variant="brand" className="w-full">
                    <Link to="/consultation" onClick={() => setOpen(false)}>
                      Book Consultation
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
