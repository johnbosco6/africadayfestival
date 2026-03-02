"use client"

import { SubmissionForm } from "@/components/submission-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function WorkshopsPage() {
  const handleSubmit = (formData: any) => {
    // Handle form submission
    console.log(formData)
    // You would typically send this data to your backend
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-serif mb-8 text-center">Host a Workshop at the Africa Day Festival</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Workshop Benefits</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 mb-4">
            <li>Certificate of Participation – Earn a recognized certificate from our foundation.</li>
            <li>Networking Opportunities – Connect with industry professionals and like-minded businesses.</li>
          </ul>
        </CardContent>
      </Card>

      <SubmissionForm
        title="Apply to Host a Workshop"
        description="Share your skills and expertise in African traditions by hosting a workshop at the Africa Day Festival! We're looking for teachers for African Cooking, Crafts, Beauty, Singing, Dancing, and Instrumental Music."
        fields={[
          { name: "name", label: "Name", type: "text", required: true },
          { name: "email", label: "Email", type: "email", required: true },
          {
            name: "category",
            label: "Workshop Category",
            type: "select",
            options: [
              "African Cooking",
              "African Crafts",
              "African Beauty",
              "Singing",
              "Dancing",
              "Instrumental Music",
            ],
            required: true,
          },
          { name: "bio", label: "Brief Bio or Experience", type: "textarea", required: true },
          { name: "workshopDescription", label: "Workshop Description", type: "textarea", required: true },
          { name: "portfolio", label: "Portfolio or Previous Work Link (Optional)", type: "text" },
          { name: "message", label: "Additional Information (Optional)", type: "textarea" },
        ]}
        submitButtonText="Apply to Host a Workshop"
        onSubmit={handleSubmit}
      />
    </div>
  )
}
