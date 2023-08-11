import Image from "next/image";
import AvatarBubble from "~/components/avatar-bubble";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full items-center justify-between bg-[#27384c]">
      <section className="w-full max-w-5xl items-center justify-between font-mono text-sm">
        <div className="relative flex items-center">
          <div className="w-full justify-center text-5xl pl-24">
            <span className="text-5xl block mb-10">
              Hello, I am George
            </span>
            A <strong>creative</strong>
            <span className="text-8xl block -ml-2">
              Full-stack
            </span>
            <span className="text-8xl block -ml-1">
              Developer
            </span>
          </div>
          <AvatarBubble />
        </div>
      </section>
    </main>
  );
}
