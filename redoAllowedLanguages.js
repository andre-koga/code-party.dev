// get file languages.js from src > lib > constants > languages.js
import { allowedLanguages } from "./src/lib/constants/languages.js";
import fs from "fs";
import path from "path";

// for each category inside content folder
// for each problem inside category folder
// check if the language folder exists
// if not, create the folder and the file

const contentPath = path.join(process.cwd(), "content");

fs.readdirSync(contentPath).forEach((category) => {
  const categoryPath = path.join(contentPath, category);

  fs.readdirSync(categoryPath).forEach((problem) => {
    const problemPath = path.join(categoryPath, problem);

    const problemName = problem.slice(2); // kebab case already

    const PascalCase = problemName
      .replace(/-/g, "_")
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join("");
    const camelCase = problemName.replace(/-./, (match) =>
      match.charAt(1).toUpperCase(),
    );
    const snake_case = problemName.replace(/-/g, "_");

    Object.values(allowedLanguages).forEach((language) => {
      const languagePath = path.join(problemPath, language.extension);
      let fileName = problemName; // already kebab-case

      if (language.naming == "snake_case") {
        fileName = snake_case;
      } else if (language.name == "PascalCase") {
        fileName = PascalCase;
      } else if (language.name == "camelCase") {
        fileName = camelCase;
      }

      if (!fs.existsSync(languagePath)) {
        fs.mkdirSync(languagePath);
        const filePath = path.join(
          languagePath,
          `${fileName}.${language.extension}`,
        );
        fs.writeFileSync(filePath, "");
      }
    });
  });
});
