"use client";

import Sidebar from "@/components/Sidebar";

export default function AdminLayout({ children }) {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
}
