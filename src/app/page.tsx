"use client"

import { useEffect, useState } from "react"
import { FiMail, FiGithub, FiLinkedin, FiExternalLink } from "react-icons/fi"

const projects = [
  {
    title: "Blogr Landing Page",
    url: "https://eagl0037.github.io/blogr-landing-page/",
    description: "A responsive landing page built with HTML and CSS focused on a clean blog layout.",
  },
  {
    title: "Scramble Game",
    url: "https://eagl0037.github.io/scramble-game/",
    description: "A React word game using local storage, scoring system, and fun interactive gameplay.",
  },
  {
    title: "Portfolio Site",
    url: "https://eagl0037.github.io/portfolio/",
    description: "This portfolio site showcasing my projects, skills, and contact info built with Next.js and Tailwind CSS.",
  },
  {
    title: "Seussology App",
    url: "#", // Replace with real URL if you want
    description: "A React app for browsing Dr. Seuss books and quotes using a public API, styled with Tailwind CSS.",
  },
]

export default function Home() {
  const [greeting, setGreeting] = useState("")

  useEffect(() => {
    const hour = new Date().getHours()
    if (hour < 12) setGreeting("Good morning ☀️")
    else if (hour < 18) setGreeting("Good afternoon 🌤️")
    else setGreeting("Good evening 🌙")
  }, [])

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-gradient-to-b from--700/95 to-transparent backdrop-blur-md z-50 shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <a
            href="#hero"
            className="text-purple-300 font-extrabold text-xl tracking-wide hover:text-purple-100 transition"
          >
            Natasha Eagles
          </a>
          <div className="space-x-6 font-semibold text-lg">
            <a href="#about" className="text-purple-400 hover:text-purple-200 transition">
              About
            </a>
            <a href="#skills" className="text-blue-400 hover:text-blue-200 transition">
              Skills
            </a>
            <a href="#projects" className="text-purple-400 hover:text-purple-200 transition">
              Projects
            </a>
            <a href="#contact" className="text-blue-400 hover:text-blue-200 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main className="bg-gradient-to-br from-purple-50 via-blue-50 to-white min-h-screen pb-40 text-gray-900 font-sans pt-20">
        <section
          id="hero"
          className="max-w-4xl mt-24 rounded-xl p-12 text-center
                     bg-white bg-opacity-60 backdrop-blur-lg border border-white border-opacity-40
                     shadow-lg transition hover:bg-opacity-70 hover:shadow-xl mx-auto"
        >
          <h1 className="text-6xl font-extrabold text-purple-600 drop-shadow-md mb-4">
            Natasha Eagles
          </h1>
          <p className="text-2xl text-purple-700 font-semibold">{greeting} — Welcome to my portfolio!</p>
          <p className="mt-6 text-xl text-purple-700 max-w-xl mx-auto tracking-wide">
            I’m a passionate full-stack developer and designer based in Toronto. I love turning ideas into interactive, beautiful, and user-friendly digital experiences.
          </p>
        </section>

        <section
          id="about"
          className="mt-36 max-w-4xl mx-auto rounded-3xl p-12 text-center
                     bg-purple-100 bg-opacity-40 backdrop-blur-md border border-purple-200
                     shadow-md transition hover:shadow-lg text-purple-800"
        >
          <h2 className="text-5xl font-extrabold mb-12 drop-shadow-sm">
            About Me
          </h2>
          <p className="text-xl leading-relaxed tracking-wide max-w-xl mx-auto">
            I’m Natasha, a passionate front-end developer who loves crafting clean,
            modern, and responsive websites. I enjoy working with React, Next.js,
            and Tailwind CSS to build delightful user experiences.
          </p>
        </section>

        <section
          id="skills"
          className="mt-36 max-w-4xl mx-auto rounded-3xl p-12 text-center
                     bg-blue-100 bg-opacity-40 backdrop-blur-md border border-blue-200
                     shadow-md transition hover:shadow-lg text-blue-800"
        >
          <h2 className="text-5xl font-extrabold mb-12 drop-shadow-sm">
            Skills & Tools
          </h2>
          <div className="flex flex-wrap justify-center gap-8 text-xl font-semibold text-blue-800">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Next.js",
              "Tailwind CSS",
              "Git",
              "Figma",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-purple-300 px-6 py-3 rounded-full shadow-sm text-purple-700 hover:bg-purple-400 cursor-default select-none"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="projects" className="mt-36 max-w-6xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-14 text-center text-purple-700 drop-shadow-sm">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-12 px-10">
            {projects.map(({ title, url, description }) => (
              <a
                key={title}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-3xl bg-gradient-to-br from-purple-200 to-blue-200 p-8 shadow-md hover:shadow-lg transition transform hover:scale-[1.03] flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-3xl font-bold text-purple-800 mb-4">
                    {title}
                  </h3>
                  <p className="text-purple-900 mb-6 text-lg">{description}</p>
                </div>
                <FiExternalLink className="text-purple-700 self-end w-6 h-6" />
              </a>
            ))}
          </div>
        </section>

        <section className="mt-36 max-w-5xl mx-auto px-10 text-center">
          <h2 className="text-5xl font-extrabold mb-12 text-purple-700 drop-shadow-sm">
            Contact Me
          </h2>
          <p className="text-xl text-purple-800 mb-8">
            Let’s connect! I’m open to opportunities, collaborations, or just chatting design and tech.
          </p>
          <div className="flex justify-center space-x-10 text-purple-700 text-3xl">
            <a href="mailto:natasha@example.com" aria-label="Email" className="hover:text-purple-900 transition">
              <FiMail />
            </a>
            <a href="https://github.com/eagl0037" target="_blank" aria-label="GitHub" className="hover:text-purple-900 transition">
              <FiGithub />
            </a>
            <a href="https://linkedin.com/in/natashaeagles" target="_blank" aria-label="LinkedIn" className="hover:text-purple-900 transition">
              <FiLinkedin />
            </a>
          </div>
        </section>

        <footer className="text-center text-sm text-purple-400 mt-32 pb-10 select-none">
          &copy; {new Date().getFullYear()} Natasha Eagles. 
        </footer>
      </main>
    </>
  )
}
