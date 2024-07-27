import { Hero } from "./_components/hero";
import { Skills } from "./_components/skills";

export default function Home() {
  return (
    <main className="relative z-10 mt-2 rounded-[40px] bg-white">
      <Hero />
      <Skills />
    </main>
  );
}
