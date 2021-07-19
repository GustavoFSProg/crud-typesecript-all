import Router, { Request, Response } from 'express'
import userControllers from '../controllers/userController'
import ProductController from '../controllers/productController'

const UserRoutes = Router()

UserRoutes.get('/', userControllers.getAll)
UserRoutes.get('/:id', userControllers.getById)
UserRoutes.post('/register', userControllers.register)
UserRoutes.put('/update/:id', userControllers.update)
UserRoutes.delete('/delete/:id', userControllers.deleteOne)

export default UserRoutes
