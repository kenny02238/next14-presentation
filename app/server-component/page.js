import { Suspense } from "react";
import { cookies } from "next/headers";
import Header from "@/components/Hearder";
import SearchBar from "@/components/SearchBar";
import Content from "@/components/Content";

export default async function Home() {
  cookies();
  return (
    <div class="flex justify-center items-center w-full h-screen gap-2 flex-col">
      <Suspense fallback={<div>Header Loading...</div>}>
        <Header />
      </Suspense>
      <Suspense fallback={<div>SearchBar Loading...</div>}>
        <SearchBar />
      </Suspense>
      <Suspense fallback={<div>Content Loading...</div>}>
        <Content />
      </Suspense>
    </div>
  );
}
