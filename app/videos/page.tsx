import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const videos = [
  {
    title: "African Cooking Workshop Highlights",
    description:
      "Experience the vibrant flavors and techniques of African cuisine through our hands-on cooking workshops.",
    youtubeId: "jEFif15kn7U",
  },
  {
    title: "Africa Day Festival Highlights",
    description: "Relive the excitement and cultural celebrations from our main festival events.",
    youtubeId: "MKjUhPWZp2U",
  },
  {
    title: "Thanksgiving Celebration",
    description: "Join us in celebrating gratitude and community spirit at our special Thanksgiving event.",
    youtubeId: "-CrPZtI4XpM",
  },
  {
    title: "Festival Moments",
    description: "Catch the most memorable moments from our festival celebrations and cultural performances.",
    youtubeId: "UuzvqdZ6Q-4",
  },
]

export default function VideosPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-serif mb-8 text-center">Festival Videos</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {videos.map((video, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{video.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video mb-4">
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
              <p>{video.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
