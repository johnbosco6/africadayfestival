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
      <p className="text-lg mb-10 text-center max-w-3xl mx-auto text-gray-700 leading-relaxed">
        Join us in celebrating African culture, creativity, and commerce! Whether you want to be a <strong>volunteer</strong>, 
        <strong> performer</strong>, <strong>filmmaker</strong>, <strong>artist</strong>, <strong>entrepreneur</strong>, 
        or <strong>partner</strong>, we want you to be part of the Africa Day Festival.
      </p>
      
      <div className="flex flex-col items-center gap-6 max-w-md mx-auto bg-orange-50 p-8 rounded-2xl border border-orange-100 shadow-sm">
        <p className="text-center font-medium text-orange-900 mb-2">
          Ready to join the journey? Fill out our official participation form below:
        </p>
        <Button asChild className="bg-[#FF5C00] hover:bg-[#FF7A33] text-white text-xl py-8 px-10 h-auto rounded-full shadow-lg transition-transform hover:scale-105">
          <a 
            href="https://docs.google.com/forms/d/1qaJcDo5zH8dskXX9439oPzucK4_87TeEkfBPfykU-0E/viewform" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Apply to Get Involved
          </a>
        </Button>
        <p className="text-xs text-gray-500 text-center mt-2 italic">
          This single form covers all involvement categories including volunteering, workshops, performances, and exhibitions.
        </p>
      </div>
    </div>
  )
}
