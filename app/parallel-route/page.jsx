import React from "react";
import { cookies } from "next/headers";
import HomeBtn from "../../components/HomeBtn";

const ParallelRoute = () => {
  cookies();
  return (
    <div className="flex justify-center items-center h-20 border p-4">
      ParallelRoute page.jsx
      <HomeBtn />
    </div>
  );
};

export default ParallelRoute;
