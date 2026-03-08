import { Panel } from "@/components/panel";
import { ComparisonMeter, TrendChart } from "@/components/signal-primitives";
import {
  analyticsComparisons,
  analyticsTrend,
  channelMix,
  conversionMoments,
} from "@/lib/dashboard-data";

export default function AnalyticsPage() {
  return (
    <div className="grid gap-6">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {conversionMoments.map((item) => (
          <div
            className="rounded-[1.55rem] border border-[rgba(148,163,184,0.12)] bg-[linear-gradient(180deg,rgba(18,30,54,0.92),rgba(10,18,34,0.88))] p-5 shadow-[0_18px_40px_rgba(1,6,18,0.24)]"
            key={item.label}
          >
            <p className="mono-label text-muted">{item.label}</p>
            <div className="mt-3 flex items-start justify-between gap-4">
              <p className="text-3xl font-semibold tracking-[-0.05em] text-ink">{item.value}</p>
              <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-blue-200">
                {item.delta}
              </span>
            </div>
            <p className="mt-3 text-sm leading-6 text-muted">{item.note}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.18fr_0.82fr]">
        <Panel className="space-y-5">
          <div>
            <p className="mono-label text-muted">Trend map</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-ink">
              Pipeline movement across the last 8 weeks
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
              The visual treatment stays product-grade rather than decorative. The goal is to make direction, baseline,
              and weekly pressure easy to read at a glance.
            </p>
          </div>
          <TrendChart series={analyticsTrend} />
        </Panel>

        <Panel className="space-y-5">
          <div>
            <p className="mono-label text-muted">Comparison modules</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-ink">Performance against the operating baseline</h3>
          </div>
          <div className="grid gap-4">
            {analyticsComparisons.map((item) => (
              <ComparisonMeter
                detail={item.detail}
                key={item.label}
                label={item.label}
                progress={item.progress}
                tone={item.tone}
                value={item.value}
              />
            ))}
          </div>
        </Panel>
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.82fr_1.18fr]">
        <Panel className="space-y-5">
          <div>
            <p className="mono-label text-muted">Channel mix</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-ink">Where qualified demand is coming from</h3>
          </div>
          <div className="space-y-4">
            {channelMix.map((item) => (
              <div className="space-y-2 rounded-[1.4rem] border border-[rgba(148,163,184,0.12)] bg-white/4 p-4" key={item.label}>
                <div className="flex items-center justify-between gap-3 text-sm">
                  <span className="text-ink">{item.label}</span>
                  <span className="text-muted">{item.value}%</span>
                </div>
                <div className="h-3 rounded-full bg-white/6">
                  <div
                    className="h-3 rounded-full bg-[linear-gradient(90deg,#60A5FA,#F59E0B)]"
                    style={{ width: `${item.value}%` }}
                  />
                </div>
                <p className="text-sm leading-6 text-muted">{item.note}</p>
              </div>
            ))}
          </div>
        </Panel>

        <Panel className="space-y-5">
          <div>
            <p className="mono-label text-muted">Reading notes</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-ink">Why this analytics screen belongs in the portfolio</h3>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-[1.45rem] border border-[rgba(148,163,184,0.12)] bg-white/4 p-4">
              <p className="font-semibold text-ink">Intentional chart hierarchy</p>
              <p className="mt-2 text-sm leading-7 text-muted">
                The main chart carries the narrative, while supporting modules stay quiet enough to avoid visual competition.
              </p>
            </div>
            <div className="rounded-[1.45rem] border border-[rgba(148,163,184,0.12)] bg-white/4 p-4">
              <p className="font-semibold text-ink">Dense, but readable</p>
              <p className="mt-2 text-sm leading-7 text-muted">
                Summary cards, comparison meters, and mix bars are layered to stay scanable on the first pass.
              </p>
            </div>
            <div className="rounded-[1.45rem] border border-[rgba(148,163,184,0.12)] bg-white/4 p-4">
              <p className="font-semibold text-ink">Portable to client work</p>
              <p className="mt-2 text-sm leading-7 text-muted">
                The same approach can support marketing analytics, RevOps dashboards, or internal delivery reporting.
              </p>
            </div>
          </div>
        </Panel>
      </section>
    </div>
  );
}
