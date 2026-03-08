"use client";

import { usePathname } from "next/navigation";
import { Bell, Search, ShieldCheck } from "lucide-react";
import { DashboardNav } from "@/components/dashboard-nav";

const copy: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Overview",
    description: "A quick command view for revenue operations, program health, and the next actions that matter.",
  },
  "/projects": {
    title: "Projects",
    description: "Program table, owner clarity, and risk posture tuned for fast weekly review.",
  },
  "/analytics": {
    title: "Analytics",
    description: "Trend reading, channel mix, and conversion health without decorative chart noise.",
  },
  "/onboarding": {
    title: "Onboarding",
    description: "A guided setup surface for new teams and operators entering the workspace.",
  },
  "/settings": {
    title: "Settings",
    description: "Workspace governance, security, and notification controls arranged for scanning speed.",
  },
};

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const entry = copy[pathname] ?? copy["/"];

  return (
    <div className="dashboard-shell grid gap-6 pb-8 pt-6 xl:grid-cols-[280px_1fr]">
      <aside className="panel rounded-[2rem] p-5 md:p-6">
        <div className="space-y-8">
          <div className="space-y-3">
            <p className="mono-label text-muted">Signal Desk / Concept app</p>
            <div>
              <h1 className="text-3xl font-semibold tracking-[-0.04em] text-ink">Control room for revenue operations.</h1>
              <p className="mt-3 text-sm leading-7 text-muted">
                Measured premium for analytics, project health, onboarding, and workspace governance.
              </p>
            </div>
          </div>
          <DashboardNav />
          <div className="rounded-[1.5rem] border border-[rgba(148,163,184,0.12)] bg-white/5 p-4">
            <div className="flex items-center gap-3">
              <div className="pulse-ring rounded-full bg-accent/18 p-2 text-accent">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-semibold text-ink">Workspace status</p>
                <p className="text-xs text-muted">All critical monitors online.</p>
              </div>
            </div>
            <div className="mt-4 grid gap-2 text-sm text-muted">
              <p>
                <span className="text-ink">Positioning:</span> product UI, analytics, onboarding, settings.
              </p>
              <p>
                <span className="text-ink">Use case:</span> public concept repo for portfolio-grade product delivery.
              </p>
            </div>
          </div>
        </div>
      </aside>

      <main className="space-y-6">
        <header className="panel flex flex-col gap-4 rounded-[2rem] p-5 md:flex-row md:items-center md:justify-between md:p-6">
          <div className="space-y-2">
            <p className="mono-label text-muted">Current view</p>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-ink">{entry.title}</h2>
            <p className="max-w-2xl text-sm leading-7 text-muted">{entry.description}</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-3 rounded-full border border-[rgba(148,163,184,0.14)] bg-white/5 px-4 py-2 text-sm text-muted">
              <Search className="h-4 w-4" />
              Search programs, owners, or events
            </div>
            <button
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
              type="button"
            >
              <Bell className="h-4 w-4" />
              Alerts
            </button>
          </div>
        </header>
        {children}
      </main>
    </div>
  );
}
