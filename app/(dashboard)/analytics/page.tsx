"use client";

import { useState } from "react";
import clsx from "clsx";
import { Activity, BarChart3, DollarSign, TrendingDown, TrendingUp, Users } from "lucide-react";
import { SignalSegmentTabs } from "@/components/signal-controls";
import { analyticsViews } from "@/lib/dashboard-data";

type BGVariantType = "dots" | "grid";
type BGMaskType = "fade-edges" | "none";

type MetricData = {
  label: string;
  value: string;
  change?: number;
  trend?: "up" | "down" | "neutral";
  icon?: string;
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

function metricIcon(name?: string) {
  switch (name) {
    case "revenue":
      return <DollarSign className="h-4 w-4" />;
    case "users":
      return <Users className="h-4 w-4" />;
    case "conversion":
      return <Activity className="h-4 w-4" />;
    default:
      return <BarChart3 className="h-4 w-4" />;
  }
}

function MetricCard({
  metric,
  active,
  onSelect,
}: {
  metric: MetricData;
  active: boolean;
  onSelect: () => void;
}) {
  const TrendIcon = metric.trend === "up" ? TrendingUp : metric.trend === "down" ? TrendingDown : Activity;

  return (
    <button
      className={clsx(
        "group relative cursor-pointer rounded-xl border p-4 text-left backdrop-blur-sm transition-all duration-300",
        active
          ? "border-blue-300/45 bg-blue-400/12"
          : "border-slate-800/50 bg-slate-900/40 hover:border-slate-700/70 hover:bg-slate-900/60",
      )}
      onClick={onSelect}
      type="button"
    >
      <div className="mb-3 flex items-start justify-between">
        <div className="flex items-center gap-2">
          <div className="rounded-lg bg-slate-800/50 p-2 text-slate-400">{metricIcon(metric.icon)}</div>
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
    </button>
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
  data: readonly ChartDataPoint[];
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

export default function AnalyticsPage() {
  const [activeViewId, setActiveViewId] = useState<string>(analyticsViews[0].id);
  const activeView = analyticsViews.find((item) => item.id === activeViewId) ?? analyticsViews[0];
  const [activeMetricLabel, setActiveMetricLabel] = useState<string>(activeView.metrics[0].label);

  const activeMetric = activeView.metrics.find((item) => item.label === activeMetricLabel) ?? activeView.metrics[0];

  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-slate-800/50 bg-slate-950 p-6 md:p-8 lg:p-10">
      <BGPattern className="opacity-20" fill="#1e293b" mask="fade-edges" size={32} variant="grid" />

      <div className="relative z-10 space-y-8">
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="mono-label text-slate-500">Interactive analytics prototype</p>
            <h1 className="text-4xl font-bold tracking-tight text-slate-100 md:text-5xl">Signal Desk Analytics</h1>
            <p className="max-w-3xl text-lg text-slate-400">
              The screen now supports view switching, metric selection, and clearer comparative reading so the analytics
              behave more like a real product surface.
            </p>
          </div>

          <SignalSegmentTabs
            activeId={activeView.id}
            items={analyticsViews.map((view) => ({ id: view.id, label: view.label, badge: view.subtitle }))}
            onChange={(id) => {
              setActiveViewId(id);
              const nextView = analyticsViews.find((item) => item.id === id) ?? analyticsViews[0];
              setActiveMetricLabel(nextView.metrics[0].label);
            }}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {activeView.metrics.map((metric) => (
            <MetricCard
              active={activeMetric.label === metric.label}
              key={metric.label}
              metric={metric}
              onSelect={() => setActiveMetricLabel(metric.label)}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.12fr_0.88fr]">
          <ChartCard title="Weekly Performance" subtitle={activeView.subtitle} data={activeView.weekly} />
          <SurfaceCard className="p-6">
            <p className="mono-label text-slate-500">Selected narrative</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-slate-100">{activeMetric.label}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              {activeView.insight.body} The current focus module is anchored to <span className="text-slate-100">{activeMetric.label}</span>,
              which helps the screen feel more explorable than a fixed chart board.
            </p>
            <div className="mt-5 grid gap-3">
              {activeView.comparisons.map((item) => (
                <div className="rounded-[1.2rem] border border-[rgba(148,163,184,0.12)] bg-white/4 px-4 py-3" key={item.label}>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-medium text-slate-200">{item.label}</span>
                    <span className="text-xs uppercase tracking-[0.16em] text-slate-500">{item.detail}</span>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-800">
                    <div
                      className={clsx(
                        "h-full rounded-full",
                        item.tone === "success"
                          ? "bg-emerald-500"
                          : item.tone === "accent"
                            ? "bg-amber-500"
                            : "bg-indigo-500",
                      )}
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </SurfaceCard>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ChartCard title="Channel Mix" subtitle="Qualified demand by segment" data={activeView.mix} />
          <SurfaceCard className="p-0">
            <BGPattern className="opacity-20" fill="#1e293b" mask="fade-edges" size={16} variant="dots" />

            <div className="p-6">
              <p className="mono-label text-slate-500">Comparative reading</p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-100">{activeView.insight.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">{activeView.insight.body}</p>
            </div>

            <div className="px-6 pb-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {activeView.comparisons.map((stat) => (
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
      </div>
    </section>
  );
}
