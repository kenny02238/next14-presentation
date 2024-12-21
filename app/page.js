import { cookies } from "next/headers";
import Button from "@/components/Button";

export default async function Home() {
  cookies();

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <Button />
    </div>
  );
}
