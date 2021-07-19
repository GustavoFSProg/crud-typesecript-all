import { model, Schema } from 'mongoose'

const schema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },

  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
  image: {
    type: String,
  },
})

export default model('ProductModel', schema)
