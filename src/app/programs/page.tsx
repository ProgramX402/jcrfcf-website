"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

const programsData = [
  {
    title: "Shelter & Care",
    img: "/assets/images/feeding.jpg",
    description:
      "Safe, loving homes for children who have lost their families.",
  },
  {
    title: "Education",
    img: "/assets/images/education.jpg",
    description:
      "Quality education ensures children have a brighter future ahead.",
  },
  {
    title: "Healthcare",
    img: "/assets/images/healthcare.jpg",
    description:
      "Every child receives proper medical care and emotional support.",
  },
  {
    title: "Sports",
    img: "/assets/images/sports.jpg",
    description:
      "Physical activities that build teamwork, confidence, and health.",
  },
  {
    title: "Self-Discovery",
    img: "/assets/images/self-discovery.jpg",
    description:
      "Helping children discover their talents and potential in life.",
  },
  {
    title: "Spiritual Support",
    img: "/assets/images/spiritual.jpg",
    description:
      "Guidance to nurture their faith, values, and emotional strength.",
  },
  {
    title: "Guidance & Counselling",
    img: "/assets/images/counselling.jpg",
    description:
      "Professional support to help children overcome challenges and trauma.",
  },
  {
    title: "Emotional Support",
    img: "/assets/images/emotional.jpg",
    description:
      "Caring programs to help children heal emotionally and build resilience.",
  },
  {
    title: "Incubation & Mentoring",
    img: "/assets/images/incubation.jpg",
    description:
      "Developing children’s skills with mentoring to prepare them for a sustainable future.",
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
            src="/assets/images/programs-hero.jpg"
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
                className="p-6 shadow-lg rounded-lg bg-green-600 hover:scale-105 transition-transform duration-300"
              >
                <div className="relative h-40 w-full mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={program.img}
                    alt={program.title}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4">{program.title}</h3>
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
