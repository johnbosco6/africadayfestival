"use client"

import { SubmissionForm } from "@/components/submission-form"

export default function TalentRecruitmentPage() {
  const handleSubmit = (formData: any) => {
    // Handle form submission
    console.log(formData)
    // You would typically send this data to your backend
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <SubmissionForm
        title="Share Your Talent at the Africa Day Festival"
        description="We're looking for singers, musicians, and other unique talents to bring energy and excitement to the Africa Day Festival. Whatever your talent, we'd love to hear from you!"
        fields={[
          { name: "name", label: "Name", type: "text", required: true },
          { name: "email", label: "Email", type: "email", required: true },
          {
            name: "talent",
            label: "Select Your Talent",
            type: "select",
            options: ["Singer", "Musician", "Other"],
            required: true,
          },
          { name: "otherTalent", label: "If Other, please specify", type: "text" },
          { name: "portfolio", label: "Upload Portfolio or Link", type: "text", required: true },
          { name: "message", label: "Message (Optional)", type: "textarea" },
        ]}
        submitButtonText="Share Your Talent"
        onSubmit={handleSubmit}
      />
    </div>
  )
}
