"use client";
import React from "react";
import { motion } from "motion/react";

export type Testimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].map((_, dupIdx) => (
          <React.Fragment key={dupIdx}>
            {props.testimonials.map(({ text, image, name, role }, i) => (
              <article
                key={`${dupIdx}-${i}`}
                className="testi-card"
                aria-roledescription="testimonial"
              >
                <p className="testi-text">{text}</p>
                <div className="testi-attribution">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    className="testi-avatar"
                  />
                  <div className="testi-meta">
                    <div className="testi-name">{name}</div>
                    <div className="testi-role">{role}</div>
                  </div>
                </div>
              </article>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
