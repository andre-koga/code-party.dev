import fs from "fs";
import path from "path";

const args = process.argv.slice(2);

if (args.length <= 1) {
  console.log("Please provide a path to the file you want to setup");
  process.exit(1);
}

// inside content folder:
// first argument is the new folder name for the category
// second argument is the name of the problem folder inside the category folder

// assume the file name is in the underscore format:
// e.g. two_sum

const category = args[0];
const problem = args[1];

// the file name is simply the problem name without the first two letters
// and then converted from kebab to snake case
const fileName = problem.slice(2).replace(/-/g, "_");

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

// conversion from underscore to pascal case
const pascalCase = fileName
  .split("_")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
  .join("");

// conversion from underscore to camel case
const camelCase = fileName.replace(/_./, (match) =>
  match.charAt(1).toUpperCase(),
);

const languages = [
  ["c", null],
  ["cpp", null],
  ["cs", pascalCase],
  ["go", null],
  ["java", pascalCase],
  ["js", camelCase],
  ["py", null],
  ["rb", null],
  ["rs", null],
  ["ts", camelCase],
];

// create folder for each language and a file
languages.forEach((language) => {
  const languagePath = path.join(problemPath, language[0]);

  if (!fs.existsSync(languagePath)) {
    fs.mkdirSync(languagePath);
  }

  // if there is already a file inside the language folder, we skip
  if (fs.readdirSync(languagePath).length == 0) {
    // if language[1] is null, use the default fileName
    // else, we call the function inside language[1] with the fileName as a paramete
    const customName = language[1] ? language[1] : fileName;

    const filePath = path.join(languagePath, `${customName}.${language[0]}`);
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, "");
    }
  }
});
