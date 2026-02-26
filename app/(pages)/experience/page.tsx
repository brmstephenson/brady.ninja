import { cn } from '@/app/lib/cn'
import Image from 'next/image'
import { DownloadIcon } from 'lucide-react'

const experiences = [
  {
    dateRange: '2025 — Present',
    title: 'Engineering Manager',
    company: 'Design Pickle',
    location: 'Scottsdale, AZ',
    bullets: [
      'Manage and mentor a team of 3 frontend engineers, leading sprint planning, architecture, and execution across 6 major platform initiatives.',
      'Directed infrastructure migration from Heroku to AWS, reducing annual cloud spend by $30k+.',
      'Led frontend modernization and rebrand by migrating legacy Rails/React views to Remix + Vite, improving build performance by 25% and local development speed by 90%.',
      'Introduced standardized AI-assisted engineering workflows via Cursor, improving iteration speed while maintaining code quality and consistency.',
      'Remained hands-on in production code while leading technical direction and system design.',
    ],
    tags: [
      'React',
      'Remix',
      'Vite',
      'TypeScript',
      'Tailwind',
      'Ruby on Rails',
      'AWS',
      'Cursor AI',
    ],
  },
  {
    dateRange: '2024',
    title: 'Lead Frontend Software Engineer',
    company: 'Design Pickle',
    location: 'Scottsdale, AZ',
    bullets: [
      'Owned frontend hiring and onboarding, directly shaping team composition, technical standards, and long-term platform direction.',
      'Served as frontend technical lead across major product initiatives spanning core workflows, platform refactors, and feature launches.',
      'Partnered closely with product and design leadership to deliver roadmap features used by 2,200 monthly active customers.',
    ],
    tags: ['React', 'Remix', 'TypeScript', 'Tailwind', 'Ruby on Rails'],
  },
  {
    dateRange: '2022 — 2023',
    title: 'Senior Frontend Software Engineer',
    company: 'Design Pickle',
    location: 'Scottsdale, AZ',
    bullets: [
      'First frontend engineer hired to architect and deliver a new React application.',
      'Designed and implemented the initial frontend architecture, component system, and tooling.',
    ],
    tags: ['React', 'TypeScript', 'Tailwind', 'Storybook'],
  },
  {
    dateRange: '2019 — 2022',
    title: 'Software Engineer',
    company: 'Beam Dental',
    location: 'Columbus, OH',
    bullets: [
      'Developed front-end views using ReactJS, Styled Components, HTML5, CSS3, and jQuery.',
      'Developed backend applications using Rails APIs and views.',
      'Built AWS Lambda functions for file parsing.',
      'Led team efforts to deliver projects under aggressive timelines.',
      'Co-organized Front-End Working Group to share trends, best practices, and demos.',
      'Organized a client performance working group to identify issues and define follow-up work.',
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
      'Led and supported a development team, including career growth and delivery expectations.',
      'Developed front-end applications using HTML5, CSS3, JavaScript, AngularJS, Angular 2+, jQuery, and Bootstrap at client sites.',
      'Presented technical and non-technical topics at team meetings and internal groups.',
      'Taught Angular at a weekend workshop for the Columbus Web Groups meetup.',
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
      'Built front-end features using HTML5, CSS3, JavaScript, AngularJS, jQuery, and Bootstrap.',
    ],
    tags: ['AngularJS', 'JavaScript', 'IBM MobileFirst', 'Bootstrap'],
  },
  {
    dateRange: '2013 — 2014',
    title: 'Software Engineer',
    company: 'Ohio University',
    location: 'Athens, OH',
    bullets: [
      'Developed front-end features using HTML5, CSS3, JavaScript, AngularJS, BackboneJS, and jQuery.',
      'Created and maintained Oracle database queries.',
    ],
    tags: ['AngularJS', 'BackboneJS', 'Oracle', 'JavaScript', 'jQuery'],
  },
]

const education = {
  degree: "Bachelor's of Science in Computer Science",
  school: 'Ohio University',
  location: 'Athens, OH',
  year: '2014',
}

const skills = [
  {
    category: 'Frontend',
    items: [
      'React',
      'Remix',
      'TypeScript',
      'JavaScript',
      'Tailwind',
      'ShadCN',
      'HTML5',
      'CSS3',
    ],
  },
  {
    category: 'Backend',
    items: ['Ruby on Rails', 'SQL', 'REST APIs', 'PostgreSQL'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Cursor AI IDE', 'Claude Code', 'ChatGPT', 'Git'],
  },
  {
    category: 'Familiarity',
    items: [
      'Next.js',
      'Prisma',
      'ExpressJS',
      'Angular',
      'Docker',
      'AWS',
      'CircleCI',
      'Vercel',
    ],
  },
]

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
            <div className="flex items-center gap-2 justify-between mb-3">
              <h1 className="text-3xl md:text-4xl font-bold">Experience</h1>
              <a
                href="/Resume_Brady_Stephenson_2026.pdf"
                target="_blank"
                className="hover:cursor-pointer border-2 border-editor-accent-1 rounded-full p-2 hover:bg-editor-accent-1 transition-colors ease-linear"
              >
                <DownloadIcon className="text-editor-accent-2 size-4" />
              </a>
            </div>
            <p className="text-editor-accent-2 text-base md:text-lg max-w-2xl">
              Software Engineer Lead / Manager with 12+ years of experience.
              Frontend-leaning full stack on React web applications. Seeking
              senior or lead roles where I can own complex UI systems and mentor
              engineers.
            </p>
          </div>
        </div>

        <ol className="flex flex-col gap-2">
          {experiences.map((exp) => (
            <ExperienceCard key={`${exp.company}-${exp.dateRange}`} {...exp} />
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

        <section className="mt-16 border-t border-editor-accent-1/20 pt-10">
          <h2 className="text-2xl font-bold mb-6">Skills</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {skills.map((group) => (
              <div key={group.category}>
                <h3 className="text-sm font-mono text-editor-accent-1 mb-2">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </div>
              </div>
            ))}
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
