import Router, { Request, Response } from 'express'
import productsRoutes from './productRoutes'
import UserRoutes from './UserRoutes'

const routes = [productsRoutes, UserRoutes]

export default routes
