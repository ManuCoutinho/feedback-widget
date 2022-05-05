import express from 'express'
import cors from 'cors'
import { routes } from './routes'

const app = express()

app.use(cors()) //!alterar em produção
app.use(express.json())
app.use(routes)

app.listen(3333, () => {
  console.log('Server running on port 3333 🚀')
})
