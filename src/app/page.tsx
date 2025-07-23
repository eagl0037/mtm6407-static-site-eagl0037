"use client"



import { useEffect, useState } from "react"
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi"

export default function Home() {
  // Optional: fade-in animation trigger
  const [show, setShow] = useState(false)
  useEffect(() => {
    setShow(true)
  }, [])

  return (
    <main className="min-h-screen flex flex-col items-center bg-gradient-to-tr from-indigo-200 via-purple-200 to-blue-200 text-gray-900 px-6 py-16 space-y-24 font-poppins">

      {/* Hero Section */}
      <section
        className={`max-w-4xl text-center space-y-6 transition-opacity duration-1000 ${
          show ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-6xl font-extrabold tracking-tight text-purple-700 drop-shadow-sm">
          Natasha Eagles
        </h1>
        <p className="text-2xl font-semibold text-purple-600">
          Front-End Developer & Designer
        </p>
        <a
          href="#projects"
          className="inline-block bg-purple-300 text-white font-bold py-3 px-8 rounded-md shadow-md hover:bg-purple-400 transition"
        >
          View Projects
        </a>
      </section>

      {/* About Me Section */}
      <section
        id="about"
        className={`max-w-4xl mx-auto rounded-xl p-10
                   bg-white bg-opacity-80 backdrop-blur-md border border-purple-300
                   shadow-md transition hover:shadow-lg
                   text-gray-800 transition-opacity duration-1000 ${
                     show ? "opacity-100" : "opacity-0"
                   }`}
      >
        <h2 className="text-4xl font-semibold mb-6 text-purple-700">
          About Me
        </h2>
        <p className="max-w-xl mx-auto text-lg leading-relaxed tracking-wide">
          I’m Natasha, a passionate front-end developer who loves crafting clean,
          modern, and responsive websites. I enjoy working with React, Next.js,
          and Tailwind CSS to build delightful user experiences.
        </p>
      </section>

      {/* Skills / Tools Section */}
      <section
        id="skills"
        className={`max-w-4xl mx-auto rounded-xl p-10 text-center
                   bg-white bg-opacity-80 backdrop-blur-md border border-blue-300
                   shadow-md transition hover:shadow-lg
                   transition-opacity duration-1000 ${show ? "opacity-100" : "opacity-0"}`}
      >
        <h2 className="text-4xl font-semibold mb-8 text-blue-700">Skills & Tools</h2>
        <div className="flex flex-wrap justify-center gap-6 text-lg text-gray-800">
          {[
            'HTML',
            'CSS',
            'JavaScript',
            'React',
            'Next.js',
            'Tailwind CSS',
            'Git',
            'Figma',
          ].map((skill) => (
            <span
              key={skill}
              className="bg-purple-200 px-4 py-2 rounded-full shadow-sm text-purple-700 select-none"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`max-w-6xl mx-auto transition-opacity duration-1000 ${
          show ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="text-4xl font-semibold mb-10 text-center text-purple-700">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <ProjectCard
            title="Blogr Landing Page"
            url="https://eagl0037.github.io/blogr-landing-page/"
            description="A responsive landing page built with HTML and CSS."
          />
          <ProjectCard
            title="Scramble Game"
            url="https://eagl0037.github.io/scramble-game/"
            description="A React word game using local storage and scoring system."
          />
          <ProjectCard
            title="Portfolio Site"
            url="https://eagl0037.github.io/portfolio/"
            description="This portfolio built with Next.js and Tailwind CSS."
          />
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`max-w-4xl mx-auto rounded-xl p-10
                   bg-white bg-opacity-90 backdrop-blur-md border border-purple-300
                   shadow-md transition hover:shadow-lg
                   text-gray-800 transition-opacity duration-1000 ${
                     show ? "opacity-100" : "opacity-0"
                   }`}
      >
        <h2 className="text-4xl font-semibold mb-8 text-purple-700">
          Contact Me
        </h2>
        <p className="mb-6 text-lg">
          I’m always happy to connect! Reach out via email or follow me on GitHub and LinkedIn.
        </p>
        <div className="flex justify-center gap-10 text-lg font-medium">
          <ContactLink href="mailto:natasha@example.com" label="Email" Icon={FiMail} />
          <ContactLink href="https://github.com/eagl0037" label="GitHub" Icon={FiGithub} />
          <ContactLink href="https://linkedin.com/in/natasha" label="LinkedIn" Icon={FiLinkedin} />
        </div>
      </section>
    </main>
  )
}

function ProjectCard({
  title,
  url,
  description,
}: {
  title: string
  url: string
  description: string
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gradient-to-br from-purple-300 to-blue-300 rounded-xl p-6 shadow-lg transition
                 transform hover:scale-105 hover:shadow-xl border border-transparent hover:border-purple-400"
    >
      <h3 className="text-purple-900 text-2xl font-bold mb-3">{title}</h3>
      <p className="text-purple-800">{description}</p>
    </a>
  )
}

function ContactLink({
  href,
  label,
  Icon,
}: {
  href: string
  label: string
  Icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="flex items-center gap-2 underline hover:text-purple-600 transition"
    >
      <Icon className="text-purple-700 w-5 h-5" />
      {label}
    </a>
  )
}
