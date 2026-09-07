# GTM Skills

An open, portable library of go-to-market skills for AI agents and LLM workflows. Each skill turns a common GTM assignment into a disciplined, evidence-aware workflow without prescribing a particular stack or channel.

## What is included

| Area | Skills |
| --- | --- |
| Direction | `gtm-strategy`, `icp-and-segmentation`, `positioning-and-messaging` |
| Intelligence | `market-research`, `competitive-intelligence` |
| Offer and launch | `pricing-and-packaging`, `product-launch` |
| Acquisition | `demand-generation`, `content-and-seo` |
| Revenue and retention | `sales-enablement`, `lifecycle-and-retention` |
| Measurement | `gtm-analytics` |

## Use it with an agent

This repository uses the broadly supported Agent Skills convention: every capability is a directory containing a `SKILL.md` file with YAML front matter. Agents that support skills can discover the directories under [`skills/`](skills/). For any other LLM or agent, give it the relevant `SKILL.md` as context and have it follow the instructions.

```text
Read AGENTS.md, then use skills/positioning-and-messaging/SKILL.md.
Create a positioning platform for [product] using the information below.
```

The workflow and selection guidance are in [`AGENTS.md`](AGENTS.md). The full machine-readable catalog is [`library.json`](library.json).

### Install

Clone or download this repository, then copy or link the `skills/` folders into your agent's skills directory. Keep each skill folder intact—`SKILL.md` is the entry point and optional references belong beside it.

```bash
git clone https://github.com/Vinitjain2491/gtm-skills.git
```

For Codex, a convenient local location is `~/.codex/skills/`. Other platforms can use the same folder layout or load a selected `SKILL.md` directly.

## Principles

- Ground external claims in sources and clearly distinguish facts, assumptions, and recommendations.
- Preserve the user's market, audience, constraints, and approvals; never invent customer evidence.
- Make outputs decision-ready: recommendations, rationale, trade-offs, owners, and next tests.
- Do not send messages, publish assets, change ad spend, or update a CRM without explicit approval.

## Validate

The repository has no runtime dependencies. Validate its portable structure with:

```bash
node scripts/validate-skills.mjs
```

## Contributing

See [`CONTRIBUTING.md`](CONTRIBUTING.md). New skills should solve a distinct GTM job, have a discriminating description, and avoid generic marketing advice that an agent already knows.

## License

[MIT](LICENSE)
