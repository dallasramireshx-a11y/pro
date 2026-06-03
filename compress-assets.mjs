import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const assets = path.join(root, "assets");
const tools = path.join(root, ".tools");
const mutool = path.join(tools, "mutool.exe");

const PDFS = [
  "wenzhou-binjiang-residential.pdf",
  "architecture-department-building.pdf",
  "dragon-boat-museum.pdf",
  "nantang-bookbox-renovation.pdf",
  "shades-in-woods.pdf",
];

const IMAGES = [
  "shades-in-woods-cover.png",
  "wopai-dream-station-01.png",
  "wopai-dream-station-02.png",
  "wopai-dream-station-03.png",
  "magic-sound-script.png",
  "interstellar-frontier-script.png",
];

function mb(bytes) {
  return (bytes / 1024 / 1024).toFixed(2) + " MB";
}

function ensureMutool() {
  if (fs.existsSync(mutool)) return;
  fs.mkdirSync(tools, { recursive: true });
  const zipPath = path.join(tools, "mupdf.zip");
  const url =
    "https://github.com/ArtifexSoftware/mupdf/releases/download/1.24.10/mupdf-1.24.10-windows.zip";
  console.log("Downloading MuPDF tools…");
  execFileSync(
    "powershell",
    [
      "-NoProfile",
      "-Command",
      `Invoke-WebRequest -Uri '${url}' -OutFile '${zipPath}' -UseBasicParsing`,
    ],
    { stdio: "inherit" }
  );
  execFileSync(
    "powershell",
    [
      "-NoProfile",
      "-Command",
      `Expand-Archive -Path '${zipPath}' -DestinationPath '${tools}' -Force`,
    ],
    { stdio: "inherit" }
  );
  const found = execFileSync(
    "powershell",
    [
      "-NoProfile",
      "-Command",
      `Get-ChildItem -Path '${tools}' -Recurse -Filter mutool.exe | Select-Object -First 1 -ExpandProperty FullName`,
    ],
    { encoding: "utf8" }
  ).trim();
  if (!found) throw new Error("mutool.exe not found after extract");
  fs.copyFileSync(found, mutool);
}

function compressPdf(name) {
  const input = path.join(assets, name);
  if (!fs.existsSync(input)) {
    console.log(`Skip missing PDF: ${name}`);
    return;
  }
  const tmp = path.join(assets, name.replace(".pdf", ".compressed.pdf"));
  const before = fs.statSync(input).size;
  console.log(`\nPDF ${name} (${mb(before)})`);
  execFileSync(
    mutool,
    ["clean", "-gggg", "-z", "-i", "-f", "-s", input, tmp],
    { stdio: "inherit" }
  );
  const after = fs.statSync(tmp).size;
  if (after < before * 0.98) {
    fs.renameSync(tmp, input);
    console.log(`  → ${mb(after)} (saved ${((1 - after / before) * 100).toFixed(0)}%)`);
  } else {
    fs.unlinkSync(tmp);
    console.log(`  → kept original (${mb(before)}, compressed not smaller)`);
  }
}

async function compressImages() {
  let sharp;
  try {
    sharp = require("sharp");
  } catch {
    console.log("\nInstalling sharp…");
    execFileSync("npm", ["install", "sharp"], {
      cwd: __dirname,
      stdio: "inherit",
    });
    sharp = require("sharp");
  }

  for (const name of IMAGES) {
    const input = path.join(assets, name);
    if (!fs.existsSync(input)) continue;
    const before = fs.statSync(input).size;
    const tmp = input + ".tmp";
    await sharp(input)
      .resize({ width: 1600, withoutEnlargement: true })
      .png({ compressionLevel: 9, palette: true, quality: 80 })
      .toFile(tmp);
    const after = fs.statSync(tmp).size;
    if (after < before) {
      fs.renameSync(tmp, input);
      console.log(`Image ${name}: ${mb(before)} → ${mb(after)}`);
    } else {
      fs.unlinkSync(tmp);
      console.log(`Image ${name}: kept (${mb(before)})`);
    }
  }
}

async function main() {
  console.log("Compressing portfolio assets…\n");
  ensureMutool();
  for (const pdf of PDFS) compressPdf(pdf);
  await compressImages();
  console.log("\nDone.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
