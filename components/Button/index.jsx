"use client";

import { useRouter } from "next/navigation";

const Button = () => {
  const router = useRouter();
  return (
    <div className="flex gap-3 flex-col">
      <button
        className="border p-2 hover:bg-red-400"
        onClick={() => router.push("/current")}
      >
        Current Implementation
      </button>
      <button
        className="border p-2 hover:bg-green-600"
        onClick={() => router.push("/server-component")}
      >
        Suggested Improvement
      </button>
      <button
        className="border p-2 hover:bg-amber-400"
        onClick={() => router.push("/cache-route")}
      >
        Cache Strategy
      </button>
      <button
        className="border p-2 hover:bg-indigo-400"
        onClick={() => router.push("/parallel-route")}
      >
        parallel-route
      </button>
    </div>
  );
};

export default Button;
