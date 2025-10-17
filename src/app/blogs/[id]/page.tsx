import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import React from "react";

interface Blog {
  _id: string;
  title: string;
  content: string;
  mediaUrl?: string;
}

async function fetchBlog(id: string): Promise<Blog> {
  const res = await fetch(
    `https://orphanage-backend-r7i2.onrender.com/api/blogs/${id}`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) throw new Error("Failed to fetch blog");
  return res.json();
}

// ✅ FIXED VERSION
export default async function BlogPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  let blog: Blog | null = null;

  try {
    blog = await fetchBlog(id);
  } catch (error) {
    console.error("Error fetching blog:", error);
  }

  if (!blog) {
    return (
      <div className="py-20 text-center text-red-500">
        Error loading blog.{" "}
        <Link href="/blogs" className="text-blue-600 underline">
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative w-full h-[50vh]">
        <Image
          src={blog.mediaUrl || "/assets/images/blog-hero.jpg"}
          alt={blog.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">{blog.title}</h1>
        </div>
      </section>

      {/* BLOG CONTENT */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-20 lg:px-40">
          <div className="relative w-full h-96 mb-8 rounded-lg shadow-lg">
            <Image
              src={blog.mediaUrl || "/assets/images/default-blog.jpg"}
              alt={blog.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <div
            className="prose max-w-none text-gray-800 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          <div className="mt-10">
            <Link
              href="/blogs"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
            >
              ← Back to Blogs
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
