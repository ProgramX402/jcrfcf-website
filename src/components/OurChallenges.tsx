"use client";

import { motion } from "framer-motion";

export default function OurChallenges() {
  const challenges = [
    {
      title: "Limited Funding",
      text: "Financial constraints affect our ability to provide consistent food, healthcare, and education for every child.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-green-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 20h5V9H2v11h5m10 0a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      title: "Infrastructure Needs",
      text: "Our facilities need repairs and expansion to provide better accommodation and learning spaces for children.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-green-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 7h18M3 12h18m-7 5h7"
          />
        </svg>
      ),
    },
    {
      title: "Access to Education",
      text: "Many children come to us without prior schooling, making it challenging to integrate them into structured learning.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-green-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8c-1.657 0-3 1.343-3 3v6h6v-6c0-1.657-1.343-3-3-3z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4v1m0 14v1m8-8h1M3 12H2"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 bg-gray-100 text-center overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 text-green-700"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Our Challenges
        </motion.h2>

        <motion.p
          className="text-lg max-w-2xl mx-auto mb-12 text-gray-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          Despite our dedication to caring for orphans and vulnerable children, we face
          ongoing challenges that limit our ability to reach more lives and improve
          living conditions.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {challenges.map((ch, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: i * 0.2, // small stagger between cards
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">{ch.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{ch.title}</h3>
              <p className="text-gray-700">{ch.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
