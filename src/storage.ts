export interface Storage {

  bool(key: string, defaultValue: boolean): boolean;

  set(key: string, value: string | number | boolean): void;
}

export default {
  bool(key: string, defaultValue = false): boolean {
    const rawValue: string | null = localStorage.getItem(key);
    if (rawValue == null) return defaultValue;
    if (rawValue == "true") return true;
    else if (rawValue == "false") return false;
    return defaultValue;
  },
  set(key: string, value: string | number | boolean): void {
    if (typeof value == "string") localStorage.setItem(key, value);
    else localStorage.setItem(key, `${value}`)
  }
}