"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  return (
    <nav className="py-2 flex gap-4 text-xl border-b-2">
      <Link href="/intercepting-route">Home</Link>
      <button onClick={() => router.push("/intercepting-route/about")}>
        About
      </button>
      <Link href="/intercepting-route/store">Store</Link>
      <button onClick={() => router.push("/intercepting-route/login")}>
        Login
      </button>
    </nav>
  );
}
