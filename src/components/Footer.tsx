import { FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <footer id="contact" className="py-16 px-8 text-center border-t border-border">
      <div className="flex gap-8 justify-center mb-8 flex-wrap">
        {FOOTER_LINKS.map((link, i) => (
          <a
            key={i}
            href={link.href}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
      <div className="flex gap-4 justify-center mb-8">
        {SOCIAL_LINKS.map((social, i) => (
          <a
            key={i}
            href={social.href}
            aria-label={social.label}
            className={cn(
              "w-10 h-10 rounded-full border border-border",
              "flex items-center justify-center",
              "text-muted-foreground hover:bg-accent hover:text-foreground",
              "transition-all"
            )}
          >
            {social.icon}
          </a>
        ))}
      </div>
      <p className="text-muted-foreground text-sm">© 2025 Minimal. All rights reserved.</p>
    </footer>
  );
}
