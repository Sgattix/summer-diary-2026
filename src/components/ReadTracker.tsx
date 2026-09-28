"use client";

import React from 'react';
import { markPageRead, getElapsedMs, setElapsedMs, getReadKey } from '../lib/readUtils';

interface ReadTrackerProps {
  thresholdMs?: number; // ms to consider read
}

export default function ReadTracker({ thresholdMs = 5 * 60 * 1000 }: ReadTrackerProps) {
  const pathnameRef = React.useRef<string | null>(null);
  const intervalRef = React.useRef<number | null>(null);
  const lastTickRef = React.useRef<number>(Date.now());
  const accumulatedRef = React.useRef<number>(0);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    // if (!window.location.pathname.startsWith('/days/')) return;
    const pathname = window.location.pathname;
    pathnameRef.current = pathname;

    // If already marked read, nothing to do
    if (localStorage.getItem(getReadKey(pathname))) return;

    // load previously accumulated
    accumulatedRef.current = getElapsedMs(pathname) || 0;
    lastTickRef.current = Date.now();

    function tick() {
      const now = Date.now();
      const delta = now - lastTickRef.current;
      lastTickRef.current = now;
      accumulatedRef.current += delta;
      // persist every 5s
      if (accumulatedRef.current % 5000 < 1000) {
        setElapsedMs(pathname, accumulatedRef.current);
      }
      if (accumulatedRef.current >= thresholdMs) {
        markPageRead(pathname);
        cleanup();
      }
    }

    function onVisibility() {
      if (document.visibilityState === 'visible') {
        lastTickRef.current = Date.now();
        if (intervalRef.current == null) {
          intervalRef.current = window.setInterval(tick, 1000);
        }
      } else {
        // stop counting
        if (intervalRef.current != null) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          // persist
          setElapsedMs(pathname, accumulatedRef.current);
        }
      }
    }

    function cleanup() {
      if (intervalRef.current != null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setElapsedMs(pathname, accumulatedRef.current);
    }

    // start if visible
    if (document.visibilityState === 'visible') {
      intervalRef.current = window.setInterval(tick, 1000);
    }

    document.addEventListener('visibilitychange', onVisibility);
    window.addEventListener('beforeunload', cleanup);

    return () => {
      cleanup();
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('beforeunload', cleanup);
    };
  }, [thresholdMs]);

  return null;
}
