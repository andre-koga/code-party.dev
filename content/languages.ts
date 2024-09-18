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
    filesSorter: (files: any[]) => any[];
    websiteURL?: string;
};

const languages: languagesType[] = [
    {
        id: "svelte4",
        title: "Svelte 4",
        isCurrentVersion: true,
        img: "framework/svelte.svg",
        eslint: {
            files: ["**/svelte4/*.svelte"],
            parser: "svelte-eslint-parser",
        },
        playgroundURL: "https://svelte.dev/repl",
        documentationURL: "https://svelte.dev/",
        filesSorter(files) {
            return sortAllFilenames(files, ["index.html", "app.js", "App.svelte"]);
        },
        websiteURL: "https://github.com/sveltejs/svelte",
    }
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
