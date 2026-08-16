import cors from 'cors'
import express from 'express'
import { createExpressMiddleware } from '@trpc/server/adapters/express'

import { appRouter } from './api/router.js'
import { createContext } from './trpc.js'

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

app.get(['/health', '/api/health'], (_req, res) => {
  res.json({ ok: true })
})

app.use(
  ['/trpc', '/api/trpc'],
  createExpressMiddleware({
    router: appRouter,
    createContext,
  })
)
