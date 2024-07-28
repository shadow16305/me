import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { Hero } from "./_components/hero";
import { Projects } from "./_components/projects/projects";
import { Skills } from "./_components/skills";
import { About } from "./_components/about";

export default function Home() {
  return (
    <main className="relative z-10 mt-2 rounded-[40px] bg-white pb-16">
      <Hero />
      <Skills />
      <Projects />
      <ScrollToTop />
      <About />
    </main>
  );
}
