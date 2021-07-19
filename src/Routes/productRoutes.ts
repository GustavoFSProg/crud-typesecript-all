import Router from 'express'
import ProductController from '../controllers/productController'
import uploadConfig from '../config/uploadConfig'
import multer from 'multer'

const upload = multer(uploadConfig)

const productsRoutes = Router()

productsRoutes.post('/product-reg', upload.single('image'), ProductController.register)
productsRoutes.get('/product-getall', ProductController.getAll)
productsRoutes.delete('/delete-product/:id', ProductController.deleteUm)

export default productsRoutes
