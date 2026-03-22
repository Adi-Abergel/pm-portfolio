import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Tools from "@/components/Tools";
import CaseStudy from "@/components/CaseStudy";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <Hero />
      <Tools />
      <CaseStudy />
      <Contact />
    </main>
  );
}
