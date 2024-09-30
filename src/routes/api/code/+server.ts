import type { RequestHandler } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';
import { json, error } from '@sveltejs/kit';

export const config = {
    runtime: 'edge'
};

export const GET: RequestHandler = async () => {
    const contentDir = path.join(process.cwd(), 'content');
    const structure = {
        categories: [] as string[],
        examples: {} as { [key: string]: string[] },
        languages: [] as string[]
    };

    try {
        // console.log(`Reading content directory: ${contentDir}`);
        const categories = fs.readdirSync(contentDir);
        structure.categories = categories;

        categories.forEach(category => {
            const categoryDir = path.join(contentDir, category);
            // console.log(`Reading category directory: ${categoryDir}`);
            const examples = fs.readdirSync(categoryDir);
            structure.examples[category] = examples;

            examples.forEach(example => {
                const exampleDir = path.join(categoryDir, example);
                const languages = fs.readdirSync(exampleDir);
                // console.log(`Reading example directory: ${exampleDir}`);
                structure.languages = Array.from(new Set([...structure.languages, ...languages]));
            });
        });

        return json(structure, { status: 200 });
    } catch (err) {
        error(500, 'Error reading directory structure');
    }
};