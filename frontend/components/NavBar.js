import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex justify-between border-b-2 border-slate-200 bg-white">
      <div className="px-5 py-3">
        <Link href="/" className="text-xl font-extra-light">
          Next Demo
        </Link>
      </div>

      <div className="px-5 py-3">
        <Link href="/category">
          <button
            type="button"
            className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-sm hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Category
          </button>
        </Link>

        <Link href="/location">
          <button
            type="button"
            className="px-3 py-2 ml-1 text-xs font-medium text-center text-white bg-blue-700 rounded-sm hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Location
          </button>
        </Link>

        <Link href="/product">
          <button
            type="button"
            className="px-3 ml-1 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-sm hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Products
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
