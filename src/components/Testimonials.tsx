import { motion, useReducedMotion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-32 px-8 bg-accent">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 tracking-tight">What People Say</h2>
        {TESTIMONIALS.map((testimonial, i) => (
          <motion.div
            key={i}
            className="text-center py-12 px-8"
            initial={shouldReduceMotion ? {} : { opacity: 0 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <p className="text-2xl leading-relaxed mb-8 italic">"{testimonial.text}"</p>
            <p className="text-muted-foreground">
              — {testimonial.author}, {testimonial.role}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
