import Link from "next/link"

export default function Component() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl rounded-lg shadow-lg bg-white p-6 space-y-6 border border-gray-200 dark:border-gray-700 overflow-y-auto">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
          <p className="text-zinc-500 dark:text-zinc-400">Last updated: January 12, 2024</p>
        </div>
        <div className="space-y-4">
          <section>
            <h2 className="text-2xl font-bold">1. Introduction</h2>
            <p className="text-zinc-500 dark:text-zinc-400">
              Welcome to our Privacy Policy. Your privacy is critically important to us.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold">2. Information We Collect</h2>
            <p className="text-zinc-500 dark:text-zinc-400">
              We collect various types of information, including information that may directly identify you, information
              that is about you but individually does not personally identify you, and information that we combine with
              our other users.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold">3. How We Use Your Information</h2>
            <p className="text-zinc-500 dark:text-zinc-400">
              We use information that we collect about you or that you provide to us, including any personal
              information, for various purposes.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold">4. Sharing Your Information</h2>
            <p className="text-zinc-500 dark:text-zinc-400">
              We may disclose aggregated information about our users, and information that does not identify any
              individual, without restriction.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold">5. Changes to Our Privacy Policy</h2>
            <p className="text-zinc-500 dark:text-zinc-400">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page.
            </p>
          </section>
        </div>
        <div className="flex justify-center">
          <Link className="text-blue-500 hover:text-blue-700" href="#">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
