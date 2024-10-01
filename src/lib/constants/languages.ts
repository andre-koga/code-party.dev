type LanguageData = {
    [key: string]: {
        name: string;
        extension: string;
        website: string;
    };
};

export const allowedLanguages: LanguageData = {
    "py": {
        "name": "Python",
        "extension": "py",
        "website": "https://www.python.org/",
    },
    "js": {
        "name": "JavaScript",
        "extension": "js",
        "website": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    "ts": {
        "name": "TypeScript",
        "extension": "ts",
        "website": "https://www.typescriptlang.org/",
    },
    "java": {
        "name": "Java",
        "extension": "java",
        "website": "https://www.java.com/",
    },
    "cpp": {
        "name": "C++",
        "extension": "cpp",
        "website": "https://isocpp.org/",
    },
    "cs": {
        "name": "C#",
        "extension": "cs",
        "website": "https://docs.microsoft.com/en-us/dotnet/csharp/",
    },
    "rb": {
        "name": "Ruby",
        "extension": "rb",
        "website": "https://www.ruby-lang.org/en/",
    },
    "c": {
        "name": "C",
        "extension": "c",
        "website": "https://en.wikipedia.org/wiki/C_(programming_language)",
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
    "go": {
        "name": "Go",
        "extension": "go",
        "website": "https://golang.org/",
    },
    "rs": {
        "name": "Rust",
        "extension": "rs",
        "website": "https://www.rust-lang.org/",
    },
    // "lua": {
    //     "name": "Lua",
    //     "extension": "lua",
    //     "website": "https://www.lua.org/",
    // },
    // "hs": {
    //     "name": "Haskell",
    //     "extension": "hs",
    //     "website": "https://www.haskell.org/",
    // },
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
}

export const SortedLanguaes = () => {
    // sort the languages by name
    return Object.values(allowedLanguages).sort((a, b) => a.name.localeCompare(b.name));
}

export const AllowedKeys = () => {
    return Object.keys(allowedLanguages);
}