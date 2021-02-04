import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db.js'
import productRoutes from './routes/productRoutes.js'
import phoneRoutes from './routes/phoneRoutes.js'

dotenv.config();
connectDB();

const app = express();
app.use(express.json())

app.get('/', (req,res) => {
  res.send('Api is running')
})

app.use('/api/products', productRoutes)
app.use('/api/phones', phoneRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(
  `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
))