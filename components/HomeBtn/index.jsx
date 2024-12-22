"use client";

import React from "react";
import { useRouter } from "next/navigation";

const HomeBtn = () => {
  const router = useRouter();
  return (
    <div>
      <button
        className="border p-2 hover:bg-violet-500"
        onClick={() => router.push("/")}
      >
        Home
      </button>
    </div>
  );
};

export default HomeBtn;
