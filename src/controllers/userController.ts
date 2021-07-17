import { Request, Response } from 'express'
import userModel from '../models/UserModel'
import md5 from 'md5'

async function getAll(req: Request, res: Response) {
  try {
    const data = await userModel.find({}, 'name email')

    return res.status(201).send(data)
  } catch (error) {
    return res.status(400).send(error)
  }
}

async function getById(req: Request, res: Response) {
  try {
    const data = await userModel.findById(req.params.id)

    return res.status(201).send(data)
  } catch (error) {
    return res.status(400).send(error)
  }
}

async function update(req: Request, res: Response) {
  try {
    await userModel.findByIdAndUpdate(req.params.id, {
      $set: {
        name: req.body.name,
        email: req.body.email,
        password: md5(req.body.password, process.env.SECRET as string & { asBytes: true }),
      },
    })

    return res.status(201).send({ msg: 'Usuario Editado com sucesso!!' })
  } catch (error) {
    return res.status(400).send(error)
  }
}

async function register(req: Request, res: Response) {
  try {
    await userModel.create({
      name: req.body.name,
      email: req.body.email,
      password: md5(req.body.password, process.env.SECRET as string & { asBytes: true }),
    })

    return res.status(201).send({ msg: 'Usuario Cadastrado com sucesso!' })
  } catch (error) {
    return res.status(400).send(error)
  }
}

async function deleteOne(req: Request, res: Response) {
  try {
    await userModel.findByIdAndRemove(req.params.id)

    return res.status(201).send({ msg: 'Usuário deletado com sucesso!' })
  } catch (error) {
    return res.status(400).send({ error })
  }
}

export default { getAll, register, deleteOne, getById, update }
