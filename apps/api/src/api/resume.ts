import { z } from 'zod'

import { prisma } from '../db.js'
import { publicProcedure, router } from '../trpc.js'

export const resumeRouter = router({
  getCurrent: publicProcedure.query(async () => {
    return getCurrentResume()
  }),
  getChatContext: publicProcedure.query(async () => {
    const resume = await getCurrentResume()

    if (!resume) {
      return null
    }

    return buildChatContext(resume)
  }),
  getExperience: publicProcedure
    .input(z.object({ company: z.string().optional() }).optional())
    .query(async ({ input }) => {
      return prisma.resumeExperience.findMany({
        where: input?.company
          ? {
              company: {
                contains: input.company,
                mode: 'insensitive',
              },
            }
          : undefined,
        orderBy: { sortOrder: 'asc' },
        include: {
          roles: {
            orderBy: { sortOrder: 'asc' },
          },
        },
      })
    }),
})

export const appRouter = router({
  resume: resumeRouter,
})

export type AppRouter = typeof appRouter

export function getCurrentResume() {
  return prisma.resumeProfile.findFirst({
    orderBy: { updatedAt: 'desc' },
    include: {
      experiences: {
        orderBy: { sortOrder: 'asc' },
        include: {
          roles: {
            orderBy: { sortOrder: 'asc' },
          },
        },
      },
      educationItems: {
        orderBy: { sortOrder: 'asc' },
      },
      skillGroups: {
        orderBy: { sortOrder: 'asc' },
      },
    },
  })
}

type ResumeForChatContext = NonNullable<
  Awaited<ReturnType<typeof prisma.resumeProfile.findFirst>>
> & {
  experiences: Array<{
    dateRange: string
    company: string
    location: string
    title: string | null
    bullets: string[]
    tags: string[]
    roles: Array<{
      title: string
      bullets: string[]
      tags: string[]
    }>
  }>
  educationItems: Array<{
    degree: string
    school: string
    location: string
    year: string
  }>
  skillGroups: Array<{
    category: string
    items: string[]
  }>
}

function buildChatContext(resume: ResumeForChatContext) {
  const experienceLines = resume.experiences
    .map((experience, index) => {
      const title = experience.title ? `${experience.title} at ` : ''
      const roleLines = experience.roles
        .map((role) => {
          const bullets = role.bullets
            .map((bullet) => `     - ${bullet}`)
            .join('\n')
          return `   - ${role.title}\n${bullets}`
        })
        .join('\n')
      const bullets = experience.bullets
        .map((bullet) => `   - ${bullet}`)
        .join('\n')
      const tags = [
        ...experience.tags,
        ...experience.roles.flatMap((role) => role.tags),
      ]

      return [
        `${index + 1}. ${title}${experience.company}, ${experience.location} (${experience.dateRange})`,
        roleLines,
        bullets,
        tags.length > 0
          ? `   - Tags: ${Array.from(new Set(tags)).join(', ')}`
          : '',
      ]
        .filter(Boolean)
        .join('\n')
    })
    .join('\n\n')

  const educationLines = resume.educationItems
    .map(
      (item) =>
        `- ${item.degree}, ${item.school}, ${item.location} (${item.year})`
    )
    .join('\n')

  const skillLines = resume.skillGroups
    .map((group) => `- ${group.category}: ${group.items.join(', ')}`)
    .join('\n')

  return [
    `## About Brady Stephenson`,
    `- ${resume.headline}`,
    `- ${resume.summary}`,
    '',
    `## Work Experience`,
    experienceLines,
    '',
    `## Education`,
    educationLines,
    '',
    `## Skills`,
    skillLines,
  ].join('\n')
}
