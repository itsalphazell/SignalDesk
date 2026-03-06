"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { BarChart3, FolderKanban, LayoutDashboard, Settings2, Sparkles } from "lucide-react";
import { navigationItems } from "@/lib/dashboard-data";

const iconMap = {
  "/": LayoutDashboard,
  "/projects": FolderKanban,
  "/analytics": BarChart3,
  "/onboarding": Sparkles,
  "/settings": Settings2,
};

export function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav className="space-y-2">
      {navigationItems.map((item) => {
        const Icon = iconMap[item.href as keyof typeof iconMap];
        const isActive = pathname === item.href;

        return (
          <Link
            className={clsx(
              "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-colors duration-200",
              isActive ? "bg-primary text-white" : "text-muted hover:bg-white/6 hover:text-ink",
            )}
            href={item.href}
            key={item.href}
          >
            <Icon className="h-4 w-4" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
