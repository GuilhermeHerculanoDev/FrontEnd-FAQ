"use client"

import Link from "next/link";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [activePage, setActivePage] = useState("");

  useEffect(() => {
    const currentPath = window.location.pathname;
    setActivePage(currentPath);
  }, []);

  return (
    <div className="border-b border-gray-400">
      <div className="flex justify-between items-center m-5">
        <div>
          <h1>FAQ</h1>
        </div>

        <div className="flex gap-16">
          <Link 
            href="/" 
            className={`font-semibold ${activePage === "/" ? "font-bold border-b-2 border-black" : ""}`}
            onClick={() => setActivePage("/")}
          >
            Home
          </Link>

          <Link 
            href="/category" 
            className={`font-semibold ${activePage === "/category" ? "font-bold border-b-2 border-black" : ""}`}
            onClick={() => setActivePage("/category")}
          >
            Category
          </Link>

          <Link 
            href="/profile" 
            className={`font-semibold ${activePage === "/profile" ? "font-bold border-b-2 border-black" : ""}`}
            onClick={() => setActivePage("/profile")}
          >
            Profile
          </Link>

          <Link 
            href="/about" 
            className={`font-semibold ${activePage === "/about" ? "font-bold border-b-2 border-black" : ""}`}
            onClick={() => setActivePage("/about")}
          >
            About
          </Link>
        </div>

        <div>
          <button className="bg-blue-600 text-white text-sm py-1 px-7 rounded-md">
            <Link href="/login">Login</Link>
          </button>
        </div>
      </div>    
    </div>
  );
}
