export default class SharedPreferences {
    public setPreference(key: string, value: string): void {
        localStorage.setItem(key, value);
    }
    public getPreference(key: string): string | null {
        return localStorage.getItem(key);
    }
}