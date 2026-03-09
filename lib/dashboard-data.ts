export const navigationItems = [
  { href: "/", label: "Overview" },
  { href: "/projects", label: "Projects" },
  { href: "/analytics", label: "Analytics" },
  { href: "/onboarding", label: "Onboarding" },
  { href: "/settings", label: "Settings" },
];

export const overviewModes = [
  {
    id: "live",
    label: "Live board",
    badge: "Operator mode",
    summary: "The current board keeps the loudest blockers, strongest momentum, and review actions in one operator-first pass.",
    command: "Compliance is still the only material drag. Expansion is carrying the quarter and needs cleaner handoff routing.",
    watchLabel: "Priority focus",
    watchValue: "Compliance unblock",
    actionLabel: "Open live review",
  },
  {
    id: "forecast",
    label: "Forecast",
    badge: "Next 30 days",
    summary: "The forecast layer emphasises where pipeline confidence is strong and where approvals still distort the run rate.",
    command: "Current pace supports the quarter if launch sequencing stays tight and enterprise approvals stop slipping.",
    watchLabel: "Forecast edge",
    watchValue: "Expansion pacing",
    actionLabel: "Review forecast pack",
  },
  {
    id: "recovery",
    label: "Recovery",
    badge: "Remediation",
    summary: "Recovery mode narrows the screen to what is blocked, what is slipping, and what needs escalation now.",
    command: "Security remediation and regional legal review are the only items capable of dragging delivery confidence this week.",
    watchLabel: "Recovery watch",
    watchValue: "Approval backlog",
    actionLabel: "Open escalation plan",
  },
] as const;

export const kpis = [
  {
    label: "Revenue at risk",
    value: "$184K",
    delta: "+12%",
    tone: "accent" as const,
    note: "Accounts needing executive visibility after last week's compliance delay.",
    series: [42, 44, 41, 47, 49, 53, 56],
    detail: "Most pressure is concentrated in one compliance lane and two legal reviews rather than broad delivery instability.",
  },
  {
    label: "Live programs",
    value: "14",
    delta: "+3 this week",
    tone: "primary" as const,
    note: "Cross-functional launches with active owners and forecasted next actions.",
    series: [7, 8, 9, 10, 11, 13, 14],
    detail: "Program count climbed after two paused launch streams restarted and one migration re-entered execution.",
  },
  {
    label: "Tasks cleared",
    value: "92%",
    delta: "Above target",
    tone: "success" as const,
    note: "Weekly operations cadence is recovering after a heavy remediation cycle.",
    series: [66, 71, 75, 82, 86, 89, 92],
    detail: "Clearance is strongest where handoffs are explicit and the review cadence is already documented for operators.",
  },
  {
    label: "Active blockers",
    value: "07",
    delta: "Needs triage",
    tone: "muted" as const,
    note: "Most blockers are isolated to one compliance stream and two approval handoffs.",
    series: [12, 11, 10, 9, 9, 8, 7],
    detail: "The blocker count is trending down, but three still affect high-value accounts and require executive visibility.",
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
    decision: "Greenlight the next market handoff once the enablement pack is signed off.",
    signals: [
      "Migration readiness is back above threshold across three accounts.",
      "No material billing drift since the last patch cycle.",
      "Only one regional dependency still needs final sign-off.",
    ],
    ownerFocus: "Operations lead is focused on sequencing field handoff and protecting rollout quality while volume climbs.",
  },
  {
    name: "Regional launch",
    owner: "Growth pod",
    health: "Watch" as const,
    progress: 58,
    summary: "Creative approvals are lagging behind forecast by two days across two markets.",
    nextAction: "Resolve legal review and tighten launch sequencing.",
    cadence: "Daily standup / 09:15",
    decision: "Collapse the current approval path into one owner-driven review cycle before media spend increases.",
    signals: [
      "Two legal reviews are still pacing the launch more than production readiness.",
      "Creative is approved in one market but blocked in the second.",
      "The commercial upside is still strong enough to justify remediation.",
    ],
    ownerFocus: "Growth is trying to protect launch timing without letting legal review introduce campaign drift.",
  },
  {
    name: "Compliance refresh",
    owner: "Platform pod",
    health: "Critical" as const,
    progress: 34,
    summary: "Security review is blocking release sequencing for two enterprise accounts.",
    nextAction: "Escalate sign-off path and finalise evidence pack.",
    cadence: "War room / 16:00",
    decision: "Escalate sign-off with a tighter evidence pack and stop treating this like a routine review cycle.",
    signals: [
      "Two enterprise accounts remain blocked until evidence is accepted.",
      "The current audit trail is complete but not packaged for fast executive review.",
      "Delay risk is now operational, not technical.",
    ],
    ownerFocus: "Platform needs to turn technical readiness into executive sign-off faster, otherwise revenue timing slips.",
  },
];

