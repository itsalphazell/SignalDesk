import { CircleCheckBig, CircleDashed, LoaderCircle } from "lucide-react";
import { Panel } from "@/components/panel";
import { onboardingStages } from "@/lib/dashboard-data";

export default function OnboardingPage() {
  return (
    <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
      <Panel className="space-y-5">
        <div>
          <p className="mono-label text-muted">Guided setup</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-ink">Onboarding surfaces that feel structured, not bureaucratic</h3>
        </div>
        <div className="space-y-4">
          {onboardingStages.map((stage, index) => (
            <div className="flex gap-4 rounded-[1.35rem] border border-[rgba(148,163,184,0.12)] bg-white/4 p-4" key={stage.title}>
              <div className="mt-1 text-blue-200">
                {stage.state === "Complete" ? (
                  <CircleCheckBig className="h-5 w-5" />
                ) : stage.state === "In progress" ? (
                  <LoaderCircle className="h-5 w-5" />
                ) : (
                  <CircleDashed className="h-5 w-5" />
                )}
              </div>
              <div className="space-y-2">
                <p className="mono-label text-muted">Step 0{index + 1}</p>
                <p className="font-semibold text-ink">{stage.title}</p>
                <p className="text-sm leading-7 text-muted">{stage.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </Panel>

      <Panel className="space-y-5">
        <div>
          <p className="mono-label text-muted">Experience notes</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-ink">Why this screen exists in the portfolio</h3>
        </div>
        <div className="grid gap-4">
          <div className="rounded-[1.35rem] border border-[rgba(148,163,184,0.12)] bg-white/4 p-4">
            <p className="font-semibold text-ink">One decision per step</p>
            <p className="mt-2 text-sm leading-7 text-muted">
              Each step isolates one meaningful action so onboarding feels progressive rather than form-heavy.
            </p>
          </div>
          <div className="rounded-[1.35rem] border border-[rgba(148,163,184,0.12)] bg-white/4 p-4">
            <p className="font-semibold text-ink">Dense, but calm</p>
            <p className="mt-2 text-sm leading-7 text-muted">
              The design keeps product discipline while still feeling premium through spacing, contrast, and tone.
            </p>
          </div>
          <div className="rounded-[1.35rem] border border-[rgba(148,163,184,0.12)] bg-white/4 p-4">
            <p className="font-semibold text-ink">Portable to client work</p>
            <p className="mt-2 text-sm leading-7 text-muted">
              The same structure can support workspace setup, account activation, or internal ops onboarding.
            </p>
          </div>
        </div>
      </Panel>
    </div>
  );
}
