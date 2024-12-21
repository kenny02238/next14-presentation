import { Suspense } from "react";
import { cookies } from "next/headers";
import Header from "@/components/Hearder";
import SearchBar from "@/components/SearchBar";
import Content from "@/components/Content";

export default async function Home() {
  cookies();
  // const data = await fetch("https://dummyjson.com/products/2?delay=3000");
  // const res = await data.json();
  return (
    <>
      <Suspense fallback={<div>Header Loading...</div>}>
        <Header />
      </Suspense>
      <Suspense fallback={<div>SearchBar Loading...</div>}>
        <SearchBar />
      </Suspense>
      <Suspense fallback={<div>Content Loading...</div>}>
        <Content />
      </Suspense>
    </>
  );
}
