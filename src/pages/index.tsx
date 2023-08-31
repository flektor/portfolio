import AvatarBubble from "~/components/AvatarBubble";
import AboutMe from "~/components/AboutMe";
import Projects from "~/components/Projects";
import Education from "~/components/Education";
import NavBar from "~/components/NavBar";
import CodeLink from "~/components/Links/CodeLink";
import IntroTechLogos from "~/components/IntroTechLogos";
import dynamic from "next/dynamic";
import Image from "next/image";

const CodeWindow = dynamic(() => import("~/components/CodeWindow"), {
  ssr: false,
});

const CodewarsUser = dynamic(() => import("~/components/CodewarsUser"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="absolute min-h-screen mt-16 top left w-full bg-gradient-to-b from-[#111827] to-[#27384c]" />
      <main className="flex pt-8 md:pt-48 flex-col w-full items-center justify-between bg-[#27384c] text-white">
        <section className="w-full flex justify-center font-mono md:pb-56 md:pt-24">
          <div className="max-w-4xl w-full mb-10 md:mb-0">
            <div className="relative flex flex-col md:flex-row mt-14 md:mt-5 items-center">
              <div className="w-full text-4xl">
                Hi, I'm George.
                <span className="whitespace-nowrap block md:mt-6 md:mb-3">
                  A creative
                </span>
                <span className="text-6xl md:text-7xl block -ml-1 whitespace-nowrap">
                  Full-stack
                </span>
                <span className="text-7xl md:text-8xl block -ml-1">
                  Developer
                </span>
              </div>

              <div className="mt-14 md:-mt-36 md:-ml-18 animate-levitate">
                <AvatarBubble />
              </div>
            </div>
          </div>
        </section>

        <div className="mt-20 md:-mt-20 md:mb-24 z-10">
          <IntroTechLogos />
        </div>

        <section
          id="about"
          className="w-full max-w-4xl font-mono p-6 pt-24 md:p-0 z-10"
        >
          <span className="text-6xl block mb-10 text-center md:text-left">
            About me
          </span>

          <AboutMe />
        </section>

        <section
          id="education"
          className="w-full max-w-4xl mt-6 md:mt-24 font-mono p-6 md:p-0 pt-20"
        >
          <span className="text-6xl block mb-10 text-center md:text-left">
            Education
          </span>
          <Education />
        </section>

        <section
          id="projects"
          className="z-10 bg-[#111827] w-full mt-36 flex justify-center p-6 pt-20 pb-36"
        >
          <div className="w-full max-w-4xl mt-24 items-center justify-between font-mono">
            <span className="text-6xl block  text-center md:text-left">
              Projects
            </span>
            <Projects />
          </div>
        </section>

        <section
          id="katas"
          className=" w-full max-w-4xl flex flex-col items-center justify-between font-mono p-6 md:p-0 mt-40 mb-36"
        >
          <div className="block mb-10 flex flex-col gap-5 w-full">
            <div className="text-center flex flex-col md:flex-row md:justify-between items-center text-xl mb-16">
              <span className="mb-6 md:m-0 text-4xl">
                Check my solutions on CodeWars!
              </span>

              <div className="w-full flex gap-8 justify-around md:justify-center items-center">
                <CodeLink
                  url="https://github.com/flektor/codewars-katas/"
                  text="Repo"
                />
                <a href="https://www.codewars.com/users/flektor">
                  <CodewarsUser username="flektor" />
                </a>
              </div>
            </div>
            <div>
              <CodeWindow />
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full h-56 flex justify-center items-end bg-[#111827]">
        <div className="flex items-center gap-6 m-5">
          <span className="text-xl ">gdrosin@gmail.com</span>
          <div className="flex items-center">
            <a href="https://www.linkedin.com/in/georgios-drosinos/">
              <Image
                alt="LinkedIn"
                src="/logos/linkedin.svg"
                width={64}
                height={64}
              />
            </a>
            <a href="https://discord.com/users/flektor#6330">
              <Image
                alt="Discord"
                src="/logos/discord.svg"
                width={64}
                height={64}
              />
            </a>
            <a href="https://github.com/flektor">
              <Image
                alt="Github"
                src="/logos/github.svg"
                width={64}
                height={64}
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
