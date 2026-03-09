"use client";

import clsx from "clsx";
import { Search } from "lucide-react";

export function SignalSegmentTabs({
  items,
  activeId,
  onChange,
}: {
  items: Array<{ id: string; label: string; badge?: string }>;
  activeId: string;
  onChange: (id: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <button
          className={clsx(
            "inline-flex cursor-pointer items-center gap-2 rounded-full border px-3 py-2 text-sm font-medium transition-colors duration-200",
            activeId === item.id
              ? "border-blue-300/35 bg-blue-400/14 text-ink"
              : "border-[rgba(148,163,184,0.14)] bg-white/5 text-muted hover:bg-white/8 hover:text-ink",
          )}
          key={item.id}
          onClick={() => onChange(item.id)}
          type="button"
        >
          <span>{item.label}</span>
          {item.badge ? (
            <span className="rounded-full bg-white/8 px-2 py-0.5 text-[10px] uppercase tracking-[0.16em] text-muted">
              {item.badge}
            </span>
          ) : null}
        </button>
      ))}
    </div>
  );
}

export function SignalSearchField({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  return (
    <label className="flex items-center gap-3 rounded-full border border-[rgba(148,163,184,0.14)] bg-white/5 px-4 py-3 text-sm text-muted">
      <Search className="h-4 w-4" />
      <input
        className="w-full bg-transparent text-ink outline-none placeholder:text-muted"
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        type="text"
        value={value}
      />
    </label>
  );
}

export function SignalStateChip({ state }: { state: "locked" | "active" | "watch" }) {
  return (
    <span
      className={clsx(
        "rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em]",
        state === "locked"
          ? "bg-white/8 text-muted"
          : state === "watch"
            ? "bg-accent/16 text-amber-300"
            : "bg-primary/20 text-blue-200",
      )}
    >
      {state}
    </span>
  );
}
