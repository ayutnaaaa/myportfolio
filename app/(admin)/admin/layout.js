"use client";

import Sidebar from "@/app/(admin)/admin/layout/Sidebar";
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
