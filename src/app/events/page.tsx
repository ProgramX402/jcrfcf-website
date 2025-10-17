// app/events/page.tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image'; // import Next.js Image component

interface Event {
  _id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  mediaUrl?: string;
  mediaType?: 'video' | 'image';
}

async function fetchEvents(): Promise<Event[]> {
  const res = await fetch('https://orphanage-backend-r7i2.onrender.com/api/events', {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error('Failed to fetch events');
  return res.json();
}

export default async function EventsPage() {
  let events: Event[] = [];

  try {
    events = await fetchEvents();
  } catch (error) {
    console.error(error);
  }

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section
        className="relative w-full h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/hero.jpg')" }}
      >
        <div className="absolute inset-0"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Our Events</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Join us in our upcoming events and community activities that bring joy, learning, and support to children.
          </p>
        </div>
      </section>

      {/* EVENTS SECTION */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 space-y-12">
          {events.length === 0 ? (
            <p className="text-center text-gray-600">No events found.</p>
          ) : (
            events.map((event) => (
              <div
                key={event._id}
                className="grid md:grid-cols-2 gap-8 items-start bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 max-w-5xl mx-auto"
              >
                <div className="flex flex-col justify-start space-y-4">
                  <h2 className="text-2xl font-bold">{event.title}</h2>
                  <p className="text-gray-700 whitespace-pre-line">{event.description}</p>
                  <p className="text-sm text-gray-500">
                    <strong>Date:</strong>{' '}
                    {new Date(event.date).toLocaleDateString(undefined, {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                    <br />
                    <strong>Location:</strong> {event.location}
                  </p>
                </div>

                {event.mediaUrl && (
                  <div className="flex justify-center relative w-full h-64">
                    {event.mediaType === 'video' ? (
                      <video
                        controls
                        className="rounded-lg shadow-md w-full h-full object-cover"
                      >
                        <source src={event.mediaUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <Image
                        src={event.mediaUrl}
                        alt={event.title}
                        fill
                        className="rounded-lg shadow-md object-cover"
                      />
                    )}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
