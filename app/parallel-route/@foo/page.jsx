import { cookies } from "next/headers";
import { pause } from "../../../lib/utils";

export default async function Foo() {
  cookies();
  await pause(3000);

  //throw new Error('Data not available')

  return (
    <section className="h-96 w-96 border-2 rounded-lg p-4">
      <h2 className="text-xl">Foo</h2>
    </section>
  );
}
