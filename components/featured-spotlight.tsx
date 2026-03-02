import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface SpotlightProps {
  name: string
  type: "performer" | "designer" | "business"
  description: string
  imageUrl: string
}

export function FeaturedSpotlight({ name, type, description, imageUrl }: SpotlightProps) {
  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="font-serif">{name}</CardTitle>
        <CardDescription>Featured {type}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image src={imageUrl} alt={name} width={400} height={300} className="rounded-md mb-4" />
        <p>{description}</p>
      </CardContent>
    </Card>
  )
}
