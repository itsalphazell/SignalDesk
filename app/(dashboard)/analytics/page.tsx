import { Panel } from "@/components/panel";
import { channelMix, conversionMoments } from "@/lib/dashboard-data";

export default function AnalyticsPage() {
  return (
    <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
      <Panel className="space-y-5">
        <div>
          <p className="mono-label text-muted">Trend map</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-ink">Pipeline movement across the last 8 weeks</h3>
        </div>
        <div className="rounded-[1.5rem] border border-[rgba(148,163,184,0.12)] bg-white/4 p-5">
          <div className="flex h-72 items-end gap-4">
            {[42, 48, 38, 56, 60, 52, 68, 74].map((height, index) => (
              <div className="flex flex-1 flex-col justify-end gap-3" key={index}>
                <div className="rounded-t-2xl bg-[linear-gradient(180deg,#60A5FA,#1E40AF)]" style={{ height: `${height * 3}px` }} />
                <span className="text-center text-xs text-muted">W{index + 1}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {conversionMoments.map((item) => (
            <div className="rounded-[1.35rem] border border-[rgba(148,163,184,0.12)] bg-white/4 p-4" key={item.label}>
              <p className="mono-label text-muted">{item.label}</p>
              <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-ink">{item.value}</p>
            </div>
          ))}
        </div>
      </Panel>

      <Panel className="space-y-5">
        <div>
          <p className="mono-label text-muted">Channel mix</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-ink">Where qualified demand is coming from</h3>
        </div>
        <div className="space-y-4">
          {channelMix.map((item) => (
            <div className="space-y-2" key={item.label}>
              <div className="flex items-center justify-between text-sm">
                <span className="text-ink">{item.label}</span>
                <span className="text-muted">{item.value}%</span>
              </div>
              <div className="h-3 rounded-full bg-white/6">
                <div
                  className="h-3 rounded-full bg-[linear-gradient(90deg,#3B82F6,#F59E0B)]"
                  style={{ width: `${item.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Panel>
    </div>
  );
}
