"use client"

import { SubmissionForm } from "@/components/submission-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PerformersPage() {
  const handleSubmit = (formData: any) => {
    // Handle form submission
    console.log(formData)
    // You would typically send this data to your backend
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-serif mb-8 text-center">Theatrical Performance Submission</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Eligibility Criteria</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 mb-4">
            <li>Participants must have acting and singing abilities.</li>
            <li>All participants will receive a certificate of participation, signed by our foundation.</li>
          </ul>
        </CardContent>
      </Card>

      <SubmissionForm
        title="Apply for Theatrical Performance"
        description="Join us on stage at the Africa Day Festival for a theatrical representation that celebrates African stories."
        fields={[
          { name: "name", label: "Name", type: "text", required: true },
          { name: "email", label: "Email", type: "email", required: true },
          {
            name: "performanceType",
            label: "Type of Performance",
            type: "select",
            options: ["Acting", "Singing", "Both"],
            required: true,
          },
          { name: "experience", label: "Brief Description of Your Experience", type: "textarea", required: true },
          { name: "portfolio", label: "Portfolio or Performance Link (Optional)", type: "text" },
          { name: "message", label: "Additional Information (Optional)", type: "textarea" },
        ]}
        submitButtonText="Apply to Perform"
        onSubmit={handleSubmit}
      />
    </div>
  )
}
