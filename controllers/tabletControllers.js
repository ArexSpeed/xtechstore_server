import Tablet from '../models/tabletModel.js'

// Get products
const getTablets = async(req,res) => {
  const tablets = await Tablet.find({})
  res.json(tablets)
}
// Show one tablet
const showTablet = async(req,res) => {
  const tablet = await Tablet.findById(req.params.id)
  if(tablet){
    res.status(201).json(tablet)
  }
  else{
    res.status(400)
    throw new Error('Wrong id')
  }
  
}

//Add tablet
const addTablet = async(req,res) => {
  const {series, model, description, img, cpu,ram, storage, camera, size, battery, price} = req.body;

  const tablet = await Tablet.create({
    series, model, description, img, cpu,ram, storage, camera, size, battery, price
  })

  if(tablet){
    res.status(201).json({
      series: tablet.series,
      model: tablet.model,
      description: tablet.description,
      img: tablet.img,
      cpu: tablet.cpu,
      ram: tablet.ram,
      storage: tablet.storage,
      camera: tablet.camera,
      size: tablet.size,
      battery: tablet.battery,
      price: tablet.price,
    })
  }else{
    res.status(400)
    throw new Error('Invalid team data')
  }
}

//Edit tablet
const editTablet = async(req,res) => {
  const {series, model, description, img, cpu,ram, storage, camera, size, battery, price} = req.body

  const tablet = await Tablet.findById(req.params.id)

  if(tablet){
    tablet.series = series
    tablet.model = model
    tablet.description = description
    tablet.img = img
    tablet.cpu = cpu
    tablet.ram = ram
    tablet.storage = storage
    tablet.camera = camera
    tablet.size = size
    tablet.battery = battery
    tablet.price = price

    const updatedtablet = await tablet.save()
    res.json(updatedtablet)
  }
  else {
    res.status(404)
    throw new Error('tabletnot found')
  }
  
}

const deleteTablet = async (req, res) => {
  const tablet = await Tablet.findById(req.params.id)

  if (tablet) {
    await tablet.remove()
    res.json({ message: 'Product removed' })
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
}

export {getTablets, showTablet, addTablet,editTablet,deleteTablet}