import clsx from "clsx";
import { Activity, BarChart3, DollarSign, TrendingDown, TrendingUp, Users } from "lucide-react";
import {
  analyticsComparisons,
  analyticsTrend,
  channelMix,
  conversionMoments,
} from "@/lib/dashboard-data";

type BGVariantType = "dots" | "grid";
type BGMaskType = "fade-edges" | "none";

type MetricData = {
  label: string;
  value: string;
  change?: number;
  trend?: "up" | "down" | "neutral";
  icon?: React.ReactNode;
};

type ChartDataPoint = {
  label: string;
  value: number;
  color?: string;
};

const maskClasses: Record<BGMaskType, string> = {
  "fade-edges": "[mask-image:radial-gradient(ellipse_at_center,var(--background),transparent)]",
  none: "",
};

function getBgImage(variant: BGVariantType, fill: string) {
  if (variant === "dots") {
    return `radial-gradient(${fill} 1px, transparent 1px)`;
  }

  return `linear-gradient(to right, ${fill} 1px, transparent 1px), linear-gradient(to bottom, ${fill} 1px, transparent 1px)`;
}

function BGPattern({
  variant = "grid",
  mask = "none",
  size = 24,
  fill = "#252525",
  className,
}: {
  variant?: BGVariantType;
  mask?: BGMaskType;
  size?: number;
  fill?: string;
  className?: string;
}) {
  return (
    <div
      className={clsx("absolute inset-0 z-[-1] size-full", maskClasses[mask], className)}
      style={{
        backgroundImage: getBgImage(variant, fill),
        backgroundSize: `${size}px ${size}px`,
      }}
    />
  );
}

function SurfaceCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "relative overflow-hidden rounded-[1.65rem] border border-slate-800/50 bg-slate-900/40 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/70 hover:bg-slate-900/60",
        className,
      )}
    >
      {children}
    </div>
  );
}

function getTrendColor(trend?: "up" | "down" | "neutral") {
  switch (trend) {
    case "up":
      return "text-emerald-400";
    case "down":
      return "text-rose-400";
    default:
      return "text-slate-400";
  }
}

