"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Panel } from "@/components/panel";
import { SignalSearchField, SignalSegmentTabs } from "@/components/signal-controls";
import { projectRows, projectSortOptions, riskFilters } from "@/lib/dashboard-data";

function extractVelocity(value: string) {
  const match = value.match(/\d+/);
  return match ? Number.parseInt(match[0], 10) : 0;
}

export default function ProjectsPage() {
  const [query, setQuery] = useState("");
  const [activeRisk, setActiveRisk] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>(projectSortOptions[0].id);
  const [selectedProjectName, setSelectedProjectName] = useState<string>(projectRows[0].name);

  const filteredRows = projectRows
    .filter((row) => {
      const matchesRisk = activeRisk === "All" ? true : row.risk === activeRisk;
      const normalizedQuery = query.trim().toLowerCase();
      const matchesQuery =
        !normalizedQuery ||
        row.name.toLowerCase().includes(normalizedQuery) ||
        row.client.toLowerCase().includes(normalizedQuery) ||
        row.owner.toLowerCase().includes(normalizedQuery);
      return matchesRisk && matchesQuery;
    })
    .sort((left, right) => {
      if (sortBy === "velocity") {
        return extractVelocity(right.velocity) - extractVelocity(left.velocity);
      }

      if (sortBy === "recent") {
        return left.lastUpdate.localeCompare(right.lastUpdate);
      }

      const riskRank = { High: 3, Medium: 2, Low: 1 };
      return riskRank[right.risk as keyof typeof riskRank] - riskRank[left.risk as keyof typeof riskRank];
    });

  const selectedProject =
    filteredRows.find((row) => row.name === selectedProjectName) ?? filteredRows[0] ?? projectRows[0];

  return (
    <div className="grid gap-6 xl:grid-cols-[1.12fr_0.88fr]">
      <Panel className="overflow-hidden">
        <div className="space-y-5">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
            <div>
              <p className="mono-label text-muted">Interactive project board</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-ink">
                Searchable, filterable, and selectable delivery programs
              </h3>
            </div>
            <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.16em] text-muted">
              <span className="rounded-full border border-[rgba(148,163,184,0.14)] px-3 py-1.5">Quarter focus</span>
              <span className="rounded-full border border-[rgba(148,163,184,0.14)] px-3 py-1.5">Owner accountability</span>
              <span className="rounded-full border border-[rgba(148,163,184,0.14)] px-3 py-1.5">Risk visibility</span>
            </div>
          </div>

          <div className="grid gap-4 xl:grid-cols-[1fr_auto]">
            <SignalSearchField onChange={setQuery} placeholder="Search programs, clients, or owners" value={query} />
            <SignalSegmentTabs
              activeId={sortBy}
              items={projectSortOptions.map((item) => ({ id: item.id, label: item.label }))}
              onChange={setSortBy}
            />
          </div>

          <SignalSegmentTabs
            activeId={activeRisk}
            items={riskFilters.map((filter) => ({ id: filter, label: filter }))}
            onChange={setActiveRisk}
          />
        </div>

        <div className="soft-scrollbar mt-6 overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-y-3 text-left text-sm">
            <thead className="text-xs uppercase tracking-[0.16em] text-muted">
              <tr>
                <th className="px-4 py-2">Program</th>
                <th className="px-4 py-2">Client</th>
                <th className="px-4 py-2">Phase</th>
                <th className="px-4 py-2">Owner</th>
                <th className="px-4 py-2">Risk</th>
                <th className="px-4 py-2">Velocity</th>
              </tr>
            </thead>
            <tbody>
              {filteredRows.map((row) => (
                <tr
                  className={`cursor-pointer rounded-2xl transition-colors ${
                    selectedProject.name === row.name ? "bg-blue-400/10" : "bg-white/4 hover:bg-white/8"
                  }`}
                  key={row.name}
                  onClick={() => setSelectedProjectName(row.name)}
                >
                  <td className="rounded-l-2xl px-4 py-4 font-semibold text-ink">{row.name}</td>
                  <td className="px-4 py-4 text-muted">{row.client}</td>
                  <td className="px-4 py-4 text-muted">{row.phase}</td>
                  <td className="px-4 py-4 text-muted">{row.owner}</td>
                  <td className="px-4 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        row.risk === "High"
                          ? "bg-red-400/16 text-red-200"
                          : row.risk === "Medium"
                            ? "bg-accent/16 text-amber-300"
                            : "bg-success/16 text-green-300"
                      }`}
                    >
                      {row.risk}
                    </span>
                  </td>
                  <td className="rounded-r-2xl px-4 py-4 text-muted">{row.velocity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>

      <div className="grid gap-6">
        <Panel className="space-y-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="mono-label text-muted">Selected program</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-ink">{selectedProject.name}</h3>
            </div>
            <button className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[rgba(148,163,184,0.14)] px-4 py-2 text-sm text-muted" type="button">
              Open brief
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>

          <div className="rounded-[1.55rem] bg-[linear-gradient(180deg,rgba(18,30,54,0.84),rgba(10,18,34,0.8))] p-5">
            <p className="mono-label text-muted">Program readout</p>
            <p className="mt-3 text-lg font-semibold text-ink">{selectedProject.summary}</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-[1.35rem] border border-[rgba(148,163,184,0.12)] bg-white/4 p-4">
              <p className="mono-label text-muted">Owner</p>
              <p className="mt-3 text-lg font-semibold text-ink">{selectedProject.owner}</p>
            </div>
            <div className="rounded-[1.35rem] border border-[rgba(148,163,184,0.12)] bg-white/4 p-4">
              <p className="mono-label text-muted">Last update</p>
              <p className="mt-3 text-lg font-semibold text-ink">{selectedProject.lastUpdate}</p>
            </div>
          </div>

          <div className="space-y-3">
            <p className="mono-label text-muted">Milestones</p>
            {selectedProject.milestones.map((item) => (
              <div className="rounded-[1.2rem] border border-[rgba(148,163,184,0.12)] bg-white/4 px-4 py-3 text-sm text-muted" key={item}>
                {item}
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <p className="mono-label text-muted">Current blockers</p>
            {selectedProject.blockers.map((item) => (
              <div className="rounded-[1.2rem] border border-[rgba(148,163,184,0.12)] bg-white/4 px-4 py-3 text-sm text-muted" key={item}>
                {item}
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}
