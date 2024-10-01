// grab all files in the content folder and turn them into a single JSON object
// this is the data structure that the querying functions expect
// the folder content contain multiple categories,
// each category contain multiple problems,
// each problem contain multiple languages,
// and each language contain multiple files

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

import fs from 'fs';
import path from 'path';

export const dataJSON = () => {
    // dont use __dirname, it will be undefined when using esm
    const contentPath = path.join(process.cwd(), 'content');

    const allData: AllData = {};

    const categories = fs.readdirSync(contentPath);

    categories.forEach((category) => {
        const categoryPath = path.join(contentPath, category);
        const problems = fs.readdirSync(categoryPath);

        allData[category] = {};

        problems.forEach((problem) => {
            const problemPath = path.join(categoryPath, problem);
            const languages = fs.readdirSync(problemPath);

            allData[category][problem] = {};

            languages.forEach((language) => {
                const languagePath = path.join(problemPath, language);
                const files = fs.readdirSync(languagePath);

                allData[category][problem][language] = {};

                files.forEach((file) => {
                    const filePath = path.join(languagePath, file);
                    const content = fs.readFileSync(filePath, 'utf-8');

                    allData[category][problem][language][file] = content;
                });
            });
        });
    });

    return allData;
}