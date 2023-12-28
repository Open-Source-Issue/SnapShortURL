import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"

export function Component() {
  return (
    <div key="1" className="bg-white text-gray-700 pt-10">
      <main>
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl font-bold mb-4">Make every <span className="text-primary">connection</span> count</h1>
          <p className="mb-8">
            Create short links, QR Codes, and Link-in-bio pages. Share them anywhere.
            <br />
            Track what's working, and what's not. All inside the snapshorturl Connections Platform.
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline">Short link</Button>
            <Button variant="outline">QR Code</Button>
            <Button variant="outline">Link-in-bio</Button>
          </div>
        </section>
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 text-center">Shorten a long link</h2>
            <div
              className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
              <Input placeholder="Example: http://super-long-link.com/shorten-it" />
              <div className="flex items-center">
                <span className="bg-gray-200 px-3 py-2 rounded-l">bit.ly</span>
                <Input placeholder="example: favorite-link" />
              </div>
              <Button>Sign up and get your link</Button>
            </div>
            <p className="text-center mt-4">End your link with words that will make it unique</p>
            <div className="mt-8 text-center">
              <p className="font-bold">No credit card required. Your free plan includes:</p>
              <div className="flex justify-center space-x-4 mt-4">
                <Badge>Short links</Badge>
                <Badge>QR Codes</Badge>
                <Badge>Link-in-bio page</Badge>
              </div>
            </div>
          </div>
        </section>
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Loved by big and small brands everywhere</h2>
          <div className="flex justify-center items-center space-x-4 mb-16">
            <Image
              alt="Brand Logo"
              height="24"
              src="/placeholder.svg"
              style={{
                aspectRatio: "100/24",
                objectFit: "cover",
              }}
              width="100" />
            <Image
              alt="Brand Logo"
              height="24"
              src="/placeholder.svg"
              style={{
                aspectRatio: "100/24",
                objectFit: "cover",
              }}
              width="100" />
            <Image
              alt="Brand Logo"
              height="24"
              src="/placeholder.svg"
              style={{
                aspectRatio: "100/24",
                objectFit: "cover",
              }}
              width="100" />
            <Image
              alt="Brand Logo"
              height="24"
              src="/placeholder.svg"
              style={{
                aspectRatio: "100/24",
                objectFit: "cover",
              }}
              width="100" />
            <Image
              alt="Brand Logo"
              height="24"
              src="/placeholder.svg"
              style={{
                aspectRatio: "100/24",
                objectFit: "cover",
              }}
              width="100" />
          </div>
          <h2 className="text-3xl font-bold mb-8 text-center">The snapshorturl Connections Platform</h2>
          <p className="text-center mb-16">
            All the products you need to build brand connections, manage links and QR Codes, and connect with audiences
            everywhere, in a single unified platform.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>URL Shortener</CardTitle>
                <CardDescription>
                  A comprehensive solution to help make every point of connection between your content and your audience
                  more powerful.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>URL shortening at scale</li>
                  <li>Custom links with your brand</li>
                  <li>URL redirects</li>
                  <li>Advanced analytics & tracking</li>
                </ul>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Learn More</Button>
                <Button>Get Started for Free</Button>
              </CardFooter>
            </Card>
            <Card className="w-full">
              <CardHeader>
                <CardTitle>QR Codes</CardTitle>
                <CardDescription>QR Code solutions for every customer, business and brand experience.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Fully customizable QR Codes</li>
                  <li>Dynamic QR Codes</li>
                  <li>QR Code types & destination options</li>
                  <li>Advanced analytics & tracking</li>
                </ul>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Learn More</Button>
                <Button>Get Started for Free</Button>
              </CardFooter>
            </Card>
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Link-in-bio</CardTitle>
                <CardDescription>
                  snapshorturl Link-in-bio, powered by snapshorturl Link Management, helps you curate, package and track your best
                  links.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Custom URLs for social media</li>
                  <li>Customizable landing page</li>
                  <li>Easy-to-manage links</li>
                  <li>Link and landing page tracking</li>
                </ul>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Learn More</Button>
                <Button>Get Started for Free</Button>
              </CardFooter>
            </Card>
          </div>
        </section>
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold">500K</h2>
              <p>global paying customers</p>
            </div>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold">256M</h2>
              <p>links & QR Codes created monthly</p>
            </div>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold">10B</h2>
              <p>connections (clicks & scans) monthly</p>
            </div>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold">800+</h2>
              <p>app integrations</p>
            </div>
          </div>
        </section>
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">What snapshorturl customers are saying</h2>
          <div className="flex justify-center items-center space-x-4 mb-16">
            <ChevronLeftIcon className="h-6 w-6 text-gray-500" />
            <div className="max-w-2xl">
              <blockquote className="italic text-lg mb-4">
                "Our goal was to implement a system that would not interrupt the gameplay experience when a new update
                was announced, and we found QR Codes to be the perfect answer."
              </blockquote>
              <p className="text-sm">Juan Zacarias – Game Product Manager, Motive Studios EA</p>
              <div className="flex justify-center mt-4">
                <span className="h-3 w-3 bg-gray-300 rounded-full mx-1" />
                <span className="h-3 w-3 bg-gray-300 rounded-full mx-1" />
                <span className="h-3 w-3 bg-gray-300 rounded-full mx-1" />
                <span className="h-3 w-3 bg-gray-300 rounded-full mx-1" />
                <span className="h-3 w-3 bg-gray-300 rounded-full mx-1" />
              </div>
            </div>
            <ChevronRightIcon className="h-6 w-6 text-gray-500" />
          </div>
        </section>
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently asked questions</h2>
          <div className="space-y-4">
            <details>
              <summary className="font-bold cursor-pointer">What is a URL shortener?</summary>
              <p>
                A URL shortener is a tool that creates a short, unique URL that will redirect to the specified webpage
                when accessed.
              </p>
            </details>
            <details>
              <summary className="font-bold cursor-pointer">What is a custom URL shortener?</summary>
              <p>
                A custom URL shortener allows you to brand your short links with your chosen domain name, providing a
                consistent identity for your links.
              </p>
            </details>
            <details>
              <summary className="font-bold cursor-pointer">What is a QR Code?</summary>
              <p>
                A QR Code is a two-dimensional barcode that can be scanned using a smartphone camera to quickly access a
                webpage or app.
              </p>
            </details>
            <details>
              <summary className="font-bold cursor-pointer">What is a Link-in-bio?</summary>
              <p>
                A Link-in-bio is a single link that directs followers to a curated page with multiple links, often used
                on social media profiles.
              </p>
            </details>
            <details>
              <summary className="font-bold cursor-pointer">Why choose snapshorturl?</summary>
              <p>
                snapshorturl offers robust link management features, detailed analytics, and a wide range of integrations,
                making it a top choice for businesses and individuals.
              </p>
            </details>
          </div>
        </section>
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">More than a free link shortener</h2>
            <Button variant="secondary">Get Started</Button>
          </div>
        </section>
      </main>
    </div>
  );
}


function ChevronLeftIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m15 18-6-6 6-6" />
    </svg>)
  );
}


function ChevronRightIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m9 18 6-6-6-6" />
    </svg>)
  );
}