import { useCallback, useEffect, useState } from "react";

export type Mode = "day" | "night";
const KEY = "tigida-mode";

/** Inline script run before paint: respects system preference, then a persisted manual choice. */
export const themeInitScript = `(function(){try{var m=localStorage.getItem('${KEY}');if(!m){m=window.matchMedia('(prefers-color-scheme: dark)').matches?'night':'day'}if(m==='night')document.documentElement.classList.add('dark')}catch(e){}})();`;

export function useMode() {
  const [mode, setMode] = useState<Mode>("day");
  useEffect(() => {
    setMode(document.documentElement.classList.contains("dark") ? "night" : "day");
  }, []);
  const set = useCallback((m: Mode) => {
    document.documentElement.classList.toggle("dark", m === "night");
    try {
      localStorage.setItem(KEY, m);
    } catch {
      /* ignore */
    }
    setMode(m);
  }, []);
  return [mode, set] as const;
}
