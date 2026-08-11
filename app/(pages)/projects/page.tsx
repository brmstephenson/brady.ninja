import { Badge } from '@/app/components/ui/badge'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card'
import GithubSvg from '@/app/components/ui/github-svg'
import { Code } from 'lucide-react'

export default function Projects() {
  return (
    <div className="h-full bg-editor-background text-editor-foreground overflow-auto mx-auto text-center">
      <div className="flex flex-col items-center mt-8 gap-12">
        <h1 className="xl:text-5xl md:text-4xl text-3xl font-bold">Projects</h1>
        <div className="w-1/2 flex flex-col gap-8 text-left">
          <ProjectCard
            title="Portfolio"
            content="This personal website highlighting my experience with some fun games."
            techStackItems={['React', 'TailwindCSS', 'Ruby on Rails']}
            githubLink="https://github.com/brmstephenson/brady.ninja"
          />
          <ProjectCard
            title="Media Organizer"
            content="A personal project to filter, move, and organize old hard drive data to a new hard drive"
            techStackItems={['Python']}
          />
          <ProjectCard
            title="Design Pickle Projects Feature"
            content="Allows users to group their design requests into marking campaigns(projects). Users can add multiple requests to a single project"
            techStackItems={['React', 'TailwindCSS', 'Ruby on Rails']}
          />
        </div>
      </div>
    </div>
  )
}

interface ProjectCardProps {
  title: string
  content: string
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
              <h4>{title}</h4>
              <div className="hover:cursor-pointer border-2 border-editor-accent-1 rounded-full p-1 hover:bg-editor-accent-1 transition-colors ease-linear">
                <GithubSvg className="fill-editor-accent-2 size-4" />
              </div>
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
