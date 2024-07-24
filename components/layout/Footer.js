"use client";
import Link from "next/link";
export default () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="text-gray-400 flex justify-center p-3 my-10 mx-3">
      <span className="mx-2">&copy; {currentYear}</span>
      <span>
        Develop by{" "}
        <Link href="" target="_blank" className="font-bold">
          Ayutnaa
        </Link>
      </span>
    </div>
  );
};
