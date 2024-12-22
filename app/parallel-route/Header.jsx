import Link from "next/link";

export default function Header() {
  return (
    <nav className="py-2 flex gap-4 text-xl border-b-2">
      <Link href="/parallel-route">Parallel Home</Link>
      <Link href="/parallel-route/settings">Settings</Link>
    </nav>
  );
}
