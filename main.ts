// One Line, One Laugh — a single funny line, written to /output/entry.txt.
// SPDX-License-Identifier: MIT

import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SETUP = "My Roomba took one trip under my bed";
const PUNCH = "and came back demanding a lawyer, a therapist, and hazard pay.";

const line = `${SETUP} ${PUNCH}`;

function guard(text: string): string {
  const trimmed = text.trim();
  if (trimmed.length < 1 || trimmed.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${trimmed.length}`);
  }
  return trimmed;
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const checked = guard(line);
const entryPath = join(outDir, "entry.txt");
writeFileSync(entryPath, checked, "utf8");
chmodSync(entryPath, 0o644);
console.log(`wrote ${checked.length} characters to ${entryPath}`);
