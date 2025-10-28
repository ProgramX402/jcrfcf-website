// app/contact/page.tsx
"use client";

import { useState } from "react";
// Assuming these are local components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// 1. Import the necessary icons from lucide-react (for contact details)
import { Phone, Mail, MapPin } from "lucide-react";

// 2. Import icons from react-icons/fa or react-icons/si for social media.
// I'll use 'react-icons/fa' here as it aligns with the 'fab' classes used in the original JSX,
// but feel free to switch to 'react-icons/si' (as in the previous response) if preferred.
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";


export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch(
        "https://orphanage-backend-r7i2.onrender.com/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Something went wrong.");
      } else {
        setSuccess(data.message || "Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (err) {
      console.error(err);
      setError("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section
        className="relative w-full h-[70vh] bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: "url(/images/assets/hero.jpg)" }}
      >
        <div className="absolute inset-0 bg-green-700 bg-opacity-60"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl">
            We’d love to hear from you. Reach out to us anytime!
          </p>
        </div>
      </section>

      {/* CONTACT FORM & INFO */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-green-700">
              Send Us a Message
            </h2>

            {success && <p className="text-green-600 mb-4">{success}</p>}
            {error && <p className="text-red-600 mb-4">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  required
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <textarea
                name="message"
                rows={5}
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-6 text-green-700">
              Get In Touch
            </h2>
            <p className="mb-4">
              Feel free to reach us through any of the channels below:
            </p>

            {/* Replaced <i> tags with Lucide components */}
            <p className="mb-2 flex items-center">
              <MapPin className="text-green-700 w-5 h-5 mr-2" />
              Abbattoir, Jos, Plateau State
            </p>
            <p className="mb-2 flex items-center">
              <Phone className="text-green-700 w-5 h-5 mr-2" />
              +234 7076 2984 91
            </p>
            <p className="mb-2 flex items-center">
              <Mail className="text-green-700 w-5 h-5 mr-2" />
              joschristianrefuge24@gmail.com
            </p>

            {/* Replaced <i> tags with react-icons/fa components */}
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-green-700 text-2xl hover:text-green-900"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-green-700 text-2xl hover:text-green-900"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-green-700 text-2xl hover:text-green-900"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-green-700 text-2xl hover:text-green-900"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </section>

    {/* GOOGLE MAP */}
<section className="w-full h-96">
  {/* The src has been updated to use the map centered at your coordinates. */}
  <iframe
    className="w-full h-full"
    src="https://maps.app.goo.gl/ivcBoSdmpjwditJY6" 
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
  ></iframe>
</section>

      <Footer />
    </>
  );
}