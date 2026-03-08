export const navigationItems = [
  { href: "/", label: "Overview" },
  { href: "/projects", label: "Projects" },
  { href: "/analytics", label: "Analytics" },
  { href: "/onboarding", label: "Onboarding" },
  { href: "/settings", label: "Settings" },
];

export const kpis = [
  {
    label: "Revenue at risk",
    value: "$184K",
    delta: "+12%",
    tone: "accent" as const,
    note: "Accounts needing executive visibility after last week's compliance delay.",
    series: [42, 44, 41, 47, 49, 53, 56],
  },
  {
    label: "Live programs",
    value: "14",
    delta: "+3 this week",
    tone: "primary" as const,
    note: "Cross-functional launches with active owners and forecasted next actions.",
    series: [7, 8, 9, 10, 11, 13, 14],
  },
  {
    label: "Tasks cleared",
    value: "92%",
    delta: "Above target",
    tone: "success" as const,
    note: "Weekly operations cadence is recovering after a heavy remediation cycle.",
    series: [66, 71, 75, 82, 86, 89, 92],
  },
  {
    label: "Active blockers",
    value: "07",
    delta: "Needs triage",
    tone: "muted" as const,
    note: "Most blockers are isolated to one compliance stream and two approval handoffs.",
    series: [12, 11, 10, 9, 9, 8, 7],
  },
];

export const workstreams = [
  {
    name: "Enterprise rollout",
    owner: "Ops pod",
    health: "Healthy" as const,
    progress: 76,
    summary: "Rollout pacing is steady after last week's billing patch and enablement sync.",
    nextAction: "Lock regional handoff pack for the field team.",
    cadence: "Thursday review / 10:30",
  },
  {
    name: "Regional launch",
    owner: "Growth pod",
    health: "Watch" as const,
    progress: 58,
    summary: "Creative approvals are lagging behind forecast by two days across two markets.",
    nextAction: "Resolve legal review and tighten launch sequencing.",
    cadence: "Daily standup / 09:15",
  },
  {
    name: "Compliance refresh",
    owner: "Platform pod",
    health: "Critical" as const,
    progress: 34,
    summary: "Security review is blocking release sequencing for two enterprise accounts.",
    nextAction: "Escalate sign-off path and finalise evidence pack.",
    cadence: "War room / 16:00",
  },
];

export const timeline = [
  {
    title: "Finance sync",
    time: "09:00",
    note: "Review churn cohorts, budget drift, and recovery targets.",
    status: "complete" as const,
  },
  {
    title: "Launch readiness",
    time: "11:30",
    note: "Resolve blockers across growth, compliance, and operations.",
    status: "active" as const,
  },
  {
    title: "Client pulse",
    time: "15:00",
    note: "Share program health summary, risk posture, and next actions with leadership.",
    status: "attention" as const,
  },
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

export const analyticsTrend = [
  { label: "W1", pipeline: 42, target: 36 },
  { label: "W2", pipeline: 48, target: 39 },
  { label: "W3", pipeline: 38, target: 41 },
  { label: "W4", pipeline: 56, target: 44 },
  { label: "W5", pipeline: 60, target: 48 },
  { label: "W6", pipeline: 52, target: 50 },
  { label: "W7", pipeline: 68, target: 54 },
  { label: "W8", pipeline: 74, target: 58 },
];

export const channelMix = [
  { label: "Enterprise", value: 48, note: "Direct and partner sourced demand." },
  { label: "Mid-market", value: 31, note: "Faster velocity, smaller ACV mix." },
  { label: "Expansion", value: 14, note: "Existing accounts moving into new packages." },
  { label: "Churn recovery", value: 7, note: "Save motions and win-back motions." },
];

export const conversionMoments = [
  { label: "Visits", value: "148K", delta: "+9% vs prior window", note: "Top-of-funnel demand remained consistent through the relaunch." },
  { label: "Qualified demos", value: "4.2K", delta: "+14%", note: "Better qualification after intent routing changes." },
  { label: "Pipeline created", value: "$3.9M", delta: "+18%", note: "Largest lift came from enterprise and expansion motions." },
  { label: "Close win", value: "18.7%", delta: "+2.1 pts", note: "Win rate improved once approvals were tightened." },
];

export const analyticsComparisons = [
  {
    label: "Pipeline velocity",
    value: "+18%",
    detail: "vs prior eight weeks",
    progress: 78,
    tone: "primary" as const,
  },
  {
    label: "Forecast confidence",
    value: "84%",
    detail: "within target range",
    progress: 84,
    tone: "success" as const,
  },
  {
    label: "Executive escalations",
    value: "05",
    detail: "watch this week",
    progress: 35,
    tone: "accent" as const,
  },
];

export const onboardingStages = [
  {
    title: "Workspace setup",
    detail: "Configure permissions, project defaults, and alert routing.",
    state: "Complete" as const,
    owner: "Operations lead",
    output: "Roles, calendars, and alert routing are locked.",
    actions: ["Review user roles", "Set workspace defaults", "Confirm escalation channels"],
  },
  {
    title: "Data connections",
    detail: "Link warehouse sources, revenue events, and campaign metadata.",
    state: "In progress" as const,
    owner: "RevOps engineer",
    output: "Source mapping and event QA are the current gating tasks.",
    actions: ["Validate source schema", "Map revenue events", "QA campaign attribution"],
  },
  {
    title: "Playbook handoff",
    detail: "Train operators on weekly review cadence and escalation thresholds.",
    state: "Pending" as const,
    owner: "Program manager",
    output: "Operator handoff pack and review rituals will close onboarding.",
    actions: ["Finalize playbook", "Walk operators through workflow", "Set review cadence"],
  },
];

export const onboardingGuides = [
  {
    title: "One decision per step",
    body: "Each stage isolates one meaningful decision so setup feels progressive rather than bureaucratic.",
  },
  {
    title: "Dense, but calm",
    body: "The screen keeps product discipline while using contrast, spacing, and status treatment to stay readable.",
  },
  {
    title: "Portable structure",
    body: "The same pattern can support workspace setup, account activation, or internal operations onboarding.",
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
