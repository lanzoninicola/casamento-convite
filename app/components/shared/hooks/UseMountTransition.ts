import { useState, useEffect } from "react";

const useMountTransition = (unmountDelay: number) => {
  const [isMounted, setIsMounted] = useState(false);
  const [hasTransitionedIn, setHasTransitionedIn] = useState(false);

  console.log("useMountTransition", { isMounted, hasTransitionedIn });

  function unmountTarget() {
    setIsMounted(false);
  }

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    setIsMounted(true);

    if (isMounted && !hasTransitionedIn) {
      setHasTransitionedIn(true);
    } else if (!isMounted && hasTransitionedIn) {
      timeoutId = setTimeout(() => setHasTransitionedIn(false), unmountDelay);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [unmountDelay, isMounted, hasTransitionedIn]);

  return { hasTransitionedIn, unmountTarget };
};

export default useMountTransition;
