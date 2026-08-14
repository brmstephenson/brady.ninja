import { Badge } from '@/app/components/ui/badge'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card'
import GithubSvg from '@/app/components/ui/github-svg'
import { ReactNode } from 'react'

export default function Projects() {
  return (
    <div className="h-full bg-editor-background text-editor-foreground overflow-auto mx-auto text-center">
      <div className="flex flex-col items-center mt-8 gap-12">
        <h1 className="xl:text-5xl md:text-4xl text-3xl font-bold">Projects</h1>
        <div className="w-1/2 flex flex-col gap-8 text-left">
          <ProjectCard
            title="Portfolio"
            content="This personal website showcasing myself, experience, projects I've worked, and minesweeper (more games to come)."
            techStackItems={[
              'React',
              'TailwindCSS',
              'ShadCN',
              'Next.js',
              'Vercel',
            ]}
            githubLink="https://github.com/brmstephenson/brady.ninja"
          />
          <ProjectCard
            title="Design Pickle Projects Feature"
            content={
              <div className="flex flex-col gap-4">
                <p>
                  <h5 className="font-bold text-lg pb-2">Problem: </h5>
                  Customers managed related design requests across separate
                  workflows, making larger campaigns harder to organize, track,
                  and keep consistent.
                </p>
                <p>
                  <h5 className="font-bold text-lg pb-2">Solution: </h5>
                  <div className="flex flex-col gap-2">
                    <p>
                      I helped build Projects, a workflow for grouping requests,
                      tasks, assets, brand profiles, and tags under a single
                      initiative.
                    </p>
                    <p>
                      Customers could organize campaign work in one place,
                      create or attach multiple requests, track progress, and
                      keep related creative work aligned. They could make self
                      managed tasks, separate from requests that help them keep
                      organized.
                    </p>
                  </div>
                </p>
              </div>
            }
            techStackItems={[
              'React',
              'TailwindCSS',
              'Remix',
              'ShadCN',
              'Ruby on Rails',
            ]}
          />
          <ProjectCard
            title="Design Pickle White Label Feature"
            content={
              <div className="flex flex-col gap-2">
                <p>
                  <h5 className="font-bold text-lg pb-2">Problem: </h5>
                  Customers need a way for their own clients to submit and view
                  their own designs. Currently customers have to create a
                  request for their own clients, create a share & review link,
                  send the link over to their customer. Finally their client can
                  add requirements, comments, assets, etc to the request.
                  Customers wanted a way to eliminate the manual work on their
                  end.
                </p>
                <p>
                  <h5 className="font-bold text-lg pb-2">Solution: </h5>
                  <p>
                    I helped build a way for customers to add a custom domain,
                    primary color, secondary color, logo, and favicon. Now our
                    customers could share a single link to their clients which
                    hid the Design Pickle branding, allowing their clients to
                    create whatever requests they wanted.
                  </p>
                </p>
              </div>
            }
            techStackItems={[
              'React',
              'TailwindCSS',
              'Remix',
              'Ruby on Rails',
              'AWS',
            ]}
          />
        </div>
      </div>
    </div>
  )
}

interface ProjectCardProps {
  title: string
  content: ReactNode | string
  techStackItems: string[]
  githubLink?: string
}

function ProjectCard({
  title,
  content,
  techStackItems,
  githubLink,
}: ProjectCardProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex gap-2 flex-row items-center">
          {githubLink ? (
            <a
              href={githubLink}
              target="_blank"
              className="flex gap-2 items-center"
            >
              <GithubSvg className="fill-card-foreground size-4" />
              <h4>{title}</h4>
            </a>
          ) : (
            <h4 className="p-1">{title}</h4>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>{content}</CardContent>
      <CardFooter className="flex gap-2">
        {techStackItems.map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </CardFooter>
    </Card>
  )
}
