import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { notFound } from "next/navigation"

// Sample blog posts data
const allBlogPosts = [
  {
    id: 1,
    title: "Preparations Underway for Africa Day 2025",
    excerpt: "Discover how we're preparing for the biggest celebration of African culture in Lublin.",
    date: "March 15, 2025",
    category: "events",
    image: "/placeholder.svg?height=400&width=600",
    slug: "preparations-underway-2025",
  },
  {
    id: 2,
    title: "The Cultural Significance of African Dance",
    excerpt: "Explore the rich traditions and meanings behind various African dance styles.",
    date: "March 10, 2025",
    category: "culture",
    image: "/placeholder.svg?height=400&width=600",
    slug: "cultural-significance-african-dance",
  },
  {
    id: 3,
    title: "Interview with Renowned African Artist",
    excerpt: "An exclusive interview with one of Africa's most celebrated contemporary artists.",
    date: "March 5, 2025",
    category: "interviews",
    image: "/placeholder.svg?height=400&width=600",
    slug: "interview-renowned-artist",
  },
  {
    id: 4,
    title: "African Cuisine: A Journey Through Flavors",
    excerpt: "Discover the diverse and delicious culinary traditions from across the African continent.",
    date: "February 28, 2025",
    category: "culture",
    image: "/placeholder.svg?height=400&width=600",
    slug: "african-cuisine-journey",
  },
  {
    id: 5,
    title: "Volunteer Spotlight: Meet Our Team",
    excerpt: "Get to know the dedicated volunteers who make the Africa Day Festival possible.",
    date: "February 20, 2025",
    category: "events",
    image: "/placeholder.svg?height=400&width=600",
    slug: "volunteer-spotlight",
  },
  {
    id: 6,
    title: "The Evolution of African Fashion",
    excerpt: "From traditional garments to modern runway designs, explore the evolution of African fashion.",
    date: "February 15, 2025",
    category: "culture",
    image: "/placeholder.svg?height=400&width=600",
    slug: "evolution-african-fashion",
  },
]

// Category titles mapping
const categoryTitles = {
  events: "Event Updates",
  culture: "Cultural Stories",
  interviews: "Artist Interviews",
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const { category } = params

  // Check if category exists
  if (!Object.keys(categoryTitles).includes(category)) {
    notFound()
  }

  // Filter posts by category
  const categoryPosts = allBlogPosts.filter((post) => post.category === category)

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-serif mb-2 text-center">
        {categoryTitles[category as keyof typeof categoryTitles]}
      </h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Browse our collection of articles about {categoryTitles[category as keyof typeof categoryTitles].toLowerCase()}.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categoryPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden flex flex-col h-full">
            <div className="relative h-48 w-full">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle className="line-clamp-2">{post.title}</CardTitle>
              <CardDescription>{post.date}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-gray-700 mb-4 line-clamp-3">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center"
              >
                Read More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12">
        <Link href="/blog" className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to All Articles
        </Link>
      </div>
    </div>
  )
}