function MetricCard({ metric }: { metric: MetricData }) {
  const TrendIcon = metric.trend === "up" ? TrendingUp : metric.trend === "down" ? TrendingDown : Activity;

  return (
    <div className="relative rounded-xl border border-slate-800/50 bg-slate-900/40 p-4 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/70 hover:bg-slate-900/60">
      <div className="mb-3 flex items-start justify-between">
        <div className="flex items-center gap-2">
          {metric.icon ? (
            <div className="rounded-lg bg-slate-800/50 p-2 text-slate-400">
              {metric.icon}
            </div>
          ) : null}
          <span className="text-xs font-medium uppercase tracking-wider text-slate-400">{metric.label}</span>
        </div>
        {metric.change !== undefined ? (
          <div className={clsx("flex items-center gap-1 text-xs font-semibold", getTrendColor(metric.trend))}>
            <TrendIcon className="h-3 w-3" />
            <span>{Math.abs(metric.change)}%</span>
          </div>
        ) : null}
      </div>
      <div className="text-3xl font-bold tracking-tight text-slate-100">{metric.value}</div>
      <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-slate-700/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
}

function ChartCard({
  title,
  subtitle,
  data,
  icon = <BarChart3 className="h-4 w-4 text-slate-400" />,
}: {
  title: string;
  subtitle?: string;
  data: ChartDataPoint[];
  icon?: React.ReactNode;
}) {
  const maxValue = Math.max(...data.map((item) => item.value), 1);

  return (
    <SurfaceCard className="p-0">
      <BGPattern className="opacity-30" fill="#1e293b" mask="fade-edges" size={20} variant="dots" />

      <div className="p-6 pb-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-slate-100">{title}</h3>
            {subtitle ? <p className="mt-1 text-sm text-slate-400">{subtitle}</p> : null}
          </div>
          <div className="rounded-lg bg-slate-800/50 p-2">{icon}</div>
        </div>
      </div>

      <div className="px-6 pb-6">
        <div className="flex h-32 items-end justify-between gap-2">
          {data.map((item) => {
            const heightPercent = (item.value / maxValue) * 100;

            return (
              <div className="group/bar flex flex-1 flex-col items-center gap-2" key={item.label}>
                <div className="relative flex h-full w-full items-end">
                  <div
                    className={clsx(
                      "w-full rounded-t-lg transition-all duration-500 ease-out group-hover/bar:brightness-125",
                      item.color ?? "bg-indigo-500",
                    )}
                    style={{ height: `${heightPercent}%` }}
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 transition-opacity duration-200 group-hover/bar:opacity-100">
                      <div className="whitespace-nowrap rounded-md bg-slate-800 px-2 py-1 text-xs font-semibold text-slate-100 shadow-lg">
                        {item.value}
                      </div>
                    </div>
                  </div>
                </div>
                <span className="text-xs font-medium text-slate-500 transition-colors group-hover/bar:text-slate-300">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </SurfaceCard>
  );
}

function parseChange(delta: string) {
  const match = delta.match(/[-+]?\d+(\.\d+)?/);

  if (!match) {
    return { change: undefined, trend: "neutral" as const };
  }

  const value = Number.parseFloat(match[0]);
  if (Number.isNaN(value)) {
    return { change: undefined, trend: "neutral" as const };
  }

  if (delta.includes("-")) {
    return { change: value, trend: "down" as const };
  }

  return { change: value, trend: "up" as const };
}

function metricIcon(label: string) {
  switch (label) {
    case "Visits":
      return <Users className="h-4 w-4" />;
    case "Qualified demos":
      return <Activity className="h-4 w-4" />;
    case "Pipeline created":
      return <DollarSign className="h-4 w-4" />;
    default:
      return <BarChart3 className="h-4 w-4" />;
  }
}

export default function AnalyticsPage() {
  const metrics: MetricData[] = conversionMoments.map((item) => {
    const { change, trend } = parseChange(item.delta);

    return {
      label: item.label,
      value: item.value,
      change,
      trend,
      icon: metricIcon(item.label),
    };
  });

  const weeklyChart: ChartDataPoint[] = analyticsTrend.map((item, index) => ({
    label: item.label,
    value: item.pipeline,
    color: index === analyticsTrend.length - 1 ? "bg-indigo-600" : "bg-indigo-500",
  }));

  const monthlyChart: ChartDataPoint[] = channelMix.map((item, index) => ({
    label: item.label.split(" ")[0],
    value: item.value,
    color: index === channelMix.length - 1 ? "bg-emerald-600" : "bg-emerald-500",
  }));

  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-slate-800/50 bg-slate-950 p-6 md:p-8 lg:p-10">
      <BGPattern className="opacity-20" fill="#1e293b" mask="fade-edges" size={32} variant="grid" />

      <div className="relative z-10 space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight text-slate-100 md:text-5xl">Signal Desk Analytics</h1>
          <p className="text-lg text-slate-400">Real-time performance metrics and insights</p>
          <div className="h-1 w-24 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <MetricCard key={metric.label} metric={metric} />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ChartCard title="Weekly Performance" subtitle="Last 8 weeks activity" data={weeklyChart} />
          <ChartCard title="Channel Mix" subtitle="Qualified demand by segment" data={monthlyChart} />
        </div>

        <SurfaceCard className="p-0">
          <BGPattern className="opacity-20" fill="#1e293b" mask="fade-edges" size={16} variant="dots" />

          <div className="p-6">
            <h3 className="text-xl font-semibold tracking-tight text-slate-100">Engagement Overview</h3>
            <p className="mt-1 text-sm text-slate-400">Detailed breakdown of operating performance against the current baseline</p>
          </div>

          <div className="px-6 pb-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {analyticsComparisons.map((stat) => (
                <div className="space-y-2" key={stat.label}>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-400">{stat.label}</span>
                    <span
                      className={clsx(
                        "text-xs font-semibold",
                        stat.tone === "success"
                          ? "text-emerald-400"
                          : stat.tone === "accent"
                            ? "text-amber-400"
                            : "text-indigo-400",
                      )}
                    >
                      {stat.detail}
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-slate-100">{stat.value}</div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                    <div
                      className={clsx(
                        "h-full rounded-full transition-all duration-500",
                        stat.tone === "success"
                          ? "bg-emerald-500"
                          : stat.tone === "accent"
                            ? "bg-amber-500"
                            : "bg-indigo-500",
                      )}
                      style={{ width: `${stat.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SurfaceCard>
      </div>
    </section>
  );
}
