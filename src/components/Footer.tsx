"use client";

// Lucide-React for general icons
import { Phone, Mail, MapPin } from "lucide-react";

// Simple Icons (from react-icons/si) for social media
import { SiFacebook, SiX, SiInstagram, SiLinkedin, SiYoutube } from "react-icons/si";

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
              <Phone className="w-5 h-5" /> +234 7076 2984 91
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5" /> Joschristianrefuge24@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-5 h-5" /> Abbattoir, Jos, Nigeria
            </li>
          </ul>

          {/* Social Media */}
          <div className="flex space-x-4 mt-6">
            <a href="https://www.facebook.com/profile.php?id=61555961339997" className="hover:text-gray-300" target="_blank"><SiFacebook className="text-xl" /></a>
            <a href="#" className="hover:text-gray-300"><SiX className="text-xl" target="_blank" /></a>
            <a href="https://www.instagram.com/jos_christian_refuge/" className="hover:text-gray-300" target="_blank"><SiInstagram className="text-xl" /></a>
            <a href="#" className="hover:text-gray-300"><SiLinkedin className="text-xl" target="_blank" /></a>
            <a href="#" className="hover:text-gray-300"><SiYoutube className="text-xl" target="_blank" /></a>
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