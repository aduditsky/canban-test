export const isLocalStorageAvailable = (): boolean => {
  try {
    if (typeof window === 'undefined') return false;
    const testKey = 'localStorageTest';
    localStorage.setItem(testKey, 'test');
    localStorage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
};

export const getLocalStorageItem = <T>(key: string, defaultValue: T): T => {
  if (!isLocalStorageAvailable()) return defaultValue;

  try {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  } catch (error) {
    console.error(`[getLocalStorageItem] Ошибка "${key}":`, error);
    return defaultValue;
  }
};

export const setLocalStorageItem = <T>(key: string, value: T): void => {
  if (!isLocalStorageAvailable()) return;

  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`[setLocalStorageItem] Ошибка "${key}":`, error);
  }
};

export const removeLocalStorageItem = (key: string): void => {
  if (!isLocalStorageAvailable()) return;

  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`[removeLocalStorageItem] Ошибка "${key}":`, error);
  }
};
