import Accessory from '../models/accessoriesModel.js'
import { addPhone } from './phoneControllers.js'

// Get products
const getAccessories = async(req,res) => {
  const accessories = await Accessory.find({})
  res.json(accessories)
}
// Show one accessory
const showAccessory = async(req,res) => {
  const accessory = await Accessory.findById(req.params.id)
  if(accessory){
    res.status(201).json(accessory)
  }
  else{
    res.status(400)
    throw new Error('Wrong id')
  }
  
}

// Add sccessory
const addAccessory = async (req, res) => {
  const {series,name, description, price, img} = req.body

  const accessory = await Accessory.create({series,name, description, price, img})

  if(accessory){
    res.status(201).json({
      series: accessory.series,
      name: accessory.name,
      description: accessory.description,
      price: accessory.price,
      img: accessory.img,
    })
  }
  else{
    res.status(400)
    throw new Error('Invalid team data')
  }
}

// edit accessory
const editAccessory = async (req,res) => {
  const {series,name, description, price, img} = req.body
  const accessory = await Accessory.findById(req.params.id)

  if(accessory){
    accessory.series = series
    accessory.name = name
      accessory.description = description
      accessory.price = price
      accessory.img = img

    const updatedAccessory = await accessory.save()
    res.json(updatedAccessory)
  }
  else {
    res.status(404)
    throw new Error('Phonenot found')
  }
}

const deleteAccessory = async (req, res) => {
  const accessory = await Accessory.findById(req.params.id)


  if (accessory) {
    await accessory.remove()
    res.json({ message: 'Product removed' })
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
}

export {getAccessories, showAccessory, addAccessory, editAccessory, deleteAccessory}