import { model, Schema } from 'mongoose'

const schema = new Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
})

export default model('UserModel', schema)
