export default function Component() {
    return (
        <div className="w-full py-12 lg:py-16 xl:py-20  bg-white text-gray-700 pt-10">
            <section className="container mx-auto px-4 py-32">
                <div className="container px-4 md:px-6">
                    <div className="space-y-4 text-center">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Welcome to Career
                            </h1>
                            <p className="mx-auto max-w-[600px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                We&apos;re here to help. Find answers to your questions or contact our support team.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start prose max-w-[900px] mx-auto">
                <div>
                    <h2 className="text-3xl font-extrabold tracking-tight">Software Engineer</h2>
                    <p className="text-gray-500 dark:text-gray-400">
                        Develop and enhance SnapShortURL&apos;s functionality, impacting our platform with innovative solutions. You will
                        be responsible for writing clean and efficient code using Python, JavaScript, or Ruby. Experience with web
                        development frameworks and version control systems is a plus.
                    </p>
                    <h3 className="text-xl font-semibold tracking-tight mt-4">Requirements</h3>
                    <p>
                        Proficiency in Python, JavaScript, or Ruby. Experience with web development frameworks and version control
                        systems is a plus.
                    </p>
                </div>
                <div>
                    <h2 className="text-3xl font-extrabold tracking-tight">UX/UI Designer</h2>
                    <p className="text-gray-500 dark:text-gray-400">
                        Craft intuitive and visually appealing experiences for users, shaping the platform&apos;s look and feel. In this
                        role, you will be responsible for creating wireframes, prototypes, and high-fidelity designs using design
                        tools like Adobe XD, Sketch, or Figma. You should have a solid understanding of user-centered design
                        principles and experience with prototyping tools.
                    </p>
                    <h3 className="text-xl font-semibold tracking-tight mt-4">Requirements</h3>
                    <p>
                        Proficiency in design tools like Adobe XD, Sketch, or Figma. Understanding of user-centered design principles
                        and prototyping tools.
                    </p>
                </div>
                <div>
                    <h2 className="text-3xl font-extrabold tracking-tight">Marketing Specialist</h2>
                    <p className="text-gray-500 dark:text-gray-400">
                        Drive awareness and adoption through strategic campaigns and social media management. As a Marketing
                        Specialist, you will be responsible for creating and executing marketing campaigns, managing social media
                        platforms, and analyzing campaign performance. Strong written and verbal communication skills are essential
                        for this role.
                    </p>
                    <h3 className="text-xl font-semibold tracking-tight mt-4">Requirements</h3>
                    <p>
                        Strong written and verbal communication skills. Experience in marketing, social media management, and
                        analytics is a plus.
                    </p>
                </div>
            </div>
        </div>
    )
}

