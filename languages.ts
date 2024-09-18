function sortAllFilenames(files, filenamesSorted) {
    return [
        ...filenamesSorted.map((filename) =>
            files.find(({ fileName }) => fileName === filename)
        ),
        ...(files.filter(({ fileName }) => !filenamesSorted.includes(fileName)) ||
            []),
    ].filter(Boolean);
}

type languagesType = {
    id: string;
    title: string;
    isCurrentVersion: boolean;
    img: string;
    eslint: {
        files: string[];
        parser: string;
    };
    playgroundURL: string;
    documentationURL: string;
    websiteURL?: string;
};

// all the URLs should be reviewed
const languages: languagesType[] = [
    // python 3
    {
        id: 'python3',
        title: 'Python 3',
        isCurrentVersion: true,
        img: 'python',
        eslint: {
            files: ['python'],
            parser: 'babel-eslint',
        },
        playgroundURL: 'https://www.onlinegdb.com/online_python_compiler',
        documentationURL: 'https://www.w3schools.com/python/',
        websiteURL: 'https://www.python.org/',
    },
    // javascript
    {
        id: 'javascript',
        title: 'JavaScript',
        isCurrentVersion: true,
        img: 'javascript',
        eslint: {
            files: ['javascript'],
            parser: 'babel-eslint',
        },
        playgroundURL: 'https://www.onlinegdb.com/online_javascript_compiler',
        documentationURL: 'https://www.w3schools.com/js/',
        websiteURL: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    // // python 2
    // {
    //     id: 'python2',
    //     title: 'Python 2',
    //     isCurrentVersion: false,
    //     img: 'python',
    //     eslint: {
    //         files: ['python'],
    //         parser: 'babel-eslint',
    //     },
    //     playgroundURL: 'https://www.onlinegdb.com/online_python_compiler',
    //     documentationURL: 'https://www.w3schools.com/python/',
    //     websiteURL: 'https://www.python.org/',
    // },
    // // typescript
    // {
    //     id: 'typescript',
    //     title: 'TypeScript',
    //     isCurrentVersion: true,
    //     img: 'typescript',
    //     eslint: {
    //         files: ['typescript'],
    //         parser: 'babel-eslint',
    //     },
    //     playgroundURL: 'https://www.typescriptlang.org/play',
    //     documentationURL: 'https://www.typescriptlang.org/docs/',
    //     websiteURL: 'https://www.typescriptlang.org/',
    // },
    // // java
    // {
    //     id: 'java',
    //     title: 'Java',
    //     isCurrentVersion: true,
    //     img: 'java',
    //     eslint: {
    //         files: ['java'],
    //         parser: 'babel-eslint',
    //     },
    //     playgroundURL: 'https://www.onlinegdb.com/online_java_compiler',
    //     documentationURL: 'https://www.w3schools.com/java/',
    //     websiteURL: 'https://www.java.com/',
    // },
    // // c
    // {
    //     id: 'c',
    //     title: 'C',
    //     isCurrentVersion: true,
    //     img: 'c',
    //     eslint: {
    //         files: ['c'],
    //         parser: 'babel-eslint',
    //     },
    //     playgroundURL: 'https://www.onlinegdb.com/online_c_compiler',
    //     documentationURL: 'https://www.w3schools.com/C/',
    //     websiteURL: 'https://en.wikipedia.org/wiki/C_(programming_language)',
    // },
    // // c++
    // {
    //     id: 'cpp',
    //     title: 'C++',
    //     isCurrentVersion: true,
    //     img: 'cpp',
    //     eslint: {
    //         files: ['cpp'],
    //         parser: 'babel-eslint',
    //     },
    //     playgroundURL: 'https://www.onlinegdb.com/online_c++_compiler',
    //     documentationURL: 'https://www.w3schools.com/cpp/',
    //     websiteURL: 'https://en.wikipedia.org/wiki/C%2B%2B',
    // },
    // // c#
    // {
    //     id: 'csharp',
    //     title: 'C#',
    //     isCurrentVersion: true,
    //     img: 'csharp',
    //     eslint: {
    //         files: ['csharp'],
    //         parser: 'babel-eslint',
    //     },
    //     playgroundURL: 'https://www.onlinegdb.com/online_csharp_compiler',
    //     documentationURL: 'https://www.w3schools.com/cs/',
    //     websiteURL: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
    // },
    // // haskell
    // {
    //     id: 'haskell',
    //     title: 'Haskell',
    //     isCurrentVersion: true,
    //     img: 'haskell',
    //     eslint: {
    //         files: ['haskell'],
    //         parser: 'babel-eslint',
    //     },
    //     playgroundURL: 'https://www.onlinegdb.com/online_haskell_compiler',
    //     documentationURL: 'https://www.haskell.org/documentation/',
    //     websiteURL: 'https://www.haskell.org/',
    // },
    // // go
    // {
    //     id: 'go',
    //     title: 'Go',
    //     isCurrentVersion: true,
    //     img: 'go',
    //     eslint: {
    //         files: ['go'],
    //         parser: 'babel-eslint',
    //     },
    //     playgroundURL: 'https://www.onlinegdb.com/online_go_compiler',
    //     documentationURL: 'https://www.golang.org/doc/',
    //     websiteURL: 'https://www.golang.org/',
    // },
    // // ruby
    // {
    //     id: 'ruby',
    //     title: 'Ruby',
    //     isCurrentVersion: true,
    //     img: 'ruby',
    //     eslint: {
    //         files: ['ruby'],
    //         parser: 'babel-eslint',
    //     },
    //     playgroundURL: 'https://www.onlinegdb.com/online_ruby_compiler',
    //     documentationURL: 'https://www.ruby-lang.org/en/documentation/',
    //     websiteURL: 'https://www.ruby-lang.org/',
    // },
    // // swift
    // {
    //     id: 'swift',
    //     title: 'Swift',
    //     isCurrentVersion: true,
    //     img: 'swift',
    //     eslint: {
    //         files: ['swift'],
    //         parser: 'babel-eslint',
    //     },
    //     playgroundURL: 'https://www.onlinegdb.com/online_swift_compiler',
    //     documentationURL: 'https://swift.org/documentation/',
    //     websiteURL: 'https://swift.org/',
    // },
    // // rust
    // {
    //     id: 'rust',
    //     title: 'Rust',
    //     isCurrentVersion: true,
    //     img: 'rust',
    //     eslint: {
    //         files: ['rust'],
    //         parser: 'babel-eslint',
    //     },
    //     playgroundURL: 'https://www.onlinegdb.com/online_rust_compiler',
    //     documentationURL: 'https://doc.rust-lang.org/book/',
    //     websiteURL: 'https://www.rust-lang.org/',
    // },
    // // php
    // {
    //     id: 'php',
    //     title: 'PHP',
    //     isCurrentVersion: true,
    //     img: 'php',
    //     eslint: {
    //         files: ['php'],
    //         parser: 'babel-eslint',
    //     },
    //     playgroundURL: 'https://www.onlinegdb.com/online_php_compiler',
    //     documentationURL: 'https://www.php.net/docs.php',
    //     websiteURL: 'https://www.php.net/',
    // },
    // // sql
    // {
    //     id: 'sql',
    //     title: 'SQL',
    //     isCurrentVersion: true,
    //     img: 'sql',
    //     eslint: {
    //         files: ['sql'],
    //         parser: 'babel-eslint',
    //     },
    //     playgroundURL: 'https://www.onlinegdb.com/online_sql_compiler',
    //     documentationURL: 'https://www.w3schools.com/sql/',
    //     websiteURL: 'https://en.wikipedia.org/wiki/SQL',
    // },
    // // kotlin
    // {
    //     id: 'kotlin',
    //     title: 'Kotlin',
    //     isCurrentVersion: true,
    //     img: 'kotlin',
    //     eslint: {
    //         files: ['kotlin'],
    //         parser: 'babel-eslint',
    //     },
    //     playgroundURL: 'https://www.onlinegdb.com/online_kotlin_compiler',
    //     documentationURL: 'https://kotlinlang.org/docs/home.html',
    //     websiteURL: 'https://kotlinlang.org/',
    // },
    // // r
    // {
    //     id: 'r',
    //     title: 'R',
    //     isCurrentVersion: true,
    //     img: 'r',
    //     eslint: {
    //         files: ['r'],
    //         parser: 'babel-eslint',
    //     },
    //     playgroundURL: 'https://www.onlinegdb.com/online_r_compiler',
    //     documentationURL: 'https://www.r-project.org/help.html',
    //     websiteURL: 'https://www.r-project.org/',
    // },
];

export function matchFrameworkId(id) {
    return languages.find(
        (language) =>
            language.id === id
        // ||
        //     (language.isCurrentVersion &&
        //         language.frameworkName.toLowerCase() === id)
    );
}

export default languages;
