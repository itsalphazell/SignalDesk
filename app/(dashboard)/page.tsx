"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCheck, ShieldAlert, Sparkles } from "lucide-react";
import { Panel } from "@/components/panel";
import { SignalSegmentTabs } from "@/components/signal-controls";
import { SignalHealthCard, SignalMetricCard, TimelineFeed } from "@/components/signal-primitives";
import { kpis, overviewModes, timelineByMode, workstreams } from "@/lib/dashboard-data";

export default function OverviewPage() {
  const [activeModeId, setActiveModeId] = useState<string>(overviewModes[0].id);
  const [selectedStreamName, setSelectedStreamName] = useState<string>(workstreams[0].name);
  const [selectedKpiLabel, setSelectedKpiLabel] = useState<string>(kpis[0].label);
  const [reviewOpen, setReviewOpen] = useState(false);

  const activeMode = overviewModes.find((item) => item.id === activeModeId) ?? overviewModes[0];
  const selectedStream = workstreams.find((item) => item.name === selectedStreamName) ?? workstreams[0];
  const selectedKpi = kpis.find((item) => item.label === selectedKpiLabel) ?? kpis[0];

  return (
    <div className="grid gap-6">
      <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <Panel className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_30rem)]" />
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="mono-label text-muted">Interactive prototype / command view</p>
              <div className="space-y-4">
                <h3 className="text-4xl font-semibold leading-[0.94] tracking-[-0.05em] text-ink">
                  A prototype board that reacts like a product, not a frozen dashboard shot.
                </h3>
                <p className="max-w-3xl text-sm leading-7 text-muted">{activeMode.summary}</p>
              </div>
            </div>

            <SignalSegmentTabs
              activeId={activeMode.id}
              items={overviewModes.map((mode) => ({ id: mode.id, label: mode.label, badge: mode.badge }))}
              onChange={setActiveModeId}
            />

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-[1.45rem] border border-[rgba(148,163,184,0.12)] bg-white/5 p-4">
                <p className="mono-label text-muted">{activeMode.watchLabel}</p>
                <p className="mt-3 text-lg font-semibold text-ink">{activeMode.watchValue}</p>
              </div>
              <div className="rounded-[1.45rem] border border-[rgba(148,163,184,0.12)] bg-white/5 p-4">
                <p className="mono-label text-muted">Selected KPI</p>
                <p className="mt-3 text-lg font-semibold text-ink">{selectedKpi.label}</p>
              </div>
              <div className="rounded-[1.45rem] border border-[rgba(148,163,184,0.12)] bg-white/5 p-4">
                <p className="mono-label text-muted">Focus stream</p>
                <p className="mt-3 text-lg font-semibold text-ink">{selectedStream.name}</p>
              </div>
            </div>
          </div>
        </Panel>

        <Panel className="space-y-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="mono-label text-muted">Command summary</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-ink">{activeMode.label}</h3>
            </div>
            <button
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[rgba(148,163,184,0.14)] px-4 py-2 text-sm text-muted transition-colors hover:bg-white/8 hover:text-ink"
              onClick={() => setReviewOpen((value) => !value)}
              type="button"
            >
              {activeMode.actionLabel}
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>

          <div className="rounded-[1.55rem] bg-[linear-gradient(180deg,rgba(18,30,54,0.84),rgba(10,18,34,0.8))] p-5 shadow-[0_18px_40px_rgba(1,6,18,0.24)]">
            <p className="mono-label text-muted">Operational readout</p>
            <p className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-ink">{activeMode.command}</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-1">
            <div className="rounded-[1.45rem] border border-[rgba(148,163,184,0.12)] bg-white/4 p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary/20 p-2 text-blue-200">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">Prototype behavior</p>
                  <p className="text-sm text-muted">Mode changes update the board narrative and review surface.</p>
                </div>
              </div>
            </div>
            <div className="rounded-[1.45rem] border border-[rgba(148,163,184,0.12)] bg-white/4 p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-accent/16 p-2 text-amber-300">
                  <ShieldAlert className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">Why it matters</p>
                  <p className="text-sm text-muted">The prototype now behaves like an explorable board rather than a static concept card.</p>
                </div>
              </div>
            </div>
          </div>

          {reviewOpen ? (
            <div className="rounded-[1.55rem] border border-blue-300/22 bg-blue-400/10 p-5">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-success/16 p-2 text-green-300">
                  <CheckCheck className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">Weekly review focus</p>
                  <p className="text-sm text-muted">Operator review pack opened for {activeMode.label.toLowerCase()}.</p>
                </div>
              </div>
              <div className="mt-4 grid gap-3">
                {selectedStream.signals.map((signal) => (
                  <div
                    className="rounded-[1.2rem] border border-[rgba(148,163,184,0.12)] bg-white/4 px-4 py-3 text-sm text-muted"
                    key={signal}
                  >
                    {signal}
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </Panel>
      </section>

      <section className="space-y-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mono-label text-muted">Signal modules</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-ink">Selectable KPI surfaces with real focus states</h3>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-muted">{selectedKpi.detail}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {kpis.map((item) => (
            <button
              className={`cursor-pointer rounded-[1.75rem] text-left ${
                selectedKpi.label === item.label ? "ring-2 ring-blue-300/45" : ""
              }`}
              key={item.label}
              onClick={() => setSelectedKpiLabel(item.label)}
              type="button"
            >
              <SignalMetricCard
                delta={item.delta}
                label={item.label}
                note={item.note}
                series={item.series}
                tone={item.tone}
                value={item.value}
              />
            </button>
          ))}
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.16fr_0.84fr]">
        <Panel className="space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="mono-label text-muted">Program health</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-ink">Clickable workstreams with a live focus panel</h3>
            </div>
            <span className="rounded-full border border-[rgba(148,163,184,0.14)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              {selectedStream.health}
            </span>
          </div>
          <div className="grid gap-4">
            {workstreams.map((stream) => (
              <button
                className={`cursor-pointer rounded-[1.75rem] text-left ${
                  selectedStream.name === stream.name ? "ring-2 ring-blue-300/40" : ""
                }`}
                key={stream.name}
                onClick={() => setSelectedStreamName(stream.name)}
                type="button"
              >
                <SignalHealthCard
                  cadence={stream.cadence}
                  health={stream.health}
                  name={stream.name}
                  nextAction={stream.nextAction}
                  owner={stream.owner}
                  progress={stream.progress}
                  summary={stream.summary}
                />
              </button>
            ))}
          </div>
        </Panel>

        <div className="grid gap-6">
          <Panel className="space-y-5">
            <div>
              <p className="mono-label text-muted">Focus panel</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-ink">{selectedStream.name}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{selectedStream.ownerFocus}</p>
            </div>
            <div className="rounded-[1.55rem] bg-[linear-gradient(180deg,rgba(18,30,54,0.84),rgba(10,18,34,0.8))] p-5">
              <p className="mono-label text-muted">Decision needed</p>
              <p className="mt-3 text-lg font-semibold text-ink">{selectedStream.decision}</p>
            </div>
            <div className="space-y-3">
              {selectedStream.signals.map((signal) => (
                <div className="rounded-[1.3rem] border border-[rgba(148,163,184,0.12)] bg-white/4 px-4 py-3 text-sm text-muted" key={signal}>
                  {signal}
                </div>
              ))}
            </div>
          </Panel>

          <Panel className="space-y-5">
            <div>
              <p className="mono-label text-muted">Timeline</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-ink">Mode-aware operational rhythm</h3>
            </div>
            <TimelineFeed entries={timelineByMode[activeMode.id]} />
          </Panel>
        </div>
      </section>
    </div>
  );
}
