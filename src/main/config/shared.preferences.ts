export default class SharedPreferences {
    public setPreference(key: string, value: string): void {
        localStorage.setItem(key, value);
    }
    public getPreference(key: string): string | null {
        return localStorage.getItem(key);
    }
    public deletePreference(key: string): boolean {
        localStorage.removeItem(key);
        if (this.getPreference(key) != undefined) {
            return false;
        }
        return true;
    }
}