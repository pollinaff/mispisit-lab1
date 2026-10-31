const fs = require("fs");
const path = require("path");

const bootstrapDir = path.join(__dirname, "..", "node_modules", "bootstrap", "dist");
const targetDir = path.join(__dirname, "..", "public", "vendor", "bootstrap");

function copyBootstrapAssets() {
  if (!fs.existsSync(bootstrapDir)) {
    console.warn("Bootstrap is not installed yet; skip asset copy.");
    return;
  }

  fs.mkdirSync(targetDir, { recursive: true });
  fs.copyFileSync(
    path.join(bootstrapDir, "css", "bootstrap.min.css"),
    path.join(targetDir, "bootstrap.min.css")
  );
  fs.copyFileSync(
    path.join(bootstrapDir, "js", "bootstrap.bundle.min.js"),
    path.join(targetDir, "bootstrap.bundle.min.js")
  );
}

copyBootstrapAssets();
