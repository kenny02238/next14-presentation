"use client";

import React from "react";
import { useRouter } from "next/navigation";

const CloseBtn = () => {
  const router = useRouter();
  return <button onClick={() => router.back()}>CloseBtn</button>;
};

export default CloseBtn;
