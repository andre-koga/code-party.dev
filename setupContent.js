import fs from "fs";
import path from "path";
import { allowedLanguages } from "./src/lib/constants/languages.js";

const args = process.argv.slice(2);

if (args.length <= 1) {
  console.log("Please provide a path to the file you want to setup");
  process.exit(1);
}

// inside content folder:
// first argument is the new folder name for the category
// second argument is the name of the problem folder inside the category folder

// assume the file name is in the snake format:
// e.g. two_sum

const category = args[0];
const problem = args[1];

// the file name is simply the problem name without the first two letters
// and then converted from kebab to snake case
const snakeFileName = problem.slice(2);

const kebabFileName = snakeFileName.replace(/_/g, "-");

const pascalFileName = snakeFileName
  .split("_")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
  .join("");

const camelFileName = snakeFileName.replace(/_./, (match) =>
  match.charAt(1).toUpperCase(),
);

// inside content folder:
// create category folder
// __dirname is not defined in ES module scope
const categoryPath = path.join(process.cwd(), "content", category);

if (!fs.existsSync(categoryPath)) {
  fs.mkdirSync(categoryPath);
}

// create problem folder
const problemPath = path.join(categoryPath, problem);

if (!fs.existsSync(problemPath)) {
  fs.mkdirSync(problemPath);
}

// create folder for each language and a file
allowedLanguages.forEach((language) => {
  const languagePath = path.join(problemPath, language[0]);

  if (!fs.existsSync(languagePath)) {
    fs.mkdirSync(languagePath);
  }

  // if there is already a file inside the language folder, we skip
  if (fs.readdirSync(languagePath).length == 0) {
    const customName = snakeFileName;
    if (language.naming == "camelCase") {
      customName = camelFileName;
    } else if (language.naming == "PascalCase") {
      customName = pascalFileName;
    } else if (language.naming == "kebab-case") {
      customName = kebabFileName;
    }

    const filePath = path.join(languagePath, `${customName}.${language[0]}`);
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, "");
    }
  }
});
