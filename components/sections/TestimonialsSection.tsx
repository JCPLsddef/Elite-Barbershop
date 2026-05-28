"use client";

import { motion } from "motion/react";
import { BUSINESS } from "@/lib/constants";
import {
  TestimonialsColumn,
  type Testimonial,
} from "@/components/ui/testimonials-columns-1";

import "@/components/sections/testimonials/styles.css";

// ─────────────────────────────────────────────────────────────────────
// Real Google review names from elitebyhadi.com — with luxury-barbershop
// quotes written in their voice. Swap with actual review copy + photos
// when available.
// ─────────────────────────────────────────────────────────────────────

const TESTIMONIALS: Testimonial[] = [
  {
    text: "Outstanding service and a true luxury experience! I went for the first time and Hadi did not disappoint. Sharpest cut I've had in years.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Jason Khalil",
    role: "Laval",
  },
  {
    text: "Walked in scruffy, walked out feeling like a new man. The attention to detail is unreal — beard line-up, hot towel, the works. Worth every dollar.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    name: "Hiten Patel",
    role: "Regular client",
  },
  {
    text: "Hadi takes his time. You can feel he cares about the cut. Best barbershop in Chomedey — clean, professional, premium.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    name: "Zack Corie",
    role: "Local resident",
  },
  {
    text: "Brought my son here for his first big haircut. Hadi was patient, friendly, and the result was perfect. We're now both regulars.",
    image: "https://randomuser.me/api/portraits/men/61.jpg",
    name: "Eric Tiganasu",
    role: "Dad of two",
  },
  {
    text: "I drove 40 minutes for this cut and I'd do it again. Atmosphere is on another level. Premium experience without being pretentious.",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    name: "Bill Buffalo",
    role: "Montréal client",
  },
  {
    text: "Best fade I've ever had. Clean lines, perfect beard sculpt, and the hot towel finish is the cherry on top. Highly recommend.",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    name: "Marien Meriaux",
    role: "Weekly regular",
  },
  {
    text: "Booked a VIP for my brother's wedding. Worth every penny. Felt taken care of from the moment I sat in the chair until I left.",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    name: "Jad",
    role: "VIP guest",
  },
  {
    text: "Honestly the cleanest, sharpest barbershop in Laval. Hadi listens, asks the right questions, and delivers exactly what you want.",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
    name: "Alex",
    role: "First-time client",
  },
  {
    text: "Service, ambiance, precision — everything is on point. You can tell this is built on standards, not just a haircut. Loyal customer for life.",
    image: "https://randomuser.me/api/portraits/women/40.jpg",
    name: "Maha TR",
    role: "Booked for partner",
  },
];

const firstColumn = TESTIMONIALS.slice(0, 3);
const secondColumn = TESTIMONIALS.slice(3, 6);
const thirdColumn = TESTIMONIALS.slice(6, 9);

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="elite-testimonials"
      aria-label="Client testimonials"
    >
      <div className="elite-testimonials-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="elite-testimonials-header"
        >
          <span className="elite-testimonials-eyebrow">
            <span className="elite-testimonials-rule" />
            Testimonials
            <span className="elite-testimonials-rule" />
          </span>

          <h2 className="elite-testimonials-title">
            What our <em>clients</em> say.
          </h2>

          <p className="elite-testimonials-sub">
            {BUSINESS.ratings.count}+ five-star Google reviews from Laval,
            Chomedey, and beyond.
          </p>
        </motion.div>

        <div className="elite-testimonials-columns">
          <TestimonialsColumn testimonials={firstColumn} duration={20} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={24}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={22}
          />
        </div>
      </div>
    </section>
  );
}
