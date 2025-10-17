"use client";

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p>
            We are dedicated to bringing hope, care, and education to orphans and vulnerable children.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/projects" className="hover:underline">Projects</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> +234 800 123 4567
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> info@orphanage.org
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> 123 Hope Street, Lagos, Nigeria
            </li>
          </ul>

          {/* Social Media */}
          <div className="flex space-x-4 mt-6">
            <a href="#" className="hover:text-gray-300"><FaFacebookF className="text-xl" /></a>
            <a href="#" className="hover:text-gray-300"><FaTwitter className="text-xl" /></a>
            <a href="#" className="hover:text-gray-300"><FaInstagram className="text-xl" /></a>
            <a href="#" className="hover:text-gray-300"><FaLinkedinIn className="text-xl" /></a>
            <a href="#" className="hover:text-gray-300"><FaYoutube className="text-xl" /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center border-t border-green-600 pt-6">
        <p>&copy; {new Date().getFullYear()} JCRFCF. All rights reserved.</p>
      </div>
    </footer>
  );
}
