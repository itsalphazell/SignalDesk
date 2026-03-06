import { Panel } from "@/components/panel";
import { settingsGroups } from "@/lib/dashboard-data";

export default function SettingsPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {settingsGroups.map((group) => (
        <Panel className="space-y-4" key={group.title}>
          <div>
            <p className="mono-label text-muted">{group.title}</p>
            <p className="mt-3 text-sm leading-7 text-muted">{group.description}</p>
          </div>
          <div className="space-y-3">
            {group.items.map((item) => (
              <div
                className="rounded-[1.25rem] border border-[rgba(148,163,184,0.12)] bg-white/4 px-4 py-3 text-sm text-ink"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </Panel>
      ))}
    </div>
  );
}
