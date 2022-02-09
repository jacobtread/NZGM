import { defineStore } from "pinia";

export interface GraphVariables {
    [key: string]: number
}

export interface GraphSettings {
    values: { [key: string]: any };

    bool(key: string): boolean;

    str(key: string): string;

    num(key: string): number;
}

export interface GraphAxis {
    [id: string]: string | undefined;
}

export interface GraphState {
    title: string;
    type: string;
    variables: GraphVariables;
    size: number;
    settings: GraphSettings;
    axis: GraphAxis;
}

export const useSettingsStore = defineStore('settings', {
        state: (): GraphState => {
            return {
                title: 'Example Graph',
                type: 'dot-plot',
                variables: {},
                size: 0,
                axis: {
                    'numerical': 'MothersAge',
                    'category_1': 'MotherSmoke',
                },
                settings: {
                    values: {
                        'grid-lines': true,
                        'stacked-dots': true
                    },
                    bool(key: string): boolean {
                        return (this.values[key] ?? false) as boolean;
                    },
                    str(name: string): string {
                        return (this.values[name] ?? "") as string;
                    },
                    num(name: string): number {
                        return (parseFloat("" + this.values[name] ?? "0")) as number;
                    }
                }
            }
        }
    }
)
