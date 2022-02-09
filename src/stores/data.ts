import { defineStore } from "pinia";
// @ts-ignore
import { parse } from "../csv";

export interface DataState {
    cols: string[],
    rows: (string | number)[][],
}


export const useDataStore = defineStore('data', {
        state: (): DataState => {
            return {
                cols: [],
                rows: [],
            }
        },
        actions: {
            setData({ rows, cols }: { cols: string[], rows: string[][] }) {
                this.cols = cols
                this.rows = rows
            },
            async loadCSV(url: string): Promise<Boolean> {
                try {
                    const { rows, cols } = await new Promise(async (resolve, reject) => {
                        const response = await fetch(url)
                        const raw = await response.text()
                        const parser = parse({
                            delimiter: [ ';', '\t', ',' ],
                            cast: true
                        })
                        let first = true
                        let cols: string[] = []
                        let rows: string[][] = []
                        parser.on('readable', () => {
                            let entry: string[];
                            while ((entry = parser.read()) !== null) {
                                if (first) {
                                    cols = entry
                                    first = false
                                } else {
                                    rows.push(entry)
                                }
                            }
                        });
                        parser.on('end', () => resolve({ rows, cols }))
                        parser.on('error', reject)
                        parser.write(raw)
                        parser.end()
                    })
                    this.rows = rows
                    this.cols = cols
                    return true
                } catch (e) {
                    console.log(e)
                    return false
                }
            }
        }
    }
)
