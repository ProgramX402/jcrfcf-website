"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ChildSpotlight() {
  // Full text for typing animation
  const fullText =
    "Grace is a bright and cheerful 8-year-old who lost her parents at a young age. Through our orphanage, she has found a loving home, access to education, and dreams of becoming a teacher one day. With your support, children like Grace can continue to thrive and build a better future.";

  const [displayedText, setDisplayedText] = useState("");

  // Typing animation effect
  useEffect(() => {
    let index = 0;
    const typing = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(typing);
      }
    }, 30); // typing speed (ms per character)
    return () => clearInterval(typing);
  }, []);

  return (
    <section className="py-16 bg-green-700 text-white overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Image animation */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src="/assets/images/hero.jpg"
            alt="Child Story"
            width={600}
            height={400}
            className="rounded-lg shadow-lg w-full object-cover h-[400px]"
          />
        </motion.div>

        {/* Text with typing animation */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Grace</h2>
          <p className="text-lg mb-6 leading-relaxed min-h-[160px] whitespace-pre-line">
            {displayedText}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="inline-block w-2 bg-white ml-1 rounded-sm"
            />
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            viewport={{ once: true }}
          >
            <Link
              href="/donate"
              className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block"
            >
              Donate to Support Grace
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
