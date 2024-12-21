import { cookies } from "next/headers";

export default async function Home() {
  cookies();
  const data = await fetch("https://dummyjson.com/products/2?delay=5000");
  const res = await data.json();
  return (
    <>
      <div>Header Component</div>
      <div>SearchBar Component</div>
      <div>Content Component</div>
    </>
  );
}
