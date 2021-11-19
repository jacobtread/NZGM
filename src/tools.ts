import { parse } from "csv-parse";

export async function importFromURL(url: string) {
    try {
        const { rows, cols } = await new Promise(async (resolve, reject) => {
            const response = await fetch(url);
            const raw = await response.text();
            const parser = parse({
                delimiter: [ ';', '\t', ',' ],
                cast: true
            });
            let first = true;
            let cols: string[] = [];
            let rows: string[][] = [];
            parser.on('readable', () => {
                let entry;
                while ((entry = parser.read()) !== null) {
                    if (first) {
                        cols = entry;
                        first = false;
                    } else {
                        rows.push(entry);
                    }
                }
            });
            parser.on('end', () => resolve({ rows, cols }));
            parser.on('error', reject);

            parser.write(raw);
            parser.end();
        });

        console.log(cols, rows);

    } catch (e) {
        console.error(e);
    }
}