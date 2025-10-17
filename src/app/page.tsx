"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

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
    <>
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
          Our orphanage is dedicated to providing love, care, and support for
          children who have lost their families. We create a safe environment
          where they can grow, learn, and thrive with dignity and hope.
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.502094280239!2d106.70042361533484!3d10.776530992322308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4571e47b1b%3A0xe93e6d7c92f6e26d!2sNotre%20Dame%20Cathedral%20of%20Saigon!5e0!3m2!1sen!2s!4v1632133425365!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Visit Us At</h3>
              <p className="mb-4">123 Orphanage Street, Green City, Country</p>
              <h3 className="text-2xl font-semibold mb-4">Contact Info</h3>
              <p className="mb-2">📞 +123 456 789</p>
              <p className="mb-2">📧 contact@orphanage.org</p>
              <p className="mb-2">🕒 Mon - Sat: 9:00 AM - 6:00 PM</p>
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
    </>
  );
};

export default Page;
