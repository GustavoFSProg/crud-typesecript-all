import Router, { Request, Response } from 'express'
import userControllers from './controllers/userController'

const routes = Router()

routes.get('/', userControllers.getAll)
routes.get('/:id', userControllers.getById)
routes.post('/register', userControllers.register)
routes.put('/update/:id', userControllers.update)
routes.delete('/delete/:id', userControllers.deleteOne)

export default routes
