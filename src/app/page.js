// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.js file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }



import Hero from "../components/Hero";
import Stats from "../components/Stats";
import CTASection from "../components/CTASection";
import RecentDeliveries from "../components/RecentDeliveries";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Services from "../components/Services";
import ServicesWithGallery from "@/components/Slider";

export const metadata = {
  title:
    "Fast Packers and Movers | #1 Room Shifting & Office Shifting in Nepal",
  description:
    "Fast Packers and Movers – Nepal's top-rated moving company. Affordable room shifting, office shifting, residential shifting, corporate moving, vehicle & bike transport, and packing services in Kathmandu, Pokhara, Butwal, Biratnagar & across Nepal. Call 24/7: +977-9851226669.",
  keywords: [
    "fast packers and movers",
    "packers and movers nepal",
    "room shifting kathmandu",
    "office shifting kathmandu",
    "house shifting nepal",
    "residential shifting nepal",
    "corporate moving kathmandu",
    "vehicle transport nepal",
    "bike transport nepal",
    "packing and boxing services nepal",
    "moving company nepal",
    "best packers and movers kathmandu",
    "movers and packers in nepal",
    "room shifting in kathmandu",
    "office shifting in butwal",
    "packers and movers in pokhara",
  ],
  alternates: {
    canonical: "https://www.fastpackersandmovers.com",
  },
  openGraph: {
    title:
      "Fast Packers and Movers | Room Shifting & Office Shifting Nepal",
    description:
      "Nepal's most trusted packers and movers. Room shifting, office shifting, vehicle transport, and packing services across Kathmandu, Pokhara, Butwal & all Nepal.",
    url: "https://www.fastpackersandmovers.com",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <ServicesWithGallery />
      <RecentDeliveries />
      <Testimonials />
      <FAQ />
    </>
  );
}