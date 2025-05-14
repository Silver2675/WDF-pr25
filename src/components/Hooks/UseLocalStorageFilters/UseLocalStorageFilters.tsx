import { useLocalStorage } from 'usehooks-ts';
import { Dispatch, SetStateAction } from 'react';

interface UseLocalStorageFilterProps<T> {
  key: string;
  initialValue: T;
}

export default function useLocalStorageFilters<T>({ key, initialValue }: UseLocalStorageFilterProps<T>): [T, Dispatch<SetStateAction<T>>] {
  const [storedValue, setStoredValue] = useLocalStorage<T>(key, initialValue);
  return [storedValue, setStoredValue];
}
