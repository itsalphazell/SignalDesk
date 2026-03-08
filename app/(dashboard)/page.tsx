import { ArrowUpRight } from "lucide-react";
import { Panel } from "@/components/panel";
import { SignalHealthCard, SignalMetricCard, TimelineFeed } from "@/components/signal-primitives";
import { kpis, timeline, workstreams } from "@/lib/dashboard-data";

export default function OverviewPage() {
  return (
    <div className="grid gap-6">
      <section className="grid gap-6 xl:grid-cols-[1.18fr_0.82fr]">
        <Panel className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_30rem)]" />
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="space-y-5">
              <p className="mono-label text-muted">Executive signal</p>
              <h3 className="text-4xl font-semibold leading-[0.94] tracking-[-0.05em] text-ink">
                Revenue programs are stabilising, but compliance pressure still needs attention.
              </h3>
              <p className="max-w-2xl text-sm leading-7 text-muted">
                This overview is designed as the first screen a leadership team or operations lead would open. The
                layout keeps top-line signal, workstream health, and next actions in one scan without collapsing into a
                generic dashboard grid.
              </p>
            </div>
            <div className="rounded-[1.6rem] border border-[rgba(148,163,184,0.12)] bg-white/5 p-5">
              <div className="flex items-center justify-between text-sm text-muted">
                <span>Now in review</span>
                <button className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[rgba(148,163,184,0.14)] px-4 py-2 text-sm text-muted" type="button">
                  Open weekly review
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                <div className="rounded-[1.35rem] bg-blue-400/10 p-4">
                  <p className="mono-label text-muted">Priority</p>
                  <p className="mt-3 text-lg font-semibold text-ink">Compliance unblock</p>
                </div>
                <div className="rounded-[1.35rem] bg-white/5 p-4">
                  <p className="mono-label text-muted">Leading edge</p>
                  <p className="mt-3 text-lg font-semibold text-ink">Expansion pipeline</p>
                </div>
                <div className="rounded-[1.35rem] bg-amber-400/10 p-4">
                  <p className="mono-label text-muted">Attention</p>
                  <p className="mt-3 text-lg font-semibold text-ink">Approval lag in two markets</p>
                </div>
              </div>
            </div>
          </div>
        </Panel>

        <Panel className="space-y-5">
          <div>
            <p className="mono-label text-muted">Current posture</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-ink">A premium command surface with product restraint.</h3>
          </div>
          <div className="grid gap-4">
            <div className="rounded-[1.45rem] border border-[rgba(148,163,184,0.12)] bg-white/4 p-4">
              <p className="text-sm font-semibold text-ink">Why this screen matters</p>
              <p className="mt-2 text-sm leading-7 text-muted">
                It proves dense product UI, information hierarchy, and a calmer enterprise tone inside the same visual
                system used for analytics and onboarding.
              </p>
            </div>
            <div className="rounded-[1.45rem] border border-[rgba(148,163,184,0.12)] bg-white/4 p-4">
              <p className="text-sm font-semibold text-ink">Composition logic</p>
              <p className="mt-2 text-sm leading-7 text-muted">
                KPI cards set the first scan. Workstream health explains the pressure points. Timeline gives the screen
                an immediate operational rhythm.
              </p>
            </div>
          </div>
        </Panel>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {kpis.map((item) => (
          <SignalMetricCard
            delta={item.delta}
            key={item.label}
            label={item.label}
            note={item.note}
            series={item.series}
            tone={item.tone}
            value={item.value}
          />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
        <Panel className="space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="mono-label text-muted">Program health</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-ink">Workstreams under active watch</h3>
            </div>
            <button className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[rgba(148,163,184,0.14)] px-4 py-2 text-sm text-muted" type="button">
              Review details
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
          <div className="grid gap-4">
            {workstreams.map((stream) => (
              <SignalHealthCard
                cadence={stream.cadence}
                health={stream.health}
                key={stream.name}
                name={stream.name}
                nextAction={stream.nextAction}
                owner={stream.owner}
                progress={stream.progress}
                summary={stream.summary}
              />
            ))}
          </div>
        </Panel>

        <Panel className="space-y-5">
          <div>
            <p className="mono-label text-muted">Today</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-ink">Operational timeline</h3>
          </div>
          <TimelineFeed entries={timeline} />
        </Panel>
      </section>
    </div>
  );
}
