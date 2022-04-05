import { useEffect, useState } from "react";

// https://remix.run/docs/en/v1/guides/constraints#rendering-with-browser-only-apis
export default function useRemixLocalStorage<T>(key: string, initialValue: T) {
  const [state, setState] = useState<T>(initialValue);

  // You can fix this by moving the code into useEffect, which only runs in the browser.
  useEffect(() => {
    setWithLocalStorage(getWithLocalStorage(key));
  }, [key]);

  function getWithLocalStorage(key: string) {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = localStorage.getItem(key);

      return item ? JSON.parse(item) : null;
    } catch (e) {
      console.log(e);
    }
  }

  function setWithLocalStorage(nextState: T) {
    try {
      setState(nextState);

      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(nextState));
      }
    } catch (e) {
      console.log(e);
    }
  }

  return [state, setWithLocalStorage] as const;
}
