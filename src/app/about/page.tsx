"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
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
    <p className="text-lg max-w-5xl mx-auto text-gray-700 leading-relaxed text-justify">
      <strong>Brief Historical Background</strong><br />
      From Tabitha Evangel Missions to Jos Christian Refuge for Children Foundation
      <br /><br />
      Tabitha Evangel Missions, widely known as Binta Orphanage, was founded in 2002 by Evangelist Binta Farouk Jalingo. 
      Originally located in Jebbu-Miango, Plateau State, it served as a refuge for over 130 children — including orphans, 
      underprivileged, and vulnerable children. Despite numerous challenges, the unwavering support of donors and partners 
      helped to sustain the orphanage. Their generosity has been a tremendous blessing, ensuring that the children’s fundamental 
      needs were met in an environment that felt like home.
      <br /><br />
      However, tragedy struck when Fulani militants attacked Jebbu-Miango in Bassa Local Government Area of Plateau State. 
      The assault, which lasted for about a week without any government or security intervention, led to widespread destruction, 
      including the burning down of the orphanage. The children were left homeless and traumatized, as many of them had already 
      witnessed the loss of their parents in similar attacks. Before the orphanage was set ablaze on August 2, 2021, the children 
      were evacuated to safety, though all belongings were lost. While the material loss was devastating, thankfully, no lives were lost.
      <br /><br />
      Following the attack, the orphanage was forced to relocate to Jos, where the children were temporarily placed with different families 
      for over a month. Eventually, God provided a temporary residence for the orphanage at No. 5 Thomas Didel Drive, Liberty Boulevard 
      (Millionaires Quarters), Jos. The orphanage was hosted in the rented apartment for over a year, during which time it witnessed divine 
      provision for all its needs, including food, clothing, and shelter. One of the greatest miracles experienced was the healing of the 
      children’s hearts after their traumatic ordeal.
      <br /><br />
      By God's grace, after a year of displacement, a permanent location was secured in Giring, behind Fototek Building, Abattoir, Jos. 
      The new site is spacious, accommodating all the children and providing essential facilities such as school buildings, a chapel, and hostels. 
      Through it all, JCRFCF has seen God's faithfulness.
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
            A community where every vulnerable child is provided care, love, all-round development, and transitioned into a supportive family and responsible adulthood
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
            To support vulnerable children with psychosocial, spiritual, educational, and vocational 
            skills in a safe and nurturing environment, fostering responsibility and self-reliance through stakeholder collaboration.
          </p>
        </motion.div>
      </section>

      {/* VALUES */}
<section className="py-16 bg-green-700 text-white text-center">
  <div className="container mx-auto px-6">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold mb-12"
    >
      Our Core Values
    </motion.h2>

    {/* First row: 3 cards */}
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { staggerChildren: 0.2 },
        },
      }}
    >
      {[
        {
          title: "Love",
          text: "We embody the selfless, sacrificial, and unconditional love that God has for humanity. We nurture every child with compassion, kindness, and unwavering care, ensuring they feel valued, cherished, and supported in a family.",
        },
        {
          title: "Teamwork",
          text: "We strongly believe that collaborative effort should be made by staff, caregivers, and children to enhance a supportive, nurturing, safe, and conducive environment in order to achieve a common goal.",
        },
        {
          title: "Empathy",
          text: "We honor each child’s unique story with empathy and care. Every child and staff member are valued, heard, and supported. We address their needs with love, collaboration, and understanding.",
        },
      ].map((value, idx) => (
        <motion.div
          key={idx}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, delay: idx * 0.2 }}
          className="p-6 bg-green-600 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 w-full sm:w-4/5"
        >
          <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
          <p className="text-sm md:text-base leading-relaxed">{value.text}</p>
        </motion.div>
      ))}
    </motion.div>

    {/* Second row: 2 centered cards */}
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center mt-10 md:w-2/3 mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { staggerChildren: 0.2, delayChildren: 0.4 },
        },
      }}
    >
      {[
        {
          title: "Servant Leadership",
          text: "We lead by example, demonstrating faithful stewardship of our resources, time, and talents for the well-being of every child and the glory of God.",
        },
        {
          title: "Relationship with Christ",
          text: "We are committed to nurturing a deep and personal faith in Jesus Christ, encouraging every child to believe in Him, seek His guidance through prayer, and walk in obedience to His Word.",
        },
      ].map((value, idx) => (
        <motion.div
          key={idx}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, delay: idx * 0.2 }}
          className="p-6 bg-green-600 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 w-full"
        >
          <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
          <p className="text-sm md:text-base leading-relaxed">{value.text}</p>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>


      {/* BOARD MEMBERS */}
      <section className="py-16 bg-white text-center">
        <motion.div
          className="container mx-auto px-6"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold mb-12"
          >
            Board Members
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
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
