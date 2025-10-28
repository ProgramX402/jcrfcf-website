"use client";

import React from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { Phone, Mail, Clock } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import NewsletterForm from "@/components/NewsletterForm";
import Partners from "@/components/Partners";
import ChildSpotlight from "@/components/ChildSpotlight";
import ProgramsSection from "@/components/ProgramsSection";
import OurChallenges from "@/components/OurChallenges";
import HowYouCanSupport from "@/components/HowYouCanSupport";
import DirectorMessage from "@/components/DirectorMessage";

const Page = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/assets/images/hero.jpg"
        alt="Hero"
        fill
        className="absolute inset-0 w-full h-full object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0"></div>

      {/* Animated Text Content */}
      <div className="relative z-10 text-center text-white px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Bringing Hope to Orphans & Vulnerable Children
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
        >
          Join us in our mission to provide shelter, care, and education for
          every child in need.
        </motion.p>

        <motion.a
          href="/donate"
          className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg text-lg font-semibold inline-block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 4px 20px rgba(34,197,94,0.4)",
          }}
        >
          Donate Now
        </motion.a>
      </div>
    </section>

      <section className="py-16 bg-green-700 text-center text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          About Us
        </motion.h2>

        <motion.p
          className="text-lg max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          We are a faith-based, non-profit and non- governmental organization(Orphanage home) dedicated 
          to caring for children and teenagers who have lost their parents due to insurgency and other 
          conflicts. We also provide support for vulnerable children, ensuring their holistic development- 
          spiritually, emotionally, educationally,and socially.
        </motion.p>

        <motion.a
          href="/about"
          className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold inline-block"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
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

     <ProgramsSection />

      <ChildSpotlight />

     <OurChallenges/>

      <Partners />

      <DirectorMessage />

      <Testimonials />

<HowYouCanSupport />


     {/* PAY US A VISIT */}
<section className="py-16 bg-green-700 text-white">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
      Pay Us a Visit
    </h2>
    <p className="text-center mb-12 max-w-2xl mx-auto">
      You are always welcome to visit our orphanage, meet the children,
      and see firsthand how your support is making a difference.
    </p>
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
  <iframe
    // Use the actual coordinates to generate the embed link
    src="https://maps.google.com/maps?q=9.88224352046847,8.886590125152992&z=15&output=embed"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    loading="lazy"
    allowFullScreen
    title="Orphanage Location"
  ></iframe>
</div>
      <div>
        <h3 className="text-2xl font-semibold mb-4">Visit Us At</h3>
        <p className="mb-4">Fototek Abbatoir, Plateau State, Nigeria</p>
        <h3 className="text-2xl font-semibold mb-4">Contact Info</h3>
        <p className="mb-2 flex items-center">
          <Phone className="w-5 h-5 mr-2" /> +234 7076 2984 91
        </p>
        <p className="mb-2 flex items-center">
          <Mail className="w-5 h-5 mr-2" /> joschristianrefuge24@gmail.com
        </p>
        <p className="mb-2 flex items-center">
          <Clock className="w-5 h-5 mr-2" /> Sun - Sat: 9:00 AM - 6:00 PM
        </p>
      </div>
    </div>
  </div>
</section>
      {/* NEWSLETTER SECTION */}
      <section className="py-16 bg-white text-green-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-600">
            Stay updated with our latest news, events, and stories of impact.
            Join our community today!
          </p>

          <NewsletterForm />

          <p className="mt-4 text-gray-500 text-sm">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Page;
