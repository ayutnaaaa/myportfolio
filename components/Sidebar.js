"use client";

import Link from "next/link";
import { useContext } from "react";
import { DataContext } from "@/context/data";

export default () => {
  const ctx = useContext(DataContext);
  // console.log(ctx.logout);
  return (
    <div className="flex flex-col h-screen w-52 border-r-2 bg-baseThree text-baseOne">
      <Link
        href="/admin/addWork"
        className="border-b border-gray-500 p-3 hover:text-baseFive"
      >
        Works
      </Link>
      <Link
        href="/admin/information"
        className="border-b border-gray-500 p-3 hover:text-baseFive"
      >
        Information
      </Link>
      <Link
        href="/admin/users"
        className="border-b border-gray-500 p-3 hover:text-baseFive"
      >
        Users
      </Link>
      <button
        onClick={ctx.logout}
        className="border-b border-gray-500 p-3 flex justify-start hover:text-baseFive"
      >
        Logout
      </button>
    </div>
  );
};
