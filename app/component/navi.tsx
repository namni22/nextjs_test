"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navi() {
  const path = usePathname();
  const [count, setCount] = useState(0);
  return (
    <div>
      <ul>
        <li>
          <Link href="/">Home</Link>
          {path == "/" ? "❤️" : ""}
        </li>
        <li>
          <Link href="/about-us">About us</Link>
          {path == "/about-us" ? "❤️" : ""}
        </li>
        <li>
          <button onClick={() => setCount((c) => count + 1)}>{count}</button>
        </li>
      </ul>
    </div>
  );
}
