import AvatarBubble from "~/components/avatar-bubble";
import AboutMe from "~/components/about-me";
import Projects from "~/components/projects";
import Education from "~/components/education";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full items-center justify-between bg-[#27384c]">
      <section className="w-full max-w-4xl items-center justify-between font-mono text-sm">
        <div className="relative flex items-center">
          <div className="w-full justify-center text-4xl pl-22">
            Hi, I'm George. A creative
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
      <section className="w-full max-w-4xl items-center justify-between font-mono text-sm">
        <AboutMe />
      </section>

      <section className="w-full max-w-4xl items-center justify-between font-mono text-sm pt-20">
        <span className="text-5xl block mb-10">
          Projects
        </span>
        <Projects />
      </section>

      <section className="w-full max-w-4xl items-center justify-between font-mono text-sm pt-20">
        <span className="text-5xl block mb-10">
          Education
        </span>
        <Education />
      </section>
    </main>
  );
}
