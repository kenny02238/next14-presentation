import { cookies } from "next/headers";
import pause from "../../../../lib/utils";

export default async function FooSettings() {
  cookies();
  await pause(3000);

  //throw new Error('Settings Data not available')

  return (
    <section className="h-96 w-96 border-2 rounded-lg p-4 bg-blue-600">
      <h2 className="text-xl">Foo Settings</h2>
    </section>
  );
}
