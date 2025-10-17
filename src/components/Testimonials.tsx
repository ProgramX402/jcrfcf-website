"use client";

import { useEffect } from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import Swiper from "swiper";
import { Pagination, Autoplay } from "swiper/modules";

export default function Testimonials() {
  useEffect(() => {
    new Swiper(".mySwiper", {
      modules: [Pagination, Autoplay],
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    });
  }, []);

  const testimonials = [
    {
      name: "Grace Johnson",
      role: "Volunteer",
      image: "/assets/images/download.jpeg",
      quote:
        "This foundation has completely changed my view on helping others. The dedication and love they show to the children is inspiring.",
    },
    {
      name: "Samuel Adeyemi",
      role: "Donor",
      image: "/assets/images/download.jpeg",
      quote:
        "I’m glad to be a supporter. Every donation feels impactful, and the transparency of their work gives me peace of mind.",
    },
    {
      name: "Mariam Bello",
      role: "Teacher",
      image: "/assets/images/download.jpeg",
      quote:
        "Teaching the children here has been one of the most rewarding experiences of my life. The environment is full of hope and love.",
    },
    {
      name: "David Okoro",
      role: "Partner",
      image: "/assets/images/download.jpeg",
      quote:
        "Collaborating with this organization has been seamless. Their mission is genuine and their results are visible in the community.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-green-700">
          What People Say
        </h2>

        {/* Swiper Container */}
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="swiper-slide bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center justify-between"
              >
                <div className="relative w-20 h-20 mb-4">
                  <Image
                    src={t.image}
                    alt={t.name}
                    className="rounded-full border-4 border-green-500 object-cover"
                    fill
                    sizes="80px"
                  />
                </div>
                <p className="text-gray-600 italic mb-4">“{t.quote}”</p>
                <div>
                  <h4 className="text-lg font-semibold text-green-700">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="swiper-pagination mt-6"></div>
        </div>
      </div>
    </section>
  );
}
