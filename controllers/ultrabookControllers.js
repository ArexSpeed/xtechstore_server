import Ultrabook from '../models/ultrabookModel.js'

// Get products
const getUltrabooks = async(req,res) => {
  const ultrabooks = await Ultrabook.find({})
  res.json(ultrabooks)
}
// Show one ultrabook
const showUltrabook = async(req,res) => {
  const ultrabook = await Ultrabook.findById(req.params.id)
  if(ultrabook){
    res.status(201).json(ultrabook)
  }
  else{
    res.status(400)
    throw new Error('Wrong id')
  }
  
}

//Add ultrabook
const addUltrabook = async(req,res) => {
  const {series, model, description, img, cpu,ram, storage, camera, size, battery, price} = req.body;

  const ultrabookExists = await Ultrabook.findOne({model})
  if(ultrabookExists){
    throw new Error('ultrabook is already exists')
  }

  const ultrabook = await Ultrabook.create({
    series, model, description, img, cpu,ram, storage, camera, size, battery, price
  })

  if(ultrabook){
    res.status(201).json({
      series: ultrabook.series,
      model: ultrabook.model,
      description: ultrabook.description,
      img: ultrabook.img,
      cpu: ultrabook.cpu,
      ram: ultrabook.ram,
      storage: ultrabook.storage,
      camera: ultrabook.camera,
      size: ultrabook.size,
      battery: ultrabook.battery,
      price: ultrabook.price,
    })
  }else{
    res.status(400)
    throw new Error('Invalid team data')
  }
}

//Edit ultrabook
const editUltrabook = async(req,res) => {
  const {series, model, description, img, cpu,ram, storage, camera, size, battery, price} = req.body

  const ultrabook = await Ultrabook.findById(req.params.id)

  if(ultrabook){
    ultrabook.series = series
    ultrabook.model = model
    ultrabook.description = description
    ultrabook.img = img
    ultrabook.cpu = cpu
    ultrabook.ram = ram
    ultrabook.storage = storage
    ultrabook.camera = camera
    ultrabook.size = size
    ultrabook.battery = battery
    ultrabook.price = price

    const updatedUltrabook = await ultrabook.save()
    res.json(updatedUltrabook)
  }
  else {
    res.status(404)
    throw new Error('ultrabooknot found')
  }
  
}

const deleteUltrabook = async (req, res) => {
  const ultrabook = await Ultrabook.findById(req.params.id)

  if (ultrabook) {
    await ultrabook.remove()
    res.json({ message: 'Product removed' })
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
}

export {getUltrabooks, showUltrabook, addUltrabook,editUltrabook,deleteUltrabook}