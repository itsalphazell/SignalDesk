import clsx from "clsx";
import {
  ArrowUpRight,
  CheckCircle2,
  CircleAlert,
  CircleDashed,
  Clock3,
  LoaderCircle,
} from "lucide-react";

type Tone = "accent" | "primary" | "success" | "muted" | "critical";
type TimelineStatus = "complete" | "active" | "attention";
type OnboardingState = "Complete" | "In progress" | "Pending";

function getToneClasses(tone: Tone) {
  switch (tone) {
    case "accent":
      return {
        chip: "bg-accent/16 text-amber-300",
        bar: "from-amber-300/95 to-orange-300/80",
        glow: "bg-amber-400/12",
      };
    case "primary":
      return {
        chip: "bg-primary/22 text-blue-200",
        bar: "from-blue-300/95 to-blue-500/80",
        glow: "bg-blue-400/12",
      };
    case "success":
      return {
        chip: "bg-success/16 text-green-300",
        bar: "from-emerald-300/95 to-green-500/80",
        glow: "bg-emerald-400/12",
      };
    case "critical":
      return {
        chip: "bg-red-400/16 text-red-200",
        bar: "from-red-300/95 to-rose-500/80",
        glow: "bg-red-400/12",
      };
    default:
      return {
        chip: "bg-white/8 text-muted",
        bar: "from-slate-300/90 to-slate-500/70",
        glow: "bg-white/6",
      };
  }
}

function MiniBars({ series, tone }: { series: number[]; tone: Tone }) {
  const max = Math.max(...series, 1);
  const toneClasses = getToneClasses(tone);

  return (
    <div className="mt-5 flex h-14 items-end gap-1.5">
      {series.map((value, index) => (
        <span
          className={clsx("flex-1 rounded-full bg-gradient-to-t", toneClasses.bar)}
          key={`${value}-${index}`}
          style={{ height: `${Math.max(18, (value / max) * 100)}%` }}
        />
      ))}
    </div>
  );
}

export function SignalMetricCard({
  label,
  value,
  delta,
  note,
  tone,
  series,
}: {
  label: string;
  value: string;
  delta: string;
  note: string;
  tone: Tone;
  series: number[];
}) {
  const toneClasses = getToneClasses(tone);

  return (
    <div className="rounded-[1.55rem] border border-[rgba(148,163,184,0.12)] bg-[linear-gradient(180deg,rgba(18,30,54,0.92),rgba(10,18,34,0.9))] p-5 shadow-[0_18px_40px_rgba(1,6,18,0.24)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="mono-label text-muted">{label}</p>
          <p className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-ink">{value}</p>
        </div>
        <span className={clsx("rounded-full px-3 py-1 text-xs font-semibold", toneClasses.chip)}>{delta}</span>
      </div>
      <p className="mt-3 text-sm leading-6 text-muted">{note}</p>
      <MiniBars series={series} tone={tone} />
    </div>
  );
}

