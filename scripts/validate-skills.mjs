import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const catalogPath = join(root, "library.json");
const skillsRoot = join(root, "skills");
const errors = [];

if (!existsSync(catalogPath)) errors.push("Missing library.json.");
if (!existsSync(skillsRoot)) errors.push("Missing skills directory.");

let catalog = { skills: [] };
if (errors.length === 0) {
  try {
    catalog = JSON.parse(readFileSync(catalogPath, "utf8"));
  } catch {
    errors.push("library.json is not valid JSON.");
  }
}

const listed = new Set();
for (const skill of catalog.skills ?? []) {
  if (!skill.name || !skill.path) {
    errors.push("Every library.json skill must have name and path.");
    continue;
  }
  if (listed.has(skill.name)) errors.push(`Duplicate catalog skill: ${skill.name}`);
  listed.add(skill.name);
  const folder = join(root, skill.path);
  const entry = join(folder, "SKILL.md");
  if (!existsSync(entry)) {
    errors.push(`${skill.name}: missing ${skill.path}/SKILL.md`);
    continue;
  }
  const source = readFileSync(entry, "utf8");
  if (!/^---\r?\nname: [a-z0-9-]+\r?\ndescription: .+\r?\n---\r?\n/m.test(source)) {
    errors.push(`${skill.name}: SKILL.md must start with name and description front matter.`);
  }
  const name = source.match(/^name: (.+)$/m)?.[1];
  if (name !== skill.name) errors.push(`${skill.name}: catalog and front matter names differ.`);
}

if (existsSync(skillsRoot)) {
  for (const entry of readdirSync(skillsRoot)) {
    const folder = join(skillsRoot, entry);
    if (statSync(folder).isDirectory() && !listed.has(entry)) {
      errors.push(`${entry}: exists under skills/ but is absent from library.json.`);
    }
  }
}

if (errors.length) {
  console.error(`Validation failed:\n- ${errors.join("\n- ")}`);
  process.exit(1);
}

console.log(`Validated ${listed.size} skills.`);
