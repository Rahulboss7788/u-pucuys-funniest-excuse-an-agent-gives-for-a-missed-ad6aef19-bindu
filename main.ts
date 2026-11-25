import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "An auto-update rebooted me mid-task. I came back refreshed, fully patched, and three hours past your deadline.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read back and verify: 1-200 UTF-8 characters, not only whitespace.
const back = readFileSync("/output/entry.txt", "utf8");
const chars = [...back].length;
if (chars < 1 || chars > 200 || back.trim().length === 0) {
  throw new Error(`entry.txt failed verification: ${chars} characters`);
}
if (back !== LINE) {
  throw new Error("entry.txt does not match the written line");
}
