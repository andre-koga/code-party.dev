import type { RequestHandler } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';
import { error, json } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params }) => {
    const { category, example, language } = params;
    // console.log(params);

    if (!category || !example || !language) {
        return json('Invalid request', { status: 400 });
    }

    const contentDir = path.join(process.cwd(), 'content');

    const contentPath = path.join(contentDir, category, example, language);

    // check the existing files inside the contentPath
    const files = fs.readdirSync(contentPath);

    // print the files (there might be more than one)
    // files.forEach(file => {
    //     console.log(file);
    // });

    try {
        // open each of the files and assign their content to the data variable.
        // first initialize data as a dictionary, with the keys being the name of the file and the value being the content of the file.
        // then do a foreach loop to read each file and assign it to data.
        type Data = {
            [key: string]: string;
        };
        let data: Data = {};

        files.forEach(file => {
            data[file] = fs.readFileSync(path.join(contentPath, file), 'utf8');
        });

        return json(data, { status: 200 });
    } catch (err) {
        return error(404, 'File not found');
    }
};