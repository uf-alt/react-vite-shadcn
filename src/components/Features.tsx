import { motion, useReducedMotion } from "framer-motion";
import { FEATURES } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";

const MotionCard = motion(Card);

export default function Features() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="features" className="py-32 px-8 max-w-[1200px] mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16 tracking-tight">Why Choose Minimal?</h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-[600px] md:max-w-[1000px] mx-auto"
        initial={shouldReduceMotion ? {} : "hidden"}
        whileInView={shouldReduceMotion ? {} : "visible"}
        viewport={{ once: true, amount: 0.2 }}
        variants={
          shouldReduceMotion
            ? {}
            : {
                visible: { transition: { staggerChildren: 0.1 } },
              }
        }
      >
        {FEATURES.map((feature, i) => (
          <MotionCard
            key={i}
            className="bg-accent border border-transparent hover:border-border hover:scale-[1.03] transition-all group"
            variants={
              shouldReduceMotion
                ? {}
                : {
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }
            }
          >
            <CardContent className="p-12 text-center">
              <div className="text-5xl mb-6 opacity-90 transition-transform group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </CardContent>
          </MotionCard>
        ))}
      </motion.div>
    </section>
  );
}
