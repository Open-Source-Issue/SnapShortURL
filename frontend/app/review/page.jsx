// import { Label } from "@/components/ui/label"
// import { Input } from "@/components/ui/input"
// import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
// import { Textarea } from "@/components/ui/textarea"
// import { Button } from "@/components/ui/button"
// import { Avatar } from "@/components/ui/avatar"
// import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"

// export default function Component() {
//   return (
//     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 max-w-6xl items-start px-4 mx-auto">
//       <Card className="w-full flex flex-col p-0">
//         <CardHeader className="p-4 grid gap-2">
//           <Avatar className="w-10 h-10 self-start" />
//           <div className="flex items-center gap-2">
//             <CardTitle className="text-base font-medium">Alice Johnson</CardTitle>
//             <CardDescription className="text-xs shrink-0">2 days ago</CardDescription>
//           </div>
//         </CardHeader>
//         <CardContent className="text-sm p-4">
//           <p>
//             I absolutely love the design of this mug! It&apos;s like having a piece of art with my morning coffee. The colors
//             are so vibrant and the patterns are just delightful. It really puts me in a good mood to start the day. The
//             quality is top-notch too - feels great to hold. I&apos;ll be recommending this to all my friends!
//           </p>
//         </CardContent>
//         <CardFooter className="p-4">
//           <div className="flex items-center gap-2">
//             <StarIcon className="w-5 h-5 fill-primary" />
//             <StarIcon className="w-5 h-5 fill-primary" />
//             <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
//             <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
//             <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
//           </div>
//         </CardFooter>
//       </Card>
//       <Card className="w-full flex flex-col p-0">
//         <CardHeader className="p-4 grid gap-2">
//           <Avatar className="w-10 h-10 self-start" />
//           <div className="flex items-center gap-2">
//             <CardTitle className="text-base font-medium">Bob Smith</CardTitle>
//             <CardDescription className="text-xs shrink-0">5 hours ago</CardDescription>
//           </div>
//         </CardHeader>
//         <CardContent className="text-sm p-4">
//           <p>
//             The WhimsiMug is a fantastic addition to my morning routine. The playful design never fails to bring a smile
//             to my face, and the quality of the mug itself is excellent. It&apos;s the perfect size for my coffee, and the
//             handle is quite comfortable to hold. I wouldn&apos;t hesitate to give it a full 5 stars!
//           </p>
//         </CardContent>
//         <CardFooter className="p-4">
//           <div className="flex items-center gap-2">
//             <StarIcon className="w-5 h-5 fill-primary" />
//             <StarIcon className="w-5 h-5 fill-primary" />
//             <StarIcon className="w-5 h-5 fill-primary" />
//             <StarIcon className="w-5 h-5 fill-primary" />
//             <StarIcon className="w-5 h-5 fill-primary" />
//           </div>
//         </CardFooter>
//       </Card>
//       <Card className="w-full flex flex-col p-0">
//         <CardHeader className="p-4 grid gap-2">
//           <Avatar className="w-10 h-10 self-start" />
//           <div className="flex items-center gap-2">
//             <CardTitle className="text-base font-medium">Claire Brown</CardTitle>
//             <CardDescription className="text-xs shrink-0">1 day ago</CardDescription>
//           </div>
//         </CardHeader>
//         <CardContent className="text-sm p-4">
//           <p>
//             The WhimsiMug is an absolute delight! The colorful and whimsical patterns make it stand out, and it&apos;s a
//             great conversation starter. The quality is impressive, and it feels sturdy. My only complaint is that I wish
//             it could keep my coffee warm for a bit longer. But overall, I love it and would give it 4 out of 5 stars!
//           </p>
//         </CardContent>
//         <CardFooter className="p-4">
//           <div className="flex items-center gap-2">
//             <StarIcon className="w-5 h-5 fill-primary" />
//             <StarIcon className="w-5 h-5 fill-primary" />
//             <StarIcon className="w-5 h-5 fill-primary" />
//             <StarIcon className="w-5 h-5 fill-primary" />
//             <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
//           </div>
//         </CardFooter>
//       </Card>
//       <Card className="w-full flex flex-col p-0">
//         <CardHeader className="p-4 grid gap-2">
//           <Avatar className="w-10 h-10 self-start" />
//           <div className="flex items-center gap-2">
//             <CardTitle className="text-base font-medium">David Lee</CardTitle>
//             <CardDescription className="text-xs shrink-0">4 days ago</CardDescription>
//           </div>
//         </CardHeader>
//         <CardContent className="text-sm p-4">
//           <p>
//             The WhimsiMug is a lovely addition to my collection. The design is so unique and charming, it really
//             brightens up my mornings. The quality is exceptional, and it&apos;s become my go-to mug for a cozy coffee break.
//             I highly recommend it to anyone looking for a fun and well-made mug!
//           </p>
//         </CardContent>
//         <CardFooter className="p-4">
//           <div className="flex items-center gap-2">
//             <StarIcon className="w-5 h-5 fill-primary" />
//             <StarIcon className="w-5 h-5 fill-primary" />
//             <StarIcon className="w-5 h-5 fill-primary" />
//             <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
//             <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
//           </div>
//         </CardFooter>
//       </Card>
//       <Card className="w-full flex flex-col p-0">
//         <CardHeader className="p-4 grid gap-2">
//           <Avatar className="w-10 h-10 self-start" />
//           <div className="flex items-center gap-2">
//             <CardTitle className="text-base font-medium">Emily Davis</CardTitle>
//             <CardDescription className="text-xs shrink-0">6 days ago</CardDescription>
//           </div>
//         </CardHeader>
//         <CardContent className="text-sm p-4">
//           <p>
//             The WhimsiMug is simply delightful! The design is so cheerful and fun, it never fails to make me smile. The
//             quality is top-notch, and it&apos;s a pleasure to use every day. I&apos;ve already recommended it to several friends
//             who love it just as much. Definitely a 5-star product!
//           </p>
//         </CardContent>
//         <CardFooter className="p-4">
//           <div className="flex items-center gap-2">
//             <StarIcon className="w-5 h-5 fill-primary" />
//             <StarIcon className="w-5 h-5 fill-primary" />
//             <StarIcon className="w-5 h-5 fill-primary" />
//             <StarIcon className="w-5 h-5 fill-primary" />
//             <StarIcon className="w-5 h-5 fill-primary" />
//           </div>
//         </CardFooter>
//       </Card>
//       <div className="w-full flex flex-col p-0">
//         <div className="grid gap-4">
//           <h2 className="text-2xl font-semibold">Leave a Review</h2>
//           <form className="grid gap-4">
//             <div className="grid gap-2">
//               <Label htmlFor="name">Name</Label>
//               <Input id="name" required />
//             </div>
//             <div className="grid gap-2">
//               <Label htmlFor="email">Email</Label>
//               <Input id="email" required type="email" />
//             </div>
//             <div className="grid gap-2">
//               <Label htmlFor="rating">Rating</Label>
//               <Select defaultValue="5" id="rating">
//                 <SelectTrigger className="w-24">
//                   <SelectValue placeholder="Select" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="1">1</SelectItem>
//                   <SelectItem value="2">2</SelectItem>
//                   <SelectItem value="3">3</SelectItem>
//                   <SelectItem value="4">4</SelectItem>
//                   <SelectItem value="5">5</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//             <div className="grid gap-2">
//               <Label htmlFor="title">Title</Label>
//               <Input id="title" required />
//             </div>
//             <div className="grid gap-2">
//               <Label htmlFor="review">Review</Label>
//               <Textarea id="review" required />
//             </div>
//             <Button type="submit">Submit Review</Button>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// function StarIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
//     </svg>
//   )
// }
