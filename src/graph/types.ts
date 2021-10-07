
export type Settings = {
  values: {
    [key: string]: string | boolean | number | undefined;
  };
  bool(name: string): boolean;
  str(name: string): string;
  num(name: string): number;
}

export type SettingDefinition = {
  key: string;
  name: string;
  type: "toggle" | "slider";
  min?: number;
  max?: number;
  step?: number;
  default?: string | boolean | number;
}

export type PlottingFunction = (ctx: CanvasRenderingContext2D) => void;

export type GraphTypeData = {
  name: string;
  func: PlottingFunction;
  settings: SettingDefinition[];
}

export type DataGroups = {
  [key: string]: number[]
}

