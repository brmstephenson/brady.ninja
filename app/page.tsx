import Image from 'next/image'
import LinkedInSvg from './components/ui/linkedIn-svg'
import GithubSvg from './components/ui/github-svg'
import { cn } from './lib/cn'
import { MailIcon } from 'lucide-react'

export default function Home() {
  return (
    <div className="h-full bg-editor-background text-editor-foreground overflow-auto mx-auto text-center">
      <div className="flex flex-col items-center mt-8 gap-12">
        <div className="flex flex-col gap-4 text-center px-4">
          <h1 className="xl:text-5xl md:text-4xl text-3xl font-bold">
            Brady Stephenson
          </h1>
          <p className="xl:text-2xl md:text-xl text-lg text-editor-accent-2">
            Lead Full Stack Software Engineer · Dad · Hobbyist
          </p>
        </div>
        <div className="flex justify-center items-center gap-8">
          <Image
            src="/brady.jpeg"
            alt="Brady Stephenson"
            width={300}
            height={300}
            className="rounded-full xl:w-96 md:w-72 w-56"
          />
        </div>
        <div className="flex gap-4 items-center">
          <a
            href="https://www.linkedin.com/in/brady-stephenson-3480a091/"
            target="_blank"
            className="hover:cursor-pointer border-2 border-editor-accent-1 rounded-full p-4 hover:bg-editor-accent-1 transition-colors ease-linear"
          >
            <LinkedInSvg className="fill-editor-accent-2 size-8" />
          </a>
          <a
            href="https://github.com/brmstephenson"
            target="_blank"
            className="hover:cursor-pointer border-2 border-editor-accent-1 rounded-full p-4 hover:bg-editor-accent-1 transition-colors ease-linear"
          >
            <GithubSvg className="fill-editor-accent-2 size-8" />
          </a>
          <a
            href="mailto:brmstephenson@gmail.com"
            target="_blank"
            className="hover:cursor-pointer border-2 border-editor-accent-1 rounded-full p-4 hover:bg-editor-accent-1 transition-colors ease-linear"
          >
            <MailIcon className="text-editor-accent-2 size-8" />
          </a>
        </div>
        <div className="w-full mx-auto text-center">
          <h3 className="xl:text-2xl md:text-xl text-lg font-bold text-editor-accent-2">
            $whoami
          </h3>
          <div className="flex gap-4 items-center justify-center">
            <h2 className="xl:text-4xl md:text-3xl text-2xl font-bold pb-4">
              Hi, I&apos;m Brady, Thanks for stopping by!
            </h2>
          </div>
          <p className="xl:text-2xl md:text-xl text-lg max-w-xl mx-auto text-editor-accent-2/70">
            I&apos;m a full stack software engineer with over 12 years of
            experience, specializing in React, Remix, TypeScript, Tailwind CSS,
            ShadCN UI, Ruby on Rails, and PostgreSQL. I&apos;m also a dad that
            has many hobbies, latest being mountain biking, playing guitar,
            photography, and making art.
          </p>
        </div>
        <div className="w-full mx-auto pt-4 pb-18">
          <div className="px-10 w-full mx-auto text-center flex xl:gap-24 md:gap-12 gap-4 xl:flex-row flex-col items-center justify-center">
            <div className="bg-editor-background text-editor-foreground py-4 px-10 rounded-lg border-editor-accent-1 border-2 md:w-1/3 w-1/2">
              <h3 className="xl:text-3xl md:text-2xl text-xl font-bold">
                Work
              </h3>
              <ul className="text-editor-accent-2/70">
                <li>React</li>
                <li>Remix</li>
                <li>Tailwind CSS</li>
                <li>TypeScript</li>
                <li>Ruby on Rails</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
            <div className="bg-editor-background text-editor-foreground py-4 px-10 rounded-lg border-editor-accent-1 border-2 md:w-1/3 w-1/2">
              <h3 className="xl:text-3xl md:text-2xl text-xl font-bold">
                Tools
              </h3>
              <ul className="text-editor-accent-2/70">
                <li>Cursor</li>
                <li>Vite</li>
                <li>Vitest</li>
                <li>Git</li>
                <li>React testing library</li>
                <li>Rspec</li>
              </ul>
            </div>
            <div className="bg-editor-background text-editor-foreground py-4 px-10 rounded-lg border-editor-accent-1 border-2 md:w-1/3 w-1/2">
              <h3 className="xl:text-3xl md:text-2xl text-xl font-bold">
                Play
              </h3>
              <ul className="text-editor-accent-2/70">
                <li>Node.JS</li>
                <li>ExpressJS</li>
                <li>Prisma</li>
                <li>Next.JS</li>
                <li>Figma</li>
                <li>Vercel</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