export const timelineByMode = {
  live: [
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
  ],
  forecast: [
    {
      title: "Quarter review",
      time: "10:00",
      note: "Check forecast confidence by segment and owner.",
      status: "active" as const,
    },
    {
      title: "Enablement handoff",
      time: "13:30",
      note: "Lock the operator pack for the next market release wave.",
      status: "complete" as const,
    },
    {
      title: "Escalation checkpoint",
      time: "17:00",
      note: "Flag any item likely to slip beyond the 30-day window.",
      status: "attention" as const,
    },
  ],
  recovery: [
    {
      title: "Risk triage",
      time: "08:30",
      note: "Re-rank blockers by account value and timing impact.",
      status: "active" as const,
    },
    {
      title: "Evidence review",
      time: "12:00",
      note: "Validate sign-off pack completeness before leadership review.",
      status: "attention" as const,
    },
    {
      title: "Operator reset",
      time: "16:30",
      note: "Publish updated guidance after blocked items are reassigned.",
      status: "complete" as const,
    },
  ],
} as const;

export const projectRows = [
  {
    name: "Northstar migration",
    client: "Apex Cloud",
    phase: "Execution",
    owner: "Sana",
    risk: "Low",
    velocity: "18 tasks / wk",
    lastUpdate: "2h ago",
    summary: "Migration stream is clean, with only one handoff still awaiting final enablement approval.",
    milestones: ["Schema verified", "Regional pack drafted", "Executive sign-off pending"],
    blockers: ["Regional handoff copy"],
  },
  {
    name: "Retail expansion",
    client: "Fieldline",
    phase: "Validation",
    owner: "Marco",
    risk: "Medium",
    velocity: "11 tasks / wk",
    lastUpdate: "45m ago",
    summary: "Expansion is healthy, but two campaign approvals still distort launch timing and reporting confidence.",
    milestones: ["Creative approved", "Budget lane aligned", "Legal review open"],
    blockers: ["Market two legal approval", "Attribution QA"],
  },
  {
    name: "Contract renewal wave",
    client: "Harbor Finance",
    phase: "Delivery",
    owner: "Rina",
    risk: "Low",
    velocity: "21 tasks / wk",
    lastUpdate: "Today",
    summary: "Renewal motion is the cleanest stream in the board and is helping protect the quarter baseline.",
    milestones: ["Risk pack approved", "Renewal offers scheduled", "Ops cadence locked"],
    blockers: ["None material"],
  },
  {
    name: "Security remediation",
    client: "Nova Health",
    phase: "Blocked",
    owner: "Ari",
    risk: "High",
    velocity: "8 tasks / wk",
    lastUpdate: "18m ago",
    summary: "Remediation is technically ready but still waiting on packaged evidence and executive sign-off.",
    milestones: ["Patch complete", "Audit log assembled", "Leadership review pending"],
    blockers: ["Evidence pack packaging", "Security sign-off"],
  },
];

export const projectSortOptions = [
  { id: "priority", label: "Priority first" },
  { id: "velocity", label: "Velocity" },
  { id: "recent", label: "Recent update" },
] as const;

export const riskFilters = ["All", "High", "Medium", "Low"] as const;

