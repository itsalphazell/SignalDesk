"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Panel } from "@/components/panel";
import { SignalSegmentTabs, SignalStateChip } from "@/components/signal-controls";
import { settingsSections } from "@/lib/dashboard-data";

export default function SettingsPage() {
  const [activeSectionId, setActiveSectionId] = useState<string>(settingsSections[0].id);
  const activeSection = settingsSections.find((item) => item.id === activeSectionId) ?? settingsSections[0];

  return (
    <div className="grid gap-6 xl:grid-cols-[0.82fr_1.18fr]">
      <Panel className="space-y-5">
        <div>
          <p className="mono-label text-muted">Workspace governance</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-ink">
            A lighter settings pass that still behaves like a real product surface
          </h3>
          <p className="mt-3 text-sm leading-7 text-muted">
            The page keeps the scope smaller than analytics or onboarding, but it now has real section switching and
            stateful configuration readouts instead of static placeholder cards.
          </p>
        </div>
        <SignalSegmentTabs
          activeId={activeSection.id}
          items={settingsSections.map((section) => ({ id: section.id, label: section.title }))}
          onChange={setActiveSectionId}
        />
      </Panel>

      <Panel className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="mono-label text-muted">Selected section</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-ink">{activeSection.title}</h3>
          </div>
          <button className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[rgba(148,163,184,0.14)] px-4 py-2 text-sm text-muted" type="button">
            Save preset
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
        <p className="max-w-3xl text-sm leading-7 text-muted">{activeSection.description}</p>

        <div className="grid gap-4">
          {activeSection.controls.map((control) => (
            <div className="rounded-[1.45rem] border border-[rgba(148,163,184,0.12)] bg-white/4 p-4" key={control.label}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-semibold text-ink">{control.label}</p>
                  <p className="mt-2 text-sm leading-7 text-muted">{control.note}</p>
                </div>
                <SignalStateChip state={control.state} />
              </div>
              <div className="mt-4 rounded-[1rem] bg-[linear-gradient(180deg,rgba(18,30,54,0.84),rgba(10,18,34,0.8))] px-4 py-3 text-sm font-semibold text-ink">
                {control.value}
              </div>
            </div>
          ))}
        </div>
      </Panel>
    </div>
  );
}
