import { ArrowUpRight, CircleAlert, CircleCheckBig, Clock3 } from "lucide-react";
import { Panel } from "@/components/panel";
import { kpis, timeline, workstreams } from "@/lib/dashboard-data";

export default function OverviewPage() {
  return (
    <div className="grid gap-6">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {kpis.map((item) => (
          <Panel key={item.label}>
            <p className="mono-label text-muted">{item.label}</p>
            <div className="mt-4 flex items-end justify-between gap-4">
              <p className="text-4xl font-semibold tracking-[-0.04em] text-ink">{item.value}</p>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  item.tone === "accent"
                    ? "bg-accent/16 text-accent"
                    : item.tone === "primary"
                      ? "bg-primary/20 text-blue-200"
                      : item.tone === "success"
                        ? "bg-success/16 text-green-300"
                        : "bg-white/8 text-muted"
                }`}
              >
                {item.delta}
              </span>
            </div>
          </Panel>
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
              Open review
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
          <div className="grid gap-4">
            {workstreams.map((stream) => (
              <div className="rounded-[1.35rem] border border-[rgba(148,163,184,0.12)] bg-white/4 p-4" key={stream.name}>
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <p className="text-lg font-semibold text-ink">{stream.name}</p>
                      <span
                        className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] ${
                          stream.health === "Healthy"
                            ? "bg-success/16 text-green-300"
                            : stream.health === "Watch"
                              ? "bg-accent/16 text-amber-300"
                              : "bg-red-400/16 text-red-200"
                        }`}
                      >
                        {stream.health}
                      </span>
                    </div>
                    <p className="text-sm text-muted">{stream.owner}</p>
                    <p className="max-w-2xl text-sm leading-7 text-muted">{stream.summary}</p>
                  </div>
                  <div className="min-w-48 space-y-2">
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.16em] text-muted">
                      <span>Progress</span>
                      <span>{stream.progress}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/8">
                      <div
                        className="h-2 rounded-full bg-[linear-gradient(90deg,#3B82F6,#F59E0B)]"
                        style={{ width: `${stream.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel className="space-y-5">
          <div>
            <p className="mono-label text-muted">Today</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-ink">Operational timeline</h3>
          </div>
          <div className="space-y-4">
            {timeline.map((entry, index) => (
              <div className="flex gap-4" key={entry.title}>
                <div className="flex flex-col items-center">
                  <div className="mt-1 rounded-full bg-primary/20 p-2 text-blue-200">
                    {index === 0 ? <CircleCheckBig className="h-4 w-4" /> : index === 1 ? <Clock3 className="h-4 w-4" /> : <CircleAlert className="h-4 w-4" />}
                  </div>
                  {index < timeline.length - 1 ? <div className="mt-2 h-full w-px bg-white/10" /> : null}
                </div>
                <div className="space-y-1 pb-4">
                  <p className="text-sm text-muted">{entry.time}</p>
                  <p className="font-semibold text-ink">{entry.title}</p>
                  <p className="text-sm leading-7 text-muted">{entry.note}</p>
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </section>
    </div>
  );
}