export const analyticsViews = [
  {
    id: "all",
    label: "All demand",
    subtitle: "Cross-segment operating view",
    metrics: [
      { label: "Revenue", value: "$124.5K", change: 12.5, trend: "up" as const, icon: "revenue" },
      { label: "Active users", value: "8,432", change: 8.2, trend: "up" as const, icon: "users" },
      { label: "Conversion", value: "3.24%", change: 2.1, trend: "up" as const, icon: "conversion" },
      { label: "Avg. session", value: "4m 32s", change: 5.7, trend: "up" as const, icon: "session" },
    ],
    weekly: [
      { label: "W1", value: 42, color: "bg-indigo-500" },
      { label: "W2", value: 48, color: "bg-indigo-500" },
      { label: "W3", value: 38, color: "bg-indigo-500" },
      { label: "W4", value: 56, color: "bg-indigo-500" },
      { label: "W5", value: 60, color: "bg-indigo-500" },
      { label: "W6", value: 52, color: "bg-indigo-500" },
      { label: "W7", value: 68, color: "bg-indigo-500" },
      { label: "W8", value: 74, color: "bg-indigo-600" },
    ],
    mix: [
      { label: "Enterprise", value: 48, color: "bg-emerald-500" },
      { label: "Mid-market", value: 31, color: "bg-emerald-500" },
      { label: "Expansion", value: 14, color: "bg-emerald-500" },
      { label: "Recovery", value: 7, color: "bg-emerald-600" },
    ],
    comparisons: [
      { label: "Pipeline velocity", value: "+18%", detail: "vs prior window", progress: 78, tone: "primary" as const },
      { label: "Forecast confidence", value: "84%", detail: "inside target", progress: 84, tone: "success" as const },
      { label: "Executive escalations", value: "05", detail: "watch this week", progress: 35, tone: "accent" as const },
    ],
    insight: {
      title: "Quarter narrative",
      body: "Enterprise and expansion are carrying the run rate, while remediation is the only stream still distorting confidence.",
    },
  },
  {
    id: "enterprise",
    label: "Enterprise",
    subtitle: "Higher-value account view",
    metrics: [
      { label: "Revenue", value: "$86.2K", change: 15.1, trend: "up" as const, icon: "revenue" },
      { label: "Active accounts", value: "112", change: 6.4, trend: "up" as const, icon: "users" },
      { label: "Conversion", value: "4.01%", change: 1.4, trend: "up" as const, icon: "conversion" },
      { label: "Review cycle", value: "2.8d", change: 4.8, trend: "down" as const, icon: "session" },
    ],
    weekly: [
      { label: "W1", value: 31, color: "bg-indigo-500" },
      { label: "W2", value: 38, color: "bg-indigo-500" },
      { label: "W3", value: 34, color: "bg-indigo-500" },
      { label: "W4", value: 49, color: "bg-indigo-500" },
      { label: "W5", value: 54, color: "bg-indigo-500" },
      { label: "W6", value: 46, color: "bg-indigo-500" },
      { label: "W7", value: 59, color: "bg-indigo-500" },
      { label: "W8", value: 66, color: "bg-indigo-600" },
    ],
    mix: [
      { label: "Direct", value: 56, color: "bg-emerald-500" },
      { label: "Partner", value: 24, color: "bg-emerald-500" },
      { label: "Expansion", value: 12, color: "bg-emerald-500" },
      { label: "Recovery", value: 8, color: "bg-emerald-600" },
    ],
    comparisons: [
      { label: "Approval speed", value: "-11%", detail: "needs work", progress: 43, tone: "accent" as const },
      { label: "Deal quality", value: "88%", detail: "well above target", progress: 88, tone: "success" as const },
      { label: "Pipeline resilience", value: "+22%", detail: "best segment", progress: 82, tone: "primary" as const },
    ],
    insight: {
      title: "Enterprise narrative",
      body: "The segment is strong enough to support the quarter, but approval speed is still the main drag on confidence.",
    },
  },
  {
    id: "expansion",
    label: "Expansion",
    subtitle: "Retention and upsell view",
    metrics: [
      { label: "Revenue", value: "$38.3K", change: 9.7, trend: "up" as const, icon: "revenue" },
      { label: "Active cohorts", value: "36", change: 3.2, trend: "up" as const, icon: "users" },
      { label: "Conversion", value: "2.91%", change: 1.8, trend: "up" as const, icon: "conversion" },
      { label: "Avg. session", value: "5m 06s", change: 6.1, trend: "up" as const, icon: "session" },
    ],
    weekly: [
      { label: "W1", value: 18, color: "bg-indigo-500" },
      { label: "W2", value: 24, color: "bg-indigo-500" },
      { label: "W3", value: 21, color: "bg-indigo-500" },
      { label: "W4", value: 27, color: "bg-indigo-500" },
      { label: "W5", value: 31, color: "bg-indigo-500" },
      { label: "W6", value: 29, color: "bg-indigo-500" },
      { label: "W7", value: 34, color: "bg-indigo-500" },
      { label: "W8", value: 39, color: "bg-indigo-600" },
    ],
    mix: [
      { label: "Renewal", value: 42, color: "bg-emerald-500" },
      { label: "Upsell", value: 33, color: "bg-emerald-500" },
      { label: "Bundles", value: 17, color: "bg-emerald-500" },
      { label: "Recovery", value: 8, color: "bg-emerald-600" },
    ],
    comparisons: [
      { label: "Expansion velocity", value: "+14%", detail: "healthy pace", progress: 72, tone: "primary" as const },
      { label: "Retention confidence", value: "79%", detail: "stable", progress: 79, tone: "success" as const },
      { label: "Operator load", value: "Moderate", detail: "manageable", progress: 58, tone: "accent" as const },
    ],
    insight: {
      title: "Expansion narrative",
      body: "The expansion lane is less dramatic than enterprise, but it is the cleanest proof that the operating system is disciplined.",
    },
  },
] as const;

