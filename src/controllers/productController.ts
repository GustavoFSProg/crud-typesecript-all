import { Request, Response } from 'express'

import ProductModel from '../models/ProductModel'
import fs from 'fs'
import md5 from 'md5'
const { promisify } = require('util')
const unlink = promisify(fs.unlink)

async function getAll(req: Request, res: Response) {
  try {
    const data = await ProductModel.find()

    return res.status(201).send(data)
  } catch (error) {
    return res.status(400).send(error)
  }
}

async function getById(req: Request, res: Response) {
  try {
    const data = await ProductModel.findById(req.params.id)

    return res.status(201).send(data)
  } catch (error) {
    return res.status(400).send(error)
  }
}

async function update(req: Request, res: Response) {
  try {
    await ProductModel.findByIdAndUpdate(req.params.id, {
      $set: {
        name: req.body.name,
        email: req.body.email,
      },
    })

    return res.status(201).send({ msg: 'Usuario Editado com sucesso!!' })
  } catch (error) {
    return res.status(400).send(error)
  }
}

async function register(req: Request, res: Response) {
  try {
    const { filename: image }: any = req.file

    const [name] = image.split('.')
    const filename = `${name}.jpg`

    await ProductModel.create({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      image: filename,
    })

    return res.status(201).send({ message: 'Registered with Success!!!' })
  } catch (error) {
    return res.status(400).send({ msg: 'Cagada', error })
  }
}

async function deleteUm(req: Request, res: Response) {
  try {
    const { id } = req.params

    const imagem: any = await ProductModel.findById(id)

    console.log(imagem.image)

    console.log('entrou')
    await ProductModel.findByIdAndDelete(id)

    fs.unlink(`uploads/${imagem.image}`, (err) => {
      if (err) throw err
      console.log('uploads/file.txt was deleted')
    })
    await ProductModel.findByIdAndRemove(req.params.id)

    return res.status(200).send({ message: 'Tudo Apagado!!' })
  } catch (error) {
    return res.status(400).send(error)
  }
}

async function deleteOne(req: Request, res: Response) {
  try {
    await ProductModel.findByIdAndRemove(req.params.id)

    return res.status(201).send({ msg: 'Usuário deletado com sucesso!' })
  } catch (error) {
    return res.status(400).send({ error })
  }
}

export default { getAll, deleteUm, register, deleteOne, getById, update }
