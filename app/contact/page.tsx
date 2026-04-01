import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, FileText, CreditCard } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-serif mb-8 text-center">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-serif mb-4">Get in Touch</h2>
          <form action="https://formspree.io/f/mldgwprz" method="POST" className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">
                Name
              </label>
              <Input id="name" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">
                Email
              </label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 font-medium">
                Subject
              </label>
              <Input id="subject" placeholder="What is this regarding?" />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-medium">
                Message
              </label>
              <Textarea id="message" placeholder="Your message here" rows={5} />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-serif mb-4">Contact Information</h2>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-orange-500" />
                  Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Abraham Foundation</p>
                <p>Ul. Bursztynowa 16/22</p>
                <p>20-576, Lublin</p>
                <p>Poland</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-orange-500" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>English: +48 576 046 862</p>
                <p>Polish: +48 725 097 661</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-orange-500" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>abrahamdministryfoundation@gmail.com</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-orange-500" />
                  Legal Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>NIP: 7123443810</p>
                <p>REGON: 523489803</p>
                <p>KRS: 0000999249</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-orange-500" />
                  Bank Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Bank: Mbank</p>
                <p>Account number: 84114010940000409874001001</p>
                <p>SWIFT CODE: BREXPLPWXXX</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
