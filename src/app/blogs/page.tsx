// app/blogs/page.tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

interface Blog {
  _id: string;
  title: string;
  content: string;
  mediaUrl?: string;
}

async function fetchBlogs(): Promise<Blog[]> {
  const res = await fetch('https://orphanage-backend-r7i2.onrender.com/api/blogs', {
    next: { revalidate: 60 }, // ISR every 60 seconds
  });

  if (!res.ok) throw new Error('Failed to fetch blogs');
  return res.json();
}

export default async function BlogsPage() {
  let blogs: Blog[] = [];
  try {
    blogs = await fetchBlogs();
  } catch (error) {
    console.error(error);
  }

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative w-full h-[70vh]">
        <Image
          src="/assets/images/hero.jpg"
          alt="Blog Hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-5xl font-bold mb-2">Our Blog</h1>
          <p className="text-lg max-w-2xl">
            Insights, stories, and updates from our community.
          </p>
        </div>
      </section>

      {/* BLOG LIST */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          {blogs.length === 0 ? (
            <p className="text-center text-gray-600">No blogs available yet.</p>
          ) : (
            <div className="grid md:grid-cols-3 gap-10">
              {blogs.map((blog) => (
                <div
                  key={blog._id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
                >
                  <div className="relative w-full h-56">
                    <Image
                      src={blog.mediaUrl || '/images/assets/hero.jpg'}
                      alt={blog.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
                    <p className="text-gray-700 mb-4">
                      {blog.content.replace(/<[^>]+>/g, '').slice(0, 120)}...
                    </p>
                    <Link
                      href={`/blogs/${blog._id}`}
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
