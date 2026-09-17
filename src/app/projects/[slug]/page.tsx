import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="max-w-4xl mx-auto px-6 sm:px-10 py-20 sm:py-28 flex flex-col gap-14">
      <Link href="/" className="text-sm text-muted hover:text-foreground transition-colors">
        ← Back
      </Link>

      <header className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-muted rounded-[var(--radius-pill)] border border-border px-2.5 py-0.5">
            {project.clientType}
          </span>
          <span className="text-xs font-medium text-muted rounded-[var(--radius-pill)] border border-border px-2.5 py-0.5">
            {project.platform}
          </span>
          <span className="text-xs text-muted">{project.year}</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
          {project.title}
        </h1>
        <p className="text-lg text-muted">{project.tagline}</p>
      </header>

      <div
        className="aspect-[16/9] w-full rounded-[var(--radius-card)]"
        style={{
          background: `linear-gradient(135deg, ${project.cover.from}, ${project.cover.to})`,
        }}
      />

      <section className="grid sm:grid-cols-3 gap-10">
        <div className="sm:col-span-2 flex flex-col gap-10">
          <div>
            <h2 className="text-sm uppercase tracking-wide text-muted mb-3">Overview</h2>
            <p className="text-base leading-relaxed">{project.overview}</p>
          </div>
          <div>
            <h2 className="text-sm uppercase tracking-wide text-muted mb-3">Process</h2>
            <p className="text-base leading-relaxed">{project.process}</p>
          </div>
          <div>
            <h2 className="text-sm uppercase tracking-wide text-muted mb-3">Outcome</h2>
            <p className="text-base leading-relaxed">{project.outcome}</p>
          </div>
        </div>
        <aside className="flex flex-col gap-6">
          <div>
            <h2 className="text-sm uppercase tracking-wide text-muted mb-2">Role</h2>
            <p className="text-base">{project.role}</p>
          </div>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-accent hover:underline"
            >
              View live →
            </a>
          )}
        </aside>
      </section>
    </main>
  );
}
