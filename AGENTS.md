# AGENTS.md

## App SaaS Rules

1. Treat this project as an app or SaaS interface first, not a marketing experiment.
2. Never restart from scratch if the product already exists.
3. Inspect the real information architecture before editing:
   - routes
   - layouts
   - shared components
   - data flow
   - auth and permission boundaries
4. Optimize for clarity, speed, consistency, and task completion.
5. Preserve working business logic and reduce surface area for regressions.
6. Prefer stable UI patterns over novelty:
   - readable forms
   - strong hierarchy
   - predictable states
   - robust empty, loading, and error states
7. Use `ui-ux-pro-max` for hierarchy, spacing, visual polish, and interaction quality, but keep the result product-grade and restrained.
8. Use React Bits only when it adds clear value to a hero, empty state, onboarding moment, or showcase area. Avoid it in dense product UI, tables, forms, settings, CRUD flows, and dashboards unless explicitly justified.
9. Treat React Bits as source material to adapt into the repo, not as a UI system to import wholesale. Prefer copying only the useful component logic and harmonizing it with the project's tokens, spacing, type scale, motion, and accessibility rules.
10. Keep React Bits usage sparse and deliberate. One strong visual moment per screen is usually enough.
11. If a React Bits component adds heavy dependencies, complex motion, or reduced-motion/accessibility problems, simplify it or discard it.
12. Use Context7 for any framework, library, or version-specific implementation decision.
13. Prioritize:
   - information density without clutter
   - accessibility over visual effects
   - keyboard and focus quality
   - responsive layouts that survive real data
   - performance and maintainability
14. Before delivery, verify:
   - long content does not break layouts
   - states are complete
   - forms are readable and safe
   - tables and lists remain usable on smaller screens
   - no avoidable UX regressions were introduced
15. A `premium-web` overlay may extend these rules with Stitch MCP, 21st Magic MCP, and broader premium design exploration while keeping the product disciplined.
16. After any meaningful UI change, run Playwright visual checks before pushing.
17. Use bounded design auto-fix only:
   - max 2 local smoke iterations
   - max 3 dedicated autopilot iterations
   - stop on no-diff
18. Keep CI full visual checks enabled and review generated artifacts when warnings appear.
19. If autopilot proposes design corrections, publish through branch + PR only, never by direct push to `main`.

## Premium Web Design Mode

When `premium-web` mode is active:

1. Keep `ui-ux-pro-max` as the primary visual authority.
2. Use Stitch MCP to explore full-screen concepts, layout structures, and premium page composition for:
   - dashboards
   - onboarding
   - settings
   - billing
   - overview screens
3. Use 21st Magic MCP as a secondary source for polished components and faster UI exploration.
4. React Bits is still selective, but allowed in more places than standard mode when it improves perceived quality without harming product clarity.
5. Use React Bits as local source material, not as a design system. Pull in only the parts worth keeping, then adapt them to the repo's components, tokens, reduced-motion behavior, and performance budget.
6. Raise the visual quality of the product:
   - stronger composition
   - more deliberate motion
   - richer spacing rhythm
   - stronger type contrast
   - more premium surfaces and hierarchy
7. Keep dense product areas disciplined:
   - tables
   - forms
   - settings
   - data-heavy dashboards
   should remain readable, fast, and predictable.
8. Never let external UI sources break:
   - usability
   - task completion
   - data readability
   - accessibility
   - performance
9. Do not accept generated UI as-is. Adapt it to the product's spacing, type scale, interaction patterns, and component conventions.
10. Prefer one coherent premium system across the product over many disconnected "cool" components.
11. Keep React Bits usage sparse even in premium mode. One strong visual moment per screen is usually enough.
12. Apply a reuse-first policy before generating new paid variants:
   - check existing Stitch screens/variants and reuse when one is already close
   - check existing 21st-generated components/snippets in the repo before new generation
   - generate new variants only if reuse/adaptation is clearly insufficient
   - run `python scripts/design_reuse_guard.py ...` before any `21st_magic_component_builder` call
   - if result is `reuse_required` and no explicit `--force-generate`, do not generate
13. If external generated ideas conflict with the product architecture, simplify or discard them.
14. `Nano Banana Pro` may be used sparingly for:
   - brand moodboards
   - launch visuals
   - premium visual references around the product
15. Do not use `Nano Banana Pro` as a driver for dense product UI decisions, interaction structure, or data-heavy screen architecture.
16. Validate premium UI changes with Playwright before push and in CI to catch overflow, overlap, contrast, and motion issues.
17. Keep automatic design correction bounded:
   - max 2 local smoke iterations
   - max 3 dedicated autopilot iterations
18. If autopilot produces changes, publish only through branch + PR.
19. After successful new 21st generation, record the variant with `python scripts/design_memory_add_entry.py ...` so future work reuses it first.
