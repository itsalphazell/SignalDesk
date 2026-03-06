export const navigationItems = [
  { href: "/", label: "Overview" },
  { href: "/projects", label: "Projects" },
  { href: "/analytics", label: "Analytics" },
  { href: "/onboarding", label: "Onboarding" },
  { href: "/settings", label: "Settings" },
];

export const kpis = [
  { label: "Revenue at risk", value: "$184K", delta: "+12%", tone: "accent" },
  { label: "Live programs", value: "14", delta: "+3 this week", tone: "primary" },
  { label: "Tasks cleared", value: "92%", delta: "Above target", tone: "success" },
  { label: "Active blockers", value: "07", delta: "Needs triage", tone: "muted" },
];

export const workstreams = [
  {
    name: "Enterprise rollout",
    owner: "Ops pod",
    health: "Healthy",
    progress: 76,
    summary: "Rollout pacing is steady after last week's billing patch.",
  },
  {
    name: "Regional launch",
    owner: "Growth pod",
    health: "Watch",
    progress: 58,
    summary: "Creative approvals are lagging behind forecast by two days.",
  },
  {
    name: "Compliance refresh",
    owner: "Platform pod",
    health: "Critical",
    progress: 34,
    summary: "Security review is blocking release sequencing for two enterprise accounts.",
  },
];

export const timeline = [
  { title: "Finance sync", time: "09:00", note: "Review churn cohorts and budget drift." },
  { title: "Launch readiness", time: "11:30", note: "Resolve blockers across growth and operations." },
  { title: "Client pulse", time: "15:00", note: "Share program health summary with leadership." },
];

export const projectRows = [
  {
    name: "Northstar migration",
    client: "Apex Cloud",
    phase: "Execution",
    owner: "Sana",
    risk: "Low",
    velocity: "18 tasks / wk",
  },
  {
    name: "Retail expansion",
    client: "Fieldline",
    phase: "Validation",
    owner: "Marco",
    risk: "Medium",
    velocity: "11 tasks / wk",
  },
  {
    name: "Contract renewal wave",
    client: "Harbor Finance",
    phase: "Delivery",
    owner: "Rina",
    risk: "Low",
    velocity: "21 tasks / wk",
  },
  {
    name: "Security remediation",
    client: "Nova Health",
    phase: "Blocked",
    owner: "Ari",
    risk: "High",
    velocity: "8 tasks / wk",
  },
];

export const channelMix = [
  { label: "Enterprise", value: 48 },
  { label: "Mid-market", value: 31 },
  { label: "Expansion", value: 14 },
  { label: "Churn recovery", value: 7 },
];

export const conversionMoments = [
  { label: "Visits", value: "148K" },
  { label: "Qualified demos", value: "4.2K" },
  { label: "Pipeline created", value: "$3.9M" },
  { label: "Close win", value: "18.7%" },
];

export const onboardingStages = [
  {
    title: "Workspace setup",
    detail: "Configure permissions, project defaults, and alert routing.",
    state: "Complete",
  },
  {
    title: "Data connections",
    detail: "Link warehouse sources, revenue events, and campaign metadata.",
    state: "In progress",
  },
  {
    title: "Playbook handoff",
    detail: "Train operators on weekly review cadence and escalation thresholds.",
    state: "Pending",
  },
];

export const settingsGroups = [
  {
    title: "Workspace profile",
    description: "Brand, locale, data retention, and operating calendar.",
    items: ["Default locale", "Reporting timezone", "Fiscal week start"],
  },
  {
    title: "Security controls",
    description: "Access policies, device verification, and audit retention.",
    items: ["SSO required", "Session expiry", "Approval logs"],
  },
  {
    title: "Notification rules",
    description: "Who gets alerted, when, and through which channel.",
    items: ["Escalation routing", "Digest cadence", "Ops slack bridge"],
  },
];
