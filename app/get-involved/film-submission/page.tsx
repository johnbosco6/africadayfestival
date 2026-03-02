"use client"

import { SubmissionForm } from "@/components/submission-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function FilmSubmissionPage() {
  const handleSubmit = (formData: any) => {
    // Handle form submission
    console.log(formData)
    // You would typically send this data to your backend
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-serif mb-8 text-center">Africa Day Film Festival – Submission Call</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>About the Film Festival</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            We invite filmmakers to submit their work for the Africa Day Film Festival, a celebration of African and
            Polish cinema. This festival aims to highlight the richness of both film industries, honor creative talent,
            and foster cultural exchange.
          </p>

          <h3 className="font-semibold mt-4 mb-2">Submission Details</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>
              Purpose: To showcase the diversity and excellence of African and Polish cinema while creating a platform
              for cultural exchange.
            </li>
            <li>Requirements: Films must be in English or have English subtitles.</li>
          </ul>

          <h3 className="font-semibold mt-4 mb-2">Eligibility Criteria</h3>
          <p className="mb-2">Submissions must be African or Polish films in one of the following categories:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>Feature Films – Full-length narratives exploring African stories, cultures, and experiences.</li>
            <li>Documentaries – Real-life narratives showcasing African heritage, issues, and innovation.</li>
            <li>Short Films – Under 40 minutes, highlighting bold and fresh storytelling.</li>
            <li>Animated Films – Creative works inspired by African folklore, Afro-futurism, or modern themes.</li>
            <li>
              Diaspora & Pan-African Stories – Films by or about African filmmakers in the diaspora, exploring global
              identity.
            </li>
          </ul>

          <h3 className="font-semibold mt-4 mb-2">Benefits & Awards</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>1st Place: Custom Festival Trophy + Industry Networking + Feature in Festival Showcase</li>
            <li>2nd Place: Certificate of Excellence + Access to Exclusive Masterclass</li>
            <li>3rd Place: Recognition in Festival Highlights + Complimentary Entry for the 2026 Festival</li>
            <li>
              Winner of Winners: Custom Festival Trophy + Industry Networking + Feature in Festival Showcase + Monetary
              compensation
            </li>
          </ul>

          <h3 className="font-semibold mt-4 mb-2">Important Information</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Submission Deadline: March 15, 2025</li>
            <li>Submission Method: Submit via YouTube or Vimeo link (use the form below)</li>
          </ul>

          <h3 className="font-semibold mt-4 mb-2">Contact Information</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Phone: +48 576 046 865</li>
            <li>Email: abrahamdministryfoundation@gmail.com</li>
          </ul>
        </CardContent>
      </Card>

      <SubmissionForm
        title="Submit Your Film"
        description="We look forward to receiving your submissions and celebrating African and Polish cinematic talent!"
        fields={[
          { name: "name", label: "Name", type: "text", required: true },
          { name: "email", label: "Email", type: "email", required: true },
          { name: "filmTitle", label: "Film Title", type: "text", required: true },
          {
            name: "filmCategory",
            label: "Film Category",
            type: "select",
            options: ["Feature Film", "Documentary", "Short Film", "Animated Film", "Diaspora & Pan-African Story"],
            required: true,
          },
          { name: "synopsis", label: "Brief Synopsis", type: "textarea", required: true },
          { name: "filmLink", label: "YouTube or Vimeo Link", type: "text", required: true },
          { name: "message", label: "Additional Information (Optional)", type: "textarea" },
        ]}
        submitButtonText="Submit Your Film"
        onSubmit={handleSubmit}
      />
    </div>
  )
}
