import { ArrowUpRight } from "lucide-react";
import { Panel } from "@/components/panel";
import { OnboardingStageCard } from "@/components/signal-primitives";
import { onboardingGuides, onboardingStages } from "@/lib/dashboard-data";

export default function OnboardingPage() {
  const activeStage = onboardingStages.find((stage) => stage.state === "In progress") ?? onboardingStages[0];

  return (
    <div className="grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
      <Panel className="space-y-5">
        <div>
          <p className="mono-label text-muted">Guided setup</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-ink">
            A premium onboarding flow that feels structured, not bureaucratic
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
            The left rail keeps step progression obvious. The active pane focuses on one decision at a time so the
            screen reads like a product flow, not a generic stack of forms.
          </p>
        </div>
        <div className="space-y-4">
          {onboardingStages.map((stage, index) => (
            <OnboardingStageCard
              detail={stage.detail}
              index={index}
              key={stage.title}
              output={stage.output}
              owner={stage.owner}
              state={stage.state}
              title={stage.title}
            />
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
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.45rem] border border-[rgba(148,163,184,0.12)] bg-white/4 p-4">
                  <p className="mono-label text-muted">Owner</p>
                  <p className="mt-3 text-lg font-semibold text-ink">{activeStage.owner}</p>
                </div>
                <div className="rounded-[1.45rem] border border-[rgba(148,163,184,0.12)] bg-white/4 p-4">
                  <p className="mono-label text-muted">Expected output</p>
                  <p className="mt-3 text-sm leading-7 text-ink">{activeStage.output}</p>
                </div>
              </div>
              <div className="rounded-[1.55rem] border border-[rgba(148,163,184,0.12)] bg-[linear-gradient(180deg,rgba(18,30,54,0.84),rgba(10,18,34,0.8))] p-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-ink">Current checklist</p>
                  <button className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[rgba(148,163,184,0.14)] px-4 py-2 text-sm text-muted" type="button">
                    Open workspace guide
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
                <div className="mt-4 space-y-3">
                  {activeStage.actions.map((action) => (
                    <div
                      className="rounded-[1.2rem] border border-[rgba(148,163,184,0.12)] bg-white/4 px-4 py-3 text-sm text-muted"
                      key={action}
                    >
                      {action}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
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
