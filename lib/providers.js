"use client";
import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";

export default function Providers({ children }) {
  const [mounted, setMounted] = useState(true);

  // useEffect(() => {
  //   setMounted(false);
  // }, []);

  if (mounted) {
    return <>{children}</>;
  }

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}