export const onboardingStages = [
  {
    title: "Workspace setup",
    detail: "Configure permissions, project defaults, and alert routing.",
    state: "Complete" as const,
    owner: "Operations lead",
    output: "Roles, calendars, and alert routing are locked.",
    actions: ["Review user roles", "Set workspace defaults", "Confirm escalation channels"],
    completion: 100,
    successMetric: "Zero missing access paths",
  },
  {
    title: "Data connections",
    detail: "Link warehouse sources, revenue events, and campaign metadata.",
    state: "In progress" as const,
    owner: "RevOps engineer",
    output: "Source mapping and event QA are the current gating tasks.",
    actions: ["Validate source schema", "Map revenue events", "QA campaign attribution"],
    completion: 62,
    successMetric: "All key sources green",
  },
  {
    title: "Playbook handoff",
    detail: "Train operators on weekly review cadence and escalation thresholds.",
    state: "Pending" as const,
    owner: "Program manager",
    output: "Operator handoff pack and review rituals will close onboarding.",
    actions: ["Finalize playbook", "Walk operators through workflow", "Set review cadence"],
    completion: 18,
    successMetric: "Operator sign-off complete",
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

export const settingsSections = [
  {
    id: "workspace",
    title: "Workspace profile",
    description: "Brand, locale, data retention, and reporting cadence decisions that shape every operator surface.",
    controls: [
      { label: "Default locale", value: "EN-GB", note: "Used for dashboards and operator exports.", state: "locked" as const },
      { label: "Reporting timezone", value: "UTC+7", note: "Shared by finance, growth, and operations.", state: "active" as const },
      { label: "Fiscal week start", value: "Monday", note: "Aligns the review board with weekly planning.", state: "active" as const },
    ],
  },
  {
    id: "security",
    title: "Security controls",
    description: "Access policies, verification rules, and audit retention settings for higher-sensitivity workspaces.",
    controls: [
      { label: "SSO required", value: "Enabled", note: "Mandatory for admins and finance roles.", state: "active" as const },
      { label: "Session expiry", value: "14 days", note: "Shorter for elevated users and review-only sessions.", state: "watch" as const },
      { label: "Approval logs", value: "Retained", note: "Critical for compliance review and dispute handling.", state: "locked" as const },
    ],
  },
  {
    id: "notifications",
    title: "Notification rules",
    description: "Who gets alerted, when, and through which channel as the board changes state.",
    controls: [
      { label: "Escalation routing", value: "Ops + Growth", note: "Only high-severity items escalate instantly.", state: "active" as const },
      { label: "Digest cadence", value: "Daily 08:15", note: "A quieter recap for teams outside the live board.", state: "active" as const },
      { label: "Ops Slack bridge", value: "Connected", note: "Used for recovery and launch-readiness alerts.", state: "locked" as const },
    ],
  },
] as const;
