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
    dateRange: 'Apr 2022 — Apr 2026',
    company: 'Design Pickle',
    location: 'Scottsdale, AZ',
    roles: [
      {
        title: 'Lead Software Engineer',
        bullets: [
          'Led modernization of a large-scale web application by migrating to Remix + Vite, improving build performance by 25% and reducing local startup time by 90%.',
          'Supported the migration from Heroku to AWS, improving platform reliability while reducing annual infrastructure costs by more than $30K.',
          'Served as technical lead for major platform initiatives, partnering with Product and UX to deliver features used by 2,200+ monthly active customers.',
          'Collaborated on the design and implementation of GenAI-powered features while introducing AI-assisted development workflows that improved engineering velocity.',
          'Drove application architecture, code quality, and engineering best practices while mentoring engineers through code reviews and technical design discussions.',
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
        title: 'Senior Frontend Software Engineer',
        bullets: [
          "Joined as the first frontend engineer, helping build the company's modern web application from the ground up.",
          'Established reusable application architecture and component patterns that became the foundation for future development.',
        ],
        tags: ['React', 'TypeScript', 'Tailwind'],
      },
    ],
  },
  {
    dateRange: 'Aug 2019 — Apr 2022',
    title: 'Software Engineer',
    company: 'Beam Dental',
    location: 'Columbus, OH',
    bullets: [
      'Developed and maintained full-stack web applications, REST APIs, and backend services using React and Ruby on Rails.',
      'Built REST APIs and backend services supporting core insurance workflows.',
      'Designed and maintained relational database models for business-critical systems.',
      'Co-organized the Front-End Working Group, sharing frontend best practices and emerging technologies.',
    ],
    tags: ['React', 'Styled Components', 'Ruby on Rails', 'jQuery'],
  },
  {
    dateRange: 'Sept 2015 — Aug 2019',
    title: 'Senior Software Engineer',
    company: 'Insight Digital Innovations/Cardinal Solutions Group',
    location: 'Columbus, OH',
    bullets: [
      'Designed and delivered full-stack web applications using Angular, JavaScript, HTML, and CSS.',
      'Led technical delivery across multiple client engagements while mentoring junior engineers.',
      'Presented Angular workshops for the Columbus Web Group community.',
    ],
    tags: ['Angular', 'AngularJS', 'JavaScript'],
  },
  {
    dateRange: 'Jul 2014 — Sept 2015',
    title: 'Software Engineer',
    company: 'Tata Consultancy Services',
    location: 'Milford, OH',
    bullets: [],
    tags: [],
  },
  {
    dateRange: 'Mar 2013 — May 2014',
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
    category: 'Languages',
    items: ['TypeScript', 'JavaScript', 'SQL', 'Ruby'],
  },
  {
    category: 'Frontend',
    items: [
      'React',
      'Remix',
      'Next.js',
      'Tailwind',
      'TanStack Query/Table',
      'HTML5',
      'CSS3',
      'ShadCN/UI',
    ],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'Ruby on Rails', 'REST APIs', 'PostgreSQL'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS', 'Docker', 'CircleCI', 'CI/CD', 'Vercel'],
  },
  {
    category: 'Tools',
    items: [
      'Cursor',
      'Claude Code',
      'ChatGPT',
      'Git',
      'Figma',
      'Jira',
      'Confluence',
      'Datadog',
      'PagerDuty',
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
                href="/Brady_Stephenson_Engineering_Lead_2026.pdf"
                target="_blank"
                className="hover:cursor-pointer border-2 border-editor-accent-1 rounded-full p-2 hover:bg-editor-accent-1 transition-colors ease-linear"
              >
                <DownloadIcon className="text-editor-accent-2 size-4" />
              </a>
            </div>
            <p className="text-editor-accent-2 text-base md:text-lg max-w-2xl">
              Full Stack Software Engineer with 12+ years of experience
              building scalable web applications. Specializes in React,
              TypeScript, and modern web technologies with hands-on experience
              designing and delivering software across the full stack. Proven
              track record modernizing platforms, leading technical
              initiatives, and shipping customer-facing products using
              AI-assisted development workflows.
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
