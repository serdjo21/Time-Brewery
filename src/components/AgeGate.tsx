"use client";

import { useEffect, useState } from "react";

export default function AgeGate() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("age_verified");
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("age_verified", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-sm">
      <div className="mx-4 max-w-md border border-white/15 bg-black p-8 text-center">
        <h2 className="text-2xl font-semibold text-white">
          Age verification
        </h2>

        <p className="mt-4 text-sm text-white/70">
          You must be of legal drinking age to enter this site.
        </p>

        <div className="mt-6 flex gap-4">
          <button
            onClick={accept}
            className="flex-1 bg-white px-4 py-3 text-sm font-semibold text-black hover:opacity-90 transition"
          >
            I am 18+
          </button>

          <a
            href="https://www.google.com"
            className="flex-1 border border-white/20 px-4 py-3 text-sm text-white/80 hover:bg-white hover:text-black transition"
          >
            Leave
          </a>
        </div>
      </div>
    </div>
  );
}
