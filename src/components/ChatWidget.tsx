"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, Mail, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Contact Options */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="flex flex-col items-end mb-4 space-y-3"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {/* WhatsApp */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Link
                href="https://wa.me/2348069271286"
                target="_blank"
                className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-green-700 transition"
              >
                <MessageSquare size={20} />
                <span>WhatsApp</span>
              </Link>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href="mailto:info@yourorphanage.org"
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700 transition"
              >
                <Mail size={20} />
                <span>Email</span>
              </Link>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="tel:+2348012345678"
                className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-full shadow-md hover:bg-gray-800 transition"
              >
                <Phone size={20} />
                <span>Call</span>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative bg-green-700 text-white p-4 rounded-full shadow-lg hover:bg-green-800 transition"
        aria-label="Chat with us"
      >
        {/* Pulsing Glow */}
        <motion.span
          className="absolute inset-0 rounded-full bg-green-600 opacity-50 blur-md"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.5, 0.2, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <MessageCircle size={28} className="relative z-10" />
      </motion.button>
    </div>
  );
}
