"use client"

import { SubmissionForm } from "@/components/submission-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function GeneralVolunteeringPage() {
  const handleSubmit = (formData: any) => {
    // Handle form submission
    console.log(formData)
    // You would typically send this data to your backend
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-serif mb-8 text-center">Volunteer for Africa Day Festival</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Why Volunteer With Us?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Volunteering for the Africa Day Festival is a rewarding experience that allows you to:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>Be part of a vibrant cultural celebration</li>
            <li>Meet people from diverse backgrounds and cultures</li>
            <li>Gain valuable event management experience</li>
            <li>Support cultural exchange and community building</li>
            <li>Receive a certificate of participation and volunteer t-shirt</li>
          </ul>

          <h3 className="font-semibold mt-4 mb-2">Volunteer Roles Include:</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Event Setup and Breakdown</li>
            <li>Visitor Information and Guidance</li>
            <li>Performance Area Support</li>
            <li>Workshop Assistance</li>
            <li>Vendor and Exhibitor Support</li>
            <li>Photography and Social Media</li>
            <li>Translation Services (if applicable)</li>
          </ul>

          <p className="mb-4">
            Volunteers are expected to commit to at least one 4-hour shift during the festival. Training will be
            provided before the event.
          </p>
        </CardContent>
      </Card>

      <SubmissionForm
        title="Volunteer Application"
        description="Join our team of dedicated volunteers and help make the Africa Day Festival a success! Fill out the form below to apply."
        fields={[
          { name: "name", label: "Name", type: "text", required: true },
          { name: "surname", label: "Surname", type: "text", required: true },
          { name: "email", label: "Email", type: "email", required: true },
          { name: "phone", label: "Phone Number", type: "text", required: true },
          {
            name: "availability",
            label: "Availability",
            type: "select",
            options: [
              "Flexible - Assign me where needed",
              "May 19 (Monday) - Morning",
              "May 19 (Monday) - Afternoon",
              "May 19 (Monday) - Evening",
              "May 20 (Tuesday) - Morning",
              "May 20 (Tuesday) - Afternoon",
              "May 20 (Tuesday) - Evening",
              "May 21 (Wednesday) - Morning",
              "May 21 (Wednesday) - Afternoon",
              "May 21 (Wednesday) - Evening",
              "May 22 (Thursday) - Morning",
              "May 22 (Thursday) - Afternoon",
              "May 22 (Thursday) - Evening",
              "May 23 (Friday) - Morning",
              "May 23 (Friday) - Afternoon",
              "May 23 (Friday) - Evening",
              "May 24 (Saturday) - Morning",
              "May 24 (Saturday) - Afternoon",
              "May 24 (Saturday) - Evening",
            ],
            required: true,
          },
          {
            name: "interests",
            label: "Areas of Interest",
            type: "select",
            options: [
              "Not sure - Assign me where needed",
              "Event Setup and Breakdown",
              "Visitor Information and Guidance",
              "Performance Area Support",
              "Workshop Assistance",
              "Vendor and Exhibitor Support",
              "Photography and Social Media",
              "Translation Services",
              "Drivers",
            ],
            required: true,
          },
          { name: "experience", label: "Previous Volunteer Experience (Optional)", type: "textarea" },
          { name: "message", label: "Additional Information (Optional)", type: "textarea" },
        ]}
        submitButtonText="Submit Application"
        onSubmit={handleSubmit}
      />
    </div>
  )
}
