"use client";

import { useRouter } from "next/navigation";

const Button = () => {
  const router = useRouter();
  return (
    <div class="flex gap-2 flex-col">
      <button onClick={() => router.push("/current")}>
        Current Implementation
      </button>
      <button onClick={() => router.push("/server-component")}>
        Suggested Improvement
      </button>
      <button onClick={() => router.push("/cache-route")}>
        Cache Strategy
      </button>
    </div>
  );
};

export default Button;
