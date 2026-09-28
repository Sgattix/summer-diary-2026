export const getReadKey = (pathname: string) => `read:${pathname}`;
export const getElapsedKey = (pathname: string) => `read_elapsed:${pathname}`;

export function isPageRead(pathname: string) {
  if (typeof window === 'undefined') return false;
  return !!localStorage.getItem(getReadKey(pathname));
}

export function markPageRead(pathname: string) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(getReadKey(pathname), JSON.stringify({ readAt: Date.now() }));
  try {
    window.dispatchEvent(new CustomEvent('page-read', { detail: { pathname } }));
  } catch (e) {
    // ignore
  }
}

export function getElapsedMs(pathname: string) {
  if (typeof window === 'undefined') return 0;
  const raw = localStorage.getItem(getElapsedKey(pathname));
  if (!raw) return 0;
  const n = Number(raw);
  return isNaN(n) ? 0 : n;
}

export function setElapsedMs(pathname: string, ms: number) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(getElapsedKey(pathname), String(Math.max(0, Math.floor(ms))));
}

export function clearRead(pathname: string) {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(getReadKey(pathname));
  localStorage.removeItem(getElapsedKey(pathname));
}
