"use client";

import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { Panel } from "@/components/panel";
import { OnboardingStageCard } from "@/components/signal-primitives";
import { onboardingGuides, onboardingStages } from "@/lib/dashboard-data";

export default function OnboardingPage() {
  const [activeStageIndex, setActiveStageIndex] = useState(1);
  const [completedActions, setCompletedActions] = useState<Record<string, boolean>>({
    "Validate source schema": true,
  });

  const activeStage = onboardingStages[activeStageIndex] ?? onboardingStages[0];
  const checkedCount = activeStage.actions.filter((action) => completedActions[action]).length;
  const progress = Math.round((checkedCount / activeStage.actions.length) * 100);

  return (
    <div className="grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
      <Panel className="space-y-5">
        <div>
          <p className="mono-label text-muted">Guided setup</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-ink">
            A premium onboarding flow that now behaves like a guided product sequence
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
            Step cards are now clickable, checklist states are live, and the active pane updates like a real setup
            surface instead of a static mock.
          </p>
        </div>
        <div className="space-y-4">
          {onboardingStages.map((stage, index) => (
            <button
              className={`cursor-pointer rounded-[1.75rem] text-left ${
                activeStageIndex === index ? "ring-2 ring-blue-300/40" : ""
              }`}
              key={stage.title}
              onClick={() => setActiveStageIndex(index)}
              type="button"
            >
              <OnboardingStageCard
                detail={stage.detail}
                index={index}
                output={stage.output}
                owner={stage.owner}
                state={stage.state}
                title={stage.title}
              />
            </button>
          ))}
        </div>
      </Panel>

      <div className="grid gap-6">
        <Panel className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.16),transparent_22rem)]" />
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="mono-label text-muted">Current step</p>
                  <h3 className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-ink">{activeStage.title}</h3>
                </div>
                <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-blue-200">
                  {activeStage.state}
                </span>
              </div>
              <p className="max-w-2xl text-sm leading-7 text-muted">{activeStage.detail}</p>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-[1.45rem] border border-[rgba(148,163,184,0.12)] bg-white/4 p-4">
                  <p className="mono-label text-muted">Owner</p>
                  <p className="mt-3 text-lg font-semibold text-ink">{activeStage.owner}</p>
                </div>
                <div className="rounded-[1.45rem] border border-[rgba(148,163,184,0.12)] bg-white/4 p-4">
                  <p className="mono-label text-muted">Success metric</p>
                  <p className="mt-3 text-sm leading-7 text-ink">{activeStage.successMetric}</p>
                </div>
                <div className="rounded-[1.45rem] border border-[rgba(148,163,184,0.12)] bg-white/4 p-4">
                  <p className="mono-label text-muted">Progress</p>
                  <p className="mt-3 text-lg font-semibold text-ink">{progress}%</p>
                </div>
              </div>

              <div className="space-y-3 rounded-[1.55rem] border border-[rgba(148,163,184,0.12)] bg-[linear-gradient(180deg,rgba(18,30,54,0.84),rgba(10,18,34,0.8))] p-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-ink">Current checklist</p>
                  <button className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[rgba(148,163,184,0.14)] px-4 py-2 text-sm text-muted" type="button">
                    Open workspace guide
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/8">
                  <div className="h-full rounded-full bg-[linear-gradient(90deg,#60A5FA,#93C5FD)]" style={{ width: `${progress}%` }} />
                </div>
                <div className="space-y-3">
                  {activeStage.actions.map((action) => {
                    const checked = Boolean(completedActions[action]);

                    return (
                      <button
                        className={`flex w-full cursor-pointer items-center gap-3 rounded-[1.2rem] border px-4 py-3 text-left text-sm ${
                          checked
                            ? "border-blue-300/28 bg-blue-400/10 text-ink"
                            : "border-[rgba(148,163,184,0.12)] bg-white/4 text-muted"
                        }`}
                        key={action}
                        onClick={() =>
                          setCompletedActions((current) => ({
                            ...current,
                            [action]: !current[action],
                          }))
                        }
                        type="button"
                      >
                        <span
                          className={`inline-flex h-6 w-6 items-center justify-center rounded-full ${
                            checked ? "bg-primary/20 text-blue-200" : "bg-white/8 text-muted"
                          }`}
                        >
                          {checked ? <Check className="h-4 w-4" /> : <span className="h-2 w-2 rounded-full bg-current" />}
                        </span>
                        <span>{action}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-[1.45rem] border border-[rgba(148,163,184,0.12)] bg-white/4 p-4">
                <p className="font-semibold text-ink">Expected output</p>
                <p className="mt-2 text-sm leading-7 text-muted">{activeStage.output}</p>
              </div>
              {onboardingGuides.map((item) => (
                <div className="rounded-[1.45rem] border border-[rgba(148,163,184,0.12)] bg-white/4 p-4" key={item.title}>
                  <p className="font-semibold text-ink">{item.title}</p>
                  <p className="mt-2 text-sm leading-7 text-muted">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Panel>
      </div>
    </div>
  );
}
