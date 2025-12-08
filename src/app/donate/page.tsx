// app/donate/page.tsx
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DonatePage = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-green-700 text-white py-20 text-center mt-8 md:mt-18">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 mt-15">
          Support Our Mission
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Your generosity enables us to continue providing shelter, education,
          and care for orphans and vulnerable children.
        </p>
      </section>

      {/* Bank Details Section - UPDATED */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">
            Our Bank Details (Zenith Bank)
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {/* Naira Account */}
            <div className="p-6 bg-gray-50 shadow rounded-lg border-t-4 border-green-700">
              <i className="fas fa-money-bill-wave text-green-700 text-3xl mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Naira Account (NGN)</h3>
              <p>
                <strong>Bank Name:</strong> Zenith Bank
              </p>
              <p>
                <strong>Account Name:</strong> Jos Christian Refuge for Children Foundation
              </p>
              <p>
                <strong>Account Number:</strong> 1310319381
              </p>
            </div>

            {/* GBP Account */}
            <div className="p-6 bg-gray-50 shadow rounded-lg border-t-4 border-green-700">
              <i className="fas fa-pound-sign text-green-700 text-3xl mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Pounds Account (GBP)</h3>
              <p>
                <strong>Bank Name:</strong> Zenith Bank
              </p>
              <p>
                <strong>Account Name:</strong> Jos Christian Refuge for Children Foundation
              </p>
              <p>
                <strong>Account Number:</strong> 5061413637
              </p>
            </div>

            {/* USD Account */}
            <div className="p-6 bg-gray-50 shadow rounded-lg border-t-4 border-green-700">
              <i className="fas fa-dollar-sign text-green-700 text-3xl mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Dollar Account (USD)</h3>
              <p>
                <strong>Bank Name:</strong> Zenith Bank
              </p>
              <p>
                <strong>Account Name:</strong> Jos Christian Refuge for Children Foundation
              </p>
              <p>
                <strong>Account Number:</strong> 5074542065
              </p>
            </div>

            {/* EUR Account */}
            <div className="p-6 bg-gray-50 shadow rounded-lg border-t-4 border-green-700">
              <i className="fas fa-euro-sign text-green-700 text-3xl mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Euro Account (EUR)</h3>
              <p>
                <strong>Bank Name:</strong> Zenith Bank
              </p>
              <p>
                <strong>Account Name:</strong> Jos Christian Refuge for Children Foundation
              </p>
              <p>
                <strong>Account Number:</strong> 5081135269
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
            Fototek Abbattoir, Plateau, Nigeria.
          </p>

         {/* Google Map Embed */}
<div className="rounded-lg overflow-hidden shadow-lg">
  <iframe
    // Updated to use the map link for the coordinates you provided (9.88224352, 8.88659012)
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15721.8005131593!2d8.871867177725388!3d9.896416835812095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105373985992274f%3A0xe0965beb1b5ec32e!2sPhototech%2FLenscope%20Media!5e0!3m2!1sen!2sng!4v1762456211048!5m2!1sen!2sng"
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