export interface Storage {

  bool(key: string, defaultValue: boolean): boolean;

}

export default {
  bool(key: string, defaultValue = false): boolean {
    const rawValue: string | null = localStorage.getItem(key);
    if (rawValue == null) return defaultValue;
    if (rawValue == "true") return true;
    else if (rawValue == "false") return false;
    return defaultValue;
  }
}