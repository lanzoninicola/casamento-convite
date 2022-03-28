import * as React from "react";
import { hydrate } from "react-dom";
import { CacheProvider } from "@emotion/react";
import { RemixBrowser } from "remix";

import { ClientStyleContext } from "./chackra-ui/context";
import { createEmotionCache } from "./chackra-ui/createEmotionCache";

interface ClientCacheProviderProps {
  children: React.ReactNode;
}

function ClientCacheProvider({ children }: ClientCacheProviderProps) {
  const [cache, setCache] = React.useState(createEmotionCache());

  function reset() {
    setCache(createEmotionCache());
  }

  return (
    <ClientStyleContext.Provider value={{ reset }}>
      <CacheProvider value={cache}>{children}</CacheProvider>
    </ClientStyleContext.Provider>
  );
}

hydrate(
  <ClientCacheProvider>
    <RemixBrowser />
  </ClientCacheProvider>,
  document
);
