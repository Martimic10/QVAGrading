import { useSyncExternalStore } from "react";

export function navigate(to: string) {
  if (to === window.location.pathname + window.location.search + window.location.hash) return;
  window.history.pushState({}, "", to);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

function subscribe(onStoreChange: () => void) {
  window.addEventListener("popstate", onStoreChange);
  return () => window.removeEventListener("popstate", onStoreChange);
}

export function usePathname() {
  return useSyncExternalStore(subscribe, () => window.location.pathname, () => "/");
}
