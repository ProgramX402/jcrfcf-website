"use client";
import Image from "next/image";
import Link from "next/link";
import heroimg from "../../public/heroimg.png";

export default function Hero() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <p className="text-[#4969F4] font-semibold uppercase text-sm sm:text-base">
            <i>Africa’s Digital Future</i>
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
            Empowering Visionaries in the Digital Age.
          </h1>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-xl mx-auto md:mx-0">
            Achieve mastery in digital transformation, cybersecurity,
            entrepreneurship, AI, and more with APlus CTT.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="/courses">
              <button className="bg-[#4969F4] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition text-sm sm:text-base">
                Register
              </button>
            </Link>
            <Link href="/about">
              <button className="border border-[#4969F4] text-[#4969F4] px-6 py-3 rounded-lg hover:bg-[#4969F4] hover:text-white transition text-sm sm:text-base">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <Image
            src={heroimg}
            alt="Hero Image"
            width={500}
            height={500}
            className="rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
