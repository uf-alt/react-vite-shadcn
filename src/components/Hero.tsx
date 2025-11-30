import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-8 pt-32 pb-16 text-center relative overflow-hidden"
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
      animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated Rainbow Gradient Background */}
      <div
        className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] -z-10"
        style={{
          background: `linear-gradient(
            45deg,
            rgba(255, 182, 193, 0.3),
            rgba(255, 218, 185, 0.3),
            rgba(255, 255, 186, 0.3),
            rgba(186, 255, 201, 0.3),
            rgba(186, 225, 255, 0.3),
            rgba(219, 186, 255, 0.3),
            rgba(255, 182, 193, 0.3)
          )`,
          backgroundSize: "200% 200%",
          animation: "rainbowShift 15s ease infinite",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] -z-10 dark:block hidden"
        style={{
          background: `linear-gradient(
            45deg,
            rgba(255, 182, 193, 0.15),
            rgba(255, 218, 185, 0.15),
            rgba(255, 255, 186, 0.15),
            rgba(186, 255, 201, 0.15),
            rgba(186, 225, 255, 0.15),
            rgba(219, 186, 255, 0.15),
            rgba(255, 182, 193, 0.15)
          )`,
          backgroundSize: "200% 200%",
          animation: "rainbowShift 15s ease infinite",
          filter: "blur(80px)",
        }}
      />

      <h1
        className={cn(
          "text-6xl md:text-7xl font-bold tracking-tight leading-tight mb-6 max-w-[800px]",
          "bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent"
        )}
      >
        Simple. Clean. Focused.
      </h1>
      <p className="text-xl text-muted-foreground max-w-[600px] mb-12 leading-relaxed">
        <s>Experience the power of minimalism. Less is more, and every pixel serves a purpose.</s>
        <br></br>experience our minimalism or something..
        more pixels serve more purpose.
      </p>
      <Button size="lg" onClick={() => scrollToSection("pokemon")}>
        Get Started
      </Button>
    </motion.section>
  );
}
