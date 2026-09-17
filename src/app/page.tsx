import { Hero } from "@/components/Hero";
import { ProjectGrid } from "@/components/ProjectGrid";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <section
          id="work"
          className="scroll-mt-16 max-w-6xl mx-auto px-6 sm:px-10 py-24 sm:py-28 flex flex-col gap-10"
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Selected Work
            </h2>
            <p className="text-muted mt-2">
              Filter by client type or platform to see what&apos;s relevant to you.
            </p>
          </div>
          <ProjectGrid />
        </section>
      </main>
      <Footer />
    </>
  );
}
