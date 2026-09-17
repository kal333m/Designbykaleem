import { ProjectGrid } from "@/components/ProjectGrid";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 sm:px-10 py-20 sm:py-28 flex flex-col gap-16">
      <section className="flex flex-col gap-5 max-w-2xl">
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight">
          Kaleem
        </h1>
        <p className="text-lg sm:text-xl text-muted leading-relaxed">
          Product designer working across B2B and B2C, web and mobile.
          Browse by what matters to you.
        </p>
      </section>
      <ProjectGrid />
    </main>
  );
}
