"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight, AlertCircle } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Define the categories and images
const categories = [
  { id: "all", name: "All Photos" },
  { id: "cooking", name: "Cooking" },
  { id: "modeling", name: "Modeling" },
  { id: "performance", name: "Performance" },
]

const blurDataURL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLzYvLy02Mi85OEE6PTo2OjlBRUlGSUlQU1NTW2NbY2RkZGRkZGRkZGT/2wBDAR4eHh4eHiQeHiRGMiQyRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkb/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="

const images = [
  {
    id: 1,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20230429_162516.jpg-lPMc9jrd4QaSxoS4My46f0WjrB7i4O.jpeg",
    alt: "Cooking workshop participants preparing dishes",
    description: "Participants learning culinary skills at Africa Day Festival",
    category: "cooking",
    blurDataURL,
    priority: true,
  },
  {
    id: 2,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20230429_182515.jpg-TCnHNQeslNP4D36PoZCguMS5hgCsYN.jpeg",
    alt: "Beautifully plated dish with tomato decoration",
    description: "Creative food presentation with tomato flower arrangement",
    category: "cooking",
    blurDataURL,
    priority: true,
  },
  {
    id: 3,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20230429_181918.jpg-qmNd0ibvoSROZ2dp3p3GMfOBwd1rob.jpeg",
    alt: "Participants presenting their finished dishes",
    description: "Proud participants showing their culinary creations",
    category: "cooking",
    blurDataURL,
    priority: true,
  },
  {
    id: 4,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20230429_180955.jpg-gEn9gzqQIAHZIYEFnDcdzt4Zf2oZwd.jpeg",
    alt: "Food preparation and ingredients",
    description: "Fresh ingredients and traditional pastry preparation",
    category: "cooking",
    blurDataURL,
    priority: true,
  },
  {
    id: 5,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20230429_162251.jpg-x1IW28d7dYpABmNfGm2aioMeoKazjx.jpeg",
    alt: "Chef preparing ingredients",
    description: "Professional chef demonstrating cooking techniques",
    category: "cooking",
    blurDataURL,
    priority: true,
  },
  {
    id: 6,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20230429_183832.jpg-Z0Nb1jh6Zf3pg2el2Q0zVT8s0Ii0Yk.jpeg",
    alt: "Group photo of workshop participants",
    description: "Africa Day Festival cooking workshop participants",
    category: "cooking",
    blurDataURL,
  },
  {
    id: 7,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20230429_174205.jpg-ZTlUWDNeD9Ig8KGXDlBYOWqhSdQxoe.jpeg",
    alt: "Workshop instructors",
    description: "Our talented culinary instructors",
    category: "cooking",
    blurDataURL,
  },
  {
    id: 8,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20230429_174341.jpg-FNk1k76i8L1PzSkgu7JEWHzCHswVnC.jpeg",
    alt: "Venue interior",
    description: "The beautiful workshop venue at Szwedzki",
    category: "cooking",
    blurDataURL,
  },
  {
    id: 9,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20230429_160935.jpg-MUMj2DcxKQBWUXZhB4rFAPNXidr1Y9.jpeg",
    alt: "Cooking workshop preparation setup",
    description: "Professional cooking setup with fresh ingredients and equipment",
    category: "cooking",
    blurDataURL,
  },
  {
    id: 10,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20230429_161110.jpg-1P5WmCicuDxrVwWNNnBc8lhkEEPwEK.jpeg",
    alt: "Workshop participant demonstrating cooking technique",
    description: "Participant explaining cooking techniques with fresh ingredients",
    category: "cooking",
    blurDataURL,
  },
  {
    id: 11,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20230429_161149.jpg-UswgKzDHtBDb3G1cjKgD1JHhjOWZCj.jpeg",
    alt: "Cooking workshop in progress",
    description: "Participants gathered for the African cooking workshop",
    category: "cooking",
    blurDataURL,
  },
  {
    id: 12,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20230429_162126.jpg-E31yjhLuD5e95cim2HbMOvwUciQ8Qi.jpeg",
    alt: "Workshop instructors in discussion",
    description: "Instructors sharing culinary knowledge and techniques",
    category: "cooking",
    blurDataURL,
  },
  {
    id: 13,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20230429_161204.jpg-Z56cBOFW9WGb9WIlC9fmx7zdHNWqyT.jpeg",
    alt: "Workshop participants and setup",
    description: "Full view of the cooking workshop environment and participants",
    category: "cooking",
    blurDataURL,
  },
  {
    id: 23,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0090.jpg-SOfTbhRazAlEbvhz0er4jlgUmtF62M.jpeg",
    alt: "Woman in hijab on runway",
    description: "Model showcasing colorful patterned skirt and hijab at Africa Day Festival",
    category: "modeling",
    blurDataURL,
    priority: true,
  },
  {
    id: 24,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0185.jpg-8iz4TcbQFJ4jdzzEaUX8W8zZgAsITr.jpeg",
    alt: "Man with face paint in patterned outfit",
    description: "Model wearing vibrant patterned shirt and shorts with traditional face paint",
    category: "modeling",
    blurDataURL,
    priority: true,
  },
  {
    id: 25,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0195.jpg-39dmsCrciuFzLXifb2S67ZueYlcJxH.jpeg",
    alt: "Man in patterned blazer on runway",
    description: "Model presenting a stylish patterned blazer and black pants combination",
    category: "modeling",
    blurDataURL,
  },
  {
    id: 26,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0218.jpg-JGNzhUq58vIQGnEAVrbxP21q4LEYMT.jpeg",
    alt: "Woman in TAYE WARSAW t-shirt",
    description: "Participant wearing TAYE WARSAW t-shirt and colorful patterned skirt",
    category: "modeling",
    blurDataURL,
  },
  {
    id: 27,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0168.jpg-q8Fpt9TPhDcB5lFfhzzTwT38xnQzEn.jpeg",
    alt: "Man in orange patterned jacket",
    description: "Model showcasing an eye-catching orange patterned jacket on the runway",
    category: "modeling",
    blurDataURL,
  },
  {
    id: 28,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0035%20(2).jpg-kAfqzD0muY0apgy2DoDFVLYNLyWf8q.jpeg",
    alt: "Young man in blue and white patterned outfit",
    description: "Model presenting a coordinated blue and white patterned ensemble",
    category: "modeling",
    blurDataURL,
  },
  {
    id: 29,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0082.jpg-CmSrRaZXcZIJ15FLrwbxtOzYLDcsYT.jpeg",
    alt: "Woman in crop top and patterned shorts",
    description: "Model walking the runway in a black crop top and colorful patterned shorts",
    category: "modeling",
    blurDataURL,
  },
  {
    id: 30,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20230429_183832.jpg-Z0Nb1jh6Zf3pg2el2Q0zVT8s0Ii0Yk.jpeg",
    alt: "Gospel singers performing on stage",
    description: "Talented vocalists performing at the Africa Day Festival",
    category: "performance",
    blurDataURL,
    priority: true,
  },
  {
    id: 31,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9343-min.jpg-cU9EbM4CcKzAb7YQG1lhGsl6VfyGQa.jpeg",
    alt: "Community dance performance",
    description: "Festival attendees participating in a group dance activity",
    category: "performance",
    blurDataURL,
    priority: true,
  },
  {
    id: 32,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/audieniece%2003-min.jpg-wSOP8nPZEIp22QNWaqWIjbyHVD9O4w.jpeg",
    alt: "Live concert performance",
    description: "Live music performance with enthusiastic audience",
    category: "performance",
    blurDataURL,
  },
  {
    id: 33,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0599-min.jpg-N7HomjDxMgnRJunxQzkVBMvYdDjP41.jpeg",
    alt: "Lead singer with brass band",
    description: "Featured vocalist performing with uniformed brass band",
    category: "performance",
    blurDataURL,
  },
  {
    id: 34,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Wszystkie_Klub%20Francuski_Beniamin%20Wawrzosek_3260067-min.jpg-SJHhzK2Ztkej6vCFi0mraHUA6fHJHR.jpeg",
    alt: "Saxophone performance",
    description: "Saxophonist performing at an intimate venue",
    category: "performance",
    blurDataURL,
  },
  {
    id: 35,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Wszystkie_Klub%20Francuski_Beniamin%20Wawrzosek_3260727-min.jpg-JF0Gx1DhJdMuVjqcb9yXx5tf8dhPV5.jpeg",
    alt: "Solo saxophone performance",
    description: "Close-up of saxophonist during performance",
    category: "performance",
    blurDataURL,
  },
  {
    id: 36,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9906-min.jpg-VlrUjILcJGwrPjcv7U5wMM5wVxaasV.jpeg",
    alt: "Brass band performance",
    description: "Full brass band in uniform performing on stage",
    category: "performance",
    blurDataURL,
  },
  {
    id: 37,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Wszystkie_Klub%20Francuski_Beniamin%20Wawrzosek_3260686-min.jpg-bx7uuhNZcS8uCY8kYcn6g6gUKwajKu.jpeg",
    alt: "Dynamic dance performance",
    description: "Energetic dancer showcasing African dance moves",
    category: "performance",
    blurDataURL,
  },
]

