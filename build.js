import { build } from "esbuild";

await build({
  entryPoints: ["index.js"],
  outfile: "dist/index.js",
  bundle: true,
  platform: "node",
  format: "esm",
  minify: true
});

await build({
  entryPoints: ["index.js"],
  outfile: "dist/index.cjs",
  bundle: true,
  platform: "node",
  format: "cjs",
  minify: true
});

console.log("Build completed successfully");
