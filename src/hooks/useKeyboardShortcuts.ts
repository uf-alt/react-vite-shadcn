import { useEffect } from "react";

export function useKeyboardShortcuts(shortcuts: Record<string, () => void>): void {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
        return;
      }

      const action = shortcuts[e.key.toLowerCase()];
      if (action) {
        action();
      }
    };

    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [shortcuts]);
}
