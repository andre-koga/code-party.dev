import type { RequestHandler } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';
import { json, error } from '@sveltejs/kit';

type AllData = {
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
}

export const GET: RequestHandler = async () => {
    const contentDir = path.join(process.cwd(), 'content');
    const structure: AllData = {};

    try {
        const categories = fs.readdirSync(contentDir);

        categories.forEach(category => {
            structure[category] = {};

            const categoryDir = path.join(contentDir, category);
            // console.log(categoryDir);

            const problems = fs.readdirSync(categoryDir);
            // console.log(problems);

            problems.forEach(problem => {
                structure[category][problem] = {};

                const problemDir = path.join(categoryDir, problem);
                // console.log(problemDir);
                const languages = fs.readdirSync(problemDir);
                // console.log(languages);

                for (let i = 0; i < languages.length; i++) {
                    structure[category][problem][languages[i]] = {};

                    const contentPath = path.join(contentDir, category, problem, languages[i]);
                    const files = fs.readdirSync(contentPath);
                    // console.log(files);

                    let data: { [key: string]: string } = {};

                    files.forEach(file => {
                        data[file] = fs.readFileSync(path.join(contentPath, file), 'utf8');
                    });

                    structure[category][problem][languages[i]] = data;
                }
            });
        });

        return json(structure, { status: 200 });
    } catch (err) {
        error(500, 'Error reading directory structure');
    }
};