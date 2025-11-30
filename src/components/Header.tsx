import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";
import { cn } from "@/lib/utils";
import { FOOTER_LINKS } from "@/lib/constants";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[100]",
        "flex justify-between items-center",
        "p-8 border-b transition-all duration-300",
        scrolled
          ? "bg-background/95 border-border shadow-lg backdrop-blur-none"
          : "bg-transparent border-transparent backdrop-blur-md"
      )}
    >
      <div className="text-xl font-semibold tracking-tight">Minimal</div>

      <nav className="hidden md:flex gap-8">
        {FOOTER_LINKS.map((link, i) => (
          <a
            key={i}
            href={link.href}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <Button variant="outline" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
        {theme === "dark" ? "🌙" : "☀️"}
      </Button>
    </header>
  );
}
