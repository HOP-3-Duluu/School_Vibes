import {useState, useEffect} from 'react';

type UseLocalStorageReturnType<T> = [T | undefined, (value: T) => void];

export default function useLocalStorage<T>(
  key: string,
  defaultValue?: T,
): UseLocalStorageReturnType<T> {
  const [state, setState] = useState<T | undefined>(() => {
    try {
      const item = window?.localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error(error);
      return defaultValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.error(error);
    }
  }, [state, key]);

  return [state, setState];
}
