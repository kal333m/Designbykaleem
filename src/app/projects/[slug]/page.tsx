import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import { ImpactChart } from "@/components/ImpactChart";
import { ProjectCard } from "@/components/ProjectCard";
import { Footer } from "@/components/Footer";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

function Section({ heading, text }: { heading: string; text: string }) {
  return (
    <div>
      <h2 className="text-sm uppercase tracking-wide text-muted mb-3">{heading}</h2>
      <p className="text-base leading-relaxed">{text}</p>
    </div>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const more = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <main className="pt-16">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 py-16 sm:py-20 flex flex-col gap-14">
        <Link href="/" className="text-sm text-muted hover:text-foreground transition-colors">
          ← Back
        </Link>

        <header className="flex flex-col gap-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-medium text-muted rounded-[var(--radius-pill)] border border-border px-2.5 py-0.5">
              {project.clientType}
            </span>
            <span className="text-xs font-medium text-muted rounded-[var(--radius-pill)] border border-border px-2.5 py-0.5">
              {project.platform}
            </span>
            {project.domains.map((d) => (
              <span
                key={d}
                className="text-xs font-medium text-accent rounded-[var(--radius-pill)] border border-border px-2.5 py-0.5"
              >
                {d}
              </span>
            ))}
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
          <div className="sm:col-span-2 flex flex-col gap-14">
            <Section heading="Overview" text={project.overview} />
            <Section heading="Business Context" text={project.businessContext} />
            <Section heading="Problem Statement" text={project.problemStatement} />
            <Section heading="Process" text={project.process} />
            <Section heading="Solution" text={project.solution} />

            <div className="flex flex-col gap-6">
              <div>
                <h2 className="text-sm uppercase tracking-wide text-muted mb-3">Impact</h2>
                <p className="text-base leading-relaxed">{project.outcome}</p>
              </div>
              {project.metrics?.map((chart) => (
                <ImpactChart key={chart.title} {...chart} />
              ))}
            </div>

            {project.reflection && (
              <Section heading="Reflection" text={project.reflection} />
            )}
          </div>

          <aside className="flex flex-col gap-6">
            <div>
              <h2 className="text-sm uppercase tracking-wide text-muted mb-2">Role</h2>
              <p className="text-base">{project.role}</p>
            </div>
            {project.timeframe && (
              <div>
                <h2 className="text-sm uppercase tracking-wide text-muted mb-2">Timeframe</h2>
                <p className="text-base">{project.timeframe}</p>
              </div>
            )}
            {project.team && (
              <div>
                <h2 className="text-sm uppercase tracking-wide text-muted mb-2">Team</h2>
                <p className="text-base">{project.team}</p>
              </div>
            )}
            {project.tools && project.tools.length > 0 && (
              <div>
                <h2 className="text-sm uppercase tracking-wide text-muted mb-2">Tools</h2>
                <p className="text-base">{project.tools.join(", ")}</p>
              </div>
            )}
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
      </div>

      {more.length > 0 && (
        <section className="border-t border-border">
          <div className="max-w-6xl mx-auto px-6 sm:px-10 py-16 sm:py-20 flex flex-col gap-10">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Browse more work
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {more.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
