// app/components/Partners.tsx
import Image from "next/image";

export default function Partners() {
  return (
    <section className="py-16 bg-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-green-700">
          Our Partners
        </h2>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Partner 1 */}
          <div className="flex flex-col items-center">
            <Image
              src="/assets/images/rfc.png"
              alt="Religious Freedom Coalition"
              width={120}
              height={120}
              className="h-24 w-auto mb-4 object-contain"
            />
            <h3 className="text-xl font-semibold text-gray-700">
              Religious Freedom Coalition
            </h3>
          </div>

          {/* Partner 2 */}
          <div className="flex flex-col items-center">
            <Image
              src="/assets/images/images.jpeg"
              alt="Praise of His Glory Ministry"
              width={120}
              height={120}
              className="h-24 w-auto mb-4 object-contain"
            />
            <h3 className="text-xl font-semibold text-gray-700">
              Praise of His Glory Ministry
            </h3>
          </div>

          {/* Partner 3 */}
          <div className="flex flex-col items-center">
            <Image
              src="/assets/images/ignition.jpg"
              alt="Ignition663"
              width={120}
              height={120}
              className="h-24 w-auto mb-4 object-contain"
            />
            <h3 className="text-xl font-semibold text-gray-700">Ignition663</h3>
          </div>

          {/* Partner 4 (NEW) */}
          <div className="flex flex-col items-center">
            <Image
              src="/assets/images/asohon.jpeg"
              alt="Hope Foundation"
              width={120}
              height={120}
              className="h-24 w-auto mb-4 object-contain"
            />
            <h3 className="text-xl font-semibold text-gray-700">
              ASOHON
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
