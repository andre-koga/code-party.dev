const fs = require("fs").promises;
const path = require("path");

async function readDirectory(dir) {
  const result = {};
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      result[entry.name] = await readDirectory(fullPath);
    } else {
      const content = await fs.readFile(fullPath, "utf-8");
      result[entry.name] = content;
    }
  }

  return result;
}

async function processContent() {
  const contentDir = path.join(__dirname, "content");
  const outputFile = path.join(
    __dirname,
    "src",
    "lib",
    "generated",
    "content.json",
  );

  try {
    const content = await readDirectory(contentDir);
    await fs.mkdir(path.dirname(outputFile), { recursive: true });
    await fs.writeFile(outputFile, JSON.stringify(content, null, 2));
    console.log("Content processed successfully and written to", outputFile);
  } catch (error) {
    console.error("Error processing content:", error);
  }
}

processContent();
