"use client";

import { useEffect } from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Swiper from "swiper";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

export default function Testimonials() {
  useEffect(() => {
    new Swiper(".mySwiper", {
      modules: [Pagination, Autoplay, Navigation],
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        768: { slidesPerView: 1 },
        1024: { slidesPerView: 2 },
      },
    });
  }, []);

  const testimonials = [
    {
      name: "Aaron Solomon",
      role: "Graduate",
      image: "/assets/images/download.jpeg",
      quote:
        "I am forever grateful to the dedicated team at JCRFC Orphanage Home for giving me a second chance at life. Growing up in the orphanage, I received not only a safe and loving shelter, but also exceptional educational support that has shaped me into the person I am today.",
    },
    {
      name: "Enoch Tyulen",
      role: "Volunteer",
      image: "/assets/images/download.jpeg",
      quote:
        "For the past 14 years of volunteering with JCRFCF, I have consistently seen God’s mighty hand at work—guiding, protecting, and delivering. JCRFCF truly serves as an incubation hub, molding and equipping the next generation of changemakers. I am grateful to be part of this transformative journey.",
    },
    {
      name: "Mary David",
      role: "Ex-Student",
      image: "/assets/images/download.jpeg",
      quote:
        "My testimonial TEM International Christian academy has transform me spiritually and academically.so I want to use this medium to appreciate all the staff for their love, care and encouragement.thank you.",
    },
    {
      name: "Philip Avia",
      role: "Volunteer",
      image: "/assets/images/download.jpeg",
      quote:
        "Volunteering with this organization has been seamless. Their mission is genuine and their results are visible in the community.",
    },
    {
      name: "Nandang Maxwell",
      role: "Volunteer",
      image: "/assets/images/download.jpeg",
      quote:
        "Every time I volunteer, I feel part of something bigger. The joy on the kids’ faces makes it all worthwhile.",
    },
    {
      name: "Fortress Michael",
      role: "Volunteer & Ex-Student",
      image: "/assets/images/download.jpeg",
      quote:
        "Their commitment to improving lives is truly remarkable. It’s heartwarming to see the positive impact they create.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 relative">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-green-700">
          What People Say
        </h2>

        {/* Swiper Container */}
        <div className="swiper mySwiper relative">
          <div className="swiper-wrapper">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="swiper-slide bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center justify-between"
              >
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

          {/* Navigation Arrows */}
          <div className="swiper-button-prev text-green-700"></div>
          <div className="swiper-button-next text-green-700"></div>
        </div>
      </div>
    </section>
  );
}
