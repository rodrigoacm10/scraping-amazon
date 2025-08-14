import 'dotenv/config'
import express from 'express'
import scrapeRoutes from './routes/scrapeRoutes'

const app = express()
const port = process.env.PORT || 3000

app.use('/api', scrapeRoutes)

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})
