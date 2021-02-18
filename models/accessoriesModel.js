import mongoose from 'mongoose'

const accessorySchema = mongoose.Schema(
  {
    series: {
      type: String
    },
    name: {
      type: String
    },
    description: {
      type: String
    },
    price: {
      type: String
    },
    img: {
      type: String
    }
  }
)

const Accessory = mongoose.model('Accessory', accessorySchema)

export default Accessory;