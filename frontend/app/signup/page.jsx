import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
// import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center mt-20">
      <div className="w-full max-w-md p-8 bg-white rounded-lg space-y-6 shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-900">Sign Up for Free</h2>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="full-name">Full Name</Label>
            <Input id="full-name" placeholder="John Doe" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="john@example.com" required type="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" required type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input id="confirm-password" required type="password" />
          </div>
          <div className="flex items-center">
            {/* <Checkbox id="terms" required /> */}
            <Label className="ml-2" htmlFor="terms">
              I agree to the
              <Link className="underline" href="#">
                Terms & Conditions
              </Link>
            </Label>
          </div>
          <Button className="w-full" type="submit">
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  )
}
