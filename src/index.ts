import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import routes from '../src/Routes/routes'
import mongoose from 'mongoose'

dotenv.config()

const { PORT } = process.env

mongoose.connect(String(process.env.DATABASE_KEY), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
})

const api = express()

api.use(express.json())
api.use(cors())
api.use(routes)

api.listen(PORT, () => {
  console.log(`Api Running on Port: ${PORT}`)
})

export default api