export function SignalHealthCard({
  name,
  owner,
  health,
  progress,
  summary,
  nextAction,
  cadence,
}: {
  name: string;
  owner: string;
  health: "Healthy" | "Watch" | "Critical";
  progress: number;
  summary: string;
  nextAction: string;
  cadence: string;
}) {
  const tone: Tone = health === "Healthy" ? "success" : health === "Watch" ? "accent" : "critical";
  const toneClasses = getToneClasses(tone);

  return (
    <div className="rounded-[1.55rem] border border-[rgba(148,163,184,0.12)] bg-white/4 p-5">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-lg font-semibold text-ink">{name}</p>
            <span className={clsx("rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em]", toneClasses.chip)}>
              {health}
            </span>
          </div>
          <p className="text-sm text-muted">{owner}</p>
          <p className="max-w-2xl text-sm leading-7 text-muted">{summary}</p>
        </div>
        <div className="min-w-[15rem] space-y-3">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.16em] text-muted">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="h-2 rounded-full bg-white/8">
            <div className={clsx("h-2 rounded-full bg-gradient-to-r", toneClasses.bar)} style={{ width: `${progress}%` }} />
          </div>
          <div className="grid gap-2 text-sm text-muted">
            <p>
              <span className="text-ink">Next:</span> {nextAction}
            </p>
            <p>
              <span className="text-ink">Cadence:</span> {cadence}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function getTimelineIcon(status: TimelineStatus) {
  if (status === "complete") {
    return <CheckCircle2 className="h-4 w-4" />;
  }

  if (status === "active") {
    return <Clock3 className="h-4 w-4" />;
  }

  return <CircleAlert className="h-4 w-4" />;
}

export function TimelineFeed({
  entries,
}: {
  entries: Array<{ title: string; time: string; note: string; status: TimelineStatus }>;
}) {
  return (
    <div className="space-y-4">
      {entries.map((entry, index) => (
        <div className="flex gap-4" key={`${entry.time}-${entry.title}`}>
          <div className="flex flex-col items-center">
            <div
              className={clsx(
                "mt-1 rounded-full p-2",
                entry.status === "complete"
                  ? "bg-success/16 text-green-300"
                  : entry.status === "active"
                    ? "bg-primary/20 text-blue-200"
                    : "bg-accent/16 text-amber-300",
              )}
            >
              {getTimelineIcon(entry.status)}
            </div>
            {index < entries.length - 1 ? <div className="mt-2 h-full w-px bg-white/10" /> : null}
          </div>
          <div className="space-y-1 pb-4">
            <p className="text-sm text-muted">{entry.time}</p>
            <p className="font-semibold text-ink">{entry.title}</p>
            <p className="text-sm leading-7 text-muted">{entry.note}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function buildPolyline(values: number[], width: number, height: number, padding: number) {
  const max = Math.max(...values, 1);
  const step = values.length > 1 ? (width - padding * 2) / (values.length - 1) : 0;

  return values.map((value, index) => ({
    x: padding + step * index,
    y: height - padding - (value / max) * (height - padding * 2),
  }));
}

function toPointString(points: Array<{ x: number; y: number }>) {
  return points.map((point) => `${point.x},${point.y}`).join(" ");
}

function toAreaPath(points: Array<{ x: number; y: number }>, height: number, padding: number) {
  if (!points.length) {
    return "";
  }

  const first = points[0];
  const last = points[points.length - 1];
  const line = points.map((point) => `L ${point.x} ${point.y}`).join(" ");

  return `M ${first.x} ${height - padding} ${line} L ${last.x} ${height - padding} Z`;
}

export function TrendChart({
  series,
}: {
  series: Array<{ label: string; pipeline: number; target: number }>;
}) {
  const width = 780;
  const height = 340;
  const padding = 28;
  const pipelinePoints = buildPolyline(
    series.map((entry) => entry.pipeline),
    width,
    height,
    padding,
  );
  const targetPoints = buildPolyline(
    series.map((entry) => entry.target),
    width,
    height,
    padding,
  );

  return (
    <div className="space-y-5">
      <div className="rounded-[1.75rem] border border-[rgba(148,163,184,0.12)] bg-[linear-gradient(180deg,rgba(18,30,54,0.84),rgba(10,18,34,0.78))] p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3 text-sm text-muted">
            <span className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-blue-300" />
              Pipeline created
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
              Target baseline
            </span>
          </div>
          <button className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[rgba(148,163,184,0.14)] px-4 py-2 text-sm text-muted" type="button">
            Export snapshot
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-5 overflow-hidden rounded-[1.45rem] border border-[rgba(148,163,184,0.08)] bg-[#08111f]/50 p-4">
          <svg aria-label="Pipeline trend chart" className="h-auto w-full" viewBox={`0 0 ${width} ${height}`}>
            <defs>
              <linearGradient id="signal-pipeline-fill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="rgba(96,165,250,0.48)" />
                <stop offset="100%" stopColor="rgba(96,165,250,0.04)" />
              </linearGradient>
            </defs>

            {[0.2, 0.4, 0.6, 0.8].map((ratio) => (
              <line
                key={ratio}
                stroke="rgba(148,163,184,0.12)"
                strokeDasharray="4 8"
                x1={padding}
                x2={width - padding}
                y1={padding + (height - padding * 2) * ratio}
                y2={padding + (height - padding * 2) * ratio}
              />
            ))}

            <path d={toAreaPath(pipelinePoints, height, padding)} fill="url(#signal-pipeline-fill)" />
            <polyline
              fill="none"
              points={toPointString(targetPoints)}
              stroke="rgba(252,211,77,0.95)"
              strokeDasharray="8 8"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
            />
            <polyline
              fill="none"
              points={toPointString(pipelinePoints)}
              stroke="rgba(96,165,250,0.98)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="5"
            />
            {pipelinePoints.map((point, index) => (
              <g key={series[index]?.label}>
                <circle cx={point.x} cy={point.y} fill="rgba(96,165,250,1)" r="5" />
                <circle cx={point.x} cy={point.y} fill="rgba(8,17,31,1)" r="2.2" />
              </g>
            ))}
          </svg>
        </div>

        <div className="mt-4 grid grid-cols-4 gap-2 text-center text-xs text-muted md:grid-cols-8">
          {series.map((entry) => (
            <span key={entry.label}>{entry.label}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ComparisonMeter({
  label,
  value,
  detail,
  progress,
  tone,
}: {
  label: string;
  value: string;
  detail: string;
  progress: number;
  tone: Tone;
}) {
  const toneClasses = getToneClasses(tone);

  return (
    <div className="rounded-[1.45rem] border border-[rgba(148,163,184,0.12)] bg-white/4 p-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="mono-label text-muted">{label}</p>
          <p className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-ink">{value}</p>
        </div>
        <span className={clsx("rounded-full px-3 py-1 text-xs font-semibold", toneClasses.chip)}>{detail}</span>
      </div>
      <div className="mt-4 h-2 rounded-full bg-white/8">
        <div className={clsx("h-2 rounded-full bg-gradient-to-r", toneClasses.bar)} style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}

function getOnboardingStateIcon(state: OnboardingState) {
  if (state === "Complete") {
    return <CheckCircle2 className="h-5 w-5" />;
  }

  if (state === "In progress") {
    return <LoaderCircle className="h-5 w-5" />;
  }

  return <CircleDashed className="h-5 w-5" />;
}

export function OnboardingStageCard({
  index,
  title,
  detail,
  state,
  owner,
  output,
}: {
  index: number;
  title: string;
  detail: string;
  state: OnboardingState;
  owner: string;
  output: string;
}) {
  return (
    <div
      className={clsx(
        "flex gap-4 rounded-[1.55rem] border p-4 transition-colors",
        state === "In progress"
          ? "border-blue-400/28 bg-blue-400/10"
          : "border-[rgba(148,163,184,0.12)] bg-white/4",
      )}
    >
      <div
        className={clsx(
          "mt-1 rounded-full p-2",
          state === "Complete"
            ? "bg-success/16 text-green-300"
            : state === "In progress"
              ? "bg-primary/20 text-blue-200"
              : "bg-white/8 text-muted",
        )}
      >
        {getOnboardingStateIcon(state)}
      </div>
      <div className="space-y-2">
        <p className="mono-label text-muted">Step 0{index + 1}</p>
        <p className="font-semibold text-ink">{title}</p>
        <p className="text-sm leading-7 text-muted">{detail}</p>
        <div className="grid gap-1 text-sm text-muted">
          <p>
            <span className="text-ink">Owner:</span> {owner}
          </p>
          <p>
            <span className="text-ink">Output:</span> {output}
          </p>
        </div>
      </div>
    </div>
  );
}
