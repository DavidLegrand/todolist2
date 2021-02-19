import { useCallback } from "react";

const useFetch = () => {
  const doFetch = useCallback(async (url, options = null) => {
    try {
      const res = await fetch(url, options);
      if (!res.ok) throw Error(res.statusText);
      else {
        return await res.json();
      }
    } catch (e) {
      console.error(e);
    }
  }, []);
  return doFetch;
};

export default useFetch;
