import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db.js'
import productRoutes from './routes/productRoutes.js'
import phoneRoutes from './routes/phoneRoutes.js'
import ultrabookRoutes from './routes/ultrabookRoutes.js'

dotenv.config();
connectDB();

const app = express();
app.use(express.json())

app.get('/', (req,res) => {
  res.send('Api is running')
})

app.use('/api/products', productRoutes)
app.use('/api/phones', phoneRoutes)
app.use('/api/ultrabooks', ultrabookRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(
  `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
))