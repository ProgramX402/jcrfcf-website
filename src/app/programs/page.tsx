"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

// --- SVG ICON COMPONENT ---
const ProgramIcon = ({ iconName }: { iconName: string }) => {
  // Use const instead of let, and initialize directly
  let IconComponent: React.FC = () => null;
  const defaultSize = "h-20 w-20";

  switch (iconName) {
    case "HomeHeart":
      IconComponent = function HomeHeartIcon() {
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${defaultSize} text-white`}
          >
            <path
              d="M12 2L3 9V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V9L12 2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 11.37C15.07 10.44 13.79 10 12 10C10.21 10 8.93 10.44 8 11.37L12 15L16 11.37Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      };
      break;

    case "GraduationCap":
      IconComponent = function GraduationCapIcon() {
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${defaultSize} text-white`}
          >
            <path
              d="M22 10V18C22 18.5523 21.5523 19 21 19H3C2.44772 19 2 18.5523 2 18V10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 19V5M12 5L2 10M12 5L22 10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      };
      break;

    case "FirstAid":
      IconComponent = function FirstAidIcon() {
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${defaultSize} text-white`}
          >
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="2"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 7V17M7 12H17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      };
      break;

    case "SoccerBall":
      IconComponent = function SoccerBallIcon() {
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${defaultSize} text-white`}
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 2V12L20 7L12 2Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 22L12 12L4 17L12 22Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      };
      break;

    case "Lightbulb":
      IconComponent = function LightbulbIcon() {
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${defaultSize} text-white`}
          >
            <path
              d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 4V2M12 22V20M20 12H22M2 12H4M18.364 5.63604L19.7782 4.22183M4.22183 19.7782L5.63604 18.364M18.364 18.364L19.7782 19.7782M4.22183 4.22183L5.63604 5.63604"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      };
      break;

    case "HandsPraying":
      IconComponent = function HandsPrayingIcon() {
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${defaultSize} text-white`}
          >
            <path
              d="M12 2L10 6M12 2L14 6M12 2V22M10 6H14L12 10L10 6Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 6C8 6 6 8 6 10C6 12 8 14 10 14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 6C16 6 18 8 18 10C18 12 16 14 14 14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      };
      break;

    case "SpeechBubble":
      IconComponent = function SpeechBubbleIcon() {
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${defaultSize} text-white`}
          >
            <path
              d="M21 15V4C21 3.44772 20.5523 3 20 3H4C3.44772 3 3 3.44772 3 4V15C3 15.5523 3.44772 16 4 16H6L10 19V16H20C20.5523 16 21 15.5523 21 15Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 8H14M10 12H14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      };
      break;

    case "ResilienceHeart":
      IconComponent = function ResilienceHeartIcon() {
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${defaultSize} text-white`}
          >
            <path
              d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.03L12 21.35Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      };
      break;

    case "RocketLaunch":
      IconComponent = function RocketLaunchIcon() {
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${defaultSize} text-white`}
          >
            <path
              d="M22 6L11 15M22 6L15 2H11L22 13V6ZM15 2L11 6M11 6L2 15M2 15L13 22L22 13M2 15V22H9L2 15Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      };
      break;

    default:
      IconComponent = function DefaultIcon() {
        return null;
      };
      break;
  }

  return <IconComponent />;
};

// --- PROGRAMS DATA ---
const programsData = [
  {
    title: "Shelter & Care",
    iconName: "HomeHeart",
    description:
      "Safe, loving homes for children who have lost their families.",
  },
  {
    title: "Education",
    iconName: "GraduationCap",
    description:
      "Quality education ensures children have a brighter future ahead.",
  },
  {
    title: "Healthcare",
    iconName: "FirstAid",
    description:
      "Every child receives proper medical care and emotional support.",
  },
  {
    title: "Sports",
    iconName: "SoccerBall",
    description:
      "Physical activities that build teamwork, confidence, and health.",
  },
  {
    title: "Self-Discovery",
    iconName: "Lightbulb",
    description:
      "Helping children discover their talents and potential in life.",
  },
  {
    title: "Spiritual Support",
    iconName: "HandsPraying",
    description:
      "Guidance to nurture their faith, values, and emotional strength.",
  },
  {
    title: "Guidance & Counselling",
    iconName: "SpeechBubble",
    description:
      "Professional support to help children overcome challenges and trauma.",
  },
  {
    title: "Emotional Support",
    iconName: "ResilienceHeart",
    description:
      "Caring programs to help children heal emotionally and build resilience.",
  },
  {
    title: "Incubation & Mentoring",
    iconName: "RocketLaunch",
    description:
      "Developing children&apos;s skills with mentoring to prepare them for a sustainable future.",
  },
];

export default function Programs() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-72 flex items-center justify-center bg-green-700 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/hero.jpg"
            alt="Programs Hero"
            fill
            className="object-cover opacity-60"
          />
        </div>
        <motion.div
          className="relative z-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold">Our Programs</h1>
          <p className="mt-3 text-lg">
            Explore the initiatives we offer to support our children
          </p>
        </motion.div>
      </section>

      {/* PROGRAMS SECTION */}
      <section className="py-16 bg-green-700 text-center text-white">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Programs We Offer
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-3 gap-10 mb-10"
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.2 }}
            viewport={{ once: true }}
          >
            {programsData.map((program, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-6 shadow-lg rounded-lg bg-green-600 hover:scale-105 transition-transform duration-300 flex flex-col items-center"
              >
                <div className="h-20 w-20 mb-6 flex items-center justify-center">
                  <ProgramIcon iconName={program.iconName} />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  {program.title}
                </h3>
                <p>{program.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* DONATE SECTION */}
      <section className="py-16 bg-white text-center">
        <motion.div
          className="container mx-auto px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-700">
            Support Our Cause
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-6 text-gray-700">
            Your donations help us provide food, shelter, education, healthcare,
            and opportunities for children to grow and thrive.
          </p>
          <motion.a
            href="/donate"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition"
          >
            Donate Now
          </motion.a>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
