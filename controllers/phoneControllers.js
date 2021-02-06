import Phone from '../models/phoneModel.js'

// Get products
const getPhones = async(req,res) => {
  const phones = await Phone.find({})
  res.json(phones)
}
// Show one team
const showPhone = async(req,res) => {
  const phone = await Phone.findById(req.params.id)
  if(phone){
    res.status(201).json(team)
  }
  else{
    res.status(400)
    throw new Error('Wrong id')
  }
  
}

//Add phone
const addPhone = async(req,res) => {
  const {series, model, description, img, cpu,ram, storage, camera, size, battery, price} = req.body;

  const phoneExists = await Phone.findOne({model})
  if(phoneExists){
    throw new Error('Phone is already exists')
  }

  const phone = await Phone.create({
    series, model, description, img, cpu,ram, storage, camera, size, battery, price
  })

  if(phone){
    res.status(201).json({
      series: phone.series,
      model: phone.model,
      description: phone.description,
      img: phone.img,
      cpu: phone.cpu,
      ram: phone.ram,
      storage: phone.storage,
      camera: phone.camera,
      size: phone.size,
      battery: phone.battery,
      price: phone.price,
    })
  }else{
    res.status(400)
    throw new Error('Invalid team data')
  }
}

//Edit phone
const editPhone = async(req,res) => {
  const {series, model, description, img, cpu,ram, storage, camera, size, battery, price} = req.body

  const phone = await Phone.findById(req.params.id)

  if(phone){
    phone.series = series
    phone.model = model
    phone.description = description
    phone.img = img
    phone.cpu = cpu
    phone.ram = ram
    phone.storage = storage
    phone.camera = camera
    phone.size = size
    phone.battery = battery
    phone.price = price

    const updatedPhone = await phone.save()
    res.json(updatedPhone)
  }
  else {
    res.status(404)
    throw new Error('Phonenot found')
  }
  
}

const deletePhone = async (req, res) => {
  const phone = await Phone.findById(req.params.id)

  if (phone) {
    await phone.remove()
    res.json({ message: 'Product removed' })
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
}

export {getPhones, showPhone, addPhone,editPhone,deletePhone}