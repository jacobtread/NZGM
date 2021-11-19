export interface GraphVariables {
    [key: string]: number;
}

export interface GraphSettings {
    values: { [key: string]: any };

    bool(key: string): boolean;

    str(key: string): string;

    num(key: string): number;
}

export interface GraphState {
    title: string;
    type: string;
    variables: GraphVariables;
    size: number;
    settings: GraphSettings;
}

const graphModule = {
    state: (): GraphState => {
        return {
            title: 'Example Graph',
            type: 'dot-plot',
            variables: {},
            size: 0,
            settings: {
                values: {},
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

export default graphModule;