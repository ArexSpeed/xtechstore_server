import Product from '../models/productModel.js'

// Get products
const getProducts = async(req,res) => {
  const products = await Product.find({})
  res.json(products)
}
// Show one team
const showProduct = async(req,res) => {
  const product = await Product.findById(req.params.id)
  if(product){
    res.status(201).json(team)
  }
  else{
    res.status(400)
    throw new Error('Wrong id')
  }
  
}


export {getProducts, showProduct}