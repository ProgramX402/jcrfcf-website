"use client";
import { motion } from "framer-motion";

export default function HowYouCanSupport() {
  return (
    <section className="py-16 bg-white text-center">
      <div className="container mx-auto px-6">
        {/* Animated Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 text-green-700"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          How You Can Support
        </motion.h2>

        {/* Animated Paragraph */}
        <motion.p
          className="text-lg max-w-2xl mx-auto mb-12 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          There are many ways you can help us bring hope and love to orphans and vulnerable children.
        </motion.p>

        {/* Animated Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Option 1: Donate */}
          <motion.div
            className="p-6 bg-green-100 rounded-lg shadow-md hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-4">
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
                  d="M12 8c-1.657 0-3 1.567-3 3.5S10.343 15 12 15s3-1.567 3-3.5S13.657 8 12 8z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 1v4m0 14v4m8-8h4M1 12h4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Make a Donation</h3>
            <p>
              Every contribution, big or small, helps us provide food, shelter,
              and education for the children.
            </p>
          </motion.div>

          {/* Option 2: Volunteer */}
          <motion.div
            className="p-6 bg-green-100 rounded-lg shadow-md hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-4">
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Volunteer Your Time</h3>
            <p>
              Join us on the ground to mentor, teach, or support children through
              our community programs.
            </p>
          </motion.div>

          {/* Option 3: Sponsor a Child */}
          <motion.div
            className="p-6 bg-green-100 rounded-lg shadow-md hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-4">
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
            </div>
            <h3 className="text-xl font-semibold mb-2">Sponsor a Child</h3>
            <p>
              By sponsoring a child, you give them the opportunity to thrive and
              reach their full potential.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
