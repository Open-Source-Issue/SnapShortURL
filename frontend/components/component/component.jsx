import { Button } from "@/components/ui/button"
import Image from "next/image"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import ShortURL from "../ui/ShortURL"
import Testimonial from "../ui/Testimonial";

export function Component() {
  return (
    <div key="1" className="bg-white text-gray-700 pt-10 ">
      <main>
        <section className="container mx-auto px-10 pt-24 mb-10 text-center">
          <h1 className="text-4xl font-bold mb-4">Connections with <span className="text-primary">Maximum</span> Impact</h1>
          <p className="mb-8 md:text-[15px]">
            Generate concise links, QR codes, and Link-in-bio pages with SnapshortURL.
            <br />
            Share seamlessly, analyze performance, and optimize online presence effortlessly on the Connections Platform.
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline">Short link</Button>
            <Button variant="outline">QR Code</Button>
            <Button variant="outline">Link-in-bio</Button>
          </div>
        </section>
        <ShortURL />
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-xl font-extrabold mb-8 text-center">Embraced by both large enterprises and small businesses globally.</h2>
          <div className="flex sm:space-x-0 justify-center align-middle lg:flex-row md:flex-row sm:flex-initial  space-x-2 mb-32">
            <Image
              alt="Brand Logo"
              height="30"
              src="/Anorch.svg"
              style={{
                aspectRatio: "100/24",
                objectFit: "cover",
              }}
              width="100" />
            <Image
              alt="Brand Logo"
              height="24"
              src="/aromaf.svg"
              style={{
                aspectRatio: "100/24",
                objectFit: "cover",
              }}
              width="100" />
            <Image
              alt="Brand Logo"
              height="24"
              src="/humbbble.svg"
              style={{
                aspectRatio: "100/24",
                objectFit: "cover",
              }}
              width="100" />
            {/*  <Image
              alt="Brand Logo"
              height="24"
              src="/mediora.svg"
              style={{
                aspectRatio: "100/24",
                objectFit: "cover",
              }}
              width="100" />
          <Image
              alt="Brand Logo"
              height="24"
              src="/interia.svg"
              style={{
                aspectRatio: "100/24",
                objectFit: "cover",
              }}
              width="100" /> */}
          </div>
            <h2 className="text-3xl font-bold mb-8 text-center">The SnapshortURL Connections Platform</h2>
          <p className="text-center mb-16">
            A unified platform for building brand connections, managing links and QR Codes, and connecting with audiences everywhere. Simplify your processes.
          </p>
          <div className="lg:ml-32 lg:mr-32 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>URL Shortener</CardTitle>
                <CardDescription>
                  A comprehensive solution to help make every point of connection between your content and your audience
                  more powerful.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-1 space-y-1">
                  <li>URL shortening at scale</li>
                  <li>Custom links with your brand</li>
                  <li>URL redirects</li>
                  <li>Advanced analytics & tracking</li>
                </ul>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" >Learn More</Button>
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
                  SnapshortURL Link-in-bio, powered by SnapshortURL Link Management, helps you curate, package and track your best
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
            <div className="text-center mb-10">
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
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold">800+</h2>
              <p>app integrations</p>
            </div>
          </div>
        </section>
        <Testimonial />
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-16 text-center">Frequently asked questions</h2>
          <div className="space-y-9 lg:space-x-80 md:space-x-40">
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
              <summary className="font-bold cursor-pointer">Why choose SnapshortURL?</summary>
              <p>
                SnapshortURL offers robust link management features, detailed analytics, and a wide range of integrations,
                making it a top choice for businesses and individuals.
              </p>
            </details>
          </div>
        </section>
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Beyond just a free URL shortening service</h2>
            <Button className="bg-white text-black hover:bg-purple hover:text-white border-white hover:bg-primary hover:border-white border-2">Get Started</Button>
          </div>
        </section>
      </main>
    </div>
  );
}



