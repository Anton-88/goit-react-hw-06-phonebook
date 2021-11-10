import { useEffect, useState } from "react";

export const LSManager = (key, initValue) => {
  const [state, setState] = useState(
    () => JSON.parse(localStorage.getItem(key)) ?? initValue
  );
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
};
