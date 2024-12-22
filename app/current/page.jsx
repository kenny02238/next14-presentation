import { cookies } from "next/headers";
import HomeBtn from "../../components/HomeBtn";

export default async function Home() {
  cookies();
  const data = await fetch("https://dummyjson.com/products/2?delay=5000");
  const res = await data.json();
  return (
    <div className="flex justify-center items-center w-full h-screen gap-2 flex-col">
      <div>Header Component</div>
      <div>SearchBar Component</div>
      <div>Content Component</div>
      <HomeBtn />
    </div>
  );
}
