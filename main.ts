/**
 * Pitch entrypoint for make.fun bounty:
 * u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a
 *
 * Deterministically writes a single-sentence absurd invention pitch
 * to $MAKEFUN_OUTPUT_DIR/entry.txt (or /output/entry.txt if unset).
 */

import * as fs from "node:fs";
import * as path from "node:path";

// Exactly 1 sentence, 204 characters, UTF-8, no trailing newline
const PITCH: string =
  "To stop fitted bed sheets from snapping off mattress corners overnight, the Corner-Claw system fires steel grappling hooks directly into bedroom drywall whenever pressure sensors detect a tossing sleeper.";

function run(): void {
  // Defensive validation against the gate requirements
  if (PITCH.length < 1 || PITCH.length > 220) {
    throw new Error(`Invalid pitch length: ${PITCH.length} (must be 1..220)`);
  }

  const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  fs.mkdirSync(outputDir, { recursive: true });

  const outputPath = path.join(outputDir, "entry.txt");
  // Write exact bytes without any trailing newline
  fs.writeFileSync(outputPath, PITCH, { encoding: "utf8" });
}

run();

