export function getHomepagePopupTarget(parameter: string) {
  if (typeof window === "undefined") return null;

  const params = new URLSearchParams(window.location.search);
  if (params.get("source") !== "home") return null;
  return params.get(parameter);
}

export function finishHomepagePopupFlow(parameter: string) {
  const url = new URL(window.location.href);
  url.searchParams.delete(parameter);
  url.searchParams.delete("source");
  window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);

  // Run after the shared modal releases its scroll lock. This behavior is
  // intentionally limited to popups opened through a homepage deep link.
  window.setTimeout(() => {
    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    window.scrollTo({ top: 0, behavior: "auto" });
    root.style.scrollBehavior = previousScrollBehavior;
  }, 0);
}
