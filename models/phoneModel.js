import mongoose from 'mongoose'

const phoneSchema = mongoose.Schema(
  {
    series: {
      type: String,
      required: true
    },
    model: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    img: {
      type: String,
    },
    cpu: {
      type: String,
      required: true
    },
    ram: {
      type: String,
      required: true
    },
    storage: {
      type: String,
      required: true
    },
    camera: {
      type: String,
      required: true
    },
    size: {
      type: String,
      required: true
    },
    battery: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
  }
)

const Phone = mongoose.model('Phone', phoneSchema)

export default Phone;