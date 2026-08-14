import cors from 'cors'
import express from 'express'
import { createExpressMiddleware } from '@trpc/server/adapters/express'

import { appRouter, getCurrentResume } from './resume.js'
import { createContext } from '../trpc.js'

const allowedOrigins = (
  process.env.WEB_ORIGIN ??
  (process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '')
)
  .split(',')
  .map((origin) => origin.trim())

export const app = express()

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true)
        return
      }

      callback(new Error(`Origin ${origin} is not allowed by CORS`))
    },
  })
)

app.get('/health', (_req, res) => {
  res.json({ ok: true })
})

app.get('/resume/current', async (_req, res, next) => {
  try {
    const resume = await getCurrentResume()

    if (!resume) {
      res.status(404).json({ error: 'Resume content has not been seeded.' })
      return
    }

    res.json(resume)
  } catch (error) {
    next(error)
  }
})

app.use(
  '/trpc',
  createExpressMiddleware({
    router: appRouter,
    createContext,
  })
)
