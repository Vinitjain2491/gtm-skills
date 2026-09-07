# Contributing

## Add a skill

1. Create `skills/<lowercase-hyphenated-name>/SKILL.md`.
2. Add YAML front matter with `name` and a concise, discriminating `description`.
3. State the outcome, the non-obvious workflow, the expected deliverable, and the boundaries on evidence and external actions.
4. Add a `references/` file only when conditional detail would otherwise make the entry point hard to use.
5. Add the skill to `library.json`, update the README table, and run `node scripts/validate-skills.mjs`.

## Quality bar

A useful GTM skill changes an agent's decision-making. It should not be a generic marketing checklist, a fixed process that ignores the user's context, or a promise to perform unapproved external actions. Prefer source-backed, testable recommendations and clearly label assumptions.
