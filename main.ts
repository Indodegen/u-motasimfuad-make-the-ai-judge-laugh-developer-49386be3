import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "I didn't push to prod, the CI did. I just watched it happen in slow motion.";

// Guard: the entry must stay exactly one line, 1-200 chars, no stray whitespace.
if (ENTRY !== ENTRY.trim() || ENTRY.includes("\n") || ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error("ENTRY must be a single line of 1-200 characters");
}

// One line, no trailing newline: the gate counts 1-200 characters as written.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
