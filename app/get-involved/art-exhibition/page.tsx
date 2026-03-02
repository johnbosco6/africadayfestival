"use client"

import { SubmissionForm } from "@/components/submission-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ArtExhibitionPage() {
  const handleSubmit = (formData: any) => {
    // Handle form submission
    console.log(formData)
    // You would typically send this data to your backend
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-serif mb-8 text-center">Exhibit Your Art at the Africa Day Festival</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Art Exhibition Benefits</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 mb-4">
            <li>Showcase & Sell your creations – Promote your art and gain valuable exposure.</li>
            <li>Networking Opportunities – Connect with other businesses and industry professionals.</li>
            <li>
              Certificate of Participation – All participants will receive a certificate signed by our foundation.
            </li>
          </ul>

          <h3 className="font-semibold mt-4 mb-2">Booth Pricing & Packages</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>
              <strong>Basic Package – $500 (2,000 PLN)</strong>
              <br />
              Booth Size: 10x10 feet
              <br />
              Includes: Space rental, bring your own booth, basic signage, and trash disposal.
            </li>
            <li>
              <strong>Standard Package – $1,500 (6,000 PLN)</strong>
              <br />
              Booth Size: 10x15 feet
              <br />
              Includes: Space rental, 1 table and 2 chairs, standard booth structure, enhanced signage, trash disposal,
              basic electricity, and Wi-Fi access.
            </li>
            <li>
              <strong>Premium Package – $2,500 (10,000 PLN)</strong>
              <br />
              Booth Size: 10x20 feet
              <br />
              Includes: Space rental, 2 tables and 4 chairs, African Village-themed booth, premium signage, trash
              disposal, electricity and power connections, water access, Wi-Fi access, and enhanced marketing
              opportunities.
            </li>
          </ul>
        </CardContent>
      </Card>

      <SubmissionForm
        title="Apply for Art Exhibition"
        description="Share your vision and celebrate African culture through your artwork. Submit your work for our Art Exhibition at the Africa Day Festival."
        fields={[
          { name: "name", label: "Name", type: "text", required: true },
          { name: "email", label: "Email", type: "email", required: true },
          {
            name: "artCategory",
            label: "Art Category",
            type: "select",
            options: ["Painting", "Sculpture", "Photography", "Mixed Media", "Other"],
            required: true,
          },
          {
            name: "boothPackage",
            label: "Preferred Booth Package",
            type: "select",
            options: ["Basic Package", "Standard Package", "Premium Package"],
            required: true,
          },
          { name: "artistBio", label: "Artist Bio", type: "textarea", required: true },
          { name: "portfolio", label: "Art Portfolio Link", type: "text", required: true },
          { name: "message", label: "Additional Information (Optional)", type: "textarea" },
        ]}
        submitButtonText="Apply for Art Exhibition"
        onSubmit={handleSubmit}
      />
    </div>
  )
}
