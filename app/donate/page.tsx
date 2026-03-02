import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Donate | Africa Day Festival",
  description: "Support the Africa Day Festival by making a donation.",
}

export default function DonatePage() {
  // Direct Stripe payment link - no server-side API needed
  const stripePaymentLink = "https://buy.stripe.com/test_00g5lV0Ht2Nt1LW000"

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-amber-900">Support Our Mission</h1>

          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 mb-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2 relative h-64 md:h-80">
                <Image
                  src="/images/placeholder.jpg"
                  alt="Support African Culture"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <div className="w-full md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-amber-800">
                  Your Donation Makes a Difference
                </h2>
                <p className="text-gray-700 mb-6">
                  Your generous contribution helps us promote African culture, support local African communities, and
                  create meaningful cultural exchanges. Every donation, no matter the size, brings us closer to our
                  goals.
                </p>

                <Link
                  href={stripePaymentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 text-center w-full md:w-auto"
                >
                  Donate Now
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-amber-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-2 text-amber-800">Cultural Programs</h3>
              <p className="text-gray-700">Your donation supports workshops, performances, and exhibitions.</p>
            </div>
            <div className="bg-amber-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-2 text-amber-800">Community Support</h3>
              <p className="text-gray-700">Help us create resources and opportunities for the African diaspora.</p>
            </div>
            <div className="bg-amber-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-2 text-amber-800">Festival Growth</h3>
              <p className="text-gray-700">Enable us to expand the festival and reach more people each year.</p>
            </div>
          </div>

          <div className="bg-amber-100 rounded-lg p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4 text-center text-amber-800">Other Ways to Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-2 text-amber-700">Volunteer</h3>
                <p className="text-gray-700 mb-4">
                  Join our team of dedicated volunteers and help make the festival a success.
                </p>
                <Link
                  href="/get-involved/general-volunteering"
                  className="text-amber-600 hover:text-amber-800 font-medium"
                >
                  Learn more about volunteering →
                </Link>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2 text-amber-700">Become a Partner</h3>
                <p className="text-gray-700 mb-4">Partner with us as a business, organization, or institution.</p>
                <Link href="/partners" className="text-amber-600 hover:text-amber-800 font-medium">
                  Explore partnership opportunities →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