const filteredImages = images.filter((image) => image.category !== "sports")

export function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [imageError, setImageError] = useState<Record<number, boolean>>({})

  const displayedImages =
    selectedCategory === "all" ? filteredImages : filteredImages.filter((img) => img.category === selectedCategory)

  const handlePrevImage = () => {
    setSelectedImage((prev) => (prev !== null ? (prev > 0 ? prev - 1 : displayedImages.length - 1) : null))
  }

  const handleNextImage = () => {
    setSelectedImage((prev) => (prev !== null ? (prev < displayedImages.length - 1 ? prev + 1 : 0) : null))
  }

  const handleImageLoad = useCallback(() => {
    setIsLoading(false)
  }, [])

  const handleImageError = useCallback((id: number) => {
    setImageError((prev) => ({ ...prev, [id]: true }))
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Africa Day 2024 Photo Gallery</h2>

      <Tabs defaultValue="all" className="w-full mb-8">
        <TabsList className="flex flex-wrap justify-center gap-2 mb-8 px-4 overflow-x-auto">
          {categories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              onClick={() => {
                setSelectedCategory(category.id)
                setIsLoading(true)
              }}
              className="px-3 py-1.5 text-sm md:px-4 md:py-2 md:text-base rounded-full whitespace-nowrap min-w-[100px] flex-shrink-0"
            >
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
              {displayedImages.map((image, index) => (
                <div
                  key={image.id}
                  className="relative aspect-square overflow-hidden rounded-lg cursor-pointer bg-gray-100"
                  onClick={() => setSelectedImage(index)}
                >
                  {imageError[image.id] ? (
                    <div className="flex items-center justify-center w-full h-full bg-gray-200">
                      <AlertCircle className="w-8 h-8 text-gray-400" />
                    </div>
                  ) : (
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      layout="fill"
                      objectFit="cover"
                      sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw, (max-width: 1024px) 25vw, 20vw"
                      className={isLoading ? "blur-sm" : "blur-0"}
                      priority={index < 4}
                      loading={index < 4 ? "eager" : "lazy"}
                      quality={60}
                      placeholder="blur"
                      blurDataURL={image.blurDataURL || blurDataURL}
                      onLoadingComplete={handleImageLoad}
                      onError={() => handleImageError(image.id)}
                    />
                  )}
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[95vw] md:max-w-4xl w-full max-h-[95vh] p-0">
          <DialogClose className="absolute right-2 top-2 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground z-50">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
          {selectedImage !== null && (
            <div className="relative">
              {imageError[displayedImages[selectedImage].id] ? (
                <div className="flex items-center justify-center w-full h-[50vh] bg-gray-200">
                  <AlertCircle className="w-16 h-16 text-gray-400" />
                </div>
              ) : (
                <Image
                  src={displayedImages[selectedImage].src || "/placeholder.svg"}
                  alt={displayedImages[selectedImage].alt}
                  width={1920}
                  height={1080}
                  className="w-full h-auto object-contain"
                  priority={true}
                  quality={85}
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  onError={() => handleImageError(displayedImages[selectedImage].id)}
                />
              )}

              <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between p-2 md:p-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation()
                    handlePrevImage()
                  }}
                  className="rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70"
                >
                  <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleNextImage()
                  }}
                  className="rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70"
                >
                  <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
