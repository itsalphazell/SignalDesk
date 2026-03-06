import { Panel } from "@/components/panel";
import { projectRows } from "@/lib/dashboard-data";

export default function ProjectsPage() {
  return (
    <div className="grid gap-6">
      <Panel className="overflow-hidden">
        <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mono-label text-muted">Projects table</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-ink">High-signal portfolio of active programs</h3>
          </div>
          <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.16em] text-muted">
            <span className="rounded-full border border-[rgba(148,163,184,0.14)] px-3 py-1.5">Quarter focus</span>
            <span className="rounded-full border border-[rgba(148,163,184,0.14)] px-3 py-1.5">Owner accountability</span>
            <span className="rounded-full border border-[rgba(148,163,184,0.14)] px-3 py-1.5">Risk visibility</span>
          </div>
        </div>
        <div className="soft-scrollbar overflow-x-auto">
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
              {projectRows.map((row) => (
                <tr className="rounded-2xl bg-white/4" key={row.name}>
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
    </div>
  );
}
