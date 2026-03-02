"use client"

import { SubmissionForm } from "@/components/submission-form"

export default function FashionShowPage() {
  const handleSubmit = (formData: any) => {
    // Handle form submission
    console.log(formData)
    // You would typically send this data to your backend
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <SubmissionForm
        title="Join the Africa Day Fashion Show"
        description="Be part of a stunning showcase of African fashion and creativity! Whether you're a designer or a model, we want you to shine on our runway."
        fields={[
          { name: "name", label: "Name", type: "text", required: true },
          { name: "email", label: "Email", type: "email", required: true },
          { name: "role", label: "Select Your Role", type: "select", options: ["Designer", "Model"], required: true },
          { name: "portfolio", label: "Upload Portfolio or Link", type: "text", required: true },
          { name: "message", label: "Message (Optional)", type: "textarea" },
        ]}
        submitButtonText="Join the Fashion Show"
        onSubmit={handleSubmit}
      />
    </div>
  )
}
