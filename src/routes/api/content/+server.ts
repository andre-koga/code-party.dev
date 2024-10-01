import type { RequestHandler } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';
import { json } from '@sveltejs/kit';

type AllData = {
    [key: string]: {
        [key: string]: {
            [key: string]: {
                [key: string]: string;
            };
        };
    };
};

export const GET: RequestHandler = async () => {
    const contentDir = path.join(process.cwd(), 'content');
    const structure: AllData = {};

    try {
        const categories = fs.readdirSync(contentDir);

        for (const category of categories) {
            structure[category] = {};

            const categoryDir = path.join(contentDir, category);
            const problems = fs.readdirSync(categoryDir);

            for (const problem of problems) {
                structure[category][problem] = {};

                const problemDir = path.join(categoryDir, problem);
                const languages = fs.readdirSync(problemDir);

                for (const language of languages) {
                    structure[category][problem][language] = {};

                    const contentPath = path.join(problemDir, language);
                    const files = fs.readdirSync(contentPath);

                    for (const file of files) {
                        const filePath = path.join(contentPath, file);
                        structure[category][problem][language][file] = fs.readFileSync(filePath, 'utf8');
                    }
                }
            }
        }

        return json(structure, { status: 200 });
    } catch (err) {
        console.error('Error reading directory structure:', err);
        return json({ error: 'Error reading directory structure' }, { status: 500 });
    }
};