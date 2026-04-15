"use client";

import { useEffect } from "react";

export default function ScrollTop() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    // Disable browser scroll restoration so it doesn't fight us
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  return null;
}
