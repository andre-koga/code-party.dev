import fs from "fs";
import path from "path";

// dont use __dirname in es6 modules
const contentDir = path.join(process.cwd(), "content");
const outputFilePath = path.join(process.cwd(), "content.json");

const structure = {};

try {
  const categories = fs.readdirSync(contentDir);

  for (const category of categories) {
    structure[category] = {};

    const categoryDir = path.join(contentDir, category);
    const problems = fs.readdirSync(categoryDir);

    for (const problem of problems) {
      structure[category][problem] = {};

      const problemDir = path.join(categoryDir, problem);
      const languages = fs.readdirSync(problemDir);

      for (const language of languages) {
        structure[category][problem][language] = {};

        const contentPath = path.join(problemDir, language);
        const files = fs.readdirSync(contentPath);

        for (const file of files) {
          const filePath = path.join(contentPath, file);
          structure[category][problem][language][file] = fs.readFileSync(
            filePath,
            "utf8",
          );
        }
      }
    }
  }

  const outputData = { allData: structure };

  fs.writeFileSync(outputFilePath, JSON.stringify(outputData, null, 2));
  console.log("content.json generated successfully.");
} catch (err) {
  console.error("Error generating content.json:", err);
}
