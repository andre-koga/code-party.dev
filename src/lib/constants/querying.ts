export type AllData = {
    // category
    [key: string]: {
        // problem
        [key: string]: {
            // language
            [key: string]: {
                // array of files
                [key: string]: string;
            };
        };
    };
};

export function allCategories(data: AllData): string[] {
    return Object.keys(data);
}

export function allProblems(data: AllData, category: string): string[] {
    return Object.keys(data[category]);
}

export function allLanguages(data: AllData, category: string, problem: string): string[] {
    return Object.keys(data[category][problem]);
}

export function allFiles(data: AllData, category: string, problem: string, language: string): string[] {
    return Object.keys(data[category][problem][language]);
}

export function fileContent(data: AllData, category: string, problem: string, language: string, file: string): string {
    return data[category][problem][language][file];
}

export function titlefy(category: string): string {
    // uppercase first letter, remove first two characters and also remove all hyphens
    return category.charAt(2).toUpperCase() + category.substring(3, category.length).replace(/-/g, " ");
}

export function categoryURL(category: string, hashtag: boolean = true) {
    return (hashtag ? "#" : "") + category.substring(2, category.length);
}

export function problemURL(category: string, example: string, hashtag: boolean = true) {
    return (
        (hashtag ? "#" : "") +
        category.substring(2, category.length) +
        "." +
        example.substring(2, example.length)
    );
}

export function codeblockURL(category: string, example: string, language: string, hashtag: boolean = true) {
    return (
        (hashtag ? "#" : "") +
        category.substring(2, category.length) +
        "." +
        example.substring(2, example.length) +
        "." +
        language
    );
}