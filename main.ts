// One-Line Office Joke Laugh-Off — writes one line to /output/entry.txt.
// The joke: reply-all irony — asking everyone to stop replying-all, in a reply-all.
// Angle chosen over the printer-jam and meeting-that-should-have-been-an-email
// clichés: the punchline lands on the first read, needs no setup, and the
// "47 people agreed, all at once" twist is the joke doing itself in real time.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const ENTRY = "I replied-all asking everyone to stop replying-all — 47 people agreed, all at once.";

// Guard the kit gate: 1–200 characters, one line, not only white space.
const length = [...ENTRY].length;
if (length < 1 || length > 200 || ENTRY.includes("\n") || ENTRY.trim().length === 0) {
  throw new Error(`entry fails the gate: ${length} characters`);
}

function main(): void {
  const target = process.argv[2] ?? "/output/entry.txt";
  const out = target.endsWith(".txt") ? target : resolve(target, "entry.txt");
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, ENTRY, "utf8");
  console.log(`wrote ${out} (${[...ENTRY].length} characters)`);
}

main();
