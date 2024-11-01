// type LanguageData = {
//     [key: string]: {
//         name: string;
//         extension: string;
//         website: string;
//         naming: "snake_case" | "camelCase" | "PascalCase" | "kebab-case";
//     };
// };

export const allowedLanguages = {
  py: {
    name: "Python",
    extension: "py",
    website: "https://www.python.org/",
    naming: "snake_case",
  },
  js: {
    name: "JavaScript",
    extension: "js",
    website: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    naming: "camelCase",
  },
  ts: {
    name: "TypeScript",
    extension: "ts",
    website: "https://www.typescriptlang.org/",
    naming: "camelCase",
  },
  java: {
    name: "Java",
    extension: "java",
    website: "https://www.java.com/",
    naming: "PascalCase",
  },
  cpp: {
    name: "C++",
    extension: "cpp",
    website: "https://isocpp.org/",
    naming: "snake_case",
  },
  cs: {
    name: "C#",
    extension: "cs",
    website: "https://docs.microsoft.com/en-us/dotnet/csharp/",
    naming: "PascalCase",
  },
  rb: {
    name: "Ruby",
    extension: "rb",
    website: "https://www.ruby-lang.org/en/",
    naming: "snake_case",
  },
  c: {
    name: "C",
    extension: "c",
    website: "https://en.wikipedia.org/wiki/C_(programming_language)",
    naming: "snake_case",
  },
  // "php": {
  //     "name": "PHP",
  //     "extension": "php",
  //     "website": "https://www.php.net/",
  // },
  // "swift": {
  //     "name": "Swift",
  //     "extension": "swift",
  //     "website": "https://swift.org/",
  // },
  go: {
    name: "Go",
    extension: "go",
    website: "https://golang.org/",
    naming: "snake_case",
  },
  rs: {
    name: "Rust",
    extension: "rs",
    website: "https://www.rust-lang.org/",
    naming: "snake_case",
  },
  // "lua": {
  //     "name": "Lua",
  //     "extension": "lua",
  //     "website": "https://www.lua.org/",
  // },
  hs: {
    name: "Haskell",
    extension: "hs",
    website: "https://www.haskell.org/",
    naming: "kebab-case",
  },
  // "scala": {
  //     "name": "Scala",
  //     "extension": "scala",
  //     "website": "https://www.scala-lang.org/",
  // },
  // "kt": {
  //     "name": "Kotlin",
  //     "extension": "kt",
  //     "website": "https://kotlinlang.org/",
  // },
  // "r": {
  //     "name": "R",
  //     "extension": "r",
  //     "website": "https://www.r-project.org/",
  // },
  // "pl": {
  //     "name": "Perl",
  //     "extension": "pl",
  //     "website": "https://www.perl.org/",
  // },
  // "dart": {
  //     "name": "Dart",
  //     "extension": "dart",
  //     "website": "https://dart.dev/",
  // },
  // "ex": {
  //     "name": "Elixir",
  //     "extension": "ex",
  //     "website": "https://elixir-lang.org/",
  // },
  // "clj": {
  //     "name": "Clojure",
  //     "extension": "clj",
  //     "website": "https://clojure.org/",
  // },
};

export const AllowedKeys = Object.keys(allowedLanguages);
