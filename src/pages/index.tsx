import AvatarBubble from "~/components/AvatarBubble";
import AboutMe from "~/components/AboutMe";
import Projects from "~/components/Projects";
import Education from "~/components/Education";
import NavBar from "~/components/NavBar";
import CodeLink from "~/components/Links/CodeLink";
import IntroTechLogos from "~/components/IntroTechLogos";
import dynamic from "next/dynamic";
import Image from "next/image";
import Contact from "~/components/Contact";
import Footer from "~/components/Footer";

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
      <div className="absolute h-12 top left w-full bg-[#111827]" />
      <div className="absolute min-h-screen mt-12 top left w-full bg-gradient-to-b from-[#111827] to-[#27384c]" />
      <main className="flex md:pt-28 flex-col w-full items-center justify-between bg-[#27384c] text-white">
        <section className="w-full flex justify-center font-mono md:pb-56 md:pt-24">
          <div className="max-w-4xl w-full mb-10 md:mb-0">
            <div className="relative flex flex-col md:flex-row mt-14 md:mt-5 items-center">
              <div>
                <div className="w-full text-4xl mt-6 md:mt-0">
                  Hi, I&apos;m George.
                  <span className="whitespace-nowrap block md:mt-6 md:mb-3">
                    A creative
                  </span>
                  <span className="text-5xl md:text-7xl block -ml-1 whitespace-nowrap">
                    Full-stack
                  </span>
                  <span className="text-6xl md:text-8xl block -ml-1">
                    Developer
                  </span>
                </div>
              </div>

              <div className="mt-14 md:-mt-36 md:-ml-18 animate-levitate">
                <AvatarBubble />
              </div>
            </div>
          </div>
        </section>

        <div className="mt-20 md:-mt-32 md:mb-14 z-10">
          <IntroTechLogos />
        </div>

        <section
          id="about"
          className="w-full max-w-4xl font-mono p-6 pt-24 md:p-0 z-10 md:scroll-m-24"
        >
          <span className="text-5xl md:text-6xl block mb-10 text-center md:text-left">
            About me
          </span>

          <AboutMe />
        </section>

        <section
          id="education"
          className="w-full max-w-4xl mt-6 md:mt-24 font-mono p-6 md:p-0 pt-20 md:scroll-m-24"
        >
          <span className="text-5xl block mb-10 text-center md:text-left">
            Education
          </span>
          <Education />
        </section>

        <section
          id="projects"
          className="z-10 bg-[#111827] w-full mt-36 flex justify-center p-6 pt-20 pb-36  -scroll-m-24"
        >
          <div className="w-full max-w-4xl mt-24 items-center justify-between font-mono">
            <span className="text-5xl md:text-6xl block text-center md:text-left">
              Projects
            </span>
            <Projects />
          </div>
        </section>

        <section
          id="katas"
          className="w-full max-w-4xl flex flex-col items-center justify-between font-mono p-6 md:p-0 mt-40 md:scroll-m-24"
        >
          <div className="block mb-10 flex flex-col gap-5 w-full">
            <div className="text-center flex flex-col md:flex-row md:justify-between items-center text-xl mb-16">
              <span className="mb-6 md:m-0 text-4xl">
                Check my solutions on CodeWars!
              </span>

              <div className="w-full flex flex-col md:flex-row md:gap-8 justify-around md:justify-center items-center">
                <CodeLink
                  url="https://github.com/flektor/codewars-katas/"
                  text="Repo"
                />
                <a
                  href="https://www.codewars.com/users/flektor"
                  className="mt-7 md:mt-0"
                >
                  <CodewarsUser username="flektor" />
                </a>
              </div>
            </div>
            <div>
              <CodeWindow />
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="w-full pt-36 -scroll-m-20 bg-[#111827] font-mono flex justify-center"
        >
          <div className="w-full max-w-4xl flex flex-col">
            <h1 className=" text-4xl md:text-6xl m-6 mb-3 md:mb-10">
              Contact
            </h1>
            <div className="max-w-4xl p-4 pb-20 md:p-0 md:mb-24">
              <Contact />
            </div>
          </div>
        </section>
      </main>
      <hr className="h-px border-0 bg-gray-800 " />
      <Footer />
    </>
  );
}
