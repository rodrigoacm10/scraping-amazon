import 'dotenv/config'
import express from 'express'
import scrapeRoutes from './routes/scrapeRoutes'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 3000

app.use(cors({ origin: process.env.FRONTEND_ORIGIN }))

app.use('/api', scrapeRoutes)

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})
