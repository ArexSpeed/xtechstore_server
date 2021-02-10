import Watch from '../models/watchModel.js'

// Get products
const getWatches = async(req,res) => {
  const watches = await Watch.find({})
  res.json(watches)
}
// Show one watch
const showWatch = async(req,res) => {
  const watch = await Watch.findById(req.params.id)
  if(watch){
    res.status(201).json(watch)
  }
  else{
    res.status(400)
    throw new Error('Wrong id')
  }
  
}

//Add watch
const addWatch = async(req,res) => {
  const {series, model, description, img, cpu,ram, storage, fitness, size, battery,addons, price} = req.body;

  const watch = await Watch.create({
    series, model, description, img, cpu,ram, storage,fitness, size, battery,addons, price
  })

  if(watch){
    res.status(201).json({
      series: watch.series,
      model: watch.model,
      description: watch.description,
      img: watch.img,
      cpu: watch.cpu,
      ram: watch.ram,
      storage: watch.storage,
      fitness: watch.fitness,
      size: watch.size,
      battery: watch.battery,
      addons: watch.addons,
      price: watch.price,
    })
  }else{
    res.status(400)
    throw new Error('Invalid watch data')
  }
}

//Edit watch
const editWatch = async(req,res) => {
  const {series, model, description, img, cpu,ram, storage, fitness, size, battery,addons, price} = req.body

  const watch = await Watch.findById(req.params.id)

  if(watch){
    watch.series = series
    watch.model = model
    watch.description = description
    watch.img = img
    watch.cpu = cpu
    watch.ram = ram
    watch.storage = storage
    watch.addons = addons
    watch.size = size
    watch.battery = battery
    watch.price = price

    const updatedWatch = await watch.save()
    res.json(updatedWatch)
  }
  else {
    res.status(404)
    throw new Error('watch not found')
  }
  
}

const deleteWatch = async (req, res) => {
  const watch = await Watch.findById(req.params.id)

  if (watch) {
    await watch.remove()
    res.json({ message: 'Product removed' })
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
}

export {getWatches, showWatch, addWatch,editWatch,deleteWatch}