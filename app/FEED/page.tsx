"use client";

import { useEffect } from "react";

export default function FeedPage() {
  useEffect(() => {
    window.location.replace("/Live_Oak_PR_FEED_v20260821.pdf");
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-current/60">Opening press release…</p>
    </div>
  );
}
