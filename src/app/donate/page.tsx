// app/donate/page.tsx
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DonatePage = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-green-700 text-white py-20 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Support Our Mission
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Your generosity enables us to continue providing shelter, education,
          and care for orphans and vulnerable children.
        </p>
      </section>

      {/* Bank Details Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Bank Details</h2>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="p-6 bg-gray-50 shadow rounded-lg">
              <i className="fas fa-university text-green-700 text-3xl mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Main Account</h3>
              <p>
                <strong>Bank Name:</strong> Example Bank
              </p>
              <p>
                <strong>Account Name:</strong> JCRFCF Orphanage
              </p>
              <p>
                <strong>Account Number:</strong> 1234567890
              </p>
            </div>

            <div className="p-6 bg-gray-50 shadow rounded-lg">
              <i className="fas fa-piggy-bank text-green-700 text-3xl mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Support Account</h3>
              <p>
                <strong>Bank Name:</strong> Another Bank
              </p>
              <p>
                <strong>Account Name:</strong> JCRFCF Support Fund
              </p>
              <p>
                <strong>Account Number:</strong> 9876543210
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Our Location</h2>
          <p className="mb-6 text-lg">
            Visit us at our orphanage center. We welcome visitors, volunteers, and
            supporters.
          </p>
          <p className="mb-4">
            <i className="fas fa-map-marker-alt text-green-700 mr-2"></i>
            123 Orphanage Street, City, Country
          </p>

          {/* Google Map Embed */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0860708825954!2d-122.41941558468159!3d37.77492977975988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c0f0e5f3d%3A0xabcdef123456789!2sOrphanage!5e0!3m2!1sen!2s!4v1700000000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Orphanage Location"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default DonatePage;
