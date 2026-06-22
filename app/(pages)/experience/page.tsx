import { cn } from '@/app/lib/cn'
import Image from 'next/image'
import { DownloadIcon } from 'lucide-react'

type ExperienceRole = {
  title: string
  bullets: string[]
  tags?: string[]
}

type ExperienceEntry = {
  dateRange: string
  company: string
  location: string
  title?: string
  bullets?: string[]
  tags?: string[]
  roles?: ExperienceRole[]
}

const experiences: ExperienceEntry[] = [
  {
    dateRange: '2022 — 2026',
    company: 'Design Pickle',
    location: 'Scottsdale, AZ',
    roles: [
      {
        title: 'Engineering Lead & Manager',
        bullets: [
          'Led frontend modernization by migrating to Remix + Vite, improving build performance by 25% and local development speed by 90%.',
          'Directed migration from Heroku to AWS, improving platform reliability while reducing annual cloud spend by over $30k.',
          'Partnered with Product and UX teams to deliver six major platform initiatives and customer-facing enhancements.',
          'Collaborated on GenAI-powered product features, helping define technical implementation and customer experience requirements.',
          'Introduced AI-assisted engineering workflows via Cursor, increasing development velocity while maintaining code quality.',
          'Mentored a team of 3 engineers through code reviews, technical guidance, and day-to-day coaching while remaining hands-on in React and Rails applications.',
        ],
        tags: [
          'React',
          'Remix',
          'Vite',
          'TypeScript',
          'Tailwind',
          'Ruby on Rails',
          'AWS',
          'Cursor',
        ],
      },
      {
        title: 'Lead Frontend Software Engineer',
        bullets: [
          'Served as technical lead for core customer workflows and platform initiatives used by more than 2,200 monthly active customers.',
          'Led planning and execution of complex technical initiatives, partnering with stakeholders to translate requirements into deliverable milestones.',
          'Owned frontend hiring, onboarding, and mentoring efforts during a period of team growth.',
        ],
        tags: ['React', 'Remix', 'TypeScript', 'Tailwind', 'Ruby on Rails'],
      },
      {
        title: 'Senior Frontend Software Engineer',
        bullets: [
          'Hired as founding frontend engineer to architect and deliver a greenfield React application.',
        ],
        tags: ['React', 'TypeScript', 'Tailwind'],
      },
    ],
  },
  {
    dateRange: '2019 — 2022',
    title: 'Software Engineer',
    company: 'Beam Dental',
    location: 'Columbus, OH',
    bullets: [
      'Developed full-stack applications using React, Styled Components, HTML5, CSS3, jQuery, and Ruby on Rails.',
      'Designed and maintained Rails APIs, server-rendered applications, and backend business logic supporting core insurance workflows.',
      'Worked with relational databases and application data models to support business-critical systems.',
      'Co-organized Front-End Working Group to share trends, best practices, and technical demonstrations.',
    ],
    tags: ['React', 'Styled Components', 'Ruby on Rails', 'jQuery'],
  },
  {
    dateRange: '2015 — 2019',
    title: 'Senior Software Engineer/Team Lead',
    company: 'Insight Digital Innovations/Cardinal Solutions Group',
    location: 'Columbus, OH',
    bullets: [
      'Led and supported a development team, including mentoring engineers and guiding delivery expectations.',
      'Developed full-stack and front-end applications using JavaScript, AngularJS, Angular 2+, HTML, and CSS.',
      'Taught Angular at a weekend workshop for the Columbus Web Groups meetup.',
    ],
    tags: ['Angular', 'AngularJS', 'JavaScript'],
  },
  {
    dateRange: '2014 — 2015',
    title: 'Software Engineer',
    company: 'Tata Consultancy Services',
    location: 'Milford, OH',
    bullets: [],
    tags: [],
  },
  {
    dateRange: '2013 — 2014',
    title: 'Software Engineer',
    company: 'Ohio University',
    location: 'Athens, OH',
    bullets: [],
    tags: [],
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
      'React Query',
      'HTML5',
      'CSS3',
    ],
  },
  {
    category: 'Backend',
    items: ['Ruby on Rails', 'REST APIs', 'SQL', 'PostgreSQL'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Cursor', 'Claude Code', 'ChatGPT', 'Opencode', 'Figma MCP', 'Jira MCP'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS', 'CircleCI', 'Git', 'CI/CD', 'Docker', 'Vercel'],
  },
  {
    category: 'Familiarity',
    items: ['Next.js', 'Prisma', 'Angular', 'GraphQL'],
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
                href="/Brady_Stephenson_Engineering_Lead_Manager_2026.pdf"
                target="_blank"
                className="hover:cursor-pointer border-2 border-editor-accent-1 rounded-full p-2 hover:bg-editor-accent-1 transition-colors ease-linear"
              >
                <DownloadIcon className="text-editor-accent-2 size-4" />
              </a>
            </div>
            <p className="text-editor-accent-2 text-base md:text-lg max-w-2xl">
              Full Stack Engineer with 12+ years of experience building web
              applications. Expert in React, TypeScript, and Ruby on Rails with
              experience leading technical initiatives, mentoring engineers, and
              delivering customer-facing products. Experienced leveraging
              AI-assisted development tools to accelerate delivery while
              maintaining code quality.
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
  roles,
}: ExperienceEntry) {
  return (
    <li className="group relative grid sm:grid-cols-[150px_1fr] gap-1 sm:gap-6 rounded-lg p-4 transition-colors hover:bg-editor-accent-1/5">
      <span className="text-sm font-mono text-editor-accent-1 pt-1 shrink-0 min-w-64">
        {dateRange}
      </span>
      <div className="flex flex-col gap-2">
        <div>
          {title && (
            <h3 className="font-semibold text-lg leading-snug text-editor-foreground group-hover:text-editor-accent-1 transition-colors">
              {title}{' '}
              <span className="text-editor-accent-2">&middot; {company}</span>
            </h3>
          )}
          {!title && (
            <h3 className="font-semibold text-lg leading-snug text-editor-foreground group-hover:text-editor-accent-1 transition-colors">
              {company}
            </h3>
          )}
          <p className="text-sm text-editor-accent-2/70">{location}</p>
        </div>

        {roles?.map((role) => (
          <div key={role.title} className="flex flex-col gap-2 mt-2">
            <h4 className="font-medium text-editor-foreground">{role.title}</h4>
            {role.bullets.length > 0 && (
              <ul className="flex flex-col gap-1 text-sm text-editor-foreground/80">
                {role.bullets.map((bullet, i) => (
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
            )}
            {role.tags && role.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-1">
                {role.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            )}
          </div>
        ))}

        {bullets && bullets.length > 0 && (
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
        )}

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-1">
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        )}
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
