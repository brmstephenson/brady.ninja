import { cn } from '@/app/lib/cn'
import Image from 'next/image'
import PdfSvg from '@/app/components/ui/pdf-svg'
import { DownloadIcon } from 'lucide-react'

const experiences = [
  {
    dateRange: '2022 — 2026',
    title:
      'Engineering Manager / Lead Frontend Engineer / Senior Frontend Engineer',
    company: 'Design Pickle',
    location: 'Scottsdale, AZ',
    bullets: [
      'Managed and mentored a team of 3 frontend engineers while remaining hands-on in production code.',
      'Directed transition of infrastructure from Heroku to AWS, modernizing deployment pipelines and saving costs.',
      'Guided frontend migration from Rails to Remix, optimizing developer workflows.',
      'Led frontend UI/UX modernization using React and Tailwind.',
      'Established a Storybook UI library for cross-team design reference.',
      'Promoted from Senior Frontend Engineer → Lead Frontend Engineer → Engineering Manager.',
    ],
    tags: [
      'React',
      'Remix',
      'TypeScript',
      'Tailwind',
      'Ruby on Rails',
      'AWS',
      'Docker',
      'Storybook',
    ],
  },
  {
    dateRange: '2019 — 2022',
    title: 'Software Engineer',
    company: 'Beam Dental',
    location: 'Columbus, OH',
    bullets: [
      'Developed front-end applications using React and Styled Components.',
      'Developed backend services using Rails APIs.',
      'Built AWS Lambda functions for file parsing.',
      'Led team efforts to deliver critical projects on schedule.',
      'Co-organized Front-End Working Group to share best practices.',
      'Led client performance working group to identify and resolve optimizations.',
    ],
    tags: [
      'React',
      'Styled Components',
      'Ruby on Rails',
      'AWS Lambda',
      'jQuery',
    ],
  },
  {
    dateRange: '2015 — 2019',
    title: 'Senior Software Engineer / Team Lead',
    company: 'Insight Digital Innovations / Cardinal Solutions Group',
    location: 'Columbus, OH',
    bullets: [
      'Led development team, focusing on delivery and career growth.',
      'Developed client front-end applications using Angular and Bootstrap.',
      'Presented technical topics at internal team meetings.',
      'Taught Angular workshop for Columbus Web Groups meetup.',
    ],
    tags: ['Angular', 'AngularJS', 'JavaScript', 'Bootstrap', 'jQuery'],
  },
  {
    dateRange: '2014 — 2015',
    title: 'Software Engineer',
    company: 'Tata Consultancy Services',
    location: 'Milford, OH',
    bullets: [
      'Developed IBM MobileFirst hybrid mobile applications.',
      'Built front-end features using AngularJS and Bootstrap.',
      'Integrated iBeacon technology for location-based messaging.',
    ],
    tags: ['AngularJS', 'JavaScript', 'IBM MobileFirst', 'iBeacon'],
  },
  {
    dateRange: '2013 — 2014',
    title: 'Software Engineer',
    company: 'Ohio University',
    location: 'Athens, OH',
    bullets: [
      'Developed front-end features using AngularJS and BackboneJS.',
      'Developed, debugged, and tested Grails web applications.',
      'Created and maintained Oracle database queries.',
    ],
    tags: ['AngularJS', 'BackboneJS', 'Grails', 'Oracle', 'JavaScript'],
  },
]

const education = {
  degree: "Bachelor's of Science in Computer Science",
  school: 'Ohio University',
  location: 'Athens, OH',
  year: '2014',
}

export default function Experience() {
  return (
    <div className="h-full bg-editor-background text-editor-foreground overflow-auto mx-auto">
      <div className="max-w-4xl mx-auto px-6 py-12 md:px-12">
        <div className="mb-12 flex gap-4 items-center">
          <Image
            src="/brady.jpeg"
            alt="Brady Stephenson"
            width={100}
            height={100}
            className="rounded-full w-24 h-24"
          />
          <div>
            <div className="flex items-center gap-2 justify-between">
              <h1 className="text-3xl md:text-4xl font-bold mb-3">
                Experience
              </h1>
              <a
                href="/Brady Stephenson - Design Pickle.pdf"
                target="_blank"
                className="hover:cursor-pointer border-2 border-editor-accent-1 rounded-full p-2 hover:bg-editor-accent-1 transition-colors ease-linear"
              >
                <DownloadIcon className="text-editor-accent-2 size-4" />
              </a>
            </div>
            <p className="text-editor-accent-2 text-base md:text-lg max-w-2xl">
              Senior / Lead Software Engineer with 12+ years of experience
              building scalable, React-based web applications. Frontend-leaning
              with full-stack depth and a strong focus on frontend architecture,
              design systems, and performance.
            </p>
          </div>
        </div>

        <ol className="flex flex-col gap-2">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.company} {...exp} />
          ))}
        </ol>

        <section className="mt-16 border-t border-editor-accent-1/20 pt-10">
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
            <span className="text-sm font-mono text-editor-accent-1 shrink-0">
              {education.year}
            </span>
            <div>
              <p className="font-semibold text-editor-foreground">
                {education.degree}
              </p>
              <p className="text-sm text-editor-accent-2">
                {education.school} &middot; {education.location}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

function ExperienceCard({
  dateRange,
  title,
  company,
  location,
  bullets,
  tags,
}: {
  dateRange: string
  title: string
  company: string
  location: string
  bullets: string[]
  tags: string[]
}) {
  return (
    <li className="group relative grid sm:grid-cols-[150px_1fr] gap-1 sm:gap-6 rounded-lg p-4 transition-colors hover:bg-editor-accent-1/5">
      <span className="text-sm font-mono text-editor-accent-1 pt-1 shrink-0">
        {dateRange}
      </span>
      <div className="flex flex-col gap-2">
        <div>
          <h3 className="font-semibold text-lg leading-snug text-editor-foreground group-hover:text-editor-accent-1 transition-colors">
            {title}{' '}
            <span className="text-editor-accent-2">&middot; {company}</span>
          </h3>
          <p className="text-sm text-editor-accent-2/70">{location}</p>
        </div>
        <ul className="flex flex-col gap-1 text-sm text-editor-foreground/80">
          {bullets.map((bullet, i) => (
            <li key={i} className="flex gap-2">
              <span
                className="text-editor-accent-1 select-none shrink-0"
                aria-hidden
              >
                &rsaquo;
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 mt-1">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </li>
  )
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className={cn(
        'inline-block rounded-full px-3 py-0.5 text-xs font-medium',
        'bg-editor-accent-1/10 text-editor-accent-1'
      )}
    >
      {children}
    </span>
  )
}
