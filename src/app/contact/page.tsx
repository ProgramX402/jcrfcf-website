// app/contact/page.tsx
"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

            <p className="mb-2">
              <i className="fas fa-map-marker-alt text-green-700 mr-2"></i>
              123 Orphanage Street, City, Country
            </p>
            <p className="mb-2">
              <i className="fas fa-phone-alt text-green-700 mr-2"></i>
              +234 800 123 4567
            </p>
            <p className="mb-2">
              <i className="fas fa-envelope text-green-700 mr-2"></i>
              info@orphanage.org
            </p>

            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-green-700 text-2xl hover:text-green-900"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="#"
                className="text-green-700 text-2xl hover:text-green-900"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-green-700 text-2xl hover:text-green-900"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="text-green-700 text-2xl hover:text-green-900"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GOOGLE MAP */}
      <section className="w-full h-96">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509575!2d144.95373531531676!3d-37.8162794420211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1fdf2cf%3A0xf2c0e7d5d7f3b7d!2sOrphanage!5e0!3m2!1sen!2sng!4v1632929189546!5m2!1sen!2sng"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>

      <Footer />
    </>
  );
}
