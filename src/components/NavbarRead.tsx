"use client";

import React from "react";
import ReadBadge from "./ui/ReadBadge";

export default function NavbarRead() {
  const [path, setPath] = React.useState<string>('/');
  React.useEffect(() => {
    setPath(window.location.pathname);
  }, []);

  return <ReadBadge pathname={path} />;
}
