import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

// Sample blog posts data
const allBlogPosts = [
  {
    id: 1,
    title: "Preparations Underway for Africa Day 2025",
    excerpt: "Discover how we're preparing for the biggest celebration of African culture in Lublin.",
    content: `
      <p>As we approach Africa Day 2025, our team is working tirelessly to create an unforgettable celebration of African culture, creativity, and commerce in the heart of Lublin.</p>
      
      <p>This year's festival promises to be our most ambitious yet, with an expanded program featuring more performers, exhibitors, and activities than ever before. From traditional music and dance performances to contemporary art exhibitions, culinary experiences, and business networking opportunities, the festival will showcase the rich diversity of African cultures and their global influence.</p>
      
      <p>Our planning committee has been meeting regularly to coordinate the various aspects of the event, from securing venues and arranging accommodations for international participants to designing marketing materials and reaching out to potential sponsors and partners.</p>
      
      <p>We're particularly excited about our new initiatives for 2025, including an expanded film festival, more interactive workshops for all ages, and a dedicated business expo that will connect African entrepreneurs with European markets.</p>
      
      <p>Stay tuned for more updates as we continue our preparations for this exciting celebration!</p>
    `,
    date: "March 15, 2025",
    author: "Festival Organizing Committee",
    category: "events",
    image: "/placeholder.svg?height=600&width=1200",
    slug: "preparations-underway-2025",
  },
  {
    id: 2,
    title: "The Cultural Significance of African Dance",
    excerpt: "Explore the rich traditions and meanings behind various African dance styles.",
    content: `
      <p>African dance is not merely a form of entertainment but a vital expression of cultural identity, spirituality, and community values. Each region of Africa has developed distinctive dance traditions that reflect its unique history, environment, and social structures.</p>
      
      <p>In West Africa, for example, dances often incorporate dramatic movements of the torso and arms, with intricate footwork that connects the dancer to the earth. These dances frequently serve ceremonial purposes, marking important life events such as births, initiations, marriages, and funerals.</p>
      
      <p>East African dance traditions, by contrast, often emphasize jumping movements, as seen in the famous Maasai jumping dance, which demonstrates strength and endurance. In Southern Africa, the rhythmic stomping of feet creates a powerful connection between dancers and ancestral spirits.</p>
      
      <p>Many African dances are participatory rather than presentational, with the distinction between performers and audience often blurred. This reflects the communal nature of traditional African societies, where dance serves as a means of social cohesion and collective expression.</p>
      
      <p>At the Africa Day Festival, we celebrate these rich dance traditions through performances, workshops, and participatory events that invite everyone to experience the joy and cultural significance of African dance firsthand.</p>
    `,
    date: "March 10, 2025",
    author: "Dr. Amina Nkosi, Cultural Anthropologist",
    category: "culture",
    image: "/placeholder.svg?height=600&width=1200",
    slug: "cultural-significance-african-dance",
  },
  // Other blog posts data...
]

export async function generateStaticParams() {
  return allBlogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params

  // Find the post by slug
  const post = allBlogPosts.find((post) => post.slug === slug)

  // If post doesn't exist, return 404
  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/blog" className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>

        <h1 className="text-4xl font-serif mb-4">{post.title}</h1>

        <div className="flex items-center text-gray-600 mb-6">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.author}</span>
          <span className="mx-2">•</span>
          <Link href={`/blog/category/${post.category}`} className="text-orange-500 hover:text-orange-600">
            {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
          </Link>
        </div>

        <div className="relative h-96 w-full mb-8 rounded-lg overflow-hidden">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
        </div>

        <div className="prose prose-orange max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-serif mb-4">Share this article</h2>
          <div className="flex space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Facebook</button>
            <button className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded">Twitter</button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">WhatsApp</button>
          </div>
        </div>
      </div>
    </div>
  )
}
