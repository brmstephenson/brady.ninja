import 'dotenv/config'

import { prisma } from '../src/db.js'

async function main() {
  await prisma.resumeProfile.deleteMany()

  await prisma.resumeProfile.create({
    data: {
      headline:
        'Lead Software Engineer / Full Stack Software Engineer with 12+ years of experience',
      summary:
        'Full Stack Software Engineer with 12+ years of experience building scalable web applications. Specializes in React, TypeScript, and modern web technologies with hands-on experience designing and delivering software across the full stack. Proven track record modernizing platforms, leading technical initiatives, and shipping customer-facing products using AI-assisted development workflows.',
      resumePdfPath: '/Brady_Stephenson_Engineering_Lead_2026.pdf',
      experiences: {
        create: [
          {
            sortOrder: 0,
            dateRange: 'Apr 2022 - Apr 2026',
            company: 'Design Pickle',
            location: 'Scottsdale, AZ',
            bullets: [],
            tags: [],
            roles: {
              create: [
                {
                  sortOrder: 0,
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
                  sortOrder: 1,
                  title: 'Senior Frontend Software Engineer',
                  bullets: [
                    "Joined as the first frontend engineer, helping build the company's modern web application from the ground up.",
                    'Established reusable application architecture and component patterns that became the foundation for future development.',
                  ],
                  tags: ['React', 'TypeScript', 'Tailwind'],
                },
              ],
            },
          },
          {
            sortOrder: 1,
            dateRange: 'Aug 2019 - Apr 2022',
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
            sortOrder: 2,
            dateRange: 'Sept 2015 - Aug 2019',
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
            sortOrder: 3,
            dateRange: 'Jul 2014 - Sept 2015',
            title: 'Software Engineer',
            company: 'Tata Consultancy Services',
            location: 'Milford, OH',
            bullets: [],
            tags: [],
          },
          {
            sortOrder: 4,
            dateRange: 'Mar 2013 - May 2014',
            title: 'Software Engineer',
            company: 'Ohio University',
            location: 'Athens, OH',
            bullets: [],
            tags: [],
          },
        ],
      },
      educationItems: {
        create: [
          {
            sortOrder: 0,
            degree: "Bachelor's of Science in Computer Science",
            school: 'Ohio University',
            location: 'Athens, OH',
            year: '2014',
          },
        ],
      },
      skillGroups: {
        create: [
          {
            sortOrder: 0,
            category: 'Languages',
            items: ['TypeScript', 'JavaScript', 'SQL', 'Ruby'],
          },
          {
            sortOrder: 1,
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
            sortOrder: 2,
            category: 'Backend',
            items: ['Node.js', 'Express', 'Ruby on Rails', 'REST APIs', 'PostgreSQL'],
          },
          {
            sortOrder: 3,
            category: 'Cloud & DevOps',
            items: ['AWS', 'Docker', 'CircleCI', 'CI/CD', 'Vercel'],
          },
          {
            sortOrder: 4,
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
        ],
      },
    },
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (error) => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
