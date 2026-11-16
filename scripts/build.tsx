import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { formatDiagnostics, outline, render, validate } from "@hyper-elements/react";
import { emailGuide, pageGuide } from "../src/guide";

async function main() {
  const root = process.cwd();
  const output = resolve(root, "dist");
  const svg = await readFile(resolve(root, "public/copenhagen-route.svg"));
  const mapSrc = `data:image/svg+xml;base64,${svg.toString("base64")}`;

  await mkdir(output, { recursive: true });

  const targets = [
    { name: "page", element: pageGuide(mapSrc) },
    { name: "email", element: emailGuide(mapSrc) },
  ];

  for (const target of targets) {
    const report = validate(target.element);
    console.log(`\n[${target.name}] validate: ${report.valid ? "PASS" : "FAIL"}`);
    if (report.diagnostics.length) {
      console.log(formatDiagnostics(report.diagnostics));
    }
    if (!report.valid) {
      process.exitCode = 1;
      continue;
    }

    const { html, text, diagnostics } = await render(target.element);
    if (diagnostics.length) {
      console.log(`[${target.name}] render diagnostics:`);
      console.log(formatDiagnostics(diagnostics));
    }
    await writeFile(resolve(output, `daylight-${target.name}.html`), html);
    if (text) await writeFile(resolve(output, `daylight-${target.name}.txt`), text);
    await writeFile(resolve(output, `outline-${target.name}.txt`), outline(target.element));
    console.log(`[${target.name}] wrote dist/daylight-${target.name}.html`);
  }

  if (process.exitCode) {
    throw new Error("One or more Hyper Elements templates did not validate.");
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
