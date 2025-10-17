"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function DirectorMessage() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <Image
            src="/assets/images/josh.jpg" // replace with your image path
            alt="Director"
            width={400}
            height={400}
            className="rounded-2xl shadow-lg object-cover"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            A Word from Our Director
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            “At Jos Christian Refuge for Children Foundation, our mission extends beyond providing
            shelter — we are building futures filled with love, dignity, and
            opportunity. Every child deserves a chance to dream, to learn, and
            to be loved. Together, we can make that dream a reality.”
          </p>
          <h3 className="text-lg font-semibold text-gray-800">
            — Mr. Joshua Dickson
          </h3>
          <p className="text-sm text-gray-500">Executive Director</p>
        </motion.div>
      </div>
    </section>
  );
}
