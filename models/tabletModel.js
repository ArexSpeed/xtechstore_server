import mongoose from 'mongoose'

const tabletSchema = mongoose.Schema(
  {
    series: {
      type: String,
    },
    model: {
      type: String,
    },
    description: {
      type: String,
    },
    img: {
      type: String,
    },
    cpu: {
      type: String,
    },
    ram: {
      type: String,
    },
    storage: {
      type: String,
    },
    camera: {
      type: String,
    },
    size: {
      type: String,
    },
    battery: {
      type: String,
    },
    price: {
      type: String,
    },
  }
)

const Tablet = mongoose.model('Tablet', tabletSchema)

export default Tablet;