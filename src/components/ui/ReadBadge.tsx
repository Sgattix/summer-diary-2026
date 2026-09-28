"use client";

import React from "react";
import { isPageRead } from "../../lib/readUtils";

export default function ReadBadge({ pathname }: { pathname?: string }) {
  if (pathname && !pathname.startsWith('/days/')) return <></>;
  const [read, setRead] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const path = pathname ?? window.location.pathname;
    setRead(isPageRead(path));

    function onRead(e: any) {
      if (!e?.detail?.pathname) return;
      if (e.detail.pathname === path) setRead(true);
    }

    window.addEventListener("page-read", onRead as EventListener);
    return () => window.removeEventListener("page-read", onRead as EventListener);
  }, [pathname]);

  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold /** base */ ${
        read ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"
      }`}
      aria-label={read ? "Letta" : "Non letta"}
    >
      {read ? "Letta" : "Nuova"}
    </span>
  );
}
