import { useState } from "react";

export const useFetch = () => {
  const [] = useState();

  const Fetch = (Type: { fetchProps: any; path: string }) => {
    return fetch(`/api${Type.path}`, {
      ...Type.fetchProps,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return {
    Fetch,
  };
};
