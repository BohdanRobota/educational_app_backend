import express from 'express'
import routes from './routes'

const app = express()

// common middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

// map routers
routes.map(([name, router]) => {
  app.use(name, router)
})

export default app
