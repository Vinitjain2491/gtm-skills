# GTM Skills Library Guide

This repository is a collection of independent Agent Skills. Select the narrowest skill that matches the user's desired outcome, read its `SKILL.md` completely, and load only the references it explicitly routes to.

## Selecting a skill

| If the user needs to… | Start with… |
| --- | --- |
| set the commercial direction, motion, or plan | `gtm-strategy` |
| define who to target | `icp-and-segmentation` |
| understand a category or buyer | `market-research` |
| decide how to win versus alternatives | `competitive-intelligence` |
| articulate differentiated value | `positioning-and-messaging` |
| set offer architecture or price tests | `pricing-and-packaging` |
| plan a release or launch | `product-launch` |
| build pipeline or channel programs | `demand-generation` |
| plan organic content or search work | `content-and-seo` |
| equip sellers and partners | `sales-enablement` |
| improve activation, expansion, or retention | `lifecycle-and-retention` |
| define GTM metrics, funnels, or experiments | `gtm-analytics` |

Use `gtm-strategy` first when a request spans several of these areas or lacks a decision context. Then use specialist skills as needed.

## Operating rules

1. Start with the outcome, audience, business model, geography, time horizon, and constraints already provided. Ask only for information that would change the recommendation materially.
2. Treat internal notes as unverified unless they name a source. Separate evidence, assumptions, and recommendations in the final deliverable.
3. Research the web when a request depends on current, niche, regulated, or externally verifiable facts. Cite the sources closest to the claims they support.
4. Prefer an explicit decision, trade-off, and next test over a long list of tactics. Include an owner and success metric when proposing execution.
5. Draft and analyze freely, but get approval before external actions such as publishing, emailing, buying media, changing prices, or modifying production systems.

## Portable loading

For systems without native skill discovery, provide this file plus the selected `skills/<name>/SKILL.md` as instructions. The `library.json` file can be used to build a selector or catalog UI. A skill is intentionally self-contained unless it links to a reference.
