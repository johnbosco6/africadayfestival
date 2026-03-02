import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function GetInvolvedPage() {
  const sections = [
    { title: "General Volunteering", href: "/get-involved/general-volunteering" },
    { title: "Film Festival Submission", href: "/get-involved/film-submission" },
    { title: "Performers for Theatrical Representation", href: "/get-involved/performers" },
    { title: "Workshops", href: "/get-involved/workshops" },
    { title: "Fashion Show", href: "/get-involved/fashion-show" },
    { title: "Art Exhibition", href: "/get-involved/art-exhibition" },
    { title: "Business Expo", href: "/get-involved/business-expo" },
    { title: "Talent Recruitment", href: "/get-involved/talent-recruitment" },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-serif mb-4 text-center">Get Involved in the Africa Day Festival</h1>
      <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
        Join us in celebrating African culture, creativity, and commerce. Whether you're a filmmaker, performer,
        designer, teacher, entrepreneur, or artist, we want you to showcase your passion and talents at the Africa Day
        Festival. Select an area below to learn more and apply!
      </p>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {sections.map((section) => (
          <Button key={section.title} asChild variant="outline" className="h-auto py-4 text-lg justify-start">
            <Link href={section.href}>
              <span>{section.title}</span>
            </Link>
          </Button>
        ))}
      </div>
    </div>
  )
}
