import { useEffect, useState } from "react";

// https://remix.run/docs/en/v1/guides/constraints#rendering-with-browser-only-apis
export default function useLocalStorage(key: string, value: string) {
  const [state, setState] = useState<string | null>(value);

  useEffect(() => {
    setState(localStorage.getItem(key));
  }, [key]);

  const setWithLocalStorage = (nextState: string) => {
    setState(nextState);
  };

  return [state, setWithLocalStorage];
}
