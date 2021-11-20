import { QueryCache, QueryClient } from "react-query";

export const cache = new QueryCache();
export const client = new QueryClient({
  queryCache: cache,
});
