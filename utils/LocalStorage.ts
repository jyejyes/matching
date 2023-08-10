class LocalStorage {
  constructor() {}

  static setItem(key: string, item: string) {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, item);
    }
  }

  static getItem(key: string) {
    if (typeof window !== "undefined") {
      return localStorage.getItem(key);
    }
  }

  static removeItem(key: string) {
    if (typeof window !== "undefined") {
      localStorage.removeItem(key);
    }
  }

  static clear() {
    if (typeof window !== "undefined") {
      localStorage.clear();
    }
  }
}

export default LocalStorage;
