"use client";

import Sidebar from "@/components/Sidebar";
import { DataContextProvider } from "@/context/data";
export default function AdminLayout({ children }) {
  return (
    <div className="flex">
      <DataContextProvider>
        <Sidebar />
        {children}
      </DataContextProvider>
    </div>
  );
}
