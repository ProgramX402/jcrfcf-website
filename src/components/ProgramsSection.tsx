"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function ProgramsSection() {
  // Animation variants for staggering
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between cards
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 80 }, // Fly in from bottom
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 60,
        damping: 12,
        duration: 0.8,
      },
    },
  };

  return (
    <section className="py-16 bg-green-700 text-center text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Our Programs
        </motion.h2>

        {/* Grid Animation Container */}
        <motion.div
          className="grid md:grid-cols-3 gap-10 mb-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            {
              img: "/assets/images/feeding.jpg",
              title: "Shelter & Care",
              text: "We provide safe and loving homes for children who have lost their families.",
            },
            {
              img: "/assets/images/education.jpg",
              title: "Education",
              text: "Access to quality education ensures children have a brighter future ahead.",
            },
            {
              img: "/assets/images/healthcare.jpg",
              title: "Healthcare",
              text: "We ensure every child receives proper medical care and emotional support.",
            },
          ].map((prog, i) => (
            <motion.div
              key={i}
              className="p-6 shadow-lg rounded-lg bg-green-600 hover:bg-green-500 transition transform hover:scale-105"
              variants={item}
            >
              <div className="relative h-16 w-16 mx-auto mb-4">
                <Image
                  src={prog.img}
                  alt={prog.title}
                  fill
                  className="object-contain rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">{prog.title}</h3>
              <p>{prog.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.a
          href="/programs"
          className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold inline-block"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 4px 20px rgba(255,255,255,0.3)",
          }}
          viewport={{ once: true }}
        >
          View More
        </motion.a>
      </div>
    </section>
  );
}
