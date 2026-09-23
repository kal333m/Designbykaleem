import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import { ImpactChart } from "@/components/ImpactChart";
import { ProblemDiagnosis } from "@/components/ProblemDiagnosis";
import { ResearchInsights } from "@/components/ResearchInsights";
import { FlowDiagram } from "@/components/FlowDiagram";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ScreenBlock } from "@/components/ScreenBlock";
import { DistributionChart } from "@/components/DistributionChart";
import { ScaleStats } from "@/components/ScaleStats";
import { ProjectCard } from "@/components/ProjectCard";
import { Footer } from "@/components/Footer";
import { KanbanIllustration } from "@/components/KanbanIllustration";
import { AtlasIllustration } from "@/components/AtlasIllustration";
import { ProcurementIllustration } from "@/components/ProcurementIllustration";
import { GuardianIllustration } from "@/components/GuardianIllustration";
import { JourneyIllustration } from "@/components/JourneyIllustration";
import { PaletteIllustration } from "@/components/PaletteIllustration";

const heroIllustrations = {
  kanban: KanbanIllustration,
  atlas: AtlasIllustration,
  procure: ProcurementIllustration,
  guardian: GuardianIllustration,
  journey: JourneyIllustration,
  palette: PaletteIllustration,
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

function Section({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-sm uppercase tracking-wide text-muted">{heading}</h2>
      {children}
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
      <div className="max-w-4xl mx-auto px-6 sm:px-10 py-16 sm:py-20 flex flex-col gap-16">
        <Link href="/" className="text-sm text-muted hover:text-foreground transition-colors">
          ← Back
        </Link>

        <header className="flex flex-col gap-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-medium text-muted rounded-[var(--radius-pill)] border border-border px-2.5 py-0.5">
              {project.clientType}
            </span>
            {project.platform.map((p) => (
              <span
                key={p}
                className="text-xs font-medium text-muted rounded-[var(--radius-pill)] border border-border px-2.5 py-0.5"
              >
                {p}
              </span>
            ))}
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

        {(() => {
          const HeroIllustration = project.heroIllustration
            ? heroIllustrations[project.heroIllustration]
            : null;

          if (HeroIllustration) return <HeroIllustration />;

          if (project.coverImage) {
            return (
              <div className="rounded-[var(--radius-card)] border border-border overflow-hidden">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  width={1600}
                  height={900}
                  className="w-full h-auto"
                  priority
                />
              </div>
            );
          }

          return (
            <div
              className="aspect-[16/9] w-full rounded-[var(--radius-card)]"
              style={{
                background: `linear-gradient(135deg, ${project.cover.from}, ${project.cover.to})`,
              }}
            />
          );
        })()}

        <section className="grid sm:grid-cols-3 gap-10">
          <div className="sm:col-span-2 flex flex-col gap-16">
            <Section heading="Overview">
              <p className="text-base leading-relaxed">{project.overview}</p>
            </Section>

            <Section heading="Business Context">
              <p className="text-base leading-relaxed">{project.businessContext}</p>
            </Section>

            <Section heading="Problem Statement">
              <p className="text-base leading-relaxed">{project.problemStatement}</p>
              {project.problemDiagnosis && (
                <ProblemDiagnosis diagnosis={project.problemDiagnosis} />
              )}
            </Section>

            <Section heading="Impact">
              <p className="text-base leading-relaxed">{project.outcome}</p>
              {project.scaleStats && <ScaleStats stats={project.scaleStats} />}
              {project.metrics?.map((chart) => (
                <ImpactChart key={chart.title} {...chart} />
              ))}
            </Section>

            <Section heading="Process">
              <p className="text-base leading-relaxed">{project.process}</p>
              {project.researchInsights && (
                <ResearchInsights findings={project.researchInsights} />
              )}
              {project.currentFlow && <FlowDiagram {...project.currentFlow} />}
              {project.processSteps && <ProcessSteps steps={project.processSteps} />}
            </Section>

            <Section heading="Solution">
              <p className="text-base leading-relaxed">{project.solution}</p>
              {project.proposedFlow && <FlowDiagram {...project.proposedFlow} />}
              {project.screens && (
                <div className="flex flex-col gap-14 mt-2">
                  {project.screens.map((screen) => (
                    <ScreenBlock key={screen.title} {...screen} />
                  ))}
                </div>
              )}
              {project.distributions && (
                <div
                  className={
                    project.distributions.length > 1
                      ? "grid sm:grid-cols-2 gap-4"
                      : "grid gap-4"
                  }
                >
                  {project.distributions.map((d) => (
                    <DistributionChart key={d.title} {...d} />
                  ))}
                </div>
              )}
            </Section>

            {project.reflection && (
              <Section heading="Reflection">
                <p className="text-base leading-relaxed">{project.reflection}</p>
              </Section>
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
