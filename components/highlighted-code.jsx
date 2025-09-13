// components/HighlightedCode.tsx
"use client";

import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript"; // JavaScript ke liye
// aur agar aur languages chahiye: prism-typescript, prism-jsx, prism-json, etc.

export default function HighlightedCode({ code, language = "javascript" }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre className="rounded-lg overflow-x-auto text-sm">
      <code className={`language-${language}`}>{code}</code>
    </pre>
  );
}
