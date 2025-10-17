"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  // Animation Variants
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
            src="/assets/images/about-hero-img.jpg"
            alt="About Hero"
            fill
            className="object-cover opacity-60"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
          <p className="mt-3 text-lg">
            Learn more about our journey, vision, and mission
          </p>
        </motion.div>
      </section>

      {/* OUR HISTORY */}
      <section className="py-16 bg-white text-center">
        <motion.div
          className="container mx-auto px-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our History</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed">
            Founded in 2005, our orphanage began with the mission of providing a
            safe haven for children who had lost their families. Over the years,
            we’ve grown into a community that offers not just shelter, but
            education, healthcare, and love. Through the dedication of our
            volunteers and supporters, we have become a beacon of hope for
            hundreds of children.
          </p>
        </motion.div>
      </section>

      {/* VISION */}
      <section className="py-16 bg-green-700 text-white text-center">
        <motion.div
          className="container mx-auto px-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed">
            To create a world where every orphaned and vulnerable child grows up
            in a safe, loving, and nurturing environment, with access to
            education and opportunities for a bright future.
          </p>
        </motion.div>
      </section>

      {/* MISSION */}
      <section className="py-16 bg-white text-center">
        <motion.div
          className="container mx-auto px-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-700 leading-relaxed">
            Our mission is to rescue, nurture, and empower orphaned and
            vulnerable children by providing them with holistic care, education,
            and life skills that will help them become responsible and
            successful members of society.
          </p>
        </motion.div>
      </section>

      {/* VALUES */}
      <section className="py-16 bg-green-700 text-white">
        <motion.div
          className="container mx-auto px-6 text-center"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold mb-12"
          >
            Our Core Values
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Compassion",
                text: "We show love and kindness to every child in our care.",
              },
              {
                title: "Integrity",
                text: "We uphold honesty, transparency, and accountability in all we do.",
              },
              {
                title: "Empowerment",
                text: "We equip children with the tools they need to build a brighter future.",
              },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="p-6 bg-green-600 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p>{value.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* BOARD MEMBERS */}
      <section className="py-16 bg-white text-center">
        <motion.div
          className="container mx-auto px-6"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold mb-12"
          >
            Board Members
          </motion.h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-12">
            {[
              { name: "Joshua Choji", role: "Admin Director", image: "/assets/images/josh.jpg" },
              { name: "Paul Zaruma", role: "Chairman", image: "/assets/images/paul.jpg" },
              { name: "Jerry Okar", role: "Member", image: "/assets/images/jerry.jpg" },
              { name: "Justina", role: "Member", image: "/assets/images/justina.jpg" },
              { name: "Oningbinde", role: "Member", image: "/assets/images/oni.jpg" },
              { name: "Bill Murray", role: "Member", image: "/assets/images/billmurray.jpeg" },
            ].map((member, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="relative w-40 h-40 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover shadow-md"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